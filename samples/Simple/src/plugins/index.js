
import Breadcrumb from './component/Breadcrumb.vue'
import BreadcrumbTrail from './component/BreadcrumbTrail.vue'

export default {
  Breadcrumb,
  install (Vue, options) {
    const {
      moduleName = 'breadcrumb',
      router,
      store
    } = options || {}

    if (!router && !store) {
      throw Error('router and store must be passed in')
    }

    // Enhance store
    store && store.registerModule(moduleName, {

    })

    Vue.component(Breadcrumb.name, Breadcrumb)
    Vue.component(BreadcrumbTrail.name, BreadcrumbTrail)
  }
}
