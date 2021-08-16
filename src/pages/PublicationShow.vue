<template>
  <div class="ui grid center aligned">
    <div class="five wide column publications">
      <h1 class="ui header right aligned">{{ publication.title }}</h1>
      <div class="ui tall stacked segment">
        <p>{{ publication.content }}</p>
      </div>

      <PublicationComments :rawComments="comments" />
    </div>
  </div>
</template>

<script>
import data from '@/data2.json'
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
    // validateUrl: function () {}
    publication: function () {
      const publication = data.publications.find(
        (item) => item.id === parseInt(this.publicationId)
      )

      return Object.assign(publication, data.publicationsInfo.find((item) => item.id === publication.id))
    },
    comments: function () {
      return data.comments.filter((comment) => comment.publicationsInfoId === parseInt(this.publicationId))
    }
  }
}
</script>

<style>
  .publications, h1, h2 {
    font-family: 'Amiri', serif !important;
  }
</style>
