import Vue from 'vue'
import Vuex from 'vuex'
import levels from '@/levels/levels.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLevel: 1,
    hoveredTile: '',
    levelData: null,
    levels: levels,
    actionMode: 'move',
    turn: 0
  },
  mutations: {
    updateProp (state, payload) {
      state[payload.name] = payload.value
    }
  },
  actions: {
    updateProp ({ commit }, payload) {
      commit('updateProp', payload)
    }
  },
  modules: {
  }
})
