<template>
  <div class="left aligned">
    <form id="form-new-comment" @submit.prevent="newComment">
      <div class="ui form">
        <div class="field">
          <label>Add comment</label>
          <textarea v-model="content" rows="2"></textarea>
        </div>
      </div>
      <br />
      <button class="ui button green">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PublicationCommentAdd',
  data () {
    return {
      content: '' // textarea value.
    }
  },
  methods: {
    newComment () {
      this.$emit('newComment', {
        userId: 2,
        content: this.content
      })

      this.content = ''
      document.getElementById('form-new-comment').reset()
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
