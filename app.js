// ── Constants ─────────────────────────────────────────────────────────────────

const MAX_POINTS = 40;
const ROOT_ID    = "node1";

const CAT_COLORS = {
  neutral: "#c8aa6e",
  melee:   "#e04040",
  ranged:  "#4caf50",
  magic:   "#5ba0e0",
};

// Radius in tree-coordinate units
const NODE_RADII = {
  node_major:    14,
  node_minor:    9,
  node_capstone: 18,
};

// ── Pre-built maps ────────────────────────────────────────────────────────────

const nodeMap      = new Map(TREE_NODES.map(n => [n.id, n]));
const adjacencyMap = new Map(TREE_NODES.map(n => [n.id, new Set(n.links)]));

// ── State ─────────────────────────────────────────────────────────────────────

const state = {
  selected:  new Set([ROOT_ID]),
  hoveredId: null,
  activeTag: null,
};

// ── Tag logic ─────────────────────────────────────────────────────────────────

function expandTag(tagId) {
  const result = new Set([tagId]);
  const tag = TAGS[tagId];
  if (tag) tag.implies.forEach(t => result.add(t));
  return result;
}

function nodeMatchesTag(id) {
  if (!state.activeTag) return false;
  const expanded = expandTag(state.activeTag);
  return (NODE_TAGS[id] || []).some(t => expanded.has(t));
}

// ── Pathing logic ─────────────────────────────────────────────────────────────

function pointsUsed() { return state.selected.size; }

function isReachable(id) {
  if (state.selected.has(id)) return false;
  for (const n of (adjacencyMap.get(id) || [])) {
    if (state.selected.has(n)) return true;
  }
  return false;
}

// A node can be deselected only if removing it keeps the selection graph connected.
function canDeselect(id) {
  if (id === ROOT_ID) return state.selected.size <= 1;
  const trial = new Set(state.selected);
  trial.delete(id);
  if (trial.size === 0) return true;
  // BFS from root through remaining selection
  const visited = new Set();
  const q = [ROOT_ID];
  while (q.length) {
    const cur = q.shift();
    if (visited.has(cur)) continue;
    visited.add(cur);
    for (const n of (adjacencyMap.get(cur) || [])) {
      if (trial.has(n) && !visited.has(n)) q.push(n);
    }
  }
  return visited.size === trial.size;
}

function toggleNode(id) {
  if (state.selected.has(id)) {
    if (!canDeselect(id)) return;
    state.selected.delete(id);
  } else {
    if (!isReachable(id) || pointsUsed() >= MAX_POINTS) return;
    state.selected.add(id);
  }
  renderAll();
}

// ── SVG helpers ───────────────────────────────────────────────────────────────

const NS = "http://www.w3.org/2000/svg";
function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

// ── Tree build (once) ─────────────────────────────────────────────────────────

const edgeEls = new Map(); // "idA--idB" -> <line>
const nodeEls = new Map(); // id -> { g, shape, glow }

