import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'

const vueApp = createApp(App)

vueApp.use(router)

const requireComponent = require.context('@/components', true, /App[A-Z]\w+\.(vue|js)$/)

// Auto add all the base components, prefixed with App.
requireComponent.keys().forEach((fileName) => {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  vueApp.component(baseComponentName, baseComponentConfig)
})

vueApp.mount('#app')
