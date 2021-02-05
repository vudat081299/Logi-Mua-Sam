<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Items/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Items from '@/components/Items.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Items
  },
  data () {
    return {
      types: ['Tìm thấy 6 sản phẩm', 'Sản phẩm có liên quan'],
      cards: ['Good', 'Best', 'Finest', 'Finest', 'Finest', 'Finest'],
      socials: [
        {
          icon: 'mdi-account-multiple-outline',
          color: 'indigo'
        },
        {
          icon: 'mdi-account-multiple-outline',
          color: 'cyan darken-1'
        },
        {
          icon: 'mdi-account-multiple-outline',
          color: 'red lighten-3'
        }
      ]
    }
  },
  methods: {
    getImage () {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
