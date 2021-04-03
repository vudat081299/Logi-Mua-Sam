<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card>
        <v-card-title v-if="!loading">
          <h1
            id="user-content-items"
            href="#items"
            class="mb-6 font-mktg h2-5-mktg-fluid h1-sm-mktg-fluid h0-lg-mktg-fluid mb-3"
            style="padding-left: 20px"
          >
            Các mặt hàng
          </h1>
          <v-spacer></v-spacer>
          <!-- <a
            href="/cart"
            class="mr-9 HeaderMenu-link flex-shrink-0 d-inline-block no-underline color-border-tertiary rounded-2 px-2 py-1 js-signup-redesign-target js-signup-redesign-control"
            data-hydro-click='{"event_type":"analytics.click","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/about;ref_cta:Sign up;ref_loc:header logged out","originating_url":"https://github.com/about","user_id":null}}'
            data-hydro-click-hmac="ccd99aea4b7ecb44734b581afed8808b69de7ea682e56eacb5d80a453d1dae48"
          >
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <v-badge
                :color="setColorBadge()"
                overlap
                :content="this.cartNumber"
                :value="this.cartNumber"
              >
                <v-icon dark color="black">mdi-cart</v-icon>
              </v-badge>
              <span style="margin-left: 12px; color: black"> Giỏ hàng</span>
            </div>
          </a> -->
          <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Tìm kiếm"
          style="margin-right: 40px"
        ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center" align="center">
              <v-card
                class="justify-center d-flex flex-wrap"
                color="#ffffff"
                flat
                tile
                :loading="loading"
              >
                <LoadingCircleOverlay :dialog="loading" />
                <div v-for="product in productList" :key="product.id">
                  <Items :item="product"></Items>
                </div>
              </v-card>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Items from "@/components/Items";
import LoadingCircleOverlay from "@/components/LoadingCircleOverlay";
export default {
  components: {
    Items,
    LoadingCircleOverlay,
  },
  mounted() {
    this.getListProduct();
    this.getListCart();
  },
  data() {
    return {
      productList: [],
      loading: false,
      cartNumber: 0,
    };
  },
  methods: {
    getListProduct() {
      this.loading = true;
      axios
        .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/list")
        .then((response) => {
          this.productList = response.data;
          this.loading = false;
        });
    },
    getListCart() {
      axios
        .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart")
        .then((response) => {
          console.log(response);
          this.cartNumber = response.data.length;
        });
    },
    setColorBadge() {
      if (this.cartNumber === 0) {
        return "";
      } else {
        return "green";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>