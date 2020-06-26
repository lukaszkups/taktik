export default {
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
    { tile: 21, type: 'MadCat', turn: 0, action: {} },
    { tile: 37, type: 'Tank', turn: 0, action: {} },
    { tile: 38, type: 'Tank', turn: 1, action: {} }
  ],
  enemy: [
    { tile: 28, type: 'Tank', action: { move: 1, attack: 1 } } // 0 - false, 1 - true
  ]
}
