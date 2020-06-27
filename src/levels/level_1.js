export default {
  waves: 10,
  grid: [
    'forest', 'sand', 'sand', 'sand', 'sand', 'sand', 'mountains', 'mountains',
    'sand', 'grass', 'grass', 'grass', 'sand', 'sand', 'sand', 'mountains',
    'grass', 'water', 'water', 'water', 'grass', 'sand', 'sand', 'sand',
    'grass', 'water', 'water', 'water', 'grass', 'sand', 'forest', 'sand',
    'sand', 'grass', 'grass', 'grass', 'sand', 'sand', 'sand', 'sand',
    'sand', 'sand', 'sand', 'sand', 'sand', 'sand', 'forest', 'sand',
    'sand', 'sand', 'forest', 'sand', 'sand', 'sand', 'sand', 'mountains',
    'sand', 'sand', 'sand', 'forest', 'sand', 'mountains', 'mountains', 'mountains'
  ],
  incoming: [
    { id: 2, tile: 21, type: 'MadCat', turn: 0, action: {}, destroyed: false },
    { id: 3, tile: 37, type: 'Tank', turn: 1, action: {}, destroyed: false },
    { id: 4, tile: 46, type: 'Tank', turn: 0, action: {}, destroyed: false },
    { id: 5, tile: 51, type: 'Rocketeer', turn: 3, action: {}, destroyed: false }
  ],
  enemy: [
    { id: 1, tile: 28, type: 'Tank', action: { move: 1, attack: 1 }, destroyed: false } // 0 - false, 1 - true
  ],
  player: [
    { id: 1, tile: 2, type: 'Rocketeer', action: {}, destroyed: false, attackPattern: 'rook' },
    { id: 2, tile: 9, type: 'Tank', action: {}, destroyed: false, attackPattern: 'short' }
  ]
}