function buildTree() {
  const root = document.getElementById("tree-root");
  root.innerHTML = "";
  edgeEls.clear();
  nodeEls.clear();

  const edgesGroup = svgEl("g");
  const nodesGroup = svgEl("g");
  root.appendChild(edgesGroup);
  root.appendChild(nodesGroup);

  // ── Edges ──────────────────────────────────────────────────────────────────
  const seen = new Set();
  for (const node of TREE_NODES) {
    for (const linkId of node.links) {
      const key = [node.id, linkId].sort().join("--");
      if (seen.has(key)) continue;
      seen.add(key);
      const target = nodeMap.get(linkId);
      if (!target) continue;
      const line = svgEl("line", {
        x1: node.x,   y1: node.y,
        x2: target.x, y2: target.y,
        class: "tree-edge",
      });
      edgesGroup.appendChild(line);
      edgeEls.set(key, line);
    }
  }

  // ── Nodes ──────────────────────────────────────────────────────────────────
  for (const node of TREE_NODES) {
    const r     = NODE_RADII[node.size] ?? 10;
    const color = CAT_COLORS[node.type] ?? "#888";

    const g = svgEl("g", {
      class:     "tree-node",
      transform: `translate(${node.x},${node.y})`,
    });

    // Glow ring (hidden until selected)
    const glow = svgEl("circle", {
      r: r + 6,
      class: "node-glow",
      fill: "none",
      stroke: color,
      "stroke-width": 2.5,
      opacity: 0,
    });
    g.appendChild(glow);

    // Shape: diamond for capstone, circle otherwise
    let shape;
    if (node.size === "node_capstone") {
      shape = svgEl("polygon", {
        points: `0,${-r} ${r},0 0,${r} ${-r},0`,
        class: "node-shape",
        stroke: "#111122",
        "stroke-width": 1.5,
      });
    } else {
      shape = svgEl("circle", {
        r: r,
        class: "node-shape",
        stroke: "#111122",
        "stroke-width": 1.5,
      });
    }
    shape.setAttribute("fill", color);
    g.appendChild(shape);

    // Invisible hit target (larger, easier to click)
    const hit = svgEl("circle", { r: Math.max(r + 6, 14), fill: "transparent" });
    g.appendChild(hit);

    g.addEventListener("click", (e) => { e.stopPropagation(); toggleNode(node.id); });
    g.addEventListener("mouseenter", () => { state.hoveredId = node.id; showTooltip(node); });
    g.addEventListener("mouseleave", () => { state.hoveredId = null; hideTooltip(); });

    nodesGroup.appendChild(g);
    nodeEls.set(node.id, { g, shape, glow });
  }
}

// ── State-based visual update ─────────────────────────────────────────────────

function updateNodes() {
  for (const [id, { g, shape, glow }] of nodeEls) {
    const node     = nodeMap.get(id);
    const selected = state.selected.has(id);
    const reachable = isReachable(id);
    const color    = CAT_COLORS[node.type] ?? "#888";

    g.classList.toggle("state-selected",   selected);
    g.classList.toggle("state-reachable",  !selected && reachable);
    g.classList.toggle("state-locked",     !selected && !reachable);

    const tagged   = state.activeTag !== null && nodeMatchesTag(id);
    const fadedOut = state.activeTag !== null && !tagged;
    g.classList.toggle("state-tagged", tagged);

    if (selected) {
      shape.setAttribute("fill", color);
      shape.setAttribute("opacity", fadedOut ? "0.2" : "1");
      glow.setAttribute("opacity", fadedOut ? "0" : "0.55");
    } else if (reachable) {
      shape.setAttribute("fill", color);
      shape.setAttribute("opacity", fadedOut ? "0.1" : "0.45");
      glow.setAttribute("opacity", "0");
    } else {
      shape.setAttribute("fill", "#2a2a3a");
      shape.setAttribute("opacity", fadedOut ? "0.1" : "0.55");
      glow.setAttribute("opacity", "0");
    }
  }
}

function updateEdges() {
  for (const [key, line] of edgeEls) {
    const [a, b] = key.split("--");
    const both = state.selected.has(a) && state.selected.has(b);
    const one  = state.selected.has(a) || state.selected.has(b);
    if (both) {
      line.setAttribute("stroke", "#c8aa6e");
      line.setAttribute("stroke-width", "2.5");
      line.setAttribute("opacity", "0.9");
    } else if (one) {
      line.setAttribute("stroke", "#4a4a60");
      line.setAttribute("stroke-width", "1.5");
      line.setAttribute("opacity", "0.7");
    } else {
      line.setAttribute("stroke", "#242430");
      line.setAttribute("stroke-width", "1");
      line.setAttribute("opacity", "1");
    }
  }
}

function renderCounter() {
  const used = pointsUsed();
  const rem  = MAX_POINTS - used;
  document.getElementById("points-used").textContent      = used;
  document.getElementById("points-remaining").textContent  = rem;
  const fill = document.getElementById("points-bar-fill");
  fill.style.width   = `${(used / MAX_POINTS) * 100}%`;
  fill.className     = "points-bar-fill" +
    (rem === 0 ? " full" : used >= 30 ? " warn" : "");
}

