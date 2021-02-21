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
          <v-row>
            <v-col cols="5">
              <div class="mb-2 mx-4" style="width:432px; height:432px;">
                <v-img
                  contain
                  :src="`https://picsum.photos/500/300?image=${selectedImg.id * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${selectedImg.id * 5 + 10}`"
                  class=""
                  max-height="432"
                  max-width="432"
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
                max-width="432"
              >
                <template
                  v-for="item in imgList"
                >
                  <v-card
                    class="elevation-0"
                    tile
                    color="#ffffff00"
                    :key="item.id"
                    @click="selectImg(item)"
                  >
                    <!-- style="border-width: 1px; border-style: solid; border-color: #cccccc;" -->
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${item.id * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${item.id * 5 + 10}`"
                      height="100px"
                      width="100px"
                      class="ma-1"
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
                  </v-card>
                </template>
              </v-card>
            </v-col>
            <v-divider vertical/>
          </v-row>
        </v-container>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'DetailItem',
  components: {
    // HelloWorld
  },
  mounted () {
  },
  data () {
    return {
      imgList: [
        {
          id: 1,
          src: '@/assets/e8d149d839d14346d2c14731f7f84f30.jpg'
        },
        {
          id: 2,
          src: '@/assets/julien.gif'
        },
        {
          id: 3,
          src: '@/assets/julien.gif'
        },
        {
          id: 4,
          src: '@/assets/julien.gif'
        },
        {
          id: 5,
          src: '@/assets/julien.gif'
        },
        {
          id: 6,
          src: '@/assets/julien.gif'
        }
      ],
      selectedImg: {
        id: 1,
        src: '@/assets/e8d149d839d14346d2c14731f7f84f30.jpg'
      },
      breadcrumbList: [
        {
          text: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  },
  methods: {
    selectImg (item) {
      this.selectedImg = item
    }
  }
}
</script>
