<template>
  <div>
    <ul>
      <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
    </ul>
  </div>
</template>

<script>
import data from '@/data2.json'

export default {
  data () {
    return {
      categories: data.categories
    }
  }
}
</script>

<style scoped>

</style>
