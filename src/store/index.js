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
    },

    editUserInfo ({ commit }, userInfo) {
      commit('updateUserInfo', userInfo)
    }
  },
  mutations: {
    saveNewComment (state, newComment) {
      state.comments.push(newComment)
    },

    updateUserInfo (state, selectedUser) {
      const userInfoIndex = state.users.findIndex(user => user.id === selectedUser.id)
      state.users[userInfoIndex] = selectedUser
    }
  }
})
