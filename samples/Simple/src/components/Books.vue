<template>
    <div class="container row">
        <h3 class="col-12 text-center">Book Categories</h3>
        <div class="col-12">
            <ul class="text-left">
                <li v-for="(item,index) in this.categories" :key=index>
                    <router-link
                    :to="{ name: 'categoryview', params: { categoryId: item.cid, cname: item.name } }"
                    v-on:click.native="doCategoryNav(item.cid,item.name)">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'books',
  data () {
    return {
      categories: [
        {cid: 1, name: 'Science Fiction'},
        {cid: 2, name: 'Satire'},
        {cid: 3, name: 'Drama'},
        {cid: 4, name: 'Action and Adventure'},
        {cid: 5, name: 'Romance'},
        {cid: 6, name: 'Mystery'},
        {cid: 7, name: 'Horror'},
        {cid: 8, name: 'Self Help'},
        {cid: 9, name: 'Health'},
        {cid: 10, name: 'Travel'}
      ]
    }
  },
  methods: {
    ...mapMutations(['setActiveCategory']),
    doCategoryNav (cid, name) {
      this.setActiveCategory({categoryId: cid, cname: name})
    }
  }
}

</script>
