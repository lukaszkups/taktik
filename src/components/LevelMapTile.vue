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
    enemy () {
      return this.level.enemy.find(obj => obj.tile === this.index)
    },
    incoming () {
      return this.level.incoming.find(obj => obj.tile === this.index)
    }
  },
  methods: {
    onMouseOver () {
      console.log(this.enemy)
      this.$state.hoveredTile = this.enemy ? this.enemy.type : ''
    }
  }
}
</script>
<style lang="sass">
.level-map
  &__tile,
  &__unit,
  &__incoming
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
    &--lava
      background-color: #8B0000

  &__unit
    &-name
      line-height: 100px
      cursor: pointer
    &:hover
      background: rgba(255, 0, 0, 0.65)

  &__incoming
    background: silver
    line-height: 100px
    cursor: not-allowed
</style>
