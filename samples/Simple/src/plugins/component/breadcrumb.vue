<template>
    <div class="row bcrumb">
        <ul v-for="link in routes" :key="link.path" class="navbar-nav">
            <li>
            <span>
                <router-link :to="{ name: link.name, params: routeParams(link)}" class="bc-link">{{link.meta.bcLinkText}} :</router-link>
            </span>
            <span v-if="linkText(link) !== ''" class="bc-txt">{{linkText(link)}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: ['route'],
  computed: {
    routes () {
      var currentIndex = this.$router.options.routes.findIndex(item => item.name === this.route.name)
      var routes = this.$router.options.routes.slice() // make a copy so we don't effect the routes in the router
      routes.length = currentIndex + 1
      return routes
    },
    linkText () {
      return (link) => this.computeLinkText(link) // wrap computeLinkText to make reactive
    },
    routeParams () {
      return (link) => {
        // attempt to go through the params if they exist and try to use the vuex getters defined to create the route params
        if (link.meta.bcLinkParams) {
          var params = { ...link.meta.bcLinkParams }
          // each property defined in the bcLinkParams meta data defines a vuex getter to call so update its value to the resulting data
          for (var key in params) {
            params[key] = this.$store.getters[params[key]]
          }
          return params
        } else {
          return {}
        }
      }
    }
  },
  methods: {
    sizeLink (link) {
      // Determine the length of the text were going to display
      var linkText = this.computeLinkText(link)
      var size = link.meta.bcLinkText.length + linkText.length
      return size
    },
    computeLinkText (link) {
      // try to call the vuex store getter defined in the route meta data or an empty string, avoid returning undefined so return a ''
      return link.meta.bcGetter ? (this.$store.getters[link.meta.bcGetter] === undefined ? '' : this.$store.getters[link.meta.bcGetter]) : ''
    }
  }
}
</script>

<style lang="scss" scoped>
    .bcrumb{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: -15px;
    margin-left: -15px;

    .bc-txt{
      color:white;
    }
}
</style>
