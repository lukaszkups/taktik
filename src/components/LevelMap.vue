<template>
  <div class="level-map">
    <level-map-tile
      v-for="(tile, index) in levelData.grid"
      :tile="tile"
      :key="index"
      :index="index"
      :level="levelData"
    />
  </div>
</template>
<script>
import LevelMapTile from '@/components/LevelMapTile'

export default {
  name: 'LevelMap',
  components: {
    LevelMapTile
  },
  computed: {
    levelData () {
      return this.$store.state.levels[this.$store.state.currentLevel]
    }
  }
}
</script>
<style lang="sass">
.level-map
  display: flex
  margin: 0
  width: 800px
  flex-wrap: wrap
</style>
