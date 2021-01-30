<template>
  <v-navigation-drawer
    app
    right
    permanent
    clipped
    floating
  >
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="elevation-0 deep-purple--text text--accent-4">
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'RightNavigationDrawApp',
  components: {
  },
  data () {
    return {
      group: null
    }
  },
  watch: {
    group () {
    }
  }
}
</script>
