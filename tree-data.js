const TREE_NODES = [
  {
    "id": "node1",
    "links": [
      "node2",
      "node74",
      "node44",
      "node62",
      "node92",
      "node93"
    ],
    "name": "+50% chance to Regenerate runes, ammo and charges",
    "tooltip": "Regenerate: Whenever you use runes to cast a spell, fire ammunition from a ranged weapon or consume charges with a charged weapon there is a % chance to generate an additional resource spent",
    "type": "neutral",
    "size": "node_major",
    "x": 0,
    "y": 0
  },
  {
    "id": "node2",
    "links": [
      "node1",
      "node3",
      "node4",
      "node5"
    ],
    "name": "Whenever you Regenerate ammo, you have a +25% chance to fire a Ranged echo against the enemy",
    "tooltip": "Ranged echo: An additional ranged attack which rolls with your ranged accuracy against the targets ranged defence. Echo attacks cannot trigger additional echo attacks.",
    "type": "ranged",
    "size": "node_major",
    "x": 0,
    "y": 50
  },
  {
    "id": "node3",
    "links": [
      "node2",
      "node6"
    ],
    "name": "While a bow is equipped, Ranged echoes never miss",
    "tooltip": "All bow pacts will not work with an Eclipse Atlatl",
    "type": "ranged",
    "size": "node_major",
    "x": -100,
    "y": 100
  },
  {
    "id": "node4",
    "links": [
      "node2",
      "node7"
    ],
    "name": "While a crossbow is equipped, you have a +15% chance to trigger Ranged echoes",
    "tooltip": "",
    "type": "ranged",
    "size": "node_major",
    "x": 0,
    "y": 100
  },
  {
    "id": "node5",
    "links": [
      "node2",
      "node8"
    ],
    "name": "While a thrown weapon is equipped, Ranged echoes have a 20% chance to max hit",
    "tooltip": "All thrown weapon pacts will work with an Eclipse Atlatl",
    "type": "ranged",
    "size": "node_major",
    "x": 100,
    "y": 100
  },
  {
    "id": "node6",
    "links": [
      "node3",
      "node9",
      "node10",
      "node64"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -100,
    "y": 150
  },
  {
    "id": "node7",
    "links": [
      "node4",
      "node10",
      "node11"
    ],
    "name": "+15% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 0,
    "y": 150
  },
  {
    "id": "node8",
    "links": [
      "node5",
      "node11",
      "node12",
      "node99"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 100,
    "y": 150
  },
  {
    "id": "node9",
    "links": [
      "node6",
      "node13"
    ],
    "name": "You have a 5% chance per attack in any style to roll max accuracy, this is increased by 5% for each tile distance between you and your target",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -150,
    "y": 200
  },
  {
    "id": "node10",
    "links": [
      "node6",
      "node7",
      "node15"
    ],
    "name": "+30% chance to Regenerate runes, ammo and charges",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -50,
    "y": 200
  },
  {
    "id": "node11",
    "links": [
      "node7",
      "node8",
      "node17"
    ],
    "name": "+35% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 50,
    "y": 200
  },
  {
    "id": "node12",
    "links": [
      "node8",
      "node19"
    ],
    "name": "While an off-hand item is equipped, gain +5\u00a0melee strength, +5 ranged strength and +2% magic damage",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 150,
    "y": 200
  },
  {
    "id": "node13",
    "links": [
      "node9",
      "node14",
      "node20"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": -150,
    "y": 250
  },
  {
    "id": "node14",
    "links": [
      "node13",
      "node15"
    ],
    "name": "Ranged prayers are 30% more effective",
    "tooltip": "",
    "type": "ranged",
    "size": "node_major",
    "x": -100,
    "y": 250
  },
  {
    "id": "node15",
    "links": [
      "node10",
      "node14",
      "node16",
      "node21"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": -50,
    "y": 250
  },
  {
    "id": "node16",
    "links": [
      "node15",
      "node17"
    ],
    "name": "Ranged strength is increased by 1 for every 10 hitpoints difference between your current hitpoints and Hitpoints level",
    "tooltip": "",
    "type": "ranged",
    "size": "node_major",
    "x": 0,
    "y": 250
  },
  {
    "id": "node17",
    "links": [
      "node11",
      "node16",
      "node18",
      "node21"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": 50,
    "y": 250
  },
  {
    "id": "node18",
    "links": [
      "node17",
      "node19"
    ],
    "name": "Ranged echoes can now trigger additional Ranged echoes at half your chance to trigger them (up to 4 times)",
    "tooltip": "",
    "type": "ranged",
    "size": "node_major",
    "x": 100,
    "y": 250
  },
  {
    "id": "node19",
    "links": [
      "node12",
      "node18",
      "node22"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": 150,
    "y": 250
  },
  {
    "id": "node20",
    "links": [
      "node13",
      "node23",
      "node103"
    ],
    "name": "Bows attack 1 tick (0.6s) faster",
    "tooltip": "",
    "type": "ranged",
    "size": "node_major",
    "x": -150,
    "y": 300
  },
  {
    "id": "node21",
    "links": [
      "node15",
      "node17",
      "node24"
    ],
    "name": "Crossbows attack 2 ticks (1.2s) slower, but deal +70% damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_major",
    "x": 0,
    "y": 300
  },
  {
    "id": "node22",
    "links": [
      "node19",
      "node25",
      "node91"
    ],
    "name": "While a thrown weapon is equipped, ranged strength is also increased by your 80% of your melee strength",
    "tooltip": "",
    "type": "ranged",
    "size": "node_major",
    "x": 150,
    "y": 300
  },
  {
    "id": "node23",
    "links": [
      "node20",
      "node27",
      "node38"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": -150,
    "y": 350
  },
  {
    "id": "node24",
    "links": [
      "node21",
      "node30",
      "node38",
      "node39"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": 0,
    "y": 350
  },
  {
    "id": "node25",
    "links": [
      "node22",
      "node33",
      "node39"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": 150,
    "y": 350
  },
  {
    "id": "node26",
    "links": [
      "node27"
    ],
    "name": "Hitting with a bow increases your bows minimum hit by 1, capping at 15% of your base maximum hit. This bonus is halved when you take damage that you didn't or couldn't pray against",
    "tooltip": "",
    "type": "ranged",
    "size": "node_capstone",
    "x": -185,
    "y": 450
  },
  {
    "id": "node27",
    "links": [
      "node23",
      "node26",
      "node28"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": -150,
    "y": 400
  },
  {
    "id": "node28",
    "links": [
      "node27"
    ],
    "name": "Hitting with a bow increases your bows maximum hit by 1, capping at 15% of your base maximum hit. This bonus is halved when you take damage that you didn't or couldn't pray against",
    "tooltip": "",
    "type": "ranged",
    "size": "node_capstone",
    "x": -115,
    "y": 450
  },
  {
    "id": "node29",
    "links": [
      "node30"
    ],
    "name": "Crossbow hits always max hit",
    "tooltip": "",
    "type": "ranged",
    "size": "node_capstone",
    "x": -35,
    "y": 450
  },
  {
    "id": "node30",
    "links": [
      "node24",
      "node29",
      "node31"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": 0,
    "y": 400
  },
  {
    "id": "node31",
    "links": [
      "node30"
    ],
    "name": "Crossbows attacks roll accuracy twice",
    "tooltip": "",
    "type": "ranged",
    "size": "node_capstone",
    "x": 35,
    "y": 450
  },
  {
    "id": "node32",
    "links": [
      "node33"
    ],
    "name": "While a thrown weapon is equipped, increase your ranged accuracy by 60",
    "tooltip": "",
    "type": "ranged",
    "size": "node_capstone",
    "x": 115,
    "y": 450
  },
  {
    "id": "node33",
    "links": [
      "node25",
      "node32",
      "node34"
    ],
    "name": "+1% Ranged damage",
    "tooltip": "",
    "type": "ranged",
    "size": "node_minor",
    "x": 150,
    "y": 400
  },
  {
    "id": "node34",
    "links": [
      "node33"
    ],
    "name": "When attacking with a thrown weapon, you now throw at an additional nearby target",
    "tooltip": "",
    "type": "ranged",
    "size": "node_capstone",
    "x": 185,
    "y": 450
  },
  {
    "id": "node38",
    "links": [
      "node23",
      "node24"
    ],
    "name": "Whenever you Regenerate ammo, you have a +5% chance to fire a Ranged echo against the enemy",
    "tooltip": "Ranged echo: An additional ranged attack which rolls with your ranged accuracy against the targets ranged defence. Echo attacks cannot trigger additional echo attacks.",
    "type": "ranged",
    "size": "node_major",
    "x": -75,
    "y": 360
  },
  {
    "id": "node39",
    "links": [
      "node24",
      "node25"
    ],
    "name": "Whenever you Regenerate ammo, you have a +5% chance to fire a Ranged echo against the enemy",
    "tooltip": "Ranged echo: An additional ranged attack which rolls with your ranged accuracy against the targets ranged defence. Echo attacks cannot trigger additional echo attacks.",
    "type": "ranged",
    "size": "node_major",
    "x": 75,
    "y": 360
  },
  {
    "id": "node43",
    "links": [
      "node74",
      "node83"
    ],
    "name": "Melee range is doubled whilst using two handed weapons.",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 237,
    "y": -63
  },
  {
    "id": "node44",
    "links": [
      "node1",
      "node45",
      "node46",
      "node47",
      "node48"
    ],
    "name": "Whenever your combat spells Regenerate runes, your Magic level is boosted by 1 for 30 ticks (18s)",
    "tooltip": "This boost cannot exceed 10 Magic levels and additional triggers reset the duration",
    "type": "magic",
    "size": "node_major",
    "x": -88,
    "y": -63
  },
  {
    "id": "node45",
    "links": [
      "node44",
      "node55"
    ],
    "name": "Whenever your combat spells Regenerate air runes, you have a 15% chance to restore 1 prayer point per rune regenerated",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -237,
    "y": -63
  },
  {
    "id": "node46",
    "links": [
      "node44",
      "node56"
    ],
    "name": "Whenever your combat spells Regenerate water runes, you're healed for 1 per rune regenerated",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -200,
    "y": -100
  },
  {
    "id": "node47",
    "links": [
      "node44",
      "node56"
    ],
    "name": "Whenever your combat spells Regenerate fire runes, the damage of your next spell hit is increased by 1 per rune regenerated",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -125,
    "y": -175
  },
  {
    "id": "node48",
    "links": [
      "node44",
      "node57"
    ],
    "name": "Whenever your combat spells Regenerate earth runes, your Defence level is boosted by 1 per rune regenerated for 30 ticks (18s).",
    "tooltip": "This boost cannot exceed 20% of your base Defence level and additional triggers reset the duration.",
    "type": "magic",
    "size": "node_major",
    "x": -88,
    "y": -212
  },
  {
    "id": "node53",
    "links": [
      "node68",
      "node166"
    ],
    "name": "Whenever you Regenerate charges from a powered staff or wand, also Regenerate 1 water rune",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -313,
    "y": -137
  },
  {
    "id": "node54",
    "links": [
      "node69",
      "node167"
    ],
    "name": "Whenever you Regenerate charges from a powered staff or wand, also Regenerate 1 fire rune",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -213,
    "y": -337
  },
  {
    "id": "node55",
    "links": [
      "node45",
      "node58",
      "node59"
    ],
    "name": "+15% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -287,
    "y": -112
  },
  {
    "id": "node56",
    "links": [
      "node46",
      "node47",
      "node59",
      "node60"
    ],
    "name": "+15% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -213,
    "y": -187
  },
  {
    "id": "node57",
    "links": [
      "node48",
      "node60",
      "node61"
    ],
    "name": "+15% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -138,
    "y": -262
  },
  {
    "id": "node58",
    "links": [
      "node55",
      "node63",
      "node67"
    ],
    "name": "+35% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -325,
    "y": -75
  },
  {
    "id": "node59",
    "links": [
      "node55",
      "node56",
      "node68"
    ],
    "name": "Healing with Demonic Pacts overheals you, up to +30% of your base Hitpoints level",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -250,
    "y": -150
  },
  {
    "id": "node60",
    "links": [
      "node56",
      "node57",
      "node69"
    ],
    "name": "+30% chance to Regenerate runes, ammo and charges",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -175,
    "y": -225
  },
  {
    "id": "node61",
    "links": [
      "node57",
      "node70",
      "node94"
    ],
    "name": "+15 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -100,
    "y": -300
  },
  {
    "id": "node62",
    "links": [
      "node1",
      "node63",
      "node64"
    ],
    "name": "+5% chance to Regenerate runes, ammo and charges",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -200,
    "y": 25
  },
  {
    "id": "node63",
    "links": [
      "node58",
      "node62"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -325,
    "y": 25
  },
  {
    "id": "node64",
    "links": [
      "node6",
      "node62",
      "node65"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -200,
    "y": 150
  },
  {
    "id": "node65",
    "links": [
      "node64",
      "node66"
    ],
    "name": "Whenever you max hit from at least 3 tiles away, your next hit from a different style deals +25% damage",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -262,
    "y": 212
  },
  {
    "id": "node66",
    "links": [
      "node65",
      "node102"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -325,
    "y": 150
  },
  {
    "id": "node67",
    "links": [
      "node58",
      "node107",
      "node166"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -375,
    "y": -125
  },
  {
    "id": "node68",
    "links": [
      "node53",
      "node59",
      "node112",
      "node122",
      "node133"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -300,
    "y": -200
  },
  {
    "id": "node69",
    "links": [
      "node54",
      "node60",
      "node117",
      "node133",
      "node122"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -225,
    "y": -275
  },
  {
    "id": "node70",
    "links": [
      "node61",
      "node127",
      "node167"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -150,
    "y": -350
  },
  {
    "id": "node71",
    "links": [
      "node74",
      "node81"
    ],
    "name": "While you have a shield equipped you gain the Thorns effect",
    "tooltip": "Thorns: Whenever you're attacked enemies will be instantly hit with # melee damage. This effect can only trigger once per hit-splat and will trigger if you take 0 damage. Other pacts will specify if they effect Thorns.",
    "type": "melee",
    "size": "node_major",
    "x": 88,
    "y": -212
  },
  {
    "id": "node72",
    "links": [
      "node74",
      "node82"
    ],
    "name": "Melee weapons under 1kg always trigger an additional melee hit using 40% of your base max hit (minimum of 1)",
    "tooltip": "This will not trigger on special attacks.",
    "type": "melee",
    "size": "node_major",
    "x": 125,
    "y": -175
  },
  {
    "id": "node73",
    "links": [
      "node74",
      "node82"
    ],
    "name": "Each melee attack with a heavy melee weapon (>=1kg) has a 15% chance to trigger an instant Blindbag attack.",
    "tooltip": "Blindbag: Automatically attack your current target with a random heavy melee weapon in your inventory as though you have equipped it, ignoring all stat requirements and attack delay. Blindbag attacks can trigger additional Blindbag attacks but cannot trigger from special attacks",
    "type": "melee",
    "size": "node_major",
    "x": 200,
    "y": -100
  },
  {
    "id": "node74",
    "links": [
      "node1",
      "node71",
      "node72",
      "node73",
      "node43"
    ],
    "name": "Your minimum hit when attacking with a melee weapon is increased by 3.",
    "tooltip": "This minimum hit is further increased by # for each additional tile between you and the target",
    "type": "melee",
    "size": "node_major",
    "x": 88,
    "y": -63
  },
  {
    "id": "node79",
    "links": [
      "node146",
      "node163"
    ],
    "name": "Melee weapons that are under 1kg or one handed, increase your melee strength by 20% of your Strength level",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 213,
    "y": -337
  },
  {
    "id": "node80",
    "links": [
      "node156",
      "node157"
    ],
    "name": "Attacking with a melee weapon or Thorns has a +10% chance to heal you based off your distance between you and your target (1 tile = 1 health)",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 362,
    "y": -187
  },
  {
    "id": "node81",
    "links": [
      "node71",
      "node84",
      "node85"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 138,
    "y": -262
  },
  {
    "id": "node82",
    "links": [
      "node72",
      "node73",
      "node85",
      "node86"
    ],
    "name": "+15% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 213,
    "y": -187
  },
  {
    "id": "node83",
    "links": [
      "node43",
      "node86",
      "node88"
    ],
    "name": "+15% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 287,
    "y": -112
  },
  {
    "id": "node84",
    "links": [
      "node81",
      "node95",
      "node145"
    ],
    "name": "While you have a shield equipped, you have a 0.1% chance per Defence level to reflect all damage back to the attacker",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 100,
    "y": -300
  },
  {
    "id": "node85",
    "links": [
      "node81",
      "node82",
      "node163"
    ],
    "name": "Special attacks have a 20% chance to not consume any energy",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 175,
    "y": -225
  },
  {
    "id": "node86",
    "links": [
      "node82",
      "node83",
      "node161"
    ],
    "name": "+35% accuracy in all combat styles",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 250,
    "y": -150
  },
  {
    "id": "node87",
    "links": [
      "node101",
      "node164"
    ],
    "name": "+30% chance to Regenerate runes, ammo and charges",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 262,
    "y": 87
  },
  {
    "id": "node88",
    "links": [
      "node83",
      "node98",
      "node156"
    ],
    "name": "Whenever you attack an enemy from at least 2 tiles away with any style, you restore 2% special attack energy",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 325,
    "y": -75
  },
  {
    "id": "node91",
    "links": [
      "node22",
      "node164"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 425,
    "y": 300
  },
  {
    "id": "node92",
    "links": [
      "node1",
      "node94",
      "node95"
    ],
    "name": "+5% chance to Regenerate runes, ammo and charges",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 0,
    "y": -200
  },
  {
    "id": "node93",
    "links": [
      "node1",
      "node98",
      "node99"
    ],
    "name": "+5% chance to Regenerate runes, ammo and charges",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 200,
    "y": 25
  },
  {
    "id": "node94",
    "links": [
      "node61",
      "node92",
      "node96"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -50,
    "y": -250
  },
  {
    "id": "node95",
    "links": [
      "node84",
      "node92"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 50,
    "y": -250
  },
  {
    "id": "node96",
    "links": [
      "node94",
      "node97"
    ],
    "name": "Healing with Demonic Pacts overheals you, up to +30% of your base Hitpoints level",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 0,
    "y": -300
  },
  {
    "id": "node97",
    "links": [
      "node96",
      "node135"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -50,
    "y": -350
  },
  {
    "id": "node98",
    "links": [
      "node88",
      "node93"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 325,
    "y": 25
  },
  {
    "id": "node99",
    "links": [
      "node8",
      "node93",
      "node100"
    ],
    "name": "+5 permanent Defence level boost",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 200,
    "y": 150
  },
  {
    "id": "node100",
    "links": [
      "node99",
      "node101"
    ],
    "name": "Healing with Demonic Pacts overheals you, up to +30% of your base Hitpoints level",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 262,
    "y": 212
  },
  {
    "id": "node101",
    "links": [
      "node100",
      "node87"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 325,
    "y": 150
  },
  {
    "id": "node102",
    "links": [
      "node66",
      "node106"
    ],
    "name": "While protection prayers are not active, you restore 1 Prayer point every 15 ticks (9s), this is sped up by 1 tick (0.6s) for every 7 worn prayer bonus you have",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": -262,
    "y": 87
  },
  {
    "id": "node103",
    "links": [
      "node20",
      "node106"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -425,
    "y": 300
  },
  {
    "id": "node106",
    "links": [
      "node102",
      "node103",
      "node107"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -425,
    "y": 87
  },
  {
    "id": "node107",
    "links": [
      "node106",
      "node67",
      "node108"
    ],
    "name": "Air spells deal +7% damage for each active prayer",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -425,
    "y": -175
  },
  {
    "id": "node108",
    "links": [
      "node107",
      "node109",
      "node111"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -475,
    "y": -225
  },
  {
    "id": "node109",
    "links": [
      "node108"
    ],
    "name": "Air spells have a +1% chance to max hit for every 1 prayer bonus, this chance is doubled against enemies weak to air spells",
    "tooltip": "",
    "type": "magic",
    "size": "node_capstone",
    "x": -525,
    "y": -275
  },
  {
    "id": "node111",
    "links": [
      "node108"
    ],
    "name": "Smoke spells now count as 'air' spells",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -437,
    "y": -262
  },
  {
    "id": "node112",
    "links": [
      "node68",
      "node113"
    ],
    "name": "Water spells deal increased damage the higher health percentage you have (+20% damage at 100% health)",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -350,
    "y": -250
  },
  {
    "id": "node113",
    "links": [
      "node112",
      "node114",
      "node123"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -400,
    "y": -300
  },
  {
    "id": "node114",
    "links": [
      "node113"
    ],
    "name": "Water spell hits bounce back to you, healing you for the 60% of the damage dealt to your target",
    "tooltip": "",
    "type": "magic",
    "size": "node_capstone",
    "x": -450,
    "y": -350
  },
  {
    "id": "node117",
    "links": [
      "node69",
      "node118"
    ],
    "name": "Fire spell casts burn up to 6% of your maximum Hitpoints to increase your damage dealt by double the amount burned for.",
    "tooltip": "This effect cannot kill you directly.",
    "type": "magic",
    "size": "node_major",
    "x": -275,
    "y": -325
  },
  {
    "id": "node118",
    "links": [
      "node117",
      "node119",
      "node124"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -325,
    "y": -375
  },
  {
    "id": "node119",
    "links": [
      "node118"
    ],
    "name": "Fire spell hits apply 1 burn (max 5) and bounce to up to 2 nearby targets",
    "tooltip": "",
    "type": "magic",
    "size": "node_capstone",
    "x": -375,
    "y": -425
  },
  {
    "id": "node122",
    "links": [
      "node68",
      "node69"
    ],
    "name": "Attack rate with combat spells in a spellbook is sped up by 2 ticks",
    "tooltip": "This cannot reduce attack rate below 2 ticks (1.2s)",
    "type": "magic",
    "size": "node_major",
    "x": -288,
    "y": -262
  },
  {
    "id": "node123",
    "links": [
      "node113"
    ],
    "name": "Ice spells now count as 'water' spells",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -338,
    "y": -312
  },
  {
    "id": "node124",
    "links": [
      "node118"
    ],
    "name": "Blood spells now count as 'fire' spells",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -388,
    "y": -362
  },
  {
    "id": "node127",
    "links": [
      "node70",
      "node128",
      "node134"
    ],
    "name": "Earth spell hits reduce the enemies Defence & Magic Defence levels by 2",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -200,
    "y": -400
  },
  {
    "id": "node128",
    "links": [
      "node127",
      "node129",
      "node131"
    ],
    "name": "+1% Magic damage",
    "tooltip": "This bonus is multiplied by the Tumeken's Shadow special effect",
    "type": "magic",
    "size": "node_minor",
    "x": -250,
    "y": -450
  },
  {
    "id": "node129",
    "links": [
      "node128"
    ],
    "name": "Earth spells deal additional flat damage based on your current Defence level (+1 damage per 12 Defence levels)",
    "tooltip": "",
    "type": "magic",
    "size": "node_capstone",
    "x": -300,
    "y": -500
  },
  {
    "id": "node131",
    "links": [
      "node128"
    ],
    "name": "Shadow spells, now count as 'earth' spells",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -288,
    "y": -412
  },
  {
    "id": "node133",
    "links": [
      "node69",
      "node68"
    ],
    "name": "Attack rate with powered staves is sped up by 3 ticks\nAll one handed powered staves have their max hit reduced by 8",
    "tooltip": "This cannot reduce attack rate below 1 tick (0.6s)",
    "type": "magic",
    "size": "node_major",
    "x": -238,
    "y": -212
  },
  {
    "id": "node134",
    "links": [
      "node127",
      "node136"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": -100,
    "y": -500
  },
  {
    "id": "node135",
    "links": [
      "node97",
      "node136"
    ],
    "name": "Whenever an attack deals 0 damage to you while either a two-handed shield or an off-hand is equipped, you're healed for 2 and restore 2 prayer points",
    "tooltip": "",
    "type": "neutral",
    "size": "node_major",
    "x": 0,
    "y": -400
  },
  {
    "id": "node136",
    "links": [
      "node134",
      "node135",
      "node139"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 100,
    "y": -500
  },
  {
    "id": "node139",
    "links": [
      "node136",
      "node140",
      "node145"
    ],
    "name": "All recoil & Thorns style effects deal additional damage equal to 1% of your total defence bonuses",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 200,
    "y": -400
  },
  {
    "id": "node140",
    "links": [
      "node139",
      "node141"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 250,
    "y": -450
  },
  {
    "id": "node141",
    "links": [
      "node140"
    ],
    "name": "When the Thorns effect triggers, it will always hit twice, dealing 50% of its damage in the second hit.",
    "tooltip": "",
    "type": "melee",
    "size": "node_capstone",
    "x": 300,
    "y": -500
  },
  {
    "id": "node142",
    "links": [
      "node143",
      "node163"
    ],
    "name": "Melee weapons under 1kg attack 1 tick (0.6s) faster",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 275,
    "y": -325
  },
  {
    "id": "node143",
    "links": [
      "node142",
      "node144"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 325,
    "y": -375
  },
  {
    "id": "node144",
    "links": [
      "node143"
    ],
    "name": "Whenever you deal damage with a melee weapon, you restore 2% special attack energy per hit",
    "tooltip": "",
    "type": "melee",
    "size": "node_capstone",
    "x": 375,
    "y": -425
  },
  {
    "id": "node145",
    "links": [
      "node84",
      "node139",
      "node146"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 150,
    "y": -350
  },
  {
    "id": "node146",
    "links": [
      "node79",
      "node145"
    ],
    "name": "Attacking with a melee weapon or Thorns has a +10% chance to heal you based off your distance between you and your target (1 tile = 1 health)",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 163,
    "y": -287
  },
  {
    "id": "node150",
    "links": [
      "node151",
      "node161"
    ],
    "name": "For each unique heavy melee weapon (>=1kg) in your inventory, your chance of a Blindbag trigger is increased by 2% up to a maximum of 10% (5 weapons)",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 350,
    "y": -250
  },
  {
    "id": "node151",
    "links": [
      "node150",
      "node152"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 400,
    "y": -300
  },
  {
    "id": "node152",
    "links": [
      "node151"
    ],
    "name": "For each unique heavy melee weapon (>=1kg) in your inventory, the max hit of your Blindbag attacks is increased by 2% up to a maximum of 10% (5 weapons)",
    "tooltip": "",
    "type": "melee",
    "size": "node_capstone",
    "x": 450,
    "y": -350
  },
  {
    "id": "node153",
    "links": [
      "node154",
      "node156",
      "node164"
    ],
    "name": "Your maximum hit when attacking with a melee weapon is increased by 4% and an additional 4% for every 3 tiles of distance between you and your target",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 425,
    "y": -175
  },
  {
    "id": "node154",
    "links": [
      "node153",
      "node155"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 475,
    "y": -225
  },
  {
    "id": "node155",
    "links": [
      "node154"
    ],
    "name": "If your melee attack range is at least 4, it is increased to 7",
    "tooltip": "All halberds slower than 5 ticks have their attack rate set to 5 ticks (3.0s)",
    "type": "melee",
    "size": "node_capstone",
    "x": 525,
    "y": -275
  },
  {
    "id": "node156",
    "links": [
      "node80",
      "node88",
      "node153"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 375,
    "y": -125
  },
  {
    "id": "node157",
    "links": [
      "node80",
      "node161"
    ],
    "name": "When hitting a target with a two handed melee weapon, you have a 5% chance to trigger a Ranged echo as if you have a bow, crossbow and thrown weapon equipped.",
    "tooltip": "Ranged echo: An additional ranged attack which rolls with your melee stats instead of ranged. Echo attacks cannot trigger additional echo attacks.",
    "type": "melee",
    "size": "node_major",
    "x": 312,
    "y": -137
  },
  {
    "id": "node161",
    "links": [
      "node86",
      "node150",
      "node157",
      "node165"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 300,
    "y": -200
  },
  {
    "id": "node162",
    "links": [
      "node163",
      "node165"
    ],
    "name": "Melee strength is increased by 50% of your worn prayer bonus",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 238,
    "y": -212
  },
  {
    "id": "node163",
    "links": [
      "node79",
      "node85",
      "node142",
      "node162"
    ],
    "name": "+1% Melee damage",
    "tooltip": "",
    "type": "melee",
    "size": "node_minor",
    "x": 225,
    "y": -275
  },
  {
    "id": "node164",
    "links": [
      "node87",
      "node91",
      "node153"
    ],
    "name": "All attacks have +15% Prayer penetration (up to 100%)",
    "tooltip": "",
    "type": "neutral",
    "size": "node_minor",
    "x": 425,
    "y": 87
  },
  {
    "id": "node165",
    "links": [
      "node161",
      "node162"
    ],
    "name": "Attacks with a melee weapon can consume 5 overhealed hitpoints (if available), increasing your minimum hit on that attack by 5",
    "tooltip": "",
    "type": "melee",
    "size": "node_major",
    "x": 288,
    "y": -262
  },
  {
    "id": "node166",
    "links": [
      "node67",
      "node53"
    ],
    "name": "Whenever you Regenerate charges from a powered staff or wand, also Regenerate 1 air rune",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -363,
    "y": -187
  },
  {
    "id": "node167",
    "links": [
      "node54",
      "node70"
    ],
    "name": "Whenever you Regenerate charges from a powered staff or wand, also Regenerate 1 earth rune",
    "tooltip": "",
    "type": "magic",
    "size": "node_major",
    "x": -163,
    "y": -287
  }
];
