<template>
  <div>
    <div class="ui top fixed menu">
      <div class="item">
        <img src="/svg/chatbox-outline.svg" />
      </div>
      <router-link :to="{ name: 'Home' }" class="item">Home</router-link>
      <router-link
        :to="{
          name: 'SubjectShow',
          params: { category: 'information', subject: 'information-technology' }
        }"
        class="item"
        >Informations Technology</router-link
      >
      <div class="right menu">
        <router-link :to="{ name: 'Profile' }" class="item">
          <h4 class="ui header"></h4>
          <p>
            <span class="ui header">{{ authenticatedUser.name }}</span> <br />
            {{ authenticatedUser.email }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['authenticatedUser'])
  }
}
</script>
