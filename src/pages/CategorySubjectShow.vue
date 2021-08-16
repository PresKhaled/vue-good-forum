<template>
  <div class="container">
    <AppThemeSwitcher />
    <div v-for="publication in publications" :key="publication.id" class="card bg-white mb-3" style="max-width: 18rem;">
      <div class="card-header">{{ getUserBy(publication.userId).name }}</div>
      <div class="card-body">
        <h5 class="card-title"><router-link :to="{name: 'PublicationShow', params: {category: category, subject: subject, publicationId: publication.id}}">{{ publication.title }}</router-link></h5>
        <p class="card-text">{{ publication.description }}</p>
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
    }
  }
}
</script>

<style scoped>

</style>
