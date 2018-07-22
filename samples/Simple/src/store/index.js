import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    activeCategory: {
      categoryId: -1,
      cname: ''
    }
  },
  mutations: {
    setActiveCategory (state, category) {
      state.activeCategory = category
    }
  },
  getters: {
    activeCategoryId (state) {
      return state.activeCategory.categoryId
    },
    activeCategoryName (state) {
      return state.activeCategory.cname
    }
  },
  actions: {

  }
})
