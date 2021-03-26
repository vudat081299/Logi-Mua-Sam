<template>
  <v-app v-resize="onResize">

    <v-navigation-drawer
      fixed
      floating
      open
      left
      app
      :v-model="false"
      v-show="showNavBar"
      disable-resize-watcher
      overlay-opacity="0.2"
      temporary
    >
      <!-- v-model="drawer" -->
      <!-- :permanent="$vuetify.breakpoint.lgAndUp"
      :temporary="$vuetify.breakpoint.mdAndDown" -->
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
      v-show="false"
      height="64px"
      style="background-color: white; z-index: 5; margin-top: 0px; transform: translateY(0px); right: 0px; border-bottom: 0.5px solid #e6e6e6"
    >
    <!-- v-show="showNavBar" -->
    <!-- style="height: 64px; margin-top: 0px; transform: translateY(0px); right: 1px; border-bottom: 0.5px solid #e6e6e6" -->
    <!-- border-bottom: 0.5px solid #000000; -->
    <!-- <div class="v-app-ad d-inline-flex flex-child-1 grow-shrink-0 my-2 v-vuetify-ad v-sheet v-sheet--outlined theme--light rounded">
      <a class="rounded px-2 v-list-item v-list-item--link theme--light text-decoration-none">sadasdasdsa</a>
    </div> -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- class="hidden-lg-and-up" -->
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
    <div class="ma-0" style="height: 80px; width: 100%;" v-show="showNavBar">
      <v-row class="ma-0 pa-0 align-center" style="height: 80px">
        <v-col cols="4" class="">
          <v-row class="mx-0 ml-4">
            <BrandIdentity :position="''" :size="'45'"/>
          </v-row>
        </v-col>
        <!-- <v-text-field
          v-model="search"
          clearable
          flat
          hide-details
          outlined
          dense
          append-icon="mdi-magnify"
          placeholder="Tìm kiếm sản phẩm"
          @click:append="toggleMarker"
          width="400px"
        ></v-text-field> -->
        <v-col>
          <!-- <v-autocomplete
            v-model="friends"
            :disabled="isUpdating"
            :items="people"
            append-icon=""
            outlined
            chips
            dense
            color="blue-grey lighten-2"
            item-text="name"
            item-value="name"
          >
            <template v-slot:selection="data">
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click="data.select"
                @click:close="remove(data.item)"
              >
                <v-avatar left>
                  <v-img :src="data.item.avatar"></v-img>
                </v-avatar>
                {{ data.item.name }}
              </v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-item-content v-text="data.item"></v-list-item-content>
              </template>
              <template v-else>
                <v-list-item-avatar>
                  <img :src="data.item.avatar">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </template>
          </v-autocomplete> -->
        </v-col>
        <v-col class="align-center" cols="2" offset="2">
          <!-- <span @click="logout">Đăng xuất</span> -->

          <!-- <div class="text-center"> -->
            <MenuAccount/>
          <!-- </div> -->
        </v-col>
      </v-row>
      <v-row>
      </v-row>
    </div>

    <AppToolbar></AppToolbar>
    <v-main :style="style" :class="checkStateFrame">
      <!-- style="right: 0px; left: 256px" -->
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0 fill-height">
        <!-- If using vue-router -->
        <router-view></router-view>
        <!-- <RightNavigationDrawApp
          v-show="false"
          class="hidden-md-and-down"/> -->
          <!-- showNavBar -->
      </v-container>
    </v-main>

    <!-- <v-footer style="right: 1px;" app>

    </v-footer> -->

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
  width: 1200px;
  max-width: 1200px;
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
  width:1200px;
  height: 72px;
}
.main-toolbar {
  position: absolute;
  width: 1200px;
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
</style>
