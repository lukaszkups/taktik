<template>
  <div class="level-map">
    <level-map-tile
      v-for="(tile, index) in currentLevel.grid"
      :tile="tile"
      :key="index"
    />
  </div>
</template>
<script>
import LevelMapTile from '@/components/LevelMapTile'
import level1 from '@/levels/level_1.js'

export default {
  name: 'LevelMap',
  components: {
    LevelMapTile
  },
  data () {
    return {
      currentLevel: level1
    }
  }
}
</script>
<style lang="sass">
.level-map
  display: flex
  margin: 100px auto
  width: 800px
  flex-wrap: wrap
</style>
