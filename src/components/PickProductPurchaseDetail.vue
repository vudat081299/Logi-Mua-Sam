<template>
  <v-card
    class="ma-0 pa-0"
    max-width=""
    flat
  >
    <v-list-item class="pa-0" three-line>
      <v-list-item-content class="pa-0">
        <v-card flat color="pa-4 grey lighten-5">
          <v-row align="baseline">
            <div class="pa-3 text-h4 black--text">
              1.000.000
              <span class="text-decoration-underline">đ</span>
            </div>
            <div class="black--text text-decoration-line-through" style="font-size: 13px;">
              2.000.000
              <span class="text-decoration-underline">đ</span>
            </div>
            <!-- <div class="ml-2 black--text" style="font-size: 13px;">
              -50%
            </div> -->
            <span class="" style="color: white; background: rgb(255, 66, 78); line-height: 20px; display: inline-block; padding: 3px 6px;
             font-size: 13px; margin: 0px 0px 0px 6px; position: relative; top: -1px; border-radius: 4px;">-20%</span>
          </v-row>
        </v-card>
        <v-col class="my-6 pa-0" cols="12">
          <div class="text-subtitle-2">
            Số lượng
          </div>
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
              Chỉ còn lại 20 sản phẩm
            </div>
          </v-row>
          <v-btn
            width="65%"
            height="50px"
            color="#FF424E"
            class="white--text"
            elevation="0"
          >
            <span style="font-size: 15px;">
              Mua Sản Phẩm
            </span>
          </v-btn>
        </v-col>
      </v-list-item-content>

      <!-- <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar> -->
    </v-list-item>

    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      number: 1,
      iconIndex: 0,
      countProductRules: [
        v => !!v,
        v => (/[!@#$%^&*,`~'")(+=_-abcdefghijklmnopqrstvwxyz ABCDEFGHIJKLMNOPQRSTVWXYZ]/.test(v) === false),
        v => (v > 0) === true
      ],
      icons: [
        'mdi-minus',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue'
      ]
    }
  },
  computed: {
    icon () {
      return this.icons[this.iconIndex]
    }
  },
  watch: {
  },

  methods: {
    decrement () {
      if (this.number > 1) {
        this.number = (this.number - 1) || 0
      }
    },
    increment () {
      this.number = (this.number + 1) || 100
    }
  }
}
</script>
<style scoped>
.v-btn {
  text-transform: none;
}
.border-box {
  border-width: 1px;
  border-style: solid;
  border-color: #c6daff;
}
</style>
