<template>
  <v-container fluid class="main-container mx-auto fill-height justify-center align-start" style="">
    <v-card width="100vw" flat>
      <v-card-title>
        <!-- <BrandIdentity/>
        <v-divider class="mx-4" vertical inset></v-divider> -->

        <!-- <span class="subheading" style="font-size: 30px">Giỏ hàng</span> -->
        
        <h1
          id="user-content-items"
          class="mb-6 font-mktg h2-5-mktg-fluid h1-sm-mktg-fluid h0-lg-mktg-fluid mb-3"
          style="padding-left: 20px"
        >
          Giỏ hàng
        </h1>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Tìm kiếm sản phẩm trong giỏ"
          style="padding-top: 12px"
          filled
          rounded
          dense
        >
        </v-text-field>
      </v-card-title>
      <v-card-text>
        <v-snackbar
          v-model="this.deleteSuccess"
          :multi-line="true"
        >
        
          <h1
            id="user-content-items"
            class="ont-mktg h6-9-mktg-fluid h5-sm-mktg-fluid h4-lg-mktg-fluid"
          >
            {{ this.textAlert }}

          </h1>
          <template v-slot:action="{ attrs }">
            <v-btn
              color="red"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Đóng
            </v-btn>
          </template>
        </v-snackbar>
        <!-- <v-data-table
          v-model="selectProduct"
          :headers="headers"
          :items="items"
          :search="search"
          :footer-props="footerProps"
          show-select
          :loading="loading"
          hide-default-footer
          disable-pagination
          fixed-header
        >
          <template v-slot:[`item.product`]="{ item }">
            <div style="display: flex; align-items: center">
              <v-img
                :src="`https://picsum.photos/500/300?image=${item.id * 5 + 10}`"
                max-height="90px"
                max-width="135px"
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
          <template v-slot:[`header.data-table-select`]="{ props, on }">
        <v-simple-checkbox
          color="primary"
          v-if="props.indeterminate"
          v-ripple
          v-bind="props"
          :value="props.indeterminate"
          v-on="on"
        ></v-simple-checkbox>
        <v-simple-checkbox
          color="red"
          v-if="!props.indeterminate"
          v-ripple
          v-bind="props"
          v-on="on"
        ></v-simple-checkbox>
      </template>
      <template v-slot:[`item.data-table-select`]="{isSelected,select}">
      <v-simple-checkbox color="red" v-ripple :value="isSelected" @input="select($event)"></v-simple-checkbox>
    </template>
          <template v-slot:[`item.number`]="{ item }">
            <v-text-field
              v-model="item.number"
              prepend-icon="mdi-minus-circle-outline"
              append-outer-icon="mdi-plus-circle-outline"
              @click:append-outer="
                (item.number = increment(item.number)) && changeValueTextField()
              "
              dense
              outlined
              @click:prepend="
                item.number > 1
                  ? (item.number = item.number - 1) && changeValueTextField()
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
            <v-icon color="red" @click="deleteCart(item.id)">mdi-delete</v-icon>
          </template>
          <template slot="no-data"> Không có dữ liệu </template>
          <template slot="empty-wrapper"> Không có dữ liệu </template>
        </v-data-table> -->

        <v-data-table
          v-model="selectProduct"
          :headers="headers"
          :items="items"
          :loading="loading"
          item-key="id"
          :single-select="false"
          show-select
          class="elevation-1"
          :search="search"
          hide-default-footer
          disable-pagination
          fixed-header
        >
          <template v-slot:top>
          </template>

          <template v-slot:[`item.product`]="{ item }">
            <div style="display: flex; align-items: center">
              <v-img
                :src="`https://picsum.photos/500/300?image=${item.id * 5 + 10}`"
                max-height="90px"
                max-width="135px"
              ></v-img>
              <span class="black--text font-weight-medium" style="margin-left: 15px">{{ item.product }}</span>
            </div>
          </template>
          
          <template v-slot:[`item.number`]="{ item }">
            <v-text-field
              outlined
              v-model="item.number"
              prepend-icon="mdi-minus-circle-outline"
              append-outer-icon="mdi-plus-circle-outline"
              @click:append-outer="
                (item.number = increment(item.number)) && changeValueTextField()
              "
              dense
              @click:prepend="
                item.number > 1
                  ? (item.number = item.number - 1) && changeValueTextField()
                  : (item.number = 1)
              "
              class="centered-input inputPrice"
              type="number"
              style="margin-top: 20px; width:150px;"
              @change="changeValueTextField()"
              input="Number"
            >
            </v-text-field>
          </template>
          
          <template v-slot:[`item.cash`]="{ item }">
            <h5 
              id="user-content-items"
              class="font-mktg h7-10-mktg-fluid h6-sm-mktg-fluid h5-lg-mktg-fluid"
            >{{ item.cash }} <span class="text-decoration-underline">đ</span></h5>
          </template>

          <template v-slot:[`item.func`]="{ item }">
            <v-icon large @click="deleteCart(item)">mdi-delete</v-icon>
          </template>
          <template slot="no-data">Chưa có sản phẩm</template>
          <template slot="empty-wrapper">Chưa có sản phẩm</template>
        </v-data-table>

      </v-card-text>
      <v-card-actions class="pa-3">
        <v-spacer></v-spacer>
        <span style="margin-right: 20px; font-size: 18px"
          >Tổng tiền hàng ({{ this.totalProduct }} sản phẩm):
          <h1
            id="user-content-items"
            class="font-mktg h6-9-mktg-fluid h5-sm-mktg-fluid h4-lg-mktg-fluid"
          >
            <span style="color: red; font-size: 27px">
              <!-- {{ formatPrice(this.totalCash) }} -->
              {{ totalCash }} <span class="text-decoration-underline">đ</span>
            </span>
          </h1>
        </span>
        <v-btn
          width="20%"
          height="60px"
          color="#FF424E"
          class="white--text"
          elevation="0"
          @click="buyProduct"
        >
          <span style="font-size: 18px"> Mua hàng </span>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog max-width="500px" v-model="dialogBuy">
      <v-card>
        <v-toolbar dark dense flat>
          <v-toolbar-title class="white--text">Thông báo</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-4">Bạn cần chọn sản phẩm !</v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="closeDialog">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import BrandIdentity from "@/components/BrandIdentity";
