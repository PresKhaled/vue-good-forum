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
import data from '@/data2.json'
import PublicationCommentAdd from '@/components/PublicationCommentAdd'

export default {
  name: 'PublicationComments',
  components: { PublicationCommentAdd },
  props: {
    rawComments: { type: Object, required: true }
  },
  data () {
    return {
      comments: this.rawComments,
      getUserBy (id) {
        return data.users.find((user) => user.id === id)
      }
    }
  },
  methods: {
    // Insert a new comment in 'this.comments' in the memory.
    insertComment (customEventData) {
      const newComment = {
        ...customEventData,
        publicationsInfoId: parseInt(this.$route.params.publicationId)
      }

      this.comments.push(newComment)
    }
  }
}
</script>

<style scoped>

</style>
