<template>
  <!-- Very bad component -->
  <div class="theme-mode">
    <button class="btn" @click="switchTheme(dark)">
      <i class="bi" :class="{ 'bi-lightbulb-off text-white': dark, 'bi-lightbulb': !dark }"></i>
      <span :class="{ 'text-white': dark }">{{ dark ? 'Dark' : 'Light' }}</span>
    </button>
  </div>
</template>
<script>
// Very bad component
export default {
  name: 'AppThemeSwitcher',
  data () {
    return {
      dark: { type: Boolean, default: false }
    }
  },
  methods: {
    switchTheme (dark) {
      this.dark = !dark
      this.$emit('switchThemeEvent', this.dark)
    }
  }
}
</script>
<style scoped>

</style>
