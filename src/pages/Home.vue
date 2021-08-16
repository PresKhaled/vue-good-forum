<template>
  <div class="container align-left" :class="{ 'text-white bg-dark': dark }" >
    <h1>Home page</h1>
    <AppThemeSwitcher @switchThemeEvent="themeMode" />
    <div class="stats w-25">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" :class="{'text-white bg-dark': dark}">
          Stats
        </li>
        <li
          v-for="(value, key) in stats"
          :key="key"
          class="list-group-item d-flex justify-content-between align-items-center"
          :class="{'text-white bg-dark': dark}"
        >
          {{ key }}
          <span class="badge bg-info rounded-pill">{{ value }}</span>
        </li>
      </ul>
    </div>
    <br>
    <div class="categories">
      <div class="card" :class="{'text-white bg-dark': dark}" style="width: 18rem;">
        <div class="card-header">
          Categories
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="category in categories"
            :key="category.id"
            class="list-group-item"
            :class="{'text-white bg-dark': dark}"
          >{{ category.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data2.json'

export default {
  data () {
    return {
      categories: data.categories,
      stats: data.stats,
      dark: { type: Boolean, default: false }
    }
  },
  methods: {
    themeMode (switchThemeEventData) {
      this.dark = switchThemeEventData
    }
  }
}
</script>

<style scoped>
  div.container {
    font-family:'Segoe UI', Tahoma, sans-serif
  }
</style>
