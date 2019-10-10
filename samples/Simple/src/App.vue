<template>
  <div id="app">
    <div class="container">
      <span>breadcrumbs-vue</span>
      <br/>
      <img src="./assets/logo.png"><br/>
      <nav  class="navbar navbar-dark bg-dark">
        <template v-for="(route, index) in $route.matched" >
            <breadcrumb :route="route" :key="index"></breadcrumb>
        </template>
      </nav>
      <br/>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
