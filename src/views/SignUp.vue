<template>
  <v-container id="login-form" class="fill-height">
    <v-row align="center" justify="center" no-gutters>
      <v-card :disabled="disabled" :loading="loading" width="450px" height="600px" class="rounded-lg" outlined>
        <v-row class="">
          <v-col cols="12" class="pt-6 pb-6">
            <v-card-text>
              <v-form class="signup-form-form" @submit.prevent="signin">

                <v-col>
                  <v-row class="justify-left align-center my-4">
                    <img width="60px" height="60px" alt="Vue logo" src="@/assets/logo.png">
                    <h1
                      class="primary--text font-weight-regular text-center ml-2"
                    >
                      LogiTech
                    </h1>
                  </v-row>
                </v-col>
              </v-form>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SignUp',
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
