<template>
  <div
    class="level-map__tile"
    :class="`level-map__tile--${tile}`"
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
      return this.level.incoming.find(obj => obj.tile === this.index && obj.turn <= this.turn)
    },
    player () {
      return this.level.player.find(obj => obj.tile === this.index)
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

  &__unit
    background: rgba(255, 150, 150, 0.9)
    &-name
      line-height: 100px
      cursor: pointer
    &:hover
      background: rgba(255, 0, 0, 0.65)

  &__incoming
    background: silver
    line-height: 100px
    cursor: not-allowed
    animation: teleportPulse 1s infinite
</style>
