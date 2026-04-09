// ── Tag taxonomy ──────────────────────────────────────────────────────────────
//
// implication is one-directional: selecting a broad tag also highlights all
// nodes whose tags intersect the implied set, but not vice-versa.
//
const TAGS = {
  // Weapon — Ranged
  "ranged":         { label: "Ranged",         color: "#4caf50", implies: ["bow","crossbow","thrown","echo","regen"] },
  "bow":            { label: "Bow",             color: "#66bb6a", implies: [] },
  "crossbow":       { label: "Crossbow",        color: "#43a047", implies: [] },
  "thrown":         { label: "Thrown",          color: "#2e7d32", implies: [] },
  // Weapon — Melee
  "melee":          { label: "Melee",           color: "#e04040", implies: ["light-weapon","two-handed","shield","blindbag","thorns","regen"] },
  "light-weapon":   { label: "Light Weapon",    color: "#ef5350", implies: [] },
  "two-handed":     { label: "Two-Handed",      color: "#c62828", implies: [] },
  "shield":         { label: "Shield",          color: "#b71c1c", implies: [] },
  "halberd":        { label: "Halberd",         color: "#d32f2f", implies: [] },
  // Weapon — Magic
  "magic":          { label: "Magic",           color: "#5ba0e0", implies: ["air","water","fire","earth","staff","regen"] },
  "staff":          { label: "Staff / Wand",    color: "#82b8e8", implies: [] },
  // Mechanic
  "echo":           { label: "Echo",            color: "#80cbc4", implies: [] },
  "blindbag":       { label: "Blindbag",        color: "#ff7043", implies: [] },
  "thorns":         { label: "Thorns",          color: "#ce93d8", implies: [] },
  "regen":          { label: "Regenerate",      color: "#ffd54f", implies: [] },
  "special-attack": { label: "Special Attack",  color: "#ffb300", implies: [] },
  // Effect
  "heal":           { label: "Heal",             color: "#69bb6a", implies: [] },
  "overheal":       { label: "Overheal",         color: "#a5d6a7", implies: [] },
  "prayer":         { label: "Prayer",          color: "#e8d8a0", implies: [] },
  "distance":       { label: "Distance",        color: "#90caf9", implies: [] },
  "attack-speed":   { label: "Atk. Speed",      color: "#f48fb1", implies: [] },
  // Spell element
  "air":            { label: "Air",             color: "#b3e5fc", implies: [] },
  "water":          { label: "Water",           color: "#4dd0e1", implies: [] },
  "fire":           { label: "Fire",            color: "#ff8a65", implies: [] },
  "earth":          { label: "Earth",           color: "#a5d6a7", implies: [] },
};

