import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/pages/Start'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Categories from '@/pages/Categories'
import Category from '@/pages/Category'
import CategorySubjectShow from '@/pages/CategorySubjectShow'
import PublicationNew from '@/pages/PublicationNew'
import PublicationShow from '@/pages/PublicationShow'
import PublicationEdit from '@/pages/PublicationEdit'
import NotFound from '@/pages/NotFound'
import data from '@/data2.json'

const routes = [
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile/editInfo',
    name: 'ProfileEditInfo',
    component: Profile,
    props: { editInfo: true }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/:category',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/categories/:category/:subject',
    name: 'SubjectShow',
    component: CategorySubjectShow,
    props: true
  },
  {
    path: '/categories/:category/:subject/new',
    name: 'PublicationNew',
    component: PublicationNew,
    props: true,
    // to, from, next
    beforeEnter (to, _, next) {
      const subjectData = data.subjects.find(
        subject => subject.seo === to.params.subject
      )
      const categoryExists = data.categories.find(
        category => category.id === subjectData.categoryId
      )

      // Category exists.
      if (categoryExists) return next()

      // Category doesn't exist, redirect to NotFound page without changing the url in the browser to allow to the user to edit the typo in the url.
      return next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.query,
        hash: to.hash
      })
    }
  },
  {
    path: '/categories/:category/:subject/:publicationId',
    name: 'PublicationShow',
    component: PublicationShow,
    props: true,
    // to, from, next
    beforeEnter (to, _, next) {
      const publicationExists = data.publications.find(
        publication => publication.id === to.params.publicationId
      )

      // Publication exists.
      if (publicationExists) return next()

      // Publication doesn't exist, redirect to NotFound page without changing the url in the browser to allow to the user to edit the typo in the url.
      return next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.query,
        hash: to.hash
      })
    }
  },
  {
    path: '/categories/:category/:subject/:publicationId/edit',
    name: 'PublicationEdit',
    component: PublicationEdit,
    props: true,
    // to, from, next
    beforeEnter (to, _, next) {
      const publicationExists = data.publications.find(
        publication => publication.id === to.params.publicationId
      )

      // Publication exists.
      if (publicationExists) return next()

      // Publication doesn't exist, redirect to NotFound page without changing the url in the browser to allow to the user to edit the typo in the url.
      return next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.query,
        hash: to.hash
      })
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
