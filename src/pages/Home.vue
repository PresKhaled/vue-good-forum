<template>
  <div class="ui grid center aligned">
    <div class="five wide column">
      <h1 class="ui header left aligned">The good forum</h1>

      <div class="row">
        <h2 class="ui header left aligned">Stats</h2>
        <div class="ui horizontal segments">
          <div
            v-for="(value, key) in stats"
            :key="key"
            class="ui segment"
          >
            <p class="capitalize">{{ key }} <span class="ui label">{{ value }}</span></p>
          </div>
        </div>
      </div>

      <div class="row">
          <h2 class="ui header left aligned">Categories</h2>
          <div class="ui stacked segments">
            <div
              v-for="category in categories"
              :key="category.id"
              class="ui segment left aligned"
            >
              <p><router-link :to="{ name: 'Category', params: { category: category.seo } }">{{ category.name }}</router-link></p>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    stats () {
      return this.$store.state.stats
    }
  }
}
</script>

<style scoped>
  .capitalize {
    text-transform: capitalize;
  }
</style>
