<template>
  <div class="ui grid center aligned">
    <div>
      <div>
        <h1 class="ui header left aligned">
          {{ subjectDetails.name }} publications
        </h1>
        <router-link
          :to="{
            name: 'PublicationNew',
            params: {
              category: category,
              subject: subject
            }
          }"
        >
          <button class="ui button">
            <i class="add icon"></i>
            New publication
          </button>
        </router-link>
      </div>
      <div class="ui cards publications">
        <div
          v-for="publication in publications"
          :key="publication.id"
          class="card"
        >
          <div class="content">
            <div class="header">
              <router-link
                :to="{
                  name: 'PublicationShow',
                  params: {
                    category: category,
                    subject: subject,
                    publicationId: publication.id
                  }
                }"
                >{{ publication.title }}</router-link
              >
            </div>
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
export default {
  props: {
    category: { type: String, required: true },
    subject: { type: String, required: true }
  },
  data () {
    return {}
  },
  computed: {
    publications () {
      return this.$store.state.publicationsInfo.filter(
        item => item.subjectSeo === this.subject
      )
    },
    subjectDetails () {
      return this.$store.state.subjects.find(
        subject => subject.seo === this.subject
      )
    }
  },
  methods: {
    getUserBy (id) {
      return this.$store.state.users.find(user => user.id === id)
    }
  }
}
</script>

<style scoped>
.publications,
a {
  font-family: 'Amiri', serif !important;
}
</style>
