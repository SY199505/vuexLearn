import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    // 每次state.count的变化都会到这count的改变
    gettersCount: state => {
      return state.count += 100
    }
  },
  mutations: {
    add (state, n) {
      state.count += n
    },
    reduce (state, n) {
      state.count -= n
    }
  },
  actions: {
    addAction (context, n) {
      context.commit('add', n)
    },
    reduceAction ({commit}, n) {
      commit('reduce', n)
    }
  }
})
