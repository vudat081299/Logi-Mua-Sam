<template>
  <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
    <div class="container-xl d-lg-flex flex-items-center p-responsive">
      <div class="d-flex flex-justify-between flex-items-center">
        <a class="" href="/" aria-label="Homepage">
          <v-icon class="mx-4" dark x-large>mdi-dev-to</v-icon>
        </a>
        <a
          href="/"
          class="HeaderMenu-link flex-shrink-0 no-underline mr-3"
        >
          Logi <span class="font-weight-light">Mua Sam</span>
        </a>
        <a
          href="#items"
          class="ml-4 HeaderMenu-link flex-shrink-0 no-underline mr-3"
          v-bind="attrs"
          v-on="on"
        >
          <span class="font-weight-light">Mặt hàng</span>
        </a>
      </div>
      <v-spacer/>

      <a
        href="/cart"
        class="mr-9 HeaderMenu-link flex-shrink-0 d-inline-block no-underline color-border-tertiary rounded-2 px-2 py-1 js-signup-redesign-target js-signup-redesign-control"
        data-hydro-click='{"event_type":"analytics.click","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/about;ref_cta:Sign up;ref_loc:header logged out","originating_url":"https://github.com/about","user_id":null}}'
        data-hydro-click-hmac="ccd99aea4b7ecb44734b581afed8808b69de7ea682e56eacb5d80a453d1dae48"
      >
        <v-icon dark>mdi-cart</v-icon>
        Giỏ hàng
      </a>
      <a href="/login"
        class="HeaderMenu-link flex-shrink-0 no-underline mr-3"
      >
        Sign in
      </a>
      <a href="/signup"
        class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1 js-signup-redesign-target js-signup-redesign-control"
      >
        Sign up
      </a>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AppToolbar',
  components: {},
  data () {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
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
  width: 1000px;
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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px !important;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
