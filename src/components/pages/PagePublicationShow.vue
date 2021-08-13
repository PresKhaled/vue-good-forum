<template>
  <div>
    <h1>{{ publication.title }}</h1>
    <p>{{ publication.content }}</p>
  </div>
</template>

<script>
import data from '@/data2.json'

export default {
  props: {
    category: { type: String, required: true },
    subject: { type: String, required: true },
    publicationId: { type: String, required: true }
  },
  data () {
    return {}
  },
  computed: {
    // validateUrl: function () {}
    publication: function () {
      const publication = data.publications.find(
        (item) => item.id === parseInt(this.publicationId)
      )

      return Object.assign(publication, data.publicationsInfo.find((item) => item.id === publication.id))
    }
  }
}
</script>

<style scoped>

</style>
