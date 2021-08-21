<template>
  <div>
    <h2 class="ui header right aligned">التعليقات</h2>
    <div v-for="comment in comments" :key="comment.id" class="ui segment">
      <h4 class="ui header teal">{{ getUserBy(comment.userId).name }}</h4>
      <p>{{ comment.content }}</p>
    </div>

    <PublicationCommentAdd @newComment="insertComment" />
  </div>
</template>

<script>
import PublicationCommentAdd from '@/components/PublicationCommentAdd'

export default {
  name: 'PublicationComments',
  components: { PublicationCommentAdd },
  data () {
    return {}
  },
  computed: {
    comments () {
      return this.$store.state.comments
        .filter(comment => comment.publicationsInfoId === parseInt(this.$route.params.publicationId))
    }
  },
  methods: {
    // Insert a new comment in 'this.comments' in the memory.
    insertComment (customEventData) {
      const newComment = {
        ...customEventData,
        publicationsInfoId: parseInt(this.$route.params.publicationId)
      }

      this.$store.dispatch('addComment', newComment)
    },

    getUserBy (id) {
      return this.$store.state.users
        .find((user) => user.id === id)
    }
  }
}
</script>

<style scoped>

</style>
