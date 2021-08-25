<template>
  <div class="ui grid center aligned">
    <br />
    <h1>Edit {{ publication.title }}</h1>
    <div class="row">
      <form
        class="ui form five wide column"
        @submit.prevent="updatePublication(formData)"
      >
        <div class="field">
          <label>Title</label>
          <input v-model="formData.title" type="text" />
        </div>
        <div class="field">
          <label>Content</label>
          <textarea v-model="formData.content"></textarea>
        </div>
        <button @click="cancel" class="ui grey basic button" type="button">
          Cancel
        </button>
        <button class="ui button teal" type="submit">
          Update publication
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: { type: String, required: true },
    subject: { type: String, required: true },
    publicationId: { type: String, required: true }
  },
  computed: {
    publication () {
      return this.$store.state.publications.find(
        publication => publication.id === this.publicationId
      )
    }
  },
  data () {
    return {
      formData: {
        title: this.publication?.title ?? '',
        content: this.publication?.content ?? ''
      }
    }
  },
  methods: {
    navigateToPublication () {
      this.$router.push({
        name: 'PublicationShow',
        category: this.category,
        subject: this.subject,
        publicationId: this.publicationId
      })
    },

    async updatePublication ({ title, content }) {
      await this.$store.dispatch('updatePublication', {
        publicationId: this.publicationId,
        title,
        content
      })

      this.navigateToPublication()
    },

    cancel () {
      this.navigateToPublication()
    }
  },
  created () {
    this.formData.title = this.publication.title
    this.formData.content = this.publication.content
  }
}
</script>
