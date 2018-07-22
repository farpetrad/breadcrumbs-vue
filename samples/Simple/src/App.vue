<template>
  <div id="app">
    <span>breadcrumbs-vue</span>
    <br/>
    <img src="./assets/logo.png"><br/>
    
    <div v-for="(route, index) in $route.matched" :key="index" class="container backgroundColor">
          <breadcrumb :route="route"></breadcrumb>
    </div>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
