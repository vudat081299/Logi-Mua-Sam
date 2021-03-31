<template>
<v-container class="lighten-5 fill-height" align-start>
    <v-row no-gutters>
      <v-col
        cols="3"
        xs="12"
      >
        <v-row
          class="justify-center"
        >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
        <div>
          <v-img
            width="200px"
            height="200px"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </div>
        </v-row>

      </v-col>
      <v-col
        cols="9"
        xs="12"
      >
        <v-row
          class="justify-center"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Main',
  components: {
    // HelloWorld
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
