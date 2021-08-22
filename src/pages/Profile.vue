<template>
  <div class="ui grid center aligned">
    <UserInfo :user="authenticatedUser" />
    <UserPublications :publications="publications" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserInfo from '@/components/UserInfo'
import UserPublications from '@/components/UserPublications'

export default {
  components: {
    UserInfo,
    UserPublications
  },
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
  }
}
</script>
<style scoped>

</style>
