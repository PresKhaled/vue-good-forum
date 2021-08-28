import { createStore } from 'vuex'
import data from '@/data2.json'
import { findBy } from '@/helpers'

export default createStore({
  state: {
    ...data,
    authenticatedUserId: 2
  },
  getters: {
    authenticatedUser (state) {
      return findBy(state.users, state.authenticatedUserId)
    }
  },
  actions: {
    addComment ({ commit }, comment) {
      comment.id = Math.random()
      commit('saveNewComment', comment)
    },

    editUserInfo ({ commit }, userInfo) {
      commit('updateUserInfo', userInfo)
    },

    async newPublication ({ state, commit }, publication) {
      const id = '_' + Math.random()
      const userId = state.authenticatedUserId
      const title = publication.title
      const seo = title.replaceAll(' ', '-')
      const description = publication.content.substr(0, 57)

      commit('saveNewPublication', {
        id,
        userId,
        publicationsInfoId: id,
        content: publication.content
      })

      commit('saveNewPublicationInfo', {
        id,
        userId,
        subject: publication.subject,
        seo,
        title,
        description
      })

      return findBy(state.publications, id)
    },

    async updatePublication ({ commit }, data) {
      commit('updatePublicationInfo', {
        publicationId: data.publicationId,
        title: data.title
      })
      commit('updatePublication', {
        publicationId: data.publicationId,
        content: data.content
      })
      /*
        findBy
        return state.publications.find(
        publication => publication.id === data.publicationId
      ) */
    }
  },
  mutations: {
    saveNewComment (state, newComment) {
      state.comments.push(newComment)
    },

    updateUserInfo (state, selectedUser) {
      const userInfoIndex = state.users.findIndex(
        user => user.id === selectedUser.id
      )
      state.users[userInfoIndex] = selectedUser
    },

    saveNewPublication (state, newPublication) {
      state.publications.push(newPublication)
    },

    saveNewPublicationInfo (state, newPublicationInfo) {
      state.publicationsInfo.push(newPublicationInfo)
    },

    updatePublication (state, { publicationId, content }) {
      const publication = findBy(state.publications, publicationId)
      const publicationIndex = state.publications.indexOf(publication)

      publication.content = content

      state.publications[publicationIndex] = publication
    },

    updatePublicationInfo (state, { publicationId, title }) {
      const publicationInfo = findBy(state.publicationsInfo, publicationId)
      const publicationInfoIndex = state.publications.indexOf(publicationInfo)

      publicationInfo.title = title

      state.publicationsInfo[publicationInfoIndex] = publicationInfo
    }
  }
})
