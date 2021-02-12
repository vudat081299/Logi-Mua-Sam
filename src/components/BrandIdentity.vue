<template>
  <v-row :class="`${position} align-center`">
    <img :class="leading" width="60px" height="60px" alt="Vue logo" src="@/assets/logo.png">
    <h1
      class="primary--text font-weight-regular text-center"
    >
      LogiTech
    </h1>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BrandIdentity',
  props: ['position', 'leading'],
  components: {
  },
  data () {
    return {
    }
  },
  watch: {
  }
}
</script>
