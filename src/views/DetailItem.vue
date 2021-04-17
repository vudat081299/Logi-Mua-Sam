<template>
  <v-container>
    <div class="text-center">
    <v-overlay :value="loading" color="#033058">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <!-- </v-dialog> -->
  </div>
    <v-row>
      <v-card flat>
        <v-card-title>
          <v-breadcrumbs class="pa-0" :items="breadcrumbList">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs></v-card-title
        >
        <v-card-text>
        </v-card-text>
        <v-container class="pa-0 fill-height align-start">
          <v-col>
            <v-row>
              <v-container style="background-color: white">
                <v-row class="pa-0">
                  <v-col
                    style="
                      border-width: 0px 1px 0px 0px;
                      border-style: solid;
                      border-color: #efefef;
                    "
                    class="pa-0"
                    cols="5"
                  >
                    <div
                      class="mb-2 mx-auto"
                      style="width: 415px; height: 415px"
                    >
                      <v-img
                        contain
                        :src="avatar"
                        :lazy-src="avatar"
                        class=""
                        max-height="415"
                        max-width="415"
                        aspect-ratio="1"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </div>
                    <v-card
                      class="d-flex mx-auto flex-wrap align-center"
                      color="#ffffff00"
                      flat
                      tile
                      max-width="415"
                    >
                      <template v-for="( item ) in imgList">
                        <v-card
                          class="elevation-0 pa-0 ma-1"
                          tile
                          :key="item.id"
                          @click="selectImg(item)"
                        >
                          <!-- :color="item.selected === true ? '#e3e3e3' : '#ffffff00'" -->
                          <!-- :style="item.selected === true ? 'border-width: 1px; border-style: solid; border-color: #cccccc;' : ''" -->
                          <!-- style="border-width: 1px; border-style: solid; border-color: #cccccc;" -->
                          <v-hover v-slot="{ hover }">
                            <v-img
                              :style="
                                item.selected === true
                                  ? 'border-width: 3px; border-style: solid; border-color: #757575;'
                                  : ''
                              "
                              :class="{ 'on-hover': hover }"
                              :src="item.src"
                              :lazy-src="item.src"
                              height="75px"
                              width="75px"
                              class="ma-0 hover-img"
                            >
                              <template v-slot:placeholder>
                                <v-row
                                  class="fill-height ma-0"
                                  align="center"
                                  justify="center"
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                  ></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-hover>
                        </v-card>
                      </template>
                    </v-card>
                  </v-col>
                  <v-col class="pt-6" cols="7">
                    <!-- <v-row class=""> -->
                    <span class="text-caption"
                      >Thương hiệu:
                      <a href="/" class="text-decoration-none primary--text">
                        {{ itemInfor.brands }}
                      </a>
                      <p class="text-h5">{{ itemInfor.title }}</p>
                    </span>
                    <v-row class="px-2 py-0 align-center">
                      <v-rating
                        v-model="rating"
                        :value="3"
                        color="amber"
                        background-color="#dddddd"
                        empty-icon="mdi-star"
                        dense
                        size="15"
                      ></v-rating>
                      <div class="caption ml-1">(5 lượt đánh giá)</div>
                    </v-row>
                    <v-row class="pt-2">
                      <v-col cols="7">
                        <PickProductPurchaseDetail :itemInfor="itemInfor" />
                        <template>
                          <v-card class="mx-auto" max-width="344">
                            <v-card-text>
                              <div>Tên sản phẩm</div>
                              <p class="display-1 text--primary">
                                {{ itemInfor.name }}
                              </p>
                              <p>Miêu tả sản phẩm</p>
                              <div class="text--primary">
                                {{ itemInfor.description }}
                              </div>
                            </v-card-text>
                            <v-card-actions>
                              <v-btn text color="deep-purple accent-4">
                                Tìm hiểu thêm
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-col>
                      <v-col class="pl-0" cols="5">
                        <OwnerShopOfProductDetail :itemInfor="itemInfor" />
                      </v-col>
                    </v-row>
                    <!-- </v-row> -->
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
          </v-col>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import OwnerShopOfProductDetail from "@/components/OwnerShopOfProductDetail.vue";
import PickProductPurchaseDetail from "@/components/PickProductPurchaseDetail.vue";
import Items from "@/components/Items";
import LoadingCircleOverlay from '@/components/LoadingCircleOverlay'

export default {
  name: "DetailItem",
  components: {
    // HelloWorld
    OwnerShopOfProductDetail,
    PickProductPurchaseDetail,
    LoadingCircleOverlay,
    Items,
  },
   watch: {
      loading (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 3000)
      },
    },
  mounted() {
    this.getInforProduct();
  },
  created() {
    // this.getInforProduct();
    // axios
    //   .get(
    //     "https://5f7e99cb0198da0016893b3a.mockapi.io/usermanager/list/" +
    //       this.id
    //   )
    //   .then((response) => {

    //   });
  },
  data() {
    return {
      loading: false,
      avatar: "",
      selected: 0,
      id: this.$route.params.id,
      srcList: [],
      itemInfor: {},
      mainImg: "https://picsum.photos/500/300?image=",
      textlabel: "",
      rating: 3,
      imgList: [],
      selectedImg: {
        id: 1,
        src: "@/assets/e8d149d839d14346d2c14731f7f84f30.jpg",
        selected: true,
      },
      breadcrumbList: [],
    };
  },
  computed: {},
  methods: {
    selectImg(item) {
      this.selectedImg = item;
      this.imgList.forEach(function (value, index) {
        value.selected = false;
      });
      this.imgList[this.imgList.indexOf(item)].selected = true;
      this.avatar = this.selectedImg.src;
    },
     async getInforProduct() {
      //  axios
      // .get(this.$store.state.url + "public/products/" +
      //     this.id
      // )
      // .then((response) => {

    //   });
      this.loading = true
      const response = await this.$http.get("public/products/" + this.id);
      console.log(response);
      this.itemInfor = response.data.data;
      this.avatar = this.itemInfor.urlAvatar
      this.imgList = [
        {
          id: 0,
          src: this.itemInfor.urlImage[0],
          selected: false
        },
        {
          id: 1,
          src: this.itemInfor.urlImage[1],
          selected: false
        },
        {
          id: 2,
          src: this.itemInfor.urlImage[2],
          selected: false
        },
        {
          id: 3,
          src: this.itemInfor.urlImage[3],
          selected: false
        },
        {
          id: 4,
          src: this.itemInfor.urlImage[4],
          selected: false
        },
        {
          id: 5,
          src: this.itemInfor.urlImage[5],
          selected: false
        },
      ]
      console.log(this.imgList)
      this.breadcrumbList = [
        {
          text: "Trang chủ",
          disabled: false,
          href: "/",
        },
        {
          text: "Mặt hàng",
          disabled: false,
          href: "/goods",
        },
        {
          text: this.itemInfor.name,
          disabled: true,
          href: "breadcrumbs_link_1",
        },
      ];
      this.loading = false
    },
  },
};
</script>
<style scoped>
.v-img {
  transition: opacity 0.2s ease-in-out;
}
.hover-img:not(.on-hover) {
  opacity: 0.9;
}
.hover-img {
  opacity: 1;
}
.container {
  width: 1250px;
  max-width: 1250px;
  min-width: 1250px;
}
</style>
