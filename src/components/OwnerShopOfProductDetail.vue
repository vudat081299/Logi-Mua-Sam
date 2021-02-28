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
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="overline mb-4">
          OVERLINE
        </div> -->
        <v-list-item-title class="headline mb-1">
          LogiTech Shop
        </v-list-item-title>
        <v-list-item-subtitle>
          $ • Viet Nam, Electrical Shop
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <!-- <v-row
            align="center"
            class="mx-0"
          > -->
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text">
              (413 đánh giá)
            </div>
          <!-- </v-row> -->
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img
          height="150"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        >
        </v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
      <!-- <v-card-title>LogiTech Shop</v-card-title> -->
      <span
        class="headline white--text pl-4 pt-4 d-inline-block"
      >
        LogiTech Shop
      </span>
    </v-img>

    <v-card-text>
      <v-row
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

        <div class="grey--text ml-4">
          (413 đánh giá)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        $ • Viet Nam, Electrical Shop
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
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
export default {
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
