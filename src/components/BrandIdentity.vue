<template>
  <div style="display: flex; justify-content: center;
  align-items: center;">
    <img :class="leading" :width="size" :height="size" alt="Vue logo" src="@/assets/logo.png">
    <h2
      class="primary--text font-weight-regular"
    >
      LogiTech
    </h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BrandIdentity',
  props: {
    position: {
      type: String,
      default: 'justify-center'
    },
    leading: {
      type: String,
      default: 'ml-0 mr-2'
    },
    size: {
      type: String,
      default: '60'
    }
  },
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
