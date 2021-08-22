<template>
  <div>
    <div v-for="publication in publications" :key="publication.id" class="ui segment">
      <h2 class="ui header"><router-link :to="publicationUrl(publication)">{{ publication.title }}</router-link></h2>
      <p>{{ publication.content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    publications: { type: Object, required: true }
  },
  methods: {
    publicationUrl (publication) {
      const subjectData = this.$store.state.subjects
        .find(subject => { return subject.seo === publication.subjectSeo })
      const category = this.$store.state.categories
        .find(category => category.id === subjectData.categoryId)

      return {
        name: 'PublicationShow',
        params: {
          category: category.seo,
          subject: publication.subjectSeo,
          publicationId: publication.id
        }
      }
    }
  }
}
</script>
