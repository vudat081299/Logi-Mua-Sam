<template>
  <div style="display: flex; justify-content: center; align-items: center">
    <v-badge offset-x="0" offset-y="10" :color="setColorBadge()" left :content="this.cartNumber" :value="this.cartNumber">
      <v-icon dark>mdi-cart</v-icon>
    </v-badge>
    <span style="margin-left: 12px"> Giỏ hàng</span>
  </div>
</template>

<script>
export default {
  props: ["cartNumber"],
  created() {
    this.number = this.cartNumber;
  },
  watch: {
    cartNumber: {
      handler: function () {
        console.log("sadasasd" + this.cartNumber);
        this.number = this.cartNumber;
      },
    },
  },
  methods: {
    // getListCart() {
    //   this.loading = true;
    //   axios
    //     .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart")
    //     .then((response) => {
    //       console.log(response);
    //       this.listCart = response.data;
    //     });
    //     console.log(this.listCart)
    // },
    setColorBadge() {
      if (this.cartNumber === 0) {
        return "";
      } else {
        return "red";
      }
    },
  },
  data() {
    return {
      number: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>