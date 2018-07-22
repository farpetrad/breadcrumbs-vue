import Vue from 'vue'
import Router from 'vue-router'
import Books from '../components/Books.vue'
import Category from '../components/Category.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books,
      props: false,
      meta: {
        bcLinkText: 'Books'
      }

    },
    {
      path: '/Category/:categoryId/:cname',
      name: 'categoryview',
      component: Category,
      props: true,
      meta: {
        bcLinkText: 'Category'
      }
    }
  ]
})
