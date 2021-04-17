<template>
  <v-card
    :loading="loading"
    class="mx-auto"
    max-width="374"
    outlined
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-list-item two-line>

      <v-list-item-avatar
        tile
        size="60"
        color="grey"
      >
        <v-img
          height="60"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        >
        </v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <!-- <div class="overline mb-4">
          OVERLINE
        </div> -->
        <v-list-item-title class="title">
          {{ itemInfor.brands }}
        </v-list-item-title>
        <!-- <v-list-item-subtitle>
          $ • Viet Nam, Electrical Shop
        </v-list-item-subtitle> -->
        <v-list-item-subtitle class="">
          <v-row
            align="center"
            class="ma-0 pa-0"
          >
            <!-- <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="13"
            ></v-rating>

            <div class="grey--text ml-2">
              (413 đánh giá)
            </div> -->
            <v-icon style="" small color="blue">mdi-check-decagram</v-icon>
            <span class="blue--text ml-1">Đã xác minh</span>
          </v-row>
        </v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>
    <!-- <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
      <v-card-title>LogiTech Shop</v-card-title>
      <span
        class="headline white--text pl-4 pt-4 d-inline-block"
      >
        LogiTech Shop
      </span>
    </v-img> -->

    <v-card-text class="py-0">
      <!-- <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-2">
          (413 đánh giá)
        </div>
      </v-row> -->
      <v-row>
        <v-col cols="6" class="pa-0">
          <v-row class="ma-0 justify-center text-button black--text">
            4.5 / 5.0
            <v-icon class="" color="amber" small style="vertical-align: middle"> mdi-star</v-icon>
          </v-row>
          <v-row class="ma-0 mt-n2 justify-center text-caption">
            903
          </v-row>
        </v-col>
        <v-col cols="1" class="pa-0 my-5">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="5" class="pa-0">
          <v-col cols="10" class="pa-0">
            <v-row class="ma-0 justify-center text-button black--text">
              1045
            </v-row>
            <v-row class="ma-0 mt-n2 justify-center text-caption">
              theo dõi
            </v-row>
          </v-col>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="6" class="pa-0">
          <v-row class="justify-center">
            <v-btn
              outlined
              color="primary"
            >
              <v-icon
                left
                dark
                small
              >
                mdi-storefront-outline
              </v-icon>
              <span class="text-subtitle-2">Xem shop</span>
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="6" class="pa-0">
          <v-row class="justify-center">
            <v-btn
              outlined
              color="primary"
            >
              <v-icon
                left
                dark
                small
              >
                mdi-plus
              </v-icon>
              <span class="text-subtitle-2">Theo dõi</span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>

      <div class="subtitle-1 mt-8">
        $ • Viet Nam, Electrical Shop
      </div>

      <div>Sàn thương mại điện tử LogiTech.</div>
    </v-card-text>

    <v-divider class="mt-2 mx-4"></v-divider>

    <v-card-title>Nhà bán khác</v-card-title>
    <v-card-text class="pa-1 mt-n2">
      <div class="pa-0 pr-1 pb-0 ml-3 other_retails">
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
        <TestCard/>
      </div>
      <!-- <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group> -->
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import TestCard from '@/components/TestCard.vue'
export default {
  components: {
    TestCard
  },
  props: {
    itemInfor: Object
  },
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
<style scoped>
.v-btn {
  text-transform: none;
}
.border-right {
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #f1f1f1;
}
.other_retails {
  max-height: 300px;
  overflow: scroll;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
</style>
