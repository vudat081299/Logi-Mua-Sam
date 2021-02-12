<template>
  <v-app v-resize="onResize">

    <v-navigation-drawer
      fixed
      floating
      open
      left
      app
      v-model="drawer"
      v-show="showNavBar"
      disable-resize-watcher
      :permanent="$vuetify.breakpoint.lgAndUp"
      :temporary="$vuetify.breakpoint.mdAndDown"
      overlay-opacity="0.2"
    >
      <!-- :temporary="$vuetify.breakpoint.smAndDown" -->
      <!-- style="height: 100vh; top: 0px; transform: translateX(0%); width: 256px; max-height: calc(100% - 0px);" -->

      <v-toolbar style="height: 64px; border-bottom: 0.5px solid #e6e6e6;" fixed flat>
        <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">LOGI </span>
          <span>MUA SAM</span>
        </v-toolbar-title>
      </v-toolbar>
      <!-- <v-list-item class="sticky" style="height: 64px; border-bottom: 0.5px solid #e6e6e6">
        <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png">
        <v-toolbar-title class="text-uppercase blue--text text--darken-1">
          <span class="font-weight-light">LOGI </span>
          <span>MUA SAM</span>
        </v-toolbar-title>
      </v-list-item> -->

      <v-list nav dense flat>

        <v-list-item class="my-n2">
          <!-- <v-list-item-icon>
            <v-icon>mdi-account-multiple-outline</v-icon>
          </v-list-item-icon> -->
          <v-list-item-title class="grey--text subtitle-1">Main</v-list-item-title>
        </v-list-item>
        <v-list-item-group>
          <!-- <v-list-item style="height: 64px; border-bottom: 0.5px solid #e6e6e6;" fixed app flat>
            <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png">
            <v-toolbar-title class="text-uppercase grey--text">
              <span class="font-weight-light">Logi</span>
              <span>Tech</span>
            </v-toolbar-title>
          </v-list-item> -->
          <v-list-item
            v-for="([title], i) in admins"
            :key="i"
            class="my-n2"
            active-class="blue--text darken-3 text--darken-3"
            link
          >
          <!-- <v-list-item
            v-for="([title, icon, status], i) in admins"
            :key="i"
            active-class="orange--text darken-3 text--darken-3"
            link
          > -->

            <!-- <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon> -->
            <v-list-item-title
              class="font-weight-light body-2 ml-4" v-text="title"
            >
            </v-list-item-title>
            <!-- <v-icon>mdi-menu-right</v-icon> -->
          </v-list-item>
        </v-list-item-group>

        <!-- <v-list-group
          :value="true"
          active-class="blue--text darken-2 text--darken-2"
          no-action
          class="mt-1 font-weight-regular prepend"
          link
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-n4">Users</v-list-item-title>
          </template>
          <v-list-item-group>
            <v-list-item
              active-class="blue--text darken-2 text--darken-2"
              v-for="([title, icon], i) in admins"
              :key="i"
              class="font-weight-regular"
              link
            >
              <v-list-item-title class="ml-14" v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list-group> -->

          <!-- <v-list-group
            :value="true"
            no-action
            sub-group
            active-class="primary--text text--accent-4"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              link
              active-class="primary--text text--accent-4"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
            active-class="primary--text text--accent-4"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item-group>
              <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                link
                active-class="primary--text text--accent-4"
              >
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list-group> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      theme--light
      flat
      clipped
      fixed
      app
      v-show="showNavBar"
      height="64px"
      style="background-color: white; z-index: 5; margin-top: 0px; transform: translateY(0px); right: 0px; border-bottom: 0.5px solid #e6e6e6"
    >
    <!-- style="height: 64px; margin-top: 0px; transform: translateY(0px); right: 1px; border-bottom: 0.5px solid #e6e6e6" -->
    <!-- border-bottom: 0.5px solid #000000; -->
    <!-- <div class="v-app-ad d-inline-flex flex-child-1 grow-shrink-0 my-2 v-vuetify-ad v-sheet v-sheet--outlined theme--light rounded">
      <a class="rounded px-2 v-list-item v-list-item--link theme--light text-decoration-none">sadasdasdsa</a>
    </div> -->
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2"
        outlined
        x-small
        color="indigo"
        @click="logout"
      >
        Đăng xuất
      </v-btn>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->

    <v-main :class="checkStateFrame">
      <!-- style="right: 0px; left: 256px" -->
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="fill-height">

        <!-- If using vue-router -->
        <router-view></router-view>
        <RightNavigationDrawApp
          v-show="showNavBar"
          class="hidden-md-and-down"/>
      </v-container>
    </v-main>

    <v-footer style="right: 1px;" app>

    </v-footer>

    <!-- <v-bottom-navigation></v-bottom-navigation> -->

    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main> -->
  </v-app>
</template>

<script>
// @ is an alias to /src
import RightNavigationDrawApp from '@/components/RightNavigationDrawApp.vue'

export default {
  name: 'App',
  components: {
    RightNavigationDrawApp
  },
  mounted () {
    this.onResize()
    this.checkDidLogin()
  },
  created () {
    this.onResize()
    this.checkDidLogin()
  },
  data () {
    return {
      drawer: false,
      showNavBar: false,
      windowSize: {
        x: 0,
        y: 0
      },
      window_width_change: 0,
      admins: [
        ['Management', 'mdi-account-multiple-outline', true],
        ['Settings', 'mdi-cog-outline', false]
      ],
      cruds: [
        ['Create', 'mdi-plus-outline', false],
        ['Read', 'mdi-file-outline', false],
        ['Update', 'mdi-update', false],
        ['Delete', 'mdi-delete', false]
      ],
      items: [
        {
          action: 'mdi-plus-outline',
          title: 'Attractions',
          active: false,
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'mdi-plus-outline',
          title: 'Dining',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        }
      ]
    }
  },
  computed: {
    changeBreakpoint () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '1'
        case 'sm': return '2'
        case 'md':
          return '3'
        case 'lg':
          return '4'
        default:
          return '5' // xl
      }
    },
    checkStateFrame () { // Frame making
      let style = ''
      if (this.$vuetify.breakpoint.mdAndDown) {
        style = 'px-0'
      } else {
        style = 'px-256'
      }
      if (this.showNavBar) {
        style += ' pt-64'
      } else {
        style += ' pt-0'
      }
      return style
    }
  },
  watch: {
    // changeBreakpoint () {
    //   this.drawer = false
    // },
    window_width_change () {
      this.drawer = false // hide nav
    },
    $route (to, from) {
      this.checkDidLogin()
    }
  },
  methods: {
    hide_nav () { // onclick
      this.drawer = false
    },
    onResize () {
      if (this.changeBreakpoint < 4) {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        this.window_width_change = window.innerWidth
      } else {
      }
    },
    checkDidLogin () {
      if (localStorage.getItem('didLogin') === '0') {
        this.showNavBar = false
      } else {
        this.showNavBar = true
      }
    },
    logout () {
      localStorage.setItem('didLogin', '0')
      this.$router.push('/login').catch(() => {})
    }
    // lick_item_nav (i) {
    //   console.log('----' + i)
    //   this.admins.forEach(function (value, index) {
    //     value[2] = false
    //   })
    //   this.admins[i] = true
    // }
  }
}
</script>

<style scoped>
/* .v-list__group__header__prepend-icon .v-icon {
    color: red;
} */
.v-icon {
  font-size: 20px;
  color: #b6b6b6;
}
.sticky {
   position: sticky;
   top: 0;
}
</style>