function extractMergeableValue(name) {
  const matches = [...name.matchAll(/\+(\d+)(%?)/g)];
  if (matches.length !== 1) return null;
  const m = matches[0];
  return {
    value:      parseInt(m[1]),
    hasPercent: m[2] === '%',
    prefix:     name.slice(0, m.index),
    suffix:     name.slice(m.index + m[0].length),
  };
}

function aggregateNodes(nodes) {
  const mergedMap  = new Map();
  const standalone = [];

  for (const n of nodes) {
    const p = extractMergeableValue(n.name);
    if (p) {
      const key = p.prefix + '\x00' + p.suffix;
      if (!mergedMap.has(key)) {
        mergedMap.set(key, { total: 0, hasPercent: p.hasPercent,
                             prefix: p.prefix, suffix: p.suffix, nodes: [] });
      }
      const e = mergedMap.get(key);
      e.total += p.value;
      e.nodes.push(n);
    } else {
      standalone.push({ displayName: n.name, nodes: [n] });
    }
  }

  const result = [];
  for (const e of mergedMap.values()) {
    const num = '+' + e.total + (e.hasPercent ? '%' : '');
    result.push({ displayName: e.prefix + num + e.suffix, nodes: e.nodes });
  }
  return result.concat(standalone);
}

function renderSummary() {
  const list     = document.getElementById("summary-list");
  const resetBtn = document.getElementById("reset-btn");
  resetBtn.disabled = state.selected.size <= 1;

  const groups = { neutral: [], melee: [], ranged: [], magic: [] };
  for (const id of state.selected) {
    const n = nodeMap.get(id);
    if (n) groups[n.type].push(n);
  }

  list.innerHTML = "";
  const labels = { neutral: "Neutral", melee: "Melee", ranged: "Ranged", magic: "Magic" };
  for (const [type, nodes] of Object.entries(groups)) {
    if (!nodes.length) continue;
    const hdr = document.createElement("li");
    hdr.className = "summary-cat-header";
    hdr.style.setProperty("--cat-color", CAT_COLORS[type]);
    hdr.textContent = labels[type];
    list.appendChild(hdr);
    for (const { displayName, nodes: aggNodes } of aggregateNodes(nodes)) {
      const li   = document.createElement("li");
      li.className = "summary-item";
      const nameEl = document.createElement("span");
      nameEl.className   = "summary-item-name";
      nameEl.textContent = displayName;
      nameEl.title       = displayName;
      li.appendChild(nameEl);
      li.addEventListener("click", () => panToNode(aggNodes[0]));
      list.appendChild(li);
    }
  }
}

function renderTagPanel() {
  document.querySelectorAll(".tag-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tag === state.activeTag);
  });
  const clearBtn = document.getElementById("tag-clear-btn");
  if (clearBtn) clearBtn.style.display = state.activeTag ? "inline-block" : "none";
}

function renderAll() {
  updateNodes();
  updateEdges();
  renderCounter();
  renderSummary();
  renderTagPanel();
  if (state.hoveredId) showTooltip(nodeMap.get(state.hoveredId));
}

// ── Tooltip ───────────────────────────────────────────────────────────────────

function showTooltip(node) {
  const tt = document.getElementById("tooltip");
  const selected   = state.selected.has(node.id);
  const reachable  = isReachable(node.id);
  const deselectable = selected && canDeselect(node.id);

  tt.querySelector(".tooltip-type").textContent = node.type.charAt(0).toUpperCase() + node.type.slice(1);
  tt.querySelector(".tooltip-type").style.color = CAT_COLORS[node.type];
  tt.querySelector(".tooltip-name").textContent  = node.name;
  tt.querySelector(".tooltip-desc").textContent  = node.tooltip || "";

  let hint = "";
  if (selected && deselectable)      hint = "Click to deselect";
  else if (selected)                 hint = "Cannot deselect — other nodes depend on this path";
  else if (reachable && pointsUsed() < MAX_POINTS) hint = "Click to select  (1 pt)";
  else if (reachable)                hint = "No points remaining";
  else                               hint = "Not yet reachable — select an adjacent node first";

  tt.querySelector(".tooltip-hint").textContent = hint;
  tt.style.display = "block";
}

