<template>
  <header
    class="Header-old header-logged-out js-details-container Details position-relative f4 py-2"
    role="banner"
  >
    <div class="container-xl d-lg-flex flex-items-center p-responsive" style="max-width: 1500px">
      <div class="d-flex flex-justify-between flex-items-center">
        <a class="" href="/" aria-label="Homepage">
          <v-icon class="mx-4" dark x-large>mdi-dev-to</v-icon>
        </a>
        <a href="/" class="HeaderMenu-link flex-shrink-0 no-underline mr-3">
          Logi <span class="font-weight-light">Mua Sam</span>
        </a>
        <a
          href="/#items"
          class="ml-4 HeaderMenu-link flex-shrink-0 no-underline mr-3"
          v-bind="attrs"
          v-on="on"
        >
          <span class="font-weight-light">Mặt hàng</span>
        </a>
      </div>
      <v-spacer />

      <a
        href="/cart"
        class="mr-9 HeaderMenu-link flex-shrink-0 d-inline-block no-underline color-border-tertiary rounded-2 px-2 py-1 js-signup-redesign-target js-signup-redesign-control"
        data-hydro-click='{"event_type":"analytics.click","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/about;ref_cta:Sign up;ref_loc:header logged out","originating_url":"https://github.com/about","user_id":null}}'
        data-hydro-click-hmac="ccd99aea4b7ecb44734b581afed8808b69de7ea682e56eacb5d80a453d1dae48"
      >
        <IconCart :cartNumber="this.$store.state.numberCart" />
      </a>
      <div v-if="loginState">
         <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-avatar>
                  <v-icon light color="red">mdi-account</v-icon>
                </v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group v-model="model">
                <v-list-item
                  v-for="item in accounts"
                  :key="item.text"
                >
                  <v-icon style="margin-right: 10px"> {{ item.icon }}</v-icon>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        Xin chào, {{ username }}
      </div>
      <div v-else>
      <a href="/login" class="HeaderMenu-link flex-shrink-0 no-underline mr-3">
        Sign in
      </a>
      <a
        href="/signup"
        class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1 js-signup-redesign-target js-signup-redesign-control"
      >
        Sign up
      </a>
      </div>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import IconCart from "@/views/CartManagement/IconCart";

export default {
  name: "AppToolbar",
  components: {
    IconCart,
  },
  computed: {
    accounts() {
      return [
        {
          icon: "mdi-account",
          text: "Thông tin",
          route: "",
        },
        {
          icon: "mdi-lock",
          text: "Đổi mật khẩu",
          route: "",
        },
        {
          icon: "mdi-logout",
          text: "Đăng xuất",
          route: "",
        },
      ];
    },
  },
  watch: {
    model: {
      handler: function() {
        console.log(this.model)
        if(this.model === 2) {
          this.$cookies.remove("token");
          this.loginState = false
          this.$store.state.numberCart = 0
      //console.loge.clear();
      this.$router.push("/login");
        }
      }
    }
  },
  created() {
    this.getListCart();
    this.checkLogin();
  },
  mounted() {
    this.checkLogin();
  },
  data() {
    return {
      model: -1,
      loginState: false,
      username: localStorage.getItem("username"),
      listCart: [],
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  methods: {
    checkLogin() {
      if (this.$cookies.get("token")) {
        this.loginState = true;
      }
    },
    getListCart() {
      if (this.$cookies.get("token")) {
        axios
          .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart")
          .then((response) => {
            console.log(response);
            this.$store.state.numberCart = response.data.length;
            //  this.listCart = response.data;
          });
        console.log(this.listCart);
      } else {
        this.$store.state.numberCart = 0;
      }
    },
  },
};
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
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
