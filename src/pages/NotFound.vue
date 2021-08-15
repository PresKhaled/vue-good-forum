<template>
  <div>
    <h1>Not found</h1>
    <router-link :to="{name: 'Home'}"><i class="bi bi-box-arrow-up"></i> Home</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
