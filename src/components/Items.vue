<template>
  <v-container>
    <v-card
      class="d-flex flex-wrap px-2 justify-center"
      color=""
      flat
      tile
    >

      <template
        v-for="n in 100"
      >
        <v-hover
          v-slot="{ hover }"
          :key="n"
        >
          <v-card
            :elevation="hover ? 8 : 0"
            :class="{ 'on-hover': hover }"
            class="ma-1 my-2 hover-card"
            tile
            width="250px"
            height="300px"
          >
            <!-- :style="`border-top: ${hover ? 4 : 0}px solid #42A5F5;border-right: ${hover ? 4 : 0}px solid #42A5F5;border-bottom: ${hover ? 4 : 0}px solid #42A5F5;border-left: ${hover ? 4 : 0}px solid #42A5F5;`" -->
            <!-- <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="175px"
            > -->
            <v-img
              src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
              height="175px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="cardState"
              >
              </span>
            </v-img>
            <p class="cut-text ma-0 px-1 text-caption">
              [Quà Tết 2021] Túi Quà Tết Cao Cấp , Quà Tết Tân Sửu 2021, Hộp Quà Tết Cao Cấp, Hạt Dinh Dưỡng Cao Cấp - FAMINUTS249K03
            </p>
            <v-card-text class="px-0 pt-2">
              <v-row
                class="mx-1"
              >
                <v-rating
                  v-model="rating[n]"
                  :value="3"
                  color="blue"
                  dense
                  size="12"
                ></v-rating>

                <div class="text-caption grey--text ml-1">
                  4.5 (413)
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </template>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Item',

  data () {
    return {
      cardState: 'test',
      rating: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'New Releases',
          text: "It's New Release Friday",
          subtext: 'Newly released songs. Updated daily.',
          img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg'
        },
        {
          title: 'Rock',
          text: 'Greatest Rock Hits',
          subtext: 'Lose yourself in rock tunes.',
          img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg'
        }
      ],
      transparent: 'rgba(255, 255, 255, 0)'
    }
  },
  methods: {
    getImage () {
      // const min = 550
      // const max = 560
      return 666
      // return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 2000px;
}
.v-card {
  transition: opacity .2s ease-in-out;
}
.hover-card:not(.on-hover) {
  opacity: 0.85;
}
/* .hover-card {
  opacity: 1;
 } */
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
</style>
