<template>
  <div class="ui grid center aligned">
    <div class="ui card">
      <div class="image">
        <img src="/images/ocean_sea_beach_surf_110361_2560x1440.jpg">
      </div>
      <div class="content">
        <a class="header">{{ authenticatedUser.name }}</a>
        <div class="meta">
          <span class="date">{{ authenticatedUser.email }}</span>
        </div>
        <div v-if="authenticatedUser.word" class="description">
          {{ authenticatedUser.word }}
        </div>
      </div>
      <div v-if="authenticatedUser.githubUsername" class="extra content">
        <a target="_blank" :href="`https://github.com/${authenticatedUser.githubUsername}`">
          <i class="github icon"></i>
          {{ authenticatedUser.githubUsername }}
        </a>
      </div>
    </div>

    <div>
      <div v-for="publication in publications" :key="publication.id" class="ui segment">
        <h2 class="ui header"><router-link :to="publicationUrl(publication)">{{ publication.title }}</router-link></h2>
        <p>{{ publication.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['authenticatedUser']),

    publications () {
      return Object.values(this.$store.state.publications).filter(publication => {
        if (publication.userId === this.authenticatedUser.id) {
          return Object.assign(publication, this.$store.state.publicationsInfo.find(publicationInfo => publicationInfo.id === publication.publicationsInfoId))
        }
      })
    }
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

<style scoped>

</style>
