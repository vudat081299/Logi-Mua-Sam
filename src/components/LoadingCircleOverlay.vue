<template>
  <div class="text-center">
    <!-- <v-dialog persistent fullscreen v-model="min" backGroundColor="#FFFFFF"> -->
    <!-- <v-overlay :value="min" color="#036358"> -->
    <v-overlay :value="min" color="#033058">
      <div class="half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
      <!-- <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular> -->
      <!-- <div id="wrapper" height="100%">
        <img id="wrapper" :height="h" :width="w" float alt="Vue logo" src="@/assets/99-comet-800x600.gif">
      </div> -->
    </v-overlay>
    <!-- </v-dialog> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LoadingCircleOverlay',
  props: ['dialog'],
  components: {
  },
  data () {
    return {
      min: false
    }
  },
  computed: {
    h () {
      return window.innerHeight
    },
    w () {
      return window.innerWidth
    }
  },
  watch: {
    dialog (val) {
      // if (val === true) {
      this.min = val
      // } else {
      return setTimeout(() => {
        this.min = false
      }, 2000)
      // }
      // val && setTimeout(() => {
      //   this.min = false
      // }, 2000)
    }

    //   dialog (val) {
    //     val && setTimeout(() => {
    //       this.min = false
    //     }, 2000)
    //   }
  }
}
</script>
<style scoped>
.half-circle-spinner, .half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #ffffff;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #ffffff;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);

  }
  100% {
    transform: rotate(360deg);
  }
}
html, body {
  height: 100%;
  margin: 0;
}

#wrapper {
  min-height: 100%;
}
</style>
