<template>
  <v-menu offset-y open-on-hover>
    <template v-slot:activator="{ on, attrs }">
      <v-row class="justify-end align-center">
        <v-btn
          small
          height="44px"
          class="mr-2"
          text
          dark
          outlined
          v-bind="attrs"
          v-on="on"
        >
          <p
            class="mb-0 grey--text text--darken-3 pr-2"
            style="text-align: right"
          >
            Tài khoản
          </p>
          <v-avatar size="36px">
            <img
              v-if="message.avatar"
              alt="Avatar"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            />
            <v-icon
              v-else
              :color="message.color"
              v-text="message.icon"
            ></v-icon>
          </v-avatar>
        </v-btn>
      </v-row>
    </template>
    <v-card class="menu-card">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Dat vu - id: 081299
              <!-- <v-btn class="mt-n0" icon x-small depressed>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn> -->
            </v-list-item-title>
            <v-list-item-subtitle>Gmail: vudat81299@gmail.com</v-list-item-subtitle>
            <v-list-item-subtitle>Liên hệ: 0899 081299</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn outlined
              :class="fav ? '' : ''" icon
            >
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- <v-list>
        <v-list-item>
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Title 1</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Title 2</v-list-item-title>
        </v-list-item>
      </v-list> -->

      <v-card-actions>
        <v-spacer></v-spacer>

        <!-- <v-btn icon @click="menu = false"> <v-icon>mdi-cog</v-icon> </v-btn> -->
        <v-btn color="primary" text @click="logout()">Đăng xuất</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'MenuAccount',
  components: {
    // HelloWorld
  },
  data () {
    return {
      message: {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify!',
        excerpt: 'Thank you for joining our community...'
      }
    }
  },
  methods: {
    logout () {
      localStorage.setItem('didLogin', '0')
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>
<style scoped>
.v-btn {
  text-transform: none;
}
.menu-card {
  width: 400px;
}
</style>
