<template>
<div>
     <h1 id="user-content-items" href="#items" class="mb-6 font-mktg h2-5-mktg-fluid h1-sm-mktg-fluid h0-lg-mktg-fluid mb-3">
        Các mặt hàng
      </h1>
  <v-card
    class="d-flex fixedDivContent mx-auto flex-wrap pa-0 pb-9 align-center"
    color="#ffffff"
    flat
    tile
    :loading="loading"
  >
<LoadingCircleOverlay :dialog="loading"/>
    <div v-for="product in productList" :key="product.id">
      <Items :item="product"></Items>
    </div>
  </v-card>
  </div>
</template>

<script>
import axios from "axios";
import Items from "@/components/Items";
import LoadingCircleOverlay from '@/components/LoadingCircleOverlay'
export default {
  components: {
    Items,
    LoadingCircleOverlay
  },
  mounted() {
    this.getListProduct();
  },
  data() {
    return {
      productList: [],
      loading: false
    };
  },
  methods: {
    getListProduct() {
        this.loading = true
      axios
        .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/list")
        .then((response) => {
          this.productList = response.data;
          this.loading = false
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>