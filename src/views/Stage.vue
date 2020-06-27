<template>
  <div class="stage">
    <div class="row">
      <div class="col col--stage">
        <level-map
          v-if="levelData"
        />
      </div>
      <div class="col col--20 side-menu">
        <div class="side-menu__item">Current turn: {{ currentTurn }}</div>
        <div class="side-menu__item">{{ hoveredTile }}</div>
        <div class="side-menu__item">Mode:</div>
        <div class="row side-menu__item">
          <div
            class="col action-mode__button"
            :class="{'action-mode__button--active': actionMode === 'move'}"
            @click="setMode('move')"
          >
            Move
          </div>
          <div
            class="col action-mode__button"
            :class="{'action-mode__button--active': actionMode === 'attack'}"
            @click="setMode('attack')"
          >
            Attack
          </div>
        </div>
        <div
          class="side-menu__item next-turn__button"
          @click="nextTurn"
        >Next turn</div>
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
      return this.$store.state.hoveredTile
    },
    levelData () {
      return this.$store.state.levels[this.$store.state.currentLevel]
    },
    actionMode () {
      return this.$store.state.actionMode
    },
    currentTurn () {
      return this.$store.state.turn
    }
  },
  methods: {
    setMode (mode) {
      this.$store.dispatch('updateProp', { name: 'actionMode', value: mode })
    },
    nextTurn () {
      this.$store.dispatch('updateProp', { name: 'turn', value: this.$store.state.turn + 1 })
      this.updateGameState()
    },
    updateGameState () {
      const dataCopy = { ...this.levelData }
      dataCopy.incoming.map((obj, index) => {
        if (this.currentTurn >= obj.turn) {
          dataCopy.enemy.push(obj)
          dataCopy.incoming.splice(index, 1)
        }
      })
      this.$store.dispatch('updateProp', { name: 'levelData', value: dataCopy })
    }
  }
}
</script>
<style lang="sass">
.row
  display: flex

  .col
    flex: 1

    &--20
      flex: 2

    &--80
      flex: 8

    &--stage
      max-width: 800px

.side-menu
  background: silver

  &__item
    padding: 10px 0

  .action-mode
    &__button
      padding: 20px 0

      &:hover
        background: black
        color: white
        cursor: pointer

      &--active
        background: crimson
        color: white
.next-turn__button
  padding: 20px 0
  background: black
  color: white
  cursor: pointer

  &:hover
    background: white
    color: black
    cursor: pointer
</style>
