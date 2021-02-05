<template>
<v-container>
  <v-card
    class="d-flex flex-wrap px-2 justify-center"
    color="grey lighten-2"
    flat
    tile
  >
    <v-card
      class="ma-2"
      outlined
      tile
      width="200px"
      height="250px"
      v-for="n in 100"
      :key="n"
    >
      <v-img
        :src="`https://picsum.photos/200/300?image=${getImage()}`"
        height="150px"
      >
        <span
          class="headline white--text pl-4 pt-4 d-inline-block"
          v-text="card"
        ></span>
      </v-img>
    </v-card>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: 'Item',

  data () {
    return {
    }
  },
  methods: {
    getImage () {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 2000px;
}
</style>
