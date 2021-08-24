<template>
  <div class="ui grid center aligned">
    <br />
    <h1>{{ subjectData.name }} / New publication</h1>
    <div class="row">
      <form class="ui form five wide column" @submit.prevent="publish">
        <div class="field">
          <label>Title</label>
          <input v-model="title" type="text" />
        </div>
        <div class="field">
          <label>Content</label>
          <textarea v-model="content"></textarea>
        </div>
        <button @click="cancel" class="ui grey basic button" type="button">
          Cancel
        </button>
        <button class="ui button teal" type="submit">
          Publish
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: { type: String, required: true },
    subject: { type: String, required: true }
  },
  computed: {
    subjectData () {
      return this.$store.state.subjects.find(
        subject => subject.seo === this.subject
      )
    }
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    async publish () {
      const newPublication = await this.$store.dispatch('newPublication', {
        title: this.title,
        content: this.content,
        subject: this.subject
      })

      this.$router.push({
        name: 'PublicationShow',
        params: {
          category: this.category,
          subject: this.subject,
          publicationId: newPublication.id
        }
      })
    },

    cancel () {
      this.$router.push({
        name: 'CategorySubjectShow',
        category: this.category,
        subject: this.subject
      })
    }
  }
}
</script>
