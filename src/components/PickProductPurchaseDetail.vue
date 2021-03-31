<template>
  <div>
    <v-card class="ma-0 pa-0" max-width="" flat>
      <v-list-item class="pa-0" three-line>
        <v-list-item-content class="pa-0">
          <v-card flat color="pa-4 grey lighten-5">
            <v-row align="baseline">
              <v-col cols="8">
                <div class="pa-3 text-h4 black--text">
                  {{ formatPrice(itemInfor.cash[0].cash_product - (itemInfor.cash[0].cash_product * Math.ceil(itemInfor.cash[0].cash_sale / 10000) / 100)) }}
                  <span
                    class="black--text text-decoration-line-through"
                    style="font-size: 13px; margin-left: 10px"
                  >
                    {{ formatPrice(itemInfor.cash[0].cash_product) }}
                  </span>
                </div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <span
                  class=""
                  style="
                    color: white;
                    background: rgb(255, 66, 78);
                    line-height: 20px;
                    display: inline-block;
                    padding: 3px 6px;
                    font-size: 13px;
                    margin: 0px 0px 0px 6px;
                    position: relative;
                    top: -1px;
                    border-radius: 4px;
                  "
                  > - {{ Math.ceil(itemInfor.cash[0].cash_sale / 10000) }}%</span
                >
              </v-col>
              <!-- <div class="ml-2 black--text" style="font-size: 13px;">
              -50%
            </div> -->
            </v-row>
          </v-card>
          <v-col class="my-3 pa-0" cols="12">
            <div class="text-subtitle-2">Số lượng</div>
            <v-row class="mt-1 align-baseline">
              <v-col class="mx-4" cols="4">
                <!-- <v-text-field v-model="number" :rules="countProductRules" type="number"></v-text-field> -->
                <v-row>
                  <v-text-field
                    v-model="number"
                    prepend-icon="mdi-minus-circle-outline"
                    append-outer-icon="mdi-plus-circle-outline"
                    @click:append-outer="increment"
                    dense
                    outlined
                    @click:prepend="decrement"
                    class="centered-input inputPrice"
                    type="number"
                  >
                    <!-- <template  v-slot:prepend-icon="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      disabled
                      v-on="on"
                    >
                      <v-icon>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                  </template> -->
                  </v-text-field>
                </v-row>
              </v-col>
              <div class="text-subtitle-2 orange--text">
                {{ itemInfor.number_product }} sản phẩm có sẵn
              </div>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn height="50px" color="#F5F5F5" class="red--text"  elevation="0" outlined>
                  <v-icon dark style="margin-right: 5px"> mdi-cart </v-icon>
                    Thêm vào giỏ hàng
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn
                  height="50px"
                  color="#FF424E"
                  class="white--text"
                  elevation="0"
                >
                  <span style="font-size: 15px;"> Mua ngay </span>
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-col>
        </v-list-item-content>

        <!-- <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> -->
      </v-list-item>

      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "DetailItem",
  props: {
    itemInfor: Object,
  },
  data() {
    return {
      number: 1,
      iconIndex: 0,
      countProductRules: [
        (v) => !!v,
        (v) =>
          /[!@#$%^&*,`~'")(+=_-abcdefghijklmnopqrstvwxyz ABCDEFGHIJKLMNOPQRSTVWXYZ]/.test(
            v
          ) === false,
        (v) => v > 0 === true,
      ],
      icons: [
        "mdi-minus",
        "mdi-emoticon-cool",
        "mdi-emoticon-dead",
        "mdi-emoticon-excited",
        "mdi-emoticon-happy",
        "mdi-emoticon-neutral",
        "mdi-emoticon-sad",
        "mdi-emoticon-tongue",
      ],
    };
  },
  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },
  watch: {},

  methods: {
    formatPrice(n) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(n);
    },
    decrement() {
      if (this.number > 1) {
        this.number = +this.number - 1;
      } else {
        this.number = 1;
      }
    },
    increment() {
      this.number = +this.number + 1 || 1;
    },
  },
};
</script>
<style scoped>
.v-btn {
  text-transform: none;
}
.centered-input >>> input {
  text-align: center;
}
.border-box {
  border-width: 1px;
  border-style: solid;
  border-color: #c6daff;
}
.inputPrice input[type="number"] {
  -moz-appearance: textfield;
}
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
