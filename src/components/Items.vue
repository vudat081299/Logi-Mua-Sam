<template>
  <div>
    <v-hover v-slot="{ hover }" :key="item.id">
      <v-card
        :class="{ 'on-hover': hover }"
        class="hover-grow ma-4 hover-card elevation-1"
        tile
        color="#ffffff00"
        width="300px"
        height="380px"
      >
        <!-- :elevation="hover ? 2 : 0" -->
        <!-- :style="`border-top: ${hover ? 4 : 0}px solid #42A5F5;border-right: ${hover ? 4 : 0}px solid #42A5F5;border-bottom: ${hover ? 4 : 0}px solid #42A5F5;border-left: ${hover ? 4 : 0}px solid #42A5F5;`" -->
        <!-- <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="175px"
            > -->
        <v-img
          :class="{ 'on-hover': hover }"
          :src="item.urlAvatar"
          height="200px"
          class="ma-4 mb-2 rounded-t-sm hover-img"
          @click="detailItem(item)"
        >
          <!-- src="@/assets/e8d149d839d14346d2c14731f7f84f30.jpg" -->
          <!-- src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" -->

          <!-- <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="cardState"
              >
              </span> -->
        </v-img>
        <v-card-text class="px-4 py-0">
          <a style="height: 40px" class="black--text cut-text" @click="detailItem(item)">
            <span
              style="
                background: rgb(242, 242, 242);
                line-height: 12px;
                display: inline-block;
                padding: 0px 4px;
                font-size: 9px;
                margin: 0px 4px 0px 0px;
                position: relative;
                top: -1px;
                border-radius: 2px;
              "
              >{{ item.code }}</span
            >
            <!-- Máy nhào bột/thực phẩm đa năng DK30: Dùng để nhào, trộn mọi loại
              thực phẩm. Hàng chính hãng Thailand. Dùng cho hộ gia đình, hộ kinh
              doanh, doanh nghiệp. -->
            {{ item.name }}
          </a>
          <v-row class="ma-0 px-0 align-center">
            {{ item.description }}
          </v-row>
          <v-row class="ma-0 px-0 align-center">
            <v-rating
              v-model="rating[item.id]"
              :value="3"
              color="amber"
              background-color="#dddddd"
              empty-icon="mdi-star"
              dense
              size="13"
            ></v-rating>

            <div class="caption ml-1">( 5 đánh giá )</div>
          </v-row>
          <v-row class="ma-0 pa-0 align-center">
            <v-col>
            <div
              class="black--text text-decoration-line-through mb-n2"
              style="font-size: 11px; text-align: left; height: 10px"
            >
              {{ formatPrice(item.price) }}
            </div>
            </v-col>
          </v-row>
          <v-row class="ma-0 px-0 align-center">
            <v-col cols="8">
              <div class="text-subtitle-2 black--text">
                {{ formatPrice(item.price - (item.price * 10) / 100) }}
              </div>
            </v-col>
            <v-col cols="4">
              <span
                class=""
                style="
                  color: white;
                  background: rgb(255, 66, 78);
                  line-height: 20px;
                  display: inline-block;
                  padding: 3px 6px;
                  font-size: 15px;
                  margin: 0px 0px 0px 6px;
                  position: relative;
                  top: -1px;
                  border-radius: 4px;
                  float: right;
                "
                > - 10%</span
              >
            </v-col>

            <!-- <div class="percent_discount">-30%
                  </div> -->
          </v-row>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import PickProductPurchaseDetail from "@/components/PickProductPurchaseDetail";
import DetailItem from "@/views/DetailItem";
export default {
  name: "Item",
  components: {
    PickProductPurchaseDetail,
    DetailItem,
  },

  props: {
    item: Object,
  },

  data() {
    return {
      inforItem: {},
      itemProduct: [],
      cardState: "test",
      rating: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
      items: [
        {
          title: "New Releases",
          text: "It's New Release Friday",
          subtext: "Newly released songs. Updated daily.",
          img: "http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg",
        },
        {
          title: "Rock",
          text: "Greatest Rock Hits",
          subtext: "Lose yourself in rock tunes.",
          img:
            "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        },
        {
          title: "Mellow Moods",
          text: "Ambient Bass",
          subtext: "Chill beats to mellow you out.",
          img: "http://lorempixel.com/output/abstract-q-c-640-480-6.jpg",
        },
      ],
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  mounted() {
  },
  watch: {},
  methods: {
    formatPrice(n) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(n);
    },
    getImage() {
      // const min = 550
      // const max = 560
      return 666;
      // return Math.floor(Math.random() * (max - min + 1)) + min
    },
    detailItem(item) {
      this.inforItem = item;
      console.log(this.inforItem);
      this.$router.push("/product/" + item.id);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 2000px;
}
.hover-card {
  box-shadow: -9px -9px 20px 0 rgba(240, 240, 240, 1),
    9px 9px 20px 0 rgba(240, 240, 240, 1) !important;
  z-index: 1;

  /* opacity: 1; */
  /* box-shadow: 0 100px 80px -80px rgba(0, 0, 0, 0.9) !important; */
  /* box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,0.45), inset -25px 0px 25px -25px rgba(0,0,0,0.45); */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10), 0 6px 20px 0 rgba(0, 0, 0, 0.10) !important; */
  /* border-width: 10px;
  border:rgba(0, 0, 0, 1); */
  /* border-width: 1px;
  border-style: solid;
  border-color: #c6daff; */
}
.hover-img:not(.on-hover) {
  opacity: 0.9;
}
.hover-img {
  opacity: 1;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.cut-text {
  /* text-overflow: ellipsis;
  overflow: hidden;
  width: 250px;
  height: 1.2em;
  white-space: nowrap; */
  display: -webkit-box;
  max-width: 100%;
  margin: 0 auto;
  -webkit-line-clamp: 2;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  overflow: hidden;
  text-overflow: ellipsis;
}
.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
.fixedDivContent {
  width: 1000px;
  max-width: 1000px;
  min-width: 1000px;
}
.percent_discount {
  font-size: 13px;
  line-height: 20px;
  border-radius: 2px;
  background: rgb(255, 66, 78);
  color: black;
  padding: 0px 2px;
}
</style>
