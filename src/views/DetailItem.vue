<template>
  <v-container class="pa-0 fill-height align-start">
    <v-col class="pa-0">
      <v-row no-gutters>
        <v-breadcrumbs
          class="pa-0"
          :items="breadcrumbList"
          divider="-"
        ></v-breadcrumbs>
      </v-row>
      <v-row>
        <v-container style="background-color: white;">
          <v-row class="pa-0">
            <v-col style="border-width: 0px 1px 0px 0px; border-style: solid; border-color: #efefef;" class="pa-0" cols="5">
              <div class="mb-2 mx-auto" style="width:415px; height:415px;">
                <v-img
                  contain
                  :src="`https://picsum.photos/500/300?image=${selectedImg.id * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${selectedImg.id * 5 + 10}`"
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
                <template
                  v-for="item in imgList"
                >
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
                        :style="item.selected === true ? 'border-width: 3px; border-style: solid; border-color: #757575;' : ''"
                        :class="{ 'on-hover': hover }"
                        :src="`https://picsum.photos/500/300?image=${item.id * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${item.id * 5 + 10}`"
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
            <v-col class="pt-8" cols="7">
              <!-- <v-row class=""> -->
                <span class="text-caption">Thương hiệu:
                  <a
                    href="/forgotpassword"
                    class="text-decoration-none primary--text"
                  >
                    LogiTech
                  </a>
                  <p class="text-subtitle-1">Máy nhào bột/thực phẩm đa năng DK30: Dùng để nhào, trộn mọi loại thực phẩm. Hàng chính hãng Thailand. Dùng cho hộ gia đình, hộ kinh doanh, doanh nghiệp.</p>
                </span>
                <v-row
                  class="px-2 py-0 align-center"
                >
                  <v-rating
                    v-model="rating"
                    :value="3"
                    color="amber"
                    background-color="#dddddd"
                    empty-icon="mdi-star"
                    dense
                    size="15"
                  ></v-rating>

                  <div class="caption ml-1">
                    (4000 lượt đánh giá)
                  </div>
                </v-row>
                <v-row class="pt-2">
                  <v-col cols="7">
                    <PickProductPurchaseDetail/>
                  </v-col>
                  <v-col class="pl-0" cols="5">
                    <OwnerShopOfProductDetail/>
                  </v-col>
                </v-row>
              <!-- </v-row> -->
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import OwnerShopOfProductDetail from '@/components/OwnerShopOfProductDetail.vue'
import PickProductPurchaseDetail from '@/components/PickProductPurchaseDetail.vue'

export default {
  name: 'DetailItem',
  components: {
    // HelloWorld
    OwnerShopOfProductDetail,
    PickProductPurchaseDetail
  },
  mounted () {
  },
  data () {
    return {
      rating: 3,
      imgList: [
        {
          id: 1,
          src: '@/assets/e8d149d839d14346d2c14731f7f84f30.jpg',
          selected: false
        },
        {
          id: 2,
          src: '@/assets/julien.gif',
          selected: false
        },
        {
          id: 3,
          src: '@/assets/julien.gif',
          selected: true
        },
        {
          id: 4,
          src: '@/assets/julien.gif',
          selected: false
        },
        {
          id: 5,
          src: '@/assets/julien.gif',
          selected: false
        },
        {
          id: 6,
          src: '@/assets/julien.gif',
          selected: false
        }
      ],
      selectedImg: {
        id: 1,
        src: '@/assets/e8d149d839d14346d2c14731f7f84f30.jpg',
        selected: true
      },
      breadcrumbList: [
        {
          text: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          text: 'Nồi chiên không dầu',
          disabled: true,
          href: 'breadcrumbs_link_1'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    selectImg (item) {
      this.selectedImg = item
      this.imgList.forEach(function (value, index) {
        value.selected = false
      })
      this.imgList[this.imgList.indexOf(item)].selected = true
    }
  }
}
</script>
<style scoped>
.v-img {
  transition: opacity .2s ease-in-out;
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
