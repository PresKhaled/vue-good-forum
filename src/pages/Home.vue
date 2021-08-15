<template>
  <div class="container align-left">
    <div class="light-mode">
      <button class="btn" @click="dark = !dark"><i class="bi" :class="{ 'bi-lightbulb-off': dark, 'bi-lightbulb': !dark }"></i></button>
    </div>
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
      // darkModeButtonIcon: { 'bi-lightbulb': this.dark, 'bi-lightbulb-off': !this.dark }
    }
  }
}
</script>

<style scoped>
  div.container {
    font-family:'Segoe UI', Tahoma, sans-serif
  }
</style>
