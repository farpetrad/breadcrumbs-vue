<template>
    <nav  class="navbar navbar-dark bg-dark">
        <template v-for="(route, index) in $route.matched" >
            <breadcrumb :route="route" :key="index"></breadcrumb>
        </template>
      </nav>
</template>

<script>
export default {
  name: 'breadcrumb-trail'
}
</script>
