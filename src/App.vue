<template>
  <v-app v-resize="onResize">

    <v-navigation-drawer
      fixed
      floating
      open
      left
      app
      v-model="drawer"
      absolute
      disable-resize-watcher
      :permanent="$vuetify.breakpoint.mdAndUp"
      :temporary="$vuetify.breakpoint.smAndDown"
      overlay-opacity="0.2"
    >
      <!-- :temporary="$vuetify.breakpoint.smAndDown" -->
      <!-- style="height: 100vh; top: 0px; transform: translateX(0%); width: 256px; max-height: calc(100% - 0px);" -->
      <v-toolbar style="height: 64px; border-bottom: 0.5px solid #e6e6e6;" fixed app flat>
        <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">LOGI </span>
          <span>MUA SAM</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <!-- <v-list-item style="height: 64px; border-bottom: 0.5px solid #e6e6e6;" fixed app flat>
            <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png">
            <v-toolbar-title class="text-uppercase grey--text">
              <span class="font-weight-light">Logi</span>
              <span>Tech</span>
            </v-toolbar-title>
          </v-list-item> -->

          <v-list-item @click="hide_nav">
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      theme--light
      flat
      clipped
      fixed
      white
      app
      height="64px"
      style="z-index: 5; margin-top: 0px; transform: translateY(0px); right: 1px; border-bottom: 0.5px solid #e6e6e6"
    >
    <!-- style="height: 64px; margin-top: 0px; transform: translateY(0px); right: 1px; border-bottom: 0.5px solid #e6e6e6" -->
    <!-- border-bottom: 0.5px solid #000000; -->
    <!-- <div class="v-app-ad d-inline-flex flex-child-1 grow-shrink-0 my-2 v-vuetify-ad v-sheet v-sheet--outlined theme--light rounded">
      <a class="rounded px-2 v-list-item v-list-item--link theme--light text-decoration-none">sadasdasdsa</a>
    </div> -->
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->

    <v-main :class="$vuetify.breakpoint.smAndDown ? 'px-0' : 'px-256'">
      <!-- style="right: 0px; left: 256px" -->
      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
        <RightNavigationDrawApp class="hidden-sm-and-down"/>
      </v-container>
    </v-main>

    <v-footer style="right: 1px" app>

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
  },
  data () {
    return {
      drawer: false,
      windowSize: {
        x: 0,
        y: 0
      },
      window_width_change: 0
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
    }
  },
  watch: {
    // changeBreakpoint () {
    //   this.drawer = false
    // },
    window_width_change () {
      this.drawer = false // hide nav
    }
  },
  methods: {
    hide_nav () { // onclick
      this.drawer = false
    },
    onResize () {
      if (this.changeBreakpoint < 3) {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        this.window_width_change = window.innerWidth
      } else {
      }
    }
  }
}
</script>
