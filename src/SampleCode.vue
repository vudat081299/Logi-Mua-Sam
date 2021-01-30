<template>
  <v-app>

    <NavigationDrawApp/>

    <v-app-bar
      underline
      v-sheet
      theme--light
      flat
      clipped
      fixed
      white
      class="elevation-0"
      app
      clipped-right
      style="height: 64px; margin-top: 0px; transform: translateY(0px); left: 300px; right: 0px;"
    >
    </v-app-bar>
    <!-- Sizes your content based upon application components -->

    <v-main style="right: 0px; left: 300px">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
      <RightNavigationDrawApp/>
    </v-main>

    <v-footer app>
      <!-- -->
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
import NavigationDrawApp from '@/components/NavigationDrawApp.vue'
import RightNavigationDrawApp from '@/components/RightNavigationDrawApp.vue'

export default {
  name: 'App',
  components: {
    NavigationDrawApp,
    RightNavigationDrawApp
  },

  data () {
    return {
    }
  }
}
</script>

<template>
  <v-app>

    <v-navigation-drawer
      fixed
      floating
      open
      left
      app
      v-model="drawer"
      absolute
      :permanent="$vuetify.breakpoint.mdAndUp"
    >
      <!-- style="height: 100vh; top: 0px; transform: translateX(0%); width: 256px; max-height: calc(100% - 0px);" -->
      <v-toolbar style="height: 64px; border-bottom: 0.5px solid #e6e6e6;" fixed app flat>
        <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">LOGI </span>
          <span>MUA SAM</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <!-- <v-list-item style="height: 64px; border-bottom: 0.5px solid #e6e6e6;" fixed app flat>
            <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png">
            <v-toolbar-title class="text-uppercase grey--text">
              <span class="font-weight-light">Logi</span>
              <span>Tech</span>
            </v-toolbar-title>
          </v-list-item> -->

          <v-list-item>
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
// import NavigationDrawApp from '@/components/NavigationDrawApp.vue'
import RightNavigationDrawApp from '@/components/RightNavigationDrawApp.vue'

export default {
  name: 'App',
  components: {
    // NavigationDrawApp,
    RightNavigationDrawApp
  },

  data () {
    return {
      drawer: false
    }
  },
  computed: {
    changeFrame () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'top: 64px;'
        case 'sm': return 'top: 64px;'
        case 'md': return 'top: 0px;'
        case 'lg': return 'top: 0px;'
        default: return 'top: 0px;=' // xl
      }
    }
  },
  watch: {
    changeFrame () {
      this.drawer = false
    }
  }
}
</script>


      :temporary="$vuetify.breakpoint.mdAndUp"