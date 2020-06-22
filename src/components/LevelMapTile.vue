<template>
  <div
    class="level-map__tile"
    :class="`level-map__tile--${tile}`"
  >
  </div>
</template>
<script>
export default {
  name: 'LevelMapTile',
  props: {
    tile: {
      type: String,
      default: 'grass'
    }
  }
}
</script>
<style lang="sass">
.level-map__tile
  flex: 1
  width: 100px
  min-width: 100px
  max-width: 100px
  height: 100px
  min-height: 100px
  max-height: 100px

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
</style>
