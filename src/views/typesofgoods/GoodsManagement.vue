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
          <v-col sm="5">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Tìm kiếm"
            style="margin-right: 40px"
            filled
            rounded
            height="60px"
            dense
          ></v-text-field>
          </v-col>
        </v-card-title>
        <v-card-text>
              <v-card
                class="d-flex justify-center flex-wrap"
                color="#ffffff"
                flat
                tile
                :loading="loading"
              >
              
            <!-- <v-row justify="center" align="center"> -->
                <LoadingCircleOverlay :dialog="loading" />
                <!-- <v-card-title class="justify-start justify-space-around"> -->
                  
                <div v-for="(product, index) in productList" :key="product.id">
                  <Items :item="product" v-if="showPage(index)"></Items>
                </div>
                
                <!-- </v-card-title> -->
                
            <!-- </v-row> -->
              </v-card>
          <v-pagination
            v-model="page"
            :length="Math.ceil(productList.length / numberOfPage)"
          ></v-pagination>
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
  watch: {
    page: {
      handler: function () {
        console.log(this.page);
      },
    },
  },
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
      page: 1,
      numberOfPage: 20,
      search: "",
      productList: [],
      loading: false,
      cartNumber: 0,
    };
  },
  methods: {
    showPage(index) {
      if (
        index >= this.page * this.numberOfPage - this.numberOfPage &&
        index <= this.page * this.numberOfPage - 1
      ) {
        return true;
      }
      return false;
    },
    // getListProduct() {
    //   this.loading = true;
    //   axios
    //     .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/list")
    //     .then((response) => {
    //       this.productList = response.data;
    //       this.loading = false;
    //     });
    // },

    async getListProduct() {
      const response = await this.$http.get("public/products/list");
      console.log(response)
     this.productList = response.data.data;
    //       this.loading = false;
      this.loading = false;
    },
    getListCart() {
      axios
        .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart")
        .then((response) => {
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