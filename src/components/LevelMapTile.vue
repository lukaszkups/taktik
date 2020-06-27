<template>
  <div
    class="level-map__tile"
    :class="[
      `level-map__tile--${tile}`,
      {'level-map__tile--attack-grid': attackGrid}
    ]"
    @mouseover="onMouseOver"
  >
    <div
      v-if="enemy"
      class="level-map__unit"
    >
      <div class="level-map__unit-name">{{ enemy.type }}</div>
    </div>
    <div
      v-if="incoming"
      class="level-map__incoming"
    >
      Incoming
    </div>
    <div
      v-if="player"
      class="level-map__unit--player"
      @click="toggleSelectPlayer"
    >
      <div class="level-map__unit-name">{{ player.type }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LevelMapTile',
  props: {
    tile: {
      type: String,
      default: 'grass'
    },
    level: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    turn () {
      return this.$store.state.turn
    },
    enemy () {
      return this.level.enemy.find(obj => obj.tile === this.index)
    },
    incoming () {
      return this.level.incoming.find(obj => obj.tile === this.index && obj.turn === this.turn)
    },
    player () {
      return this.level.player.find(obj => obj.tile === this.index)
    },
    attackGrid () {
      return this.$store.state.attackGrid.includes(this.index)
    }
  },
  methods: {
    onMouseOver () {
      let tile = this.tile
      if (this.enemy) {
        tile = `${this.enemy.type} (on ${this.tile} tile)`
      } else if (this.incoming) {
        tile = `${this.tile} (teleport in progress)`
      }
      this.$store.dispatch('updateProp', { name: 'hoveredTile', value: tile })
    },
    toggleSelectPlayer () {
      this.$store.dispatch('updateProp', { name: 'selectedUnit', value: this.player })
      if (this.$store.state.actionMode === 'attack') {
        // reset move grid
        this.$store.dispatch('updateProp', { name: 'moveGrid', value: [] })
        // update attack grid
        const attackGrid = this.getAttackGrid(this.player)
        this.$store.dispatch('updateProp', { name: 'attackGrid', value: attackGrid })
      }
    },
    getAttackGrid (player) {
      let grid = []
      if (player.attackPattern === 'short') {
        grid = [
          player.tile - 8,
          player.tile - 1,
          player.tile + 1,
          player.tile + 8
        ]
      } else if (player.attackPattern === 'rook') {
        const column = player.tile % 8
        const rowStart = player.tile - column
        // horizontal line
        for (let i = rowStart; i < rowStart + 8; i++) {
          if (i !== player.tile) {
            grid.push(i)
          }
        }
        // vertical line
        for (let j = 0; j < 8; j++) {
          const value = (j * 8) + column
          if (value !== player.tile) {
            grid.push(value)
          }
        }
      }
      return grid
    }
  }
}
</script>
<style lang="sass">
@keyframes teleportPulse
  0%
    opacity: 0.5
  50%
    opacity: 1
  100%
    opacity: 0.5

@keyframes waterPulse
  0%
    background: #00BFFF
  50%
    background: darken(#00BFFF, 5%)
  100%
    background: brighten(#00BFFF, 5%)

.level-map
  &__tile,
  &__unit,
  &__incoming,
  &__unit--player
    background: transparent
    box-sizing: border-box
    flex: 1
    width: 100px
    min-width: 100px
    max-width: 100px
    height: 100px
    min-height: 100px
    max-height: 100px

  &__tile
    &:hover
      opacity: 0.8

    &--sand
      background-color: #D2B48C
    &--forest
      background-color: #556B2F
    &--grass
      background-color: #32CD32
    &--mountains
      background-color: #696969
    &--water
      background-color: #00BFFF
      animation: waterPulse 5s infinite
      &:nth-of-type(2n)
        animation-delay: 0.5s
      &:nth-of-type(3n)
        animation-delay: 0.25s
    &--lava
      background-color: #8B0000
    &--attack-grid
      border: 1px solid crimson

  &__unit
    background: rgba(255, 150, 150, 0.9)
    &-name
      line-height: 100px
      cursor: pointer
    &:hover
      background: rgba(255, 0, 0, 0.65)

  &__unit--player
    background: rgba(150, 250, 150, 0.9)

  &__incoming
    background: silver
    line-height: 100px
    cursor: not-allowed
    animation: teleportPulse 1s infinite
</style>
