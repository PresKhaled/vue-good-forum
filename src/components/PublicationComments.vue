<template>
  <div>
    <div v-for="comment in comments" :key="comment.id" class="card">
      <div class="card-header">
        {{ getUserBy(comment.userId).name }}
      </div>
      <div class="card-body">
        <p class="card-text">{{ comment.content }}</p>
      </div>
    </div>
    <div>
      <PublicationCommentAdd @newComment="insertComment" />
    </div>
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
    // Insert a new comment in comments in the memory.
    insertComment (customEventData) {
      const newComment = {
        ...customEventData,
        publicationsInfoId: parseInt(this.$route.params.publicationId)
      }

      this.comments.push(newComment)

      console.log(this.comments)
    }
  }
}
</script>

<style scoped>

</style>
