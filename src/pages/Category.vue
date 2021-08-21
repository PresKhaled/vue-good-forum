<template>
  <div class="ui grid center aligned">
    <div class="five wide column">
    <h1 class="ui header left aligned">{{ categoryDetails.name }}</h1>
      <div class="row">
        <div class="ui stacked segments">
          <div
            v-for="subject in subjects"
            :key="subject.id"
            class="ui segment left aligned"
          >
            <p><router-link :to="{ name: 'SubjectShow', params: { subject: subject.seo }}">{{ subject.name }}</router-link></p>
            <p>{{ subject.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: { type: String, required: true }
  },
  data () {
    return {}
  },
  computed: {
    categoryDetails () {
      return this.$store.state.categories
        .find((category) => category.seo === this.category)
    },
    subjects () {
      return this.$store.state.subjects
        .filter((subject) => subject.categoryId === this.categoryDetails.id)
    }
  }
}
</script>

<style scoped>

</style>
