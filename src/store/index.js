import { createStore } from 'vuex'
import data from '@/data2.json'

export default createStore({
  state: {
    ...data,
    authenticatedUserId: 2
  },
  getters: {
    authenticatedUser (state) {
      return state.users.find(user => user.id === state.authenticatedUserId)
    }
  },
  actions: {
    addComment ({ commit }, comment) {
      comment.id = Math.random()
      return commit('saveNewComment', comment)
    }
  },
  mutations: {
    saveNewComment (state, newComment) {
      state.comments.push(newComment)
    }
  }
})
