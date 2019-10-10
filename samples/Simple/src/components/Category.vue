<template>
    <div>
      <br/>
      <p>Id: {{this.categoryId}}<br/>Name: {{this.cname}}</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'category',
  props: {
    categoryId: Number,
    cname: String
  },
  computed: {
    ...mapGetters([
      'activeCategoryId',
      'activeCategoryName'
    ])
  },
  methods: {
    ...mapMutations(['setActiveCategory'])
  },
  mounted () {
    if (this.activeCategoryId === -1) {
      // Since we rely on the store to have a category for our breadcrumbs to work ensure it is set
      // this occurs if the user hits refresh for example
      this.setActiveCategory({categoryId: this.categoryId, cname: this.cname})
    }
  }
}
</script>
