<template>
  <div class="ui card">
    <div class="image">
      <img src="/images/ocean_sea_beach_surf_110361_2560x1440.jpg">
    </div>
    <div class="content">
      <a class="header">{{ user.name }}</a>
      <div class="meta">
        <span class="date">{{ user.email }}</span>
      </div>
      <div v-if="user.word" class="description">
        {{ user.word }}
      </div>
    </div>
    <div v-if="user.githubUsername" class="extra content">
      <a target="_blank" :href="`https://github.com/${user.githubUsername}`">
        <i class="github icon"></i>
        {{ user.githubUsername }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: { type: Object, required: true }
  }
}
</script>
