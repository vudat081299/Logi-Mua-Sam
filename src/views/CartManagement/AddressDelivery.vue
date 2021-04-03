<template>
  <div>
    <v-form>
      <v-card>
        <v-card-title>
            Thêm 1 địa chỉ mới
            <v-spacer></v-spacer>
            <v-icon @click="close()">mdi-close</v-icon>
            </v-card-title>
        <v-card-text>
          <v-text-field v-model="name" label="Họ tên" outlined> </v-text-field>
          <v-text-field v-model="phone" label="Số điện thoại" outlined>
          </v-text-field>
          <v-text-field v-model="address" label="Địa chỉ" outlined>
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" width="90px" @click="close()"> Trở lại </v-btn>
          <v-btn color="primary" width="90px"> Thêm </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      address: "",
    };
  },
  methods: {
      close() {
          this.$emit("closeAdd")
      }
  }
};
</script>

<style lang="scss" scoped>
</style>