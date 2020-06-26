<template>
  <div class="stage">
    <div class="row">
      <div class="col col--80">
        <level-map />
      </div>
      <div class="col col--20">
        {{ hoveredTile }}
      </div>
    </div>
  </div>
</template>

<script>
import LevelMap from '@/components/LevelMap'

export default {
  name: 'Stage',
  components: {
    LevelMap
  },
  computed: {
    hoveredTile () {
      return this.$state
    }
  }
}
</script>
