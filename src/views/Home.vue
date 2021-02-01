<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <v-container
      v-for="type in types"
      :key="type"
      class="grey lighten-4"
      fluid
    >
      <v-subheader>{{ type }}</v-subheader>

      <v-row>
        <v-spacer></v-spacer>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
          xs="12"
          sm="6"
          md="3"
          class="pa-1"
        >
          <v-card max-width="200px">
            <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="150px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
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
