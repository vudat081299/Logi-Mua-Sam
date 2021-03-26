<template>
  <v-container class="main-content fill-height">
    <v-toolbar
      flat
      class="background-toolbar"
      style="height: 72px; background-color: #25292e"
    ></v-toolbar>
    <v-card flat style="height: 72px" class="rounded-0 toolbar-card">
      <v-toolbar
        fixed
        flat
        class="pt-1 main-toolbar"
        style="height: 72px; background-color: #25292e"
      >
        <!-- <img class="mr-4" width="48px" height="48px" alt="Vue logo" src="@/assets/logo.png"> -->
        <v-icon class="mx-4" dark x-large>mdi-dev-to</v-icon>
        <v-toolbar-title class="white--text">
          <span class="font-weight-light">Logi </span>
          <span>Mua Sam</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn dark text>Sign in</v-btn>
            <v-btn dark outlined>Sign up</v-btn> -->
        <div class="font-weight-medium custom-font d-flex flex-items-center">
          <a
            href="/login"
            class="HeaderMenu-link flex-shrink-0 no-underline mr-3"
            data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/about","user_id":null}}'
            data-hydro-click-hmac="5c74a448d0c5a3899bded30f9177b04a134915494f39328527e6830ff83efc11"
            data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in"
          >
            Sign in
          </a>
          <a
            href="/signup"
            class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded-2 px-2 py-1 js-signup-redesign-target js-signup-redesign-control"
            data-hydro-click='{"event_type":"analytics.click","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/about;ref_cta:Sign up;ref_loc:header logged out","originating_url":"https://github.com/about","user_id":null}}'
            data-hydro-click-hmac="ccd99aea4b7ecb44734b581afed8808b69de7ea682e56eacb5d80a453d1dae48"
          >
            Sign up
          </a>
        </div>
      </v-toolbar>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AppToolbar',
  components: {},
  data () {
    return {}
  },
  watch: {}
}
</script>

<style scoped>
.main-content {
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
  width: 1200px;
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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px !important;
}
</style>
