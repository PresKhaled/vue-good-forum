<template>
  <div class="ui grid center aligned">
    <div class="five wide column publications">
      <h1 class="ui header right aligned">
        {{ publication.title }}
        <router-link
          :to="{
            name: 'PublicationEdit',
            params: { category, subject, publicationId: publication.id }
          }"
          tag="button"
          class="ui button teal"
        >
          <i class="edit outline icon"></i>
          Edit this publication
        </router-link>
      </h1>
      <div class="ui tall stacked segment">
        <p>{{ publication.content }}</p>
      </div>

      <PublicationComments />
    </div>
  </div>
</template>

<script>
import PublicationComments from '@/components/PublicationComments'

export default {
  components: { PublicationComments },
  props: {
    category: { type: String, required: true },
    subject: { type: String, required: true },
    publicationId: { type: String, required: true }
  },
  data () {
    return {}
  },
  computed: {
    publication () {
      const publication = this.$store.state.publications.find(
        item => item.id === this.publicationId
      )

      return Object.assign(
        publication,
        this.$store.state.publicationsInfo.find(
          item => item.id === publication.id
        )
      )
    }
  }
}
</script>

<style scoped>
.publications,
h1 {
  font-family: 'Amiri', serif !important;
}
</style>
