<template>
  <v-app v-resize="onResize">

    <AppToolbar></AppToolbar>
    <v-main :style="{ backgroundImage: getBg() }">
      <!-- style="right: 0px; left: 256px" -->
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0 pb-9 fill-height">
        <!-- If using vue-router -->
        <router-view></router-view>
        <!-- <RightNavigationDrawApp
          v-show="false"
          class="hidden-md-and-down"/> -->
          <!-- showNavBar -->
      </v-container>
    </v-main>

    <v-footer class="">
      <div class="customFooter color-bg-secondary">
        <div style="width: 1000px;" class="container-xl p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
          <ul class="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
            <li class="mr-3">
              <a href="https://twitter.com/github" data-ga-click="Footer, go to Twitter, text:twitter" class="color-gray-4">
                <img src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg" height="18" class="d-block" loading="lazy" decoding="async" alt="Twitter icon">
                <span class="sr-only">GitHub on Twitter</span>
              </a>
            </li>
            <li class="mr-3">
              <a href="https://www.facebook.com/GitHub" data-ga-click="Footer, go to Facebook, text:facebook" class="color-gray-4">
                <img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" height="18" class="d-block" loading="lazy" decoding="async" alt="Facebook icon">
                <span class="sr-only">GitHub on Facebook</span>
              </a>
            </li>
            <li class="mr-3">
              <a href="https://www.youtube.com/github" data-ga-click="Footer, go to YouTube, text:youtube" class="color-gray-4">
                <img src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg" height="16" class="d-block" loading="lazy" decoding="async" alt="YouTube icon">
                <span class="sr-only">GitHub on YouTube</span>
              </a>
            </li>
            <li class="mr-3 flex-self-start">
              <a href="https://www.linkedin.com/company/github" data-ga-click="Footer, go to Linkedin, text:linkedin" class="color-gray-4">
                <img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" height="18" class="d-block" loading="lazy" decoding="async" alt="Linkedin icon">
                <span class="sr-only">GitHub on LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/github" data-ga-click="Footer, go to github's org, text:github" class="color-gray-4">
                <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" height="20" class="d-block" loading="lazy" decoding="async" alt="GitHub mark">
                <span class="sr-only">GitHub’s organization on GitHub</span>
              </a>
            </li>
          </ul>
          <ul class="list-style-none d-flex flex-wrap color-text-secondary">
            <li class="mr-3">&copy; 2021 GitHub, Inc.</li>
            <li class="mr-3"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-ga-click="Footer, go to terms, text:terms" class="Link--secondary">Terms</a></li>
            <li class="mr-3"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-ga-click="Footer, go to privacy, text:privacy" class="Link--secondary">Privacy</a></li>
            <li class="mr-3"><a href="/site-map" data-ga-click="Footer, go to site map, text:site map" class="Link--secondary">Site Map</a></li>
            <li><a href="/git-guides" data-ga-click="Footer, go to Git Guides, text:What is Git?" class="Link--secondary">What is Git?</a></li>
          </ul>
        </div>
      </div>
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
// import RightNavigationDrawApp from '@/components/RightNavigationDrawApp.vue'
import BrandIdentity from '@/components/BrandIdentity.vue'
import MenuAccount from '@/components/MenuAccount.vue'
import AppToolbar from '@/components/AppToolbar.vue'

export default {
  name: 'App',
  components: {
    // RightNavigationDrawApp
    BrandIdentity,
    MenuAccount,
    AppToolbar
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
    const srcs = {
      1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    }
    return {
      style: 'background-color:#f4f4f4; overflow: scroll;',
      autoUpdate: true,
      friends: ['Sandra Adams', 'Britta Holt'],
      isUpdating: false,
      name: 'Midnight Crew',
      people: [
        { header: 'Group 1' },
        { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
        { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
        { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
        { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
        { divider: true },
        { header: 'Group 2' },
        { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
        { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
        { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
        { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
      ],
      title: 'The summer breeze',

      drawer: false,
      showNavBar: false,
      logInStatus: false,

      search: '',
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
        style = 'px-0'
      }
      if (this.showNavBar) {
        style += ' pt-0'
        // style += ' pt-64'
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
      console.log(to)
      if (to.path === '/login' || to.path === '/signup') {
        this.style = 'background-color:#ffffff; overflow: scroll;'
      } else if (to.path === 'landingpage') {
        this.style = ''
      } else {
        this.style = 'background-color:#f4f4f4; overflow: scroll;'
      }
    }
  },
  methods: {
    getBg() {
      if (this.logInStatus) {
        return "";
      } else {
        return "url('" + require("@/assets/background.jpeg") + "')";
      }
    },
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
      console.log(localStorage.getItem('didLogin'))
      if (localStorage.getItem('didLogin') === '0') {
        this.showNavBar = false
        this.logInStatus = false
      } else {
        this.showNavBar = true
        this.logInStatus = true
      }
    },
    logout () {
      localStorage.setItem('didLogin', '0')
      this.$router.push('/login').catch(() => {})
    },
    toggleMarker () {

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

.main-content {
  width: 1000px;
  max-width: 1000px;
  height: 72px;
  padding: 0px;
  padding-top: 64px;
}

/* toolbar */
.background-toolbar {
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 72px;
}
.toolbar-card {
  position: absolute;
  top: 0px;
  width:1000px;
  height: 72px;
}
.main-toolbar {
  position: absolute;
  width: 1000px;
  height: 72px;
}

/*  */
.v-btn {
  text-transform: none;
}
.custom-font {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  font-size: 16px!important;
}

.customFooter {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
