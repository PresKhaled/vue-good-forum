import { createApp } from 'vue'
import PageHome from '@/components/pages/PageHome'
import PageCategories from '@/components/pages/PageCategories'
import PageCategory from '@/components/pages/PageCategory'
import PageCategorySubjects from '@/components/pages/PageCategorySubjects'
import PageCategorySubjectShow from '@/components/pages/PageCategorySubjectShow'
import PagePublicationShow from '@/components/pages/PagePublicationShow'
import App from './App'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/categories',
    name: 'Categories',
    component: PageCategories
  },
  {
    path: '/categories/:category',
    name: 'Category',
    component: PageCategory,
    props: true
  },
  {
    path: '/categories/:category/subjects',
    name: 'CategorySubjects',
    component: PageCategorySubjects,
    props: true
  },
  {
    path: '/categories/:category/:subject',
    name: 'SubjectShow',
    component: PageCategorySubjectShow,
    props: true
  },
  {
    path: '/categories/:category/:subject/:publicationId',
    name: 'PublicationShow',
    component: PagePublicationShow,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')
