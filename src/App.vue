<template>
  <!-- <Start msg="حفظ الله بلادنا ولغتنا العربية"/> -->
  <TheNavigationbar />
  <br>
  <router-view />
</template>

<script>
import TheNavigationbar from '@/components/TheNavigationbar'

export default {
  name: 'App',
  components: { TheNavigationbar }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