function hideTooltip() {
  document.getElementById("tooltip").style.display = "none";
}

document.addEventListener("mousemove", (e) => {
  const tt = document.getElementById("tooltip");
  if (tt.style.display === "none") return;
  const pad = 14;
  const x   = e.clientX + pad;
  const y   = e.clientY + pad;
  tt.style.left = (x + tt.offsetWidth  > window.innerWidth  ? e.clientX - tt.offsetWidth  - pad : x) + "px";
  tt.style.top  = (y + tt.offsetHeight > window.innerHeight ? e.clientY - tt.offsetHeight - pad : y) + "px";
});

// ── Pan & Zoom ─────────────────────────────────────────────────────────────────

const vp = { x: 0, y: 0, scale: 1 };
let dragging = false, moved = false;
let drag0 = { mx: 0, my: 0, vx: 0, vy: 0 };

function applyVP() {
  document.getElementById("tree-root").setAttribute(
    "transform", `translate(${vp.x},${vp.y}) scale(${vp.scale})`
  );
}

function fitView() {
  const c = document.getElementById("tree-container");
  const w = c.clientWidth, h = c.clientHeight;
  const TW = 1050 + 80, TH = 950 + 80;
  const treeCX = 0, treeCY = (-500 + 450) / 2; // ≈ -25
  vp.scale = Math.min(w / TW, h / TH) * 0.92;
  vp.x = w / 2 - treeCX * vp.scale;
  vp.y = h / 2 - treeCY * vp.scale;
  applyVP();
}

function panToNode(node) {
  const c = document.getElementById("tree-container");
  vp.x = c.clientWidth  / 2 - node.x * vp.scale;
  vp.y = c.clientHeight / 2 - node.y * vp.scale;
  applyVP();
}

function setupPanZoom() {
  const svg = document.getElementById("tree-svg");

  svg.addEventListener("wheel", (e) => {
    e.preventDefault();
    const rect  = svg.getBoundingClientRect();
    const mx    = e.clientX - rect.left;
    const my    = e.clientY - rect.top;
    const f     = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    const ns    = Math.min(5, Math.max(0.25, vp.scale * f));
    vp.x = mx - (mx - vp.x) * (ns / vp.scale);
    vp.y = my - (my - vp.y) * (ns / vp.scale);
    vp.scale = ns;
    applyVP();
  }, { passive: false });

  svg.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    dragging = true;
    moved    = false;
    drag0    = { mx: e.clientX, my: e.clientY, vx: vp.x, vy: vp.y };
    svg.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - drag0.mx, dy = e.clientY - drag0.my;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    vp.x = drag0.vx + dx;
    vp.y = drag0.vy + dy;
    applyVP();
  });

  window.addEventListener("mouseup", () => {
    dragging = false;
    document.getElementById("tree-svg").style.cursor = "";
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  buildTree();
  fitView();
  setupPanZoom();
  renderAll();

  // Tag panel collapse toggle
  document.getElementById("tag-panel-toggle").addEventListener("click", () => {
    document.getElementById("tag-panel").classList.toggle("open");
  });

  // Mobile bottom drawer toggle
  const aside = document.querySelector("aside");
  document.getElementById("drawer-handle").addEventListener("click", () => {
    aside.classList.toggle("drawer-open");
    fitView();
  });

  // Collapse drawer when resizing to desktop width
  window.matchMedia("(max-width: 700px)").addEventListener("change", e => {
    if (!e.matches) aside.classList.remove("drawer-open");
  });

  // Tag button clicks — same tag deselects, different tag replaces
  document.querySelectorAll(".tag-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't trigger the panel toggle
      const t = btn.dataset.tag;
      state.activeTag = (state.activeTag === t) ? null : t;
      renderAll();
    });
  });

  // Tag clear button
  document.getElementById("tag-clear-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    state.activeTag = null;
    renderAll();
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    state.selected.clear();
    state.selected.add(ROOT_ID);
    state.activeTag = null;
    renderAll();
  });

  window.addEventListener("resize", fitView);
});
