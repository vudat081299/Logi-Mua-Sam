<template>
  <v-container id="login-form" class="fill-height">
    <v-row align="center" justify="center" no-gutters>
      <v-card width="450px" height="600px" class="rounded-lg" outlined>
        <v-row class="">
          <v-col cols="12" class="pt-6 pb-6">
            <v-card-text height="600px">
              <v-form class="signup-form-form" @submit.prevent="signin">
                <v-row class="justify-center my-4">
                  <img class="justify-center" width="60px" height="60px" alt="Vue logo" src="@/assets/logo.png">
                </v-row>
                <h1
                  class="text-center display-1 mb-10"
                >
                  Đăng nhập
                </h1>
                <v-col>
                  <v-text-field
                    v-model="email"
                    label="Gmail or phone"
                    type="text"
                    color="primary"
                    outlined
                  />
                  <v-text-field
                    v-model="password"
                    label="Enter your password"
                    type="password"
                    color="primary"
                    outlined
                  />
                  <a
                    href="#"
                    class="align-center font-weight-bold text-decoration-none primary--text"
                  >
                    <!-- text-decoration-none -->
                    Quên tài khoản?
                  </a>
                </v-col>
                <v-layout justify-center>
                  <p style="color: red;"> {{ messenger }} </p>
                </v-layout>
                <div class="text-center">
                          <!-- <a
                            class="mt-3 overline no-text-decoration"
                            :class="`${bgColor}--text`"
                            @click="forgetPass"
                          >
                            Quên mật khẩu?
                          </a> -->
                </div>
                    <v-spacer></v-spacer>
                <v-col>
                  <v-row>
                    <v-col cols="6">
                      <a
                        href="#"
                        class="align-center font-weight-bold text-decoration-none primary--text"
                      >
                        <!-- text-decoration-none -->
                        Tạo tài khoản
                      </a>
                    </v-col>
                    <v-col cols="6">
                      <v-row>
                        <v-spacer></v-spacer>
                        <v-btn
                          large
                          :color="buttonColor"
                          @click="login"
                          class="mr-3 elevation-0 primary--text"
                        >
                          Tiếp tục
                        </v-btn>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-form>
            </v-card-text>
          </v-col>
                  <!-- <v-col
                    cols="12"
                    md="4"
                    class="darken-2 vcenter"
                    :class="`${bgColor}`"
                  >
                    <div>
                      <v-card-text :class="`${fgColor}--text`">
                        <h1 class="text-center headline mb-3">No User?</h1>
                        <h5 class="text-center overline mb-3">
                          Please Sign Up to continue
                        </h5>
                      </v-card-text>
                      <div class="text-center mb-6">
                        <v-btn dark outlined @click="step = 2">Sign Up</v-btn>
                      </div>
                    </div>
                  </v-col> -->
        </v-row>
              <!--SignUp-->
              <!-- <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col
                    cols="12"
                    md="4"
                    class="darken-2 vcenter"
                    :class="`${bgColor}`"
                  >
                    <div>
                      <v-card-text :class="`${fgColor}--text`">
                        <h1 class="text-center headline mb-3">Already a user?</h1>
                        <h5 class="text-center overline mb-3">Please Sign In</h5>
                      </v-card-text>
                      <div class="text-center mb-6">
                        <v-btn dark outlined @click="step = 1">Sign In</v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="8" class=" pt-6 pb-6">
                    <v-card-text>
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                        Sign Up
                      </h1>
                      <v-form class="signup-form-form" @submit.prevent="signup">
                        <v-text-field
                          id="username"
                          v-model="username"
                          label="Username"
                          name="username"
                          append-icon="person"
                          type="text"
                        />
                        <v-text-field
                          id="email"
                          v-model="email"
                          label="eMail"
                          name="email"
                          append-icon="email"
                          type="email"
                        />
                        <v-text-field
                          id="password"
                          v-model="password"
                          label="Password"
                          name="password"
                          append-icon="lock"
                          type="password"
                        />
                        <div class="text-center mt-6">
                          <v-btn type="submit" large :color="bgColor" dark>
                            Sign Up</v-btn
                          >
                        </div>
                      </v-form>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item> -->
          </v-card>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  props: {
    majorColor: {
      type: String,
      default: 'blue'
    },
    typeColor: {
      type: String,
      default: 'darken-2'
    },
    buttonColor: {
      type: String,
      default: 'blue lighten-5'
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>
