<template>
    <div>Test
        <p>Id: {{this.categoryId}}<br/>Name: {{this.cname}}</p>
    </div>
</template>

<script>
export default {
  name: 'category',
  props: {
    categoryId: Number,
    cname: String
  },
  mounted () {
  }
}
</script>
