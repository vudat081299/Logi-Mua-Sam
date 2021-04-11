<template>
  <v-card shaped color="#FFF3E0" flat>
    <v-card flat outlined color="#EEEEEE">
      <v-card-title>{{ item.product }}</v-card-title>
      <v-row align="center" justify="center">
        <v-col cols="6" class="d-flex justify-start align-center">
          <v-img
            :src="`https://picsum.photos/500/300?image=${item.id * 5 + 10}`"
            :aspect-ratio="16/9"
            max-width="200px"
          ></v-img>
          <span style="margin-left: 20px">{{ item.product }}</span>
        </v-col>
        <v-col cols="2" class="d-flex justify-center">
          {{ formatPrice(item.cash_product) }}
        </v-col>
        <v-col cols="1" class="d-flex justify-center">
          {{ item.number }}
        </v-col>
        <!-- <v-col cols="1" class="d-flex justify-center"></v-col> -->
        <v-col cols="2" class="d-flex justify-end">
          {{ formatPrice(item.cash_product * item.number) }}
        </v-col>
      </v-row>
      <v-card-actions></v-card-actions>
    </v-card>
    <v-row align="center" justify="center">
      <v-col cols="6" class="d-flex justify-end">
        <v-subheader inset class="green--text"> Vận chuyển: </v-subheader>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <v-text-field
          v-model="delivery"
          solo
          disabled
          flat
          class="centered-input inputPrice"
          style="margin-top: 20px"
        >
        </v-text-field>
        <!-- <v-select
          v-model="delivery"
            :items="list"
            solo
            style="margin-top: 20px"
          >
          </v-select> -->
      </v-col>
      <v-col cols="1" class="d-flex justify-end"></v-col>
      <v-col cols="2" class="d-flex justify-end">
          <span style="margin-right: 20px">Phí vận chuyển:</span>
        {{ formatPrice("30000") }}
      </v-col>
    </v-row>
    <v-card color="#FAFAFA">
    <v-row align="center" justify="center">
      <v-col cols="5" class="d-flex justify-end"></v-col>
      <!-- <v-col cols="2" class="d-flex justify-end">
        </v-col> -->
      <v-col
        cols="4"
        class="d-flex justify-end black--text"
        style="font-size: 20px"
      >
        Tổng số tiền ( {{ item.number }} sản phẩm):
      </v-col>
      <v-col
        cols="2"
        class="d-flex justify-end red--text"
        style="font-size: 20px"
        >{{ formatPrice(item.cash_product * item.number + 30000) }}
      </v-col>
    </v-row>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      delivery: "Giao hàng tiết kiệm",
      list: ["Giao hàng tiêu chuẩn", "Vận chuyển nhanh"],
    };
  },
  methods: {
    formatPrice(n) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(n);
    },
  },
};
</script>

<style>
.centered-input input {
  text-align: center;
}
</style>