// ── Node → tag assignments (all 132 nodes) ───────────────────────────────────
//
// Nodes with [] are pure path-connector stat boosts (+5 def, +15% accuracy)
// with no build-defining mechanic worth filtering on.
//
const NODE_TAGS = {
  // Root
  "node1":   ["regen"],

  // ── Ranged branch ────────────────────────────────────────────────────────────
  "node2":   ["ranged", "echo"],                   // echo on ammo regen (ammo = ranged only)
  "node3":   ["ranged", "bow", "echo"],             // bow echoes never miss
  "node4":   ["ranged", "crossbow", "echo"],        // crossbow +15% echo chance
  "node5":   ["ranged", "thrown", "echo"],          // thrown echoes 20% max hit
  "node6":   [],                                    // +5 defence (connector)
  "node7":   [],                                    // +15% accuracy (connector)
  "node8":   [],                                    // +5 defence (connector)
  "node9":   ["distance"],                          // max accuracy roll scales with distance
  "node10":  ["regen"],                             // +30% regen chance
  "node11":  [],                                    // +35% accuracy (connector)
  "node12":  ["shield"],                            // off-hand stat boosts
  "node13":  ["ranged"],                            // +1% ranged damage
  "node14":  ["ranged", "prayer"],                  // ranged prayers 30% more effective
  "node15":  ["ranged"],                            // +1% ranged damage
  "node16":  ["ranged"],                            // ranged str scales with HP loss
  "node17":  ["ranged"],                            // +1% ranged damage
  "node18":  ["ranged", "echo"],                    // echoes can chain
  "node19":  ["ranged"],                            // +1% ranged damage
  "node20":  ["ranged", "bow", "attack-speed"],     // bows 1 tick faster
  "node21":  ["ranged", "crossbow"],                // crossbows -2t, +70% damage
  "node22":  ["ranged", "thrown"],                  // thrown: ranged str += 80% melee str
  "node23":  ["ranged"],                            // +1% ranged damage
  "node24":  ["ranged"],                            // +1% ranged damage
  "node25":  ["ranged"],                            // +1% ranged damage
  "node26":  ["ranged", "bow"],                     // capstone: bow min hit ramp
  "node27":  ["ranged"],                            // +1% ranged damage
  "node28":  ["ranged", "bow"],                     // capstone: bow max hit ramp
  "node29":  ["ranged", "crossbow"],                // capstone: crossbow always max hit
  "node30":  ["ranged"],                            // +1% ranged damage
  "node31":  ["ranged", "crossbow"],                // capstone: crossbow rolls accuracy twice
  "node32":  ["ranged", "thrown"],                  // capstone: thrown +60 accuracy
  "node33":  ["ranged"],                            // +1% ranged damage
  "node34":  ["ranged", "thrown"],                  // capstone: thrown hits additional target
  "node38":  ["ranged", "echo"],                    // +5% echo on ammo regen (ammo = ranged only)
  "node39":  ["ranged", "echo"],                    // +5% echo on ammo regen (ammo = ranged only)

  // ── Magic branch ─────────────────────────────────────────────────────────────
  "node44":  ["magic"],                             // rune regen → magic level boost (runes = magic only)
  "node45":  ["magic", "air", "prayer"],            // air rune regen → restore prayer (runes = magic only)
  "node46":  ["magic", "water", "heal"],             // water rune regen → heal (runes = magic only)
  "node47":  ["magic", "fire"],                     // fire rune regen → next spell damage (runes = magic only)
  "node48":  ["magic", "earth"],                    // earth rune regen → defence boost (runes = magic only)
  "node53":  ["magic", "staff", "water"],           // staff charge regen → water rune (charges = magic only)
  "node54":  ["magic", "staff", "fire"],            // staff charge regen → fire rune (charges = magic only)
  "node55":  [],                                    // +15% accuracy (connector)
  "node56":  [],                                    // +15% accuracy (connector)
  "node57":  [],                                    // +15% accuracy (connector)
  "node58":  [],                                    // +35% accuracy (connector)
  "node59":  ["overheal", "heal"],                   // pact healing → overheal
  "node60":  ["regen"],                             // +30% regen chance
  "node61":  [],                                    // +15 defence (connector)
  "node62":  ["regen"],                             // +5% regen chance
  "node63":  [],                                    // +5 defence (connector)
  "node64":  [],                                    // +5 defence (connector)
  "node65":  ["distance"],                          // max hit from 3+ tiles → next style +25%
  "node66":  ["prayer"],                            // +15% prayer penetration
  "node67":  ["magic"],                             // +1% magic damage
  "node68":  ["magic"],                             // +1% magic damage
  "node69":  ["magic"],                             // +1% magic damage
  "node70":  ["magic"],                             // +1% magic damage
  "node107": ["magic", "air", "prayer"],            // air spells +7% per active prayer
  "node108": ["magic"],                             // +1% magic damage
  "node109": ["magic", "air", "prayer"],            // capstone: air spells max hit per prayer bonus
  "node111": ["magic", "air"],                      // smoke spells count as air
  "node112": ["magic", "water"],                    // water spells scale with HP%
  "node113": ["magic"],                             // +1% magic damage
  "node114": ["magic", "water", "heal"],             // capstone: water spells healing bounce
  "node117": ["magic", "fire"],                     // fire spells burn HP for damage
  "node118": ["magic"],                             // +1% magic damage
  "node119": ["magic", "fire"],                     // capstone: fire spells apply burn + bounce
  "node122": ["magic", "attack-speed"],             // spellbook spells 2 ticks faster
  "node123": ["magic", "water"],                    // ice spells count as water
  "node124": ["magic", "fire"],                     // blood spells count as fire
  "node127": ["magic", "earth"],                    // earth spells reduce enemy defence
  "node128": ["magic"],                             // +1% magic damage
  "node129": ["magic", "earth"],                    // capstone: earth spells flat dmg from defence
  "node131": ["magic", "earth"],                    // shadow spells count as earth
  "node133": ["magic", "staff", "attack-speed"],    // powered staves 3 ticks faster
  "node134": ["prayer"],                            // +15% prayer penetration
  "node135": ["shield", "prayer", "heal"],           // 0-dmg block with off-hand → heal + prayer restore
  "node136": ["prayer"],                            // +15% prayer penetration
  "node166": ["magic", "staff", "air"],             // staff charge regen → air rune (charges = magic only)
  "node167": ["magic", "staff", "earth"],           // staff charge regen → earth rune (charges = magic only)

  // ── Melee branch ─────────────────────────────────────────────────────────────
  "node43":  ["melee", "two-handed", "distance"],   // 2h melee range doubled
  "node71":  ["melee", "shield", "thorns"],         // Thorns while shield equipped
  "node72":  ["melee", "light-weapon"],             // light weapon (<1kg) extra hit
  "node73":  ["melee", "blindbag"],                 // heavy weapon Blindbag 15%
  "node74":  ["melee", "distance"],                 // melee min hit +3, scales with distance
  "node79":  ["melee", "light-weapon"],             // light/1h +20% strength from level
  "node80":  ["melee", "thorns", "distance", "heal"], // melee/thorns heal based on distance
  "node81":  [],                                    // +5 defence (connector)
  "node82":  [],                                    // +15% accuracy (connector)
  "node83":  [],                                    // +15% accuracy (connector)
  "node84":  ["melee", "shield", "thorns"],         // shield → reflect all damage
  "node85":  ["special-attack"],                    // 20% chance spec doesn't consume energy
  "node86":  [],                                    // +35% accuracy (connector)
  "node87":  ["regen"],                             // +30% regen chance
  "node88":  ["melee", "special-attack", "distance"], // restore 2% spec from 2+ tile attacks
  "node139": ["melee", "thorns"],                   // recoil/thorns deal extra from defence bonuses
  "node140": ["melee"],                             // +1% melee damage
  "node141": ["melee", "thorns"],                   // capstone: thorns always hits twice
  "node142": ["melee", "light-weapon", "attack-speed"], // light weapons 1 tick faster
  "node143": ["melee"],                             // +1% melee damage
  "node144": ["melee", "special-attack"],           // capstone: restore 2% spec per melee hit
  "node145": ["melee"],                             // +1% melee damage
  "node146": ["melee", "thorns", "distance", "heal"], // melee/thorns heal based on distance
  "node150": ["melee", "blindbag"],                 // unique heavy weapons +2% blindbag chance
  "node151": ["melee"],                             // +1% melee damage
  "node152": ["melee", "blindbag"],                 // capstone: unique heavy weapons +2% blindbag max hit
  "node153": ["melee", "two-handed", "distance"],   // melee max hit +4% + per 3 tiles
  "node154": ["melee"],                             // +1% melee damage
  "node155": ["melee", "halberd", "distance"],      // capstone: halberd range → 7
  "node156": ["melee"],                             // +1% melee damage
  "node157": ["melee", "two-handed", "echo"],       // 2h melee → 5% ranged echo
  "node161": ["melee"],                             // +1% melee damage
  "node162": ["melee", "prayer"],                   // melee strength += 50% prayer bonus
  "node163": ["melee"],                             // +1% melee damage
  "node164": ["prayer"],                            // +15% prayer penetration
  "node165": ["melee", "overheal"],                 // consume overheal HP → min hit +5

  // ── Neutral cross-tree nodes ─────────────────────────────────────────────────
  "node91":  ["prayer"],                            // +15% prayer penetration
  "node92":  ["regen"],                             // +5% regen chance
  "node93":  ["regen"],                             // +5% regen chance
  "node94":  [],                                    // +5 defence (connector)
  "node95":  [],                                    // +5 defence (connector)
  "node96":  ["overheal", "heal"],                   // pact healing → overheal
  "node97":  ["prayer"],                            // +15% prayer penetration
  "node98":  [],                                    // +5 defence (connector)
  "node99":  [],                                    // +5 defence (connector)
  "node100": ["overheal", "heal"],                   // pact healing → overheal
  "node101": ["prayer"],                            // +15% prayer penetration
  "node102": ["prayer"],                            // passive prayer point restoration
  "node103": ["prayer"],                            // +15% prayer penetration
  "node106": ["prayer"],                            // +15% prayer penetration
};
