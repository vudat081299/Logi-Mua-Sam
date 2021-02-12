<template>
  <v-container id="login-form" class="">
    <v-row align="center" justify="center" no-gutters>
      <v-card :disabled="disabled" :loading="loading" width="1000px" height="650px" class="rounded-lg" outlined>
        <v-row class="">
          <v-col cols="8" class="">
            <v-stepper class="ma-1 elevation-0" v-model="e1">
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card-text>
                    <v-form class="signup-form-form" @submit.prevent="signin">
                      <v-row class="ma-4">
                        <v-col>
                          <BrandIdentity :leading="'ml-2'" :posiotion="'justify-left'"/>
                          <br/><br/>
                          <h1
                            class="display-1"
                          >
                            Tạo tài khoản LogiTech
                          </h1>
                        </v-col>
                      </v-row>
                      <v-row class="ma-4">
                        <v-col cols="12">
                          <v-row class="py-0">
                            <v-col class="py-0" cols="4">
                              <v-text-field outlined dense label="Họ">
                              </v-text-field>
                            </v-col>
                            <v-col class="py-0" cols="4">
                              <v-text-field outlined dense label="Tên">
                              </v-text-field>
                            </v-col>
                            <v-col class="py-0" cols="4">
                              <v-select
                                :items="genderList"
                                label="Giới tính"
                                dense
                                outlined
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="py-0">
                            <v-col class="py-0" cols="12">
                              <v-text-field outlined dense label="Email" suffix="@gmail.com">
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="6">
                              <v-text-field
                                v-model="password1"
                                :type="showPassword ? 'text' : 'password'"
                                name="input-10-1"
                                label="Mật khẩu"
                                hint="Sử dụng 8 ký tự trở lên và kết hợp chữ cái, chữ số và biểu tượng"
                                counter
                                persistent-hint
                                dense outlined
                              ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field
                                v-model="password2"
                                :type="showPassword ? 'text' : 'password'"
                                name="input-10-1"
                                label="Xác nhận"
                                counter
                                persistent-hint
                                dense outlined
                              ></v-text-field>
                            </v-col>
                            <v-col class="pt-0 mt-n4" cols="12">
                              <v-checkbox
                                v-model="showPassword"
                                label="Hiển thị mật khẩu"
                                color="primary"
                              ></v-checkbox>
                            </v-col>
                            <v-col class="" cols="12">
                              <br/>
                              <v-row class="mx-0">
                                <v-btn
                                  large
                                  text
                                  color="primary"
                                  @click="login"
                                  class="elevation-0 primary--text"
                                >
                                  Đăng nhập
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  large
                                  color="info"
                                  @click="e1 = 2"
                                  class="elevation-0"
                                >
                                  Tiếp theo
                                </v-btn>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card-text>
                    <v-form class="signup-form-form" @submit.prevent="signin">
                      <v-row class="ma-4">
                        <v-col>
                          <v-row class="justify-left align-center">
                            <img class="ml-1" width="60px" height="60px" alt="Vue logo" src="@/assets/logo.png">
                            <h1
                              class="primary--text font-weight-regular text-center"
                            >
                              LogiTech
                            </h1>
                          </v-row>
                          <br/><br/>
                          <h1
                            class="display-1"
                          >
                            Xác minh số điện thoại
                          </h1>
                          <h2 class="mt-4 subtitle-1">
                            Để bảo mật cho bạn, LogiTech muốn đảm bảo rằng đó thực sự là bạn. LogiTech sẽ gửi một tin nhắn văn bản cùng mã xác minh gồm 6 chữ số. Có áp dụng cước phí chuẩn.
                          </h2>
                        </v-col>
                      </v-row>
                      <v-row class="ma-4">
                        <v-col cols="12">
                          <v-row class="py-0">
                            <v-col class="py-0" cols="4">
                              <v-text-field v-model="countryCode" outlined dense label="Mã quốc gia">
                              </v-text-field>
                            </v-col>
                            <v-col class="py-0" cols="8">
                              <v-text-field v-model="phonenumber" outlined dense label="Số điện thoại">
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="" cols="12">
                              <br/>
                              <v-row class="mx-0">
                                <v-btn
                                  large
                                  text
                                  color="primary"
                                  @click="e1 = 1"
                                  class="elevation-0 primary--text"
                                >
                                  Trở lại
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  large
                                  color="info"
                                  @click="e1 = 3"
                                  class="elevation-0"
                                >
                                  Tiếp theo
                                </v-btn>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-stepper-content>

                <v-stepper-content step="3">
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-col>
            <v-col cols="4" class="mx-16 mr-n16">
              <v-img
                :src="require('../assets/log.svg')"
                contain
                height="650px"
              />
            </v-col>
        </v-row>
      </v-card>
    </v-row>
    <!-- <div class="panels-container">
    </div> -->
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BrandIdentity from '@/components/BrandIdentity.vue'

export default {
  name: 'SignUp',
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
    BrandIdentity
  },
  data () {
    return {
      genderList: [
        'Nam',
        'Nữ',
        'Khác'
      ],
      showPassword: false,
      password1: '',
      password2: '',
      e1: 1,
      countryCode: '+84',
      phonenumber: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>
<style scoped>
.colForInputTextFieldMP {
  margin: 0;
  padding: 0;
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  left: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 0;
}
</style>
