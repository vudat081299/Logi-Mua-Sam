<template>
  <!-- <div style="align-items: stretch">
    <BrandIdentity/>
  </div> -->
  <v-container>
    <v-card color="#ffffff00" flat>
      <v-card-title>
        <BrandIdentity />

        <v-divider class="mx-4" vertical inset></v-divider>

        <span class="subheading" style="font-size: 30px">Giỏ hàng</span>

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Tìm kiếm"
          style="padding-top: 12px"
        ></v-text-field
      ></v-card-title>
      <v-card-text>
        <v-alert type="success" v-if="this.deleteSuccess">
          {{ this.textAlert }}
        </v-alert>
        <v-data-table
          v-model="selectProduct"
          :headers="headers"
          :items="items"
          :search="search"
          height="60vh"
          :footer-props="footerProps"
          show-select
          :loading="loading"
        >
          <template v-slot:[`item.product`]="{ item }">
            <div style="display: flex; align-items: center">
              <v-img
                :lazy-src="item.image"
                max-height="70px"
                max-width="70px"
                contain
              ></v-img>
              <span style="margin-left: 15px">{{ item.product }}</span>
            </div>
          </template>
          <template v-slot:[`item.cash_product`]="{ item }">
            <div class="pa-3 black--text">
              {{ formatPrice(item.cash_product) }}
            </div>
          </template>
          <template v-slot:[`item.cash`]="{ item }">
            <div class="pa-3 black--text">
              {{ formatPrice(item.cash_product * item.number) }}
            </div>
          </template>
          <template v-slot:[`item.number`]="{ item }">
              <v-text-field
                v-model="item.number"
                prepend-icon="mdi-minus-circle-outline"
                append-outer-icon="mdi-plus-circle-outline"
                @click:append-outer="
                  (item.number = increment(item.number)) &&
                    changeValueTextField()
                "
                dense
                outlined
                @click:prepend="
                  item.number > 1
                    ? (item.number = item.number - 1) &&
                      changeValueTextField()
                    : (item.number = 1)
                "
                class="centered-input inputPrice"
                type="number"
                style="margin-top: 20px"
                @change="changeValueTextField()"
                input="Number"
              >
              </v-text-field>
          </template>
          <template v-slot:[`item.func`]="{ item }">
            <v-icon @click="deleteCart(item.id)">mdi-delete</v-icon>
          </template>
          <template slot="no-data"> Không có dữ liệu </template>
          <template slot="empty-wrapper"> Không có dữ liệu </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <span style="margin-right: 20px; font-size: 18px"
          >Tổng tiền hàng ( {{ this.totalProduct }} sản phẩm):
          <span style="color: red; font-size: 20px">
            {{ formatPrice(this.totalCash) }}
          </span>
        </span>
        <v-btn
          width="20%"
          height="50px"
          color="#FF424E"
          class="white--text"
          elevation="0"
          @click="buyProduct"
        >
          <span style="font-size: 15px"> Mua hàng </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
  <!-- <v-data-table :headers="headers" :items="items" width="100%"> </v-data-table> -->
</template>

<script>
import BrandIdentity from "@/components/BrandIdentity";
import axios from "axios";
export default {
  components: {
    BrandIdentity,
  },
  watch: {
    selectProduct: {
      handler: function () {
        if (this.selectProduct !== []) {
          this.totalProduct = 0;
          this.totalCash = 0;
          for (var index = 0; index < this.selectProduct.length; index++) {
            this.totalCash +=
              this.selectProduct[index].cash_product *
              this.selectProduct[index].number;
            this.totalProduct += eval(this.selectProduct[index].number);
          }
        } else {
          this.totalProduct = 0;
          this.totalCash = 0;
        }
        console.log(this.totalProduct);
        console.log(this.totalCash);
      },
      immediate: true,
    },
    numberProduct: {
      handler: function () {
        if (this.selectProduct !== []) {
          this.totalProduct = 0;
          this.totalCash = 0;
          for (var index = 0; index < this.selectProduct.length; index++) {
            this.totalCash +=
              this.selectProduct[index].cash_product *
              this.selectProduct[index].number;
            this.totalProduct += eval(this.selectProduct[index].number);
          }
        } else {
          this.totalProduct = 0;
          this.totalCash = 0;
        }
        console.log(this.totalProduct);
        console.log(this.totalCash);
        // changeValueTextField()
      },
      immediate: true,
    },
    numberTextField: {
      handler: function () {
        console.log(this.numberTextField);
      },
      immediate: true,
    },
  },
  created() {
    this.getListCart();
  },
  mounted() {
    this.getListCart();
  },
  computed: {
    headers() {
      return [
        {
          text: "Sản phẩm",
          align: "start",
          sortable: true,
          value: "product",
          width: "50%",
        },
        { text: "Đơn giá", value: "cash_product", align: "center" },
        { text: "Số lượng", value: "number", align: "center", width: "15%" },
        { text: "Số tiền", value: "cash", align: "center" },
        { text: "Thao tác", value: "func", width: "10%", align: "center" },
      ];
    },
  },
  methods: {
    getListCart() {
      this.loading = true;
      axios
        .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart")
        .then((response) => {
          console.log(response);
          this.items = response.data;
          this.loading = false;
        });
    },
    formatPrice(n) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(n);
    },
    buyProduct() {
      console.log(this.selectProduct[0].number);
    },
    decrement(number) {
      if (number > 1) {
        number = number - 1;
      } else {
        number = 1;
      }
    },
    increment(number) {
      number = parseInt(number) + 1 || 1;
      return number
    },
    detectNumberProduct() {
      this.numberProduct = number;
    },
    changeValueTextField () {
      if (this.selectProduct !== []) {
          this.totalProduct = 0;
          this.totalCash = 0;
          for (var index = 0; index < this.selectProduct.length; index++) {
            this.totalCash +=
              this.selectProduct[index].cash_product *
              this.selectProduct[index].number;
            this.totalProduct +=  eval(this.selectProduct[index].number);
          }
        } else {
          this.totalProduct = 0;
          this.totalCash = 0;
        }
        console.log(this.totalProduct);
        console.log(this.totalCash);
    },
    deleteCart(id) {
      axios
        .delete(
          "https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart/" + id
        )
        .then((response) => {
          console.log(response);
          this.getListCart();
          this.deleteSuccess = true;
          setTimeout(() => {
            this.deleteSuccess = false;
          }, 1500);
        });
    },
  },
  data() {
    return {
      items: [],
      search: "",
      footerProps: {
        "items-per-page-text": "Số sản phẩm trên một trang",
        "items-per-page-all-text": "Tất cả",
        "items-per-page-options": [10, 20, -1],
      },
      selectProduct: [],
      deleteSuccess: false,
      textAlert: "Đã xóa thành công!",
      totalProduct: 0,
      totalCash: 0,
      numberProduct: 0,
      loading: false,
      numberTextField: 0,
      images: [],
      plus: 1
    };
  },
};
</script>

<style lang="scss">
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  font-size: 15px;
}
.centered-input input {
  text-align: center
}
</style>