<template>
  <!-- <div style="align-items: stretch">
    <BrandIdentity/>
  </div> -->
  <v-container>
    <!-- <div >
    <IconCart :cartNumber="items.length"/>
    </div> -->
    <v-card color="#ffffff00" flat>
      <v-card-title>
        <BrandIdentity />

        <v-divider class="mx-4" vertical inset></v-divider>

        <span class="subheading" style="font-size: 30px">Thanh toán</span>
      </v-card-title>

      <v-card>
        <v-card-title class="red--text">
          <v-icon color="red">mdi-map-marker</v-icon>
          Địa chỉ nhận hàng
          <v-spacer></v-spacer>
          <v-btn color="success" @click="changeAddressClick()"><v-icon left>
        mdi-pencil
      </v-icon>Thay đổi</v-btn>
        </v-card-title>
        <v-card-text style="font-size: 18px">
          <v-container class="px-0" fluid v-if="changeAddress">
            <v-radio-group v-model="address">
              <v-radio
                v-for="add in addressList"
                :key="add.id"
                :label="add.name + ' ' + add.phone + ' ' + add.address"
                :value="add"
              ></v-radio>
            </v-radio-group>
            <v-btn color="error" rounded
              dark @click="changeAddressClick()" style="margin-right: 20px"> Hoàn thành </v-btn>
               <v-btn rounded
              dark @click="showdiaLogAddAddress">
              <v-icon left> mdi-plus </v-icon> Thêm địa chỉ mới </v-btn>
          </v-container>
          <div v-else>
            <div v-if="address !== null">
            <span class="font-weight-bold" style="margin-right: 20px">{{ address.name }}
            {{ address.phone }}</span>
            {{ address.address }}
            </div>
            <div v-else>
             <span>Bạn chưa thiết lập địa chỉ nhận hàng!</span>
            </div>
            <!-- <span class="font-weight-bold"> Nguyễn Trung 0397912888 </span>
            517 Nguyễn Trãi, Phường Thanh Xuân Nam, Quận Thanh Xuân, Hà Nội -->
          </div>
        </v-card-text>
      </v-card>
      <v-card-text>
        <v-card-text>
          <v-row align="center" justify="center">
            <v-col cols="6">Sản phẩm</v-col>
            <v-col cols="2" class="d-flex justify-center">Đơn giá</v-col>
            <v-col cols="1" class="d-flex justify-center">Số lượng</v-col>
            <!-- <v-col cols="1" class="d-flex justify-center"></v-col> -->
            <v-col cols="2" class="d-flex justify-end">Thành tiền</v-col>
          </v-row>
        </v-card-text>
        <v-card class="justify-center flex-wrap" color="#ffffff" flat tile>
          <div
            v-for="item in selectProduct"
            :key="item.id"
            style="margin-bottom: 40px"
          >
            <ItemPayment :item="item" />
          </div>
        </v-card>
        <v-row align="center" justify="center">
            <v-container>
              <v-card class="justify-center flex-wrap" flat outlined>
                <v-card-title>Phương thức thanh toán </v-card-title>
                <v-card-text> </v-card-text>
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-container>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-row align="center" justify="end">
              <v-card
                class="justify-center"
                color="#E8F5E9"
                width="40%"
              >
                <v-card-title>
                  <h1>Tổng tiền</h1>
                  </v-card-title>
                <v-card-text>
                  <v-row align="center" justify="end">
                    <v-col cols="9" class="d-flex justify-end">
                      <span style="margin-right: 20px; font-size: 18px"
                        >Tổng tiền hàng ( {{ this.totalProduct }} sản phẩm):
                      </span>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-end font-weight-bold">
                      <span style="font-size: 18px">
                        {{ formatPrice(this.totalCash) }}
                      </span>
                    </v-col>
                  </v-row>
                  <v-row align="center" justify="end">
                    <v-col cols="9" class="d-flex justify-end">
                      <span style="margin-right: 20px; font-size: 18px"
                        >Phí vận chuyển:
                      </span>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-end font-weight-bold">
                      <span style="font-size: 18px">
                        {{ formatPrice(this.ship) }}
                      </span>
                    </v-col>
                  </v-row>
                  <v-row align="center" justify="end">
                    <v-col cols="9" class="d-flex justify-end">
                      <span style="margin-right: 20px; font-size: 18px"
                        >Tổng thanh toán:
                      </span>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-end font-weight-bold">
                      <span style="color: red; font-size: 18px">
                        {{ formatPrice(this.totalCash + this.ship) }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    style="margin-top: 40px"
                    width="25%"
                    height="50px"
                    color="#FF424E"
                    class="white--text"
                    elevation="0"
                    @click="buyProduct"
                  >
                    <span style="font-size: 15px"> Đặt hàng </span>
                  </v-btn>
                </v-card-actions>
              </v-card>
           
          </v-row>
           </v-container>
           </v-card-actions>
    </v-card>
    <v-dialog max-width="500px" v-model="dialogAddAddress">
      <AddressDelivery v-on:closeAdd="closeAdd"/>
    </v-dialog>
  </v-container>
  <!-- <v-data-table :headers="headers" :items="items" width="100%"> </v-data-table> -->
</template>

<script>
import BrandIdentity from "@/components/BrandIdentity";
import IconCart from "@/views/CartManagement/IconCart";
import ItemPayment from "@/views/CartManagement/ItemPayment";
import AddressDelivery from '@/views/CartManagement/AddressDelivery'
export default {
  components: {
    BrandIdentity,
    IconCart,
    ItemPayment,
    AddressDelivery
  },
  props: {
    productPick: Object,
  },
  watch: {
    selectProduct: {
      handler: function () {
        this.changeValueTextField();
      },
      immediate: true,
    },
    numberProduct: {
      handler: function () {
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
  created() {
    // this.totalShip();
  },
  mounted() {
    this.totalShip();
  },
  computed: {},
  methods: {
    totalShip() {
      console.log(this.selectProduct.length);
      if (this.selectProduct.length !== 0) {
        // for (var i = 0; i < this.selectProduct.length; i++) {
        //   this.ship
        // }
        this.ship = this.ship * this.selectProduct.length;
      }
    },
    showdiaLogAddAddress () {
      this.dialogAddAddress = true
    },
    closeAdd () {
      this.dialogAddAddress = false
    },
    formatPrice(n) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(n);
    },
    buyProduct() {
      console.log(this.selectProduct);
      this.$store.state.selectProductList = this.selectProduct;
    },
    changeAddressClick() {
      this.changeAddress = !this.changeAddress;
    },
    changeValueTextField() {
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
    },
  },
  data() {
    return {
      radioGroup: 1,
      ship: 30000,
      dialogAddAddress: false,
      changeAddress: false,
      address: null,
      addressList: [
        {
          id: 1,
          name: "Nguyễn An",
          phone: "031234646",
          address:
            "150 Nguyễn Trãi, Phường Thanh Xuân Nam, Quận Thanh Xuân, Hà Nội",
        },
        {
          id: 2,
          name: "Trần Trang",
          phone: " 0315448877",
          address:
            " 999 Nguyễn Trãi, Phường Thanh Xuân Nam, Quận Thanh Xuân, Hà Nội",
        },
      ],
      items: [],
      footerProps: {
        "items-per-page-text": "Số sản phẩm trên một trang",
        "items-per-page-all-text": "Tất cả",
        "items-per-page-options": [10, 20, -1],
      },
      selectProduct: JSON.parse(localStorage.getItem("listProduct")),
      totalProduct: 0,
      totalCash: 0,
      numberProduct: 0,
      images: [],
    };
  },
};
</script>

<style>
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  font-size: 15px;
}

.container.fill-height {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
}
</style>