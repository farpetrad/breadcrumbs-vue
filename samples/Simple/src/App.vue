<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-for="(route, index) in $route.matched" :key="index" class="container backgroundColor">
          <breadcrumb :route="route"></breadcrumb>
      </div>
    <router-view/>
  </div>
</template>

<script>
import Breadcrumb from './plugins/component/Breadcrumb.vue'

export default {
  name: 'App',
  components: { Breadcrumb }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
