<template>
  <v-container id="form" class="">
    <v-row align="center" justify="center" no-gutters>
      <v-card :disabled="disabled" :loading="loading" width="450px" height="600px" class="rounded-lg" outlined>
        <v-row class="">
          <v-col cols="12" class="pt-6 pb-6">
            <v-card-text>
              <v-form class="login-form" ref="loginForm" @submit.prevent="signin">
                <!-- <v-row class="justify-center align-center my-4">
                  <img width="60px" height="60px" alt="Vue logo" src="@/assets/logo.png">
                  <h1
                    class="primary--text font-weight-regular text-center ml-2"
                  >
                    LogiTech
                  </h1> -->
                <!-- </v-row> -->
                <BrandIdentity :leading="'ml-n2'" class="my-4" :position="'justify-center'"/>
                <h1
                  class="text-center display-1 mb-10"
                >
                  Đăng nhập
                </h1>
                <v-col>
                  <v-text-field
                    v-model="account"
                    label="Gmail hoặc số điện thoại"
                    type="text"
                    color="primary"
                    outlined
                    :rules="accountRules"
                  />
                  <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    name="input-10-2"
                    value="wqfasds"
                    class="input-group--focused"
                    @click:append="showPassword = !showPassword"
                    v-model="password"
                    label="Nhập mật khẩu của bạn"
                    color="primary"
                    outlined
                    v-on:keyup.enter="login"
                    :rules="passwordRules"
                  />
                  <a
                    href="/"
                    class="align-center font-weight-bold text-decoration-none primary--text"
                  >
                    <!-- text-decoration-none -->
                    Quên tài khoản hoặc mật khẩu?
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
                <v-spacer/>
                <v-col>
                  <br/><br/><br/>
                  <v-row class="align-center">
                      <a
                        href="/signup"
                        class="ml-3 align-center font-weight-bold text-decoration-none primary--text"
                      >
                        <!-- text-decoration-none -->
                        Tạo tài khoản
                      </a>
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
    <NotificationDialog @hide="hideNotificationDialog"
      :title='titleNotificationDialog'
      :content='contentNotificationDialog'
      :dialog='notificationDialog'/>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NotificationDialog from '@/components/NotificationDialog.vue'
import BrandIdentity from '@/components/BrandIdentity.vue'

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
    NotificationDialog,
    BrandIdentity
  },
  computed: {
    loginForm () {
      return {
        account: this.account,
        password: this.password
      }
    }
  },
  data () {
    return {
      usingDevAccount: true,

      // Reactive login form
      loading: false,
      disabled: false,
      showPassword: false,

      // Dialog
      notificationDialog: false,

      // Dialog content
      titleNotificationDialog: '',
      contentNotificationDialog: '',

      // Data
      account: '',
      password: '',
      messenger: '',

      // Rules
      accountRules: [
        v => !!v || 'Không được để trống',
        v => (/[!@#$%^&*,`~'")(+=_-]/.test(v) === false) || 'Tài khoản không chứa ký tự đặc biệt'
      ],
      passwordRules: [
        v => !!v || 'Không được để trống',
        v => (/[!@#$%^&*, `~'")(+=_-]/.test(v) === false) || 'Mật khẩu chứa ký tự đặc biệt'
      ]
    }
  },
  methods: {
    validate () {
      this.$refs.loginForm.validate()
      return this.$refs.loginForm.validate()
    },
    login () {
      if (!this.validate()) {
        return
      }
      this.loading = true
      this.disabled = true
      if (this.usingDevAccount) {
        if (this.account === 'vudat81299@gmail.com' && this.password === 'vudat81299') {
          localStorage.setItem('didLogin', '1')
          this.$router.push('/').catch(() => {})
        } else {
          // this.notificationDialogAction('Lỗi đăng nhập', 'Bạn đã nhập sai tài khoản hoặc mật khẩu!')
        }
      } else {
        localStorage.setItem('didLogin', '1')
        this.$router.push('/').catch(() => {})
      }
      setTimeout(() => {
        this.loading = false
        this.disabled = false
        this.notificationDialogAction('Lỗi đăng nhập', 'Bạn đã nhập sai tài khoản hoặc mật khẩu!')
      }, 2000)
    },
    check () {
      localStorage.setItem('didLogin', '0')
    },
    notificationDialogAction (title, content) {
      this.notificationDialog = true
      this.titleNotificationDialog = title
      this.contentNotificationDialog = content
    },
    hideNotificationDialog () {
      this.notificationDialog = false
    }
  }
}
</script>
