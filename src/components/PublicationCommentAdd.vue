<template>
  <div>
    <form @submit.prevent="newComment">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Add comment</label>
        <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button class="btn btn-light">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PublicationCommentAdd',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    newComment () {
      this.$emit('newComment', {
        id: Math.random(),
        userId: 2,
        content: this.content
      })
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
