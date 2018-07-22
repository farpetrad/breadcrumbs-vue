import Vue from 'vue'

import Breadcrumb from './component/Breadcrumb.vue'

export default {
  Breadcrumb,
  install (Vue, options) {
    const {
      moduleName = 'breadcrumbs-vue',
      router,
      store
    } = options || {}

    if (!router && !store) {
      throw Error('router and store must be passed in')
    }

    // Enhance store
    store && store.registerModule(moduleName, {

    })

    Vue.component(moduleName, Breadcrumb)
  }
}