import axios from "axios";
import IconCart from "@/views/CartManagement/IconCart";
export default {
  data() {
    return {
      selected: [],
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      options: {
        color: "primary",
        width: 290,
        zIndex: 200,
      },
      dialogBuy: false,
      items: [],
      search: "",
      footerProps: {
        "items-per-page-text": "Số sản phẩm trên một trang",
        "items-per-page-all-text": "Tất cả",
        "items-per-page-options": [-1, -1, -1],
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
      plus: 1,
      checkChangeStateCart: false
    }
  },
  components: {
    BrandIdentity,
    IconCart,
  },
  props: {
    productPick: Object,
  },
  watch: {
    checkChangeStateCart: {
      handler: function () {
        this.items.forEach(function (value, index, array) {
          if (value.number >= 100) {
            array[index].number = 100
          }
          array[index].cash = value.number * value.cash_product
        })
      },
      immediate: true,
    },
    selected: {
      handler: function () {
        this.changeValueTextField();
      },
      immediate: true
    },
    selectProduct: {
      handler: function () {
        // if (this.selectProduct !== []) {
        //   this.totalProduct = 0;
        //   this.totalCash = 0;
        //   for (var index = 0; index < this.selectProduct.length; index++) {
        //     this.totalCash +=
        //       this.selectProduct[index].cash_product *
        //       this.selectProduct[index].number;
        //     this.totalProduct += eval(this.selectProduct[index].number);
        //   }
        // } else {
        //   this.totalProduct = 0;
        //   this.totalCash = 0;
        // }
        // console.log(this.totalProduct);
        // console.log(this.totalCash);
        this.changeValueTextField();
      },
      immediate: true,
    },
    numberProduct: {
      handler: function () {
        // if (this.selectProduct !== []) {
        //   this.totalProduct = 0;
        //   this.totalCash = 0;
        //   for (var index = 0; index < this.selectProduct.length; index++) {
        //     this.totalCash +=
        //       this.selectProduct[index].cash_product *
        //       this.selectProduct[index].number;
        //     this.totalProduct += eval(this.selectProduct[index].number);
        //   }
        // } else {
        //   this.totalProduct = 0;
        //   this.totalCash = 0;
        // }
        // console.log(this.totalProduct);
        // console.log(this.totalCash);
        this.changeValueTextField();
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
  // created() {
  //   this.getListCart();
  //   // this.selectProduct = this.productPick
  // },
  mounted() {
    this.getListCart();
    // this.checkLogin();
    // this.selectProduct[0] = this.$store.state.product
    // console.log(this.selectProduct)
  },
  computed: {
    headers() {
      return [
        {
          text: "Sản phẩm",
          align: "start",
          sortable: true,
          value: "product",
          width: "45%",
        },
        { text: "Đơn giá", value: "cash_product", sortable: true, align: "start", width: "10%" },
        { text: "Số lượng", value: "number", sortable: true, align: "start", width: "20%" },
        { text: "Số tiền", value: "cash", sortable: true, align: "start", width: "15%" },
        { text: "Thao tác", value: "func", sortable: false, align: "start", width: "10%" },
      ];
    },
  },
  methods: {
    checkLogin() {
      if (!this.$cookies.get("token")) {
        this.$router.push("/login");
      } else {
        this.getListCart();
      }
    },
    getListCart() {
      this.loading = true;
      axios
        .get("https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart")
        .then((response) => {
          this.items = response.data;
          this.items.forEach(function (value, index, array) {
            array[index].cash = value.number * value.cash_product
          })
          this.$store.state.numberCart = this.items.length;
          this.loading = false;
        });
    },
    formatPrice(n) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(n);
    },
    closeDialog() {
      this.dialogBuy = false;
    },
    buyProduct() {
      if (this.selectProduct.length === 0) {
        this.dialogBuy = true;
      } else {
        localStorage.setItem("listProduct", JSON.stringify(this.selectProduct));
        this.$router.push("/payment");
      }
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
      return number;
    },
    detectNumberProduct() {
      this.numberProduct = number;
    },
    changeValueTextField() {
      this.totalProduct = 0;
      this.totalCash = 0;
      console.log(this.totalCash)
      console.log(this.selectProduct)
      if (this.selectProduct !== []) {
        this.totalProduct = 0;
        this.totalCash = 0;
        for (var index = 0; index < this.selectProduct.length; index++) {
          this.totalCash += this.selectProduct[index].cash_product * this.selectProduct[index].number;
          this.totalProduct += eval(this.selectProduct[index].number);
        }
        this.checkChangeStateCart = !this.checkChangeStateCart
      } else {
        this.totalProduct = 0;
        this.totalCash = 0;
      }
    },
    deleteCart(item) {
      axios
        .delete(
          "https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/cart/" + item.id
        )
        .then((response) => {
          
          var filtered = this.selectProduct.filter(function(value, index, arr){ 
              return value !== item;
          });
          this.selectProduct = filtered
          
          var filteredCartItems = this.items.filter(function(value, index, arr){ 
              return value !== item;
          });
          this.items = filteredCartItems
          // this.getListCart();
          this.deleteSuccess = true;
          this.changeValueTextField()
          setTimeout(() => {
            this.deleteSuccess = false;
          }, 1500);
        });
    },
  }
};
</script>

<style lang="scss">
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  font-size: 18px;
}
.centered-input input {
  text-align: center;
}

.main-container {
  width: 80%;
}

.v-btn {
  text-transform: none;
}
</style>