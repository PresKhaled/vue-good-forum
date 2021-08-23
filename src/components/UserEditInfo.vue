<template>
  <form @submit.prevent="saveInfo" class="ui form">
    <div class="field">
      <label>Name</label>
      <input type="text" name="name" v-model="currentUser.name" placeholder="Name">
    </div>
    <div class="field">
      <label>E-Mail</label>
      <input type="email" name="name" v-model="currentUser.email" placeholder="name@example.com">
    </div>
    <div class="field">
      <label>Word</label>
      <textarea v-model="currentUser.word" rows="2"></textarea>
    </div>
    <div class="field">
      <label>GitHub username</label>
      <input type="text" name="github-username" v-model="currentUser.githubUsername" placeholder="https://github.com/Username">
    </div>
    <button @click="cancelEditing" class="ui button" type="button">Cancel</button>
    <button class="ui button teal" type="submit">Save</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      currentUser: { ...this.user }
    }
  },
  props: {
    user: { type: Object, required: true }
  },
  methods: {
    saveInfo () {
      this.$store.dispatch('editUserInfo', { ...this.currentUser })
      this.$router.push({ name: 'Profile' })
    },

    cancelEditing () {
      this.$router.push({ name: 'Profile' })
    }
  }
}
</script>
<style scoped>

</style>
