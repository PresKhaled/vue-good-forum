<template>
  <div class="ui grid center aligned">
    <div class="ui aligned left">
      <UserInfo :user="authenticatedUser" />
      <router-link v-if="!editInfo" :to="{ name: 'ProfileEditInfo' }">
        <button class="ui button green">Edit info</button>
      </router-link>
      <UserEditInfo v-else :user="authenticatedUser" />
    </div>
    <UserPublications :publications="publications" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserInfo from '@/components/UserInfo'
import UserEditInfo from '@/components/UserEditInfo'
import UserPublications from '@/components/UserPublications'

export default {
  components: {
    UserInfo,
    UserEditInfo,
    UserPublications
  },
  props: {
    editInfo: { type: Boolean, default: false }
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
