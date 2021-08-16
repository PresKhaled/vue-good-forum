<template>
  <div class="ui grid center aligned">
    <div class="five wide column">
      <h1 class="ui header left aligned">{{ subjectDetails.name }} publications</h1>
      <div class="ui cards publications">
        <div v-for="publication in publications" :key="publication.id" class="card">
          <div class="content">
            <div class="header"><router-link :to="{name: 'PublicationShow', params: {category: category, subject: subject, publicationId: publication.id}}">{{ publication.title }}</router-link></div>
            <div class="meta">{{ getUserBy(publication.userId).name }}</div>
            <div class="description">
              {{ publication.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data2.json'

export default {
  props: {
    category: { type: String, required: true },
    subject: { type: String, required: true }
  },
  data () {
    return {
      getUserBy (id) {
        return data.users.find((user) => user.id === id)
      }
    }
  },
  computed: {
    publications: function () {
      return data.publicationsInfo.filter((item) => item.subjectSeo === this.subject)
    },
    subjectDetails: function () {
      return data.subjects.find((subject) => subject.seo === this.subject)
    }
  }
}
</script>

<style scoped>
  .publications, a {
    font-family: 'Amiri', serif !important;
  }
</style>
