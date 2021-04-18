<template>
  <v-container id="login-form" class="">
    <v-row align="center" justify="center" no-gutters>
      <v-card
        :disabled="disabled"
        :loading="loading"
        max-width="1000px"
        min-width="1000px"
        width="1000px"
        height="650px"
        class="rounded-lg"
        outlined
      >
        <v-row class="">
          <v-col cols="8" class="">
            <v-stepper class="ma-1 elevation-0" v-model="e1">
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card-text>
                    <v-form
                      class="signup-form"
                      ref="signupForm1"
                      @submit.prevent="signin"
                    >
                      <v-row class="ma-4">
                        <v-col>
                          <BrandIdentity
                            :leading="'ml-2'"
                            :posiotion="'justify-left'"
                          />
                          <br /><br />
                          <h1 class="display-1">Tạo tài khoản LogiTech</h1>
                        </v-col>
                      </v-row>
                      <v-row class="ma-4">
                        <v-col cols="12">
                          <v-row class="py-0">
                            <v-col class="py-0" cols="4">
                              <v-text-field
                                outlined
                                dense
                                label="Họ"
                                :rules="firstNameRules"
                                v-model="firstName"
                              >
                              </v-text-field>
                            </v-col>
                            <v-col class="py-0 pl-0" cols="5">
                              <v-text-field
                                outlined
                                dense
                                label="Tên"
                                :rules="lastNameRules"
                                v-model="lastName"
                              >
                              </v-text-field>
                            </v-col>
                            <v-col class="py-0 pl-0" cols="3">
                              <v-select
                                :items="genderList"
                                label="Giới tính"
                                dense
                                outlined
                                v-model="gender"
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="py-0">
                            <v-col class="py-0" cols="12">
                              <v-text-field
                                outlined
                                dense
                                label="Tài khoản"
                                :rules="accountRules"
                                v-model="account"
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="py-0">
                            <v-col class="py-0" cols="12">
                              <v-text-field
                                outlined
                                dense
                                label="Gmail"
                                suffix="@gmail.com"
                                :rules="gmailRules"
                                v-model="gmail"
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="6">
                              <v-text-field
                                v-model="password"
                                :type="showPassword ? 'text' : 'password'"
                                name="input-10-1"
                                label="Mật khẩu"
                                hint="Sử dụng 8 ký tự trở lên và kết hợp chữ cái, chữ số và biểu tượng"
                                counter
                                persistent-hint
                                dense
                                outlined
                                :rules="passwordRules"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field
                                :type="showPassword ? 'text' : 'password'"
                                name="input-10-1"
                                label="Xác nhận"
                                counter
                                persistent-hint
                                dense
                                outlined
                                :rules="confirmPasswordRules"
                                v-model="confirmPassword"
                                v-on:keyup.enter="nextStep"
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
                              <br />
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
                                  @click="register()"
                                  class="elevation-0"
                                >
                                  Đăng ký
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
                  <v-form
                    class="signup-form"
                    ref="signupForm2"
                    @submit.prevent="signin"
                  >
                    <v-card-text>
                      <v-row class="ma-4">
                        <v-col>
                          <v-row class="justify-left align-center">
                            <img
                              class="ml-1"
                              width="60px"
                              height="60px"
                              alt="Vue logo"
                              src="@/assets/logo.png"
                            />
                            <h1
                              class="primary--text font-weight-regular text-center"
                            >
                              LogiTech
                            </h1>
                          </v-row>
                          <br /><br />
                          <h1 class="display-1">Xác minh số điện thoại</h1>
                          <h2 class="mt-4 subtitle-1">
                            Để bảo mật cho bạn, LogiTech muốn đảm bảo rằng đó
                            thực sự là bạn. LogiTech sẽ gửi một tin nhắn văn bản
                            cùng mã xác minh gồm 6 chữ số. Có áp dụng cước phí
                            chuẩn.
                          </h2>
                        </v-col>
                      </v-row>
                      <v-row class="ma-4">
                        <v-col cols="12">
                          <v-row class="py-0">
                            <v-col class="py-0" cols="4">
                              <v-text-field
                                v-model="countryCode"
                                outlined
                                dense
                                label="Mã quốc gia"
                                :rules="countryCodeRules"
                                prefix="+"
                              >
                              </v-text-field>
                            </v-col>
                            <v-col class="py-0" cols="8">
                              <v-text-field
                                v-model="phonenumber"
                                outlined
                                dense
                                label="Số điện thoại"
                                :rules="phonenumberRules"
                                v-on:keyup.enter="nextStep"
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="" cols="12">
                              <br />
                              <v-row class="mx-0">
                                <v-btn
                                  large
                                  text
                                  color="primary"
                                  @click="previousStep()"
                                  class="elevation-0 primary--text"
                                >
                                  Trở lại
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  large
                                  color="info"
                                  @click="nextStep()"
                                  class="elevation-0"
                                >
                                  Tiếp theo
                                </v-btn>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-form>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-form
                    class="signup-form"
                    ref="signupForm3"
                    @submit.prevent="signin"
                  >
                    <v-card-text>
                      <v-row class="ma-4">
                        <v-col>
                          <v-row class="justify-left align-center">
                            <img
                              class="ml-1"
                              width="60px"
                              height="60px"
                              alt="Vue logo"
                              src="@/assets/logo.png"
                            />
                            <h1
                              class="primary--text font-weight-regular text-center"
                            >
                              LogiTech
                            </h1>
                          </v-row>
                          <br /><br />
                          <h1 class="display-1">Xác minh số điện thoại</h1>
                          <h2 class="mt-4 subtitle-1">
                            Để bảo mật cho bạn, LogiTech muốn đảm bảo rằng đó
                            thực sự là bạn. LogiTech sẽ gửi một tin nhắn văn bản
                            cùng mã xác minh gồm 6 chữ số. Có áp dụng cước phí
                            chuẩn.
                          </h2>
                        </v-col>
                      </v-row>
                      <v-row class="ma-4">
                        <v-col cols="12">
                          <v-row class="py-0">
                            <v-col class="py-0" cols="5">
                              <v-text-field
                                v-model="userPhoneNumber"
                                prefix="+"
                                outlined
                                dense
                                disabled
                                label="Số điện thoại"
                              >
                              </v-text-field>
                            </v-col>
                            <v-col class="py-0" cols="7">
                              <v-text-field
                                v-model="confirmCode"
                                outlined
                                dense
                                label="Nhập mã xác minh"
                                hint="Nhập mã xác minh chúng tôi đã gửi tới số điện thoại của bạn"
                                counter
                                persistent-hint
                                :rules="confirmCodeRules"
                                v-on:keyup.enter="nextStep"
                              >
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="" cols="12">
                              <br />
                              <v-row class="mx-0">
                                <v-btn
                                  large
                                  text
                                  color="primary"
                                  @click="previousStep()"
                                  class="elevation-0 primary--text"
                                >
                                  Trở lại
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                  large
                                  color="info"
                                  @click="nextStep()"
                                  class="elevation-0"
                                >
                                  Xác minh
                                </v-btn>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-form>
                </v-stepper-content>
                <LoadingCircleOverlay :dialog="isLoadingDialog" />
              </v-stepper-items>
            </v-stepper>
          </v-col>
          <v-col cols="4" class="mx-16 mr-n16">
            <v-img :src="require('../assets/log.svg')" contain height="650px" />
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <!-- <div class="panels-container">
    </div> -->
    <v-dialog max-width="500px" v-model="dialogRegister">
      <v-card>
        <v-toolbar dark dense flat>
          <v-toolbar-title class="white--text">Thông báo</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-4">{{ text }}</v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="closeDialog">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BrandIdentity from "@/components/BrandIdentity.vue";
import LoadingCircleOverlay from "@/components/LoadingCircleOverlay.vue";
import axios from "axios";

export default {
  name: "SignUp",
  props: {
    majorColor: {
      type: String,
      default: "blue",
    },
    typeColor: {
      type: String,
      default: "darken-2",
    },
    buttonColor: {
      type: String,
      default: "blue lighten-5",
    },
  },
  components: {
    BrandIdentity,
    LoadingCircleOverlay,
  },
  computed: {
    signupForm1() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        gmail: this.gmail,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
    },
    signupForm2() {
      return {
        countryCode: this.countryCode,
        phonenumber: this.phonenumber,
      };
    },
    signupForm3() {
      return {
        // userPhoneNumber: this.userPhoneNumber,
        confirmCode: this.confirmCode,
      };
    },
    userPhoneNumber() {
      return this.countryCode + " " + this.phonenumber;
    },
  },
  data() {
    return {
      genderList: ["Nam", "Nữ", "Khác"],

      valid: false,
      showPassword: false,
      isLoadingDialog: false,
      disabled: false,
      loading: false,
      dialogRegister: false,
      signUpStatus: false,
      account: "",
      text: "",

      e1: 1,
      firstName: "",
      lastName: "",
      gender: "Nam",
      gmail: "",
      password: "",
      confirmPassword: "",
      countryCode: "84", // Step 2
      phonenumber: "",
      // userPhoneNumber: '+84 899 081299', // Step 3
      confirmCode: "",

      // Rules
      firstNameRules: [
        (v) => !!v || "Không được để trống",
        (v) =>
          /[!@#$%^&*,`~'")(+=_-]/.test(v) === false ||
          "Không được chứa ký tự đặc biệt",
      ],
      lastNameRules: [
        (v) => !!v || "Không được để trống",
        (v) =>
          /[!@#$%^&*,`~'")(+=_-]/.test(v) === false ||
          "Không được chứa ký tự đặc biệt",
      ],
      gmailRules: [
        (v) => !!v || "Không được để trống",
        (v) =>
          /[!#$%^&*,`~'")(+=_-]/.test(v) === false ||
          "Không được chứa ký tự đặc biệt",
      ],
      accountRules: [
        (v) => !!v || "Không được để trống",
        (v) =>
          /[!#$%^&*,`~'")(+=_-]/.test(v) === false ||
          "Không được chứa ký tự đặc biệt",
      ],
      passwordRules: [
        (v) => !!v || "Không được để trống",
        (v) => (v != null && v.length >= 8) || "Mật khẩu quá ngắn",
        (v) => (v != null && v.length <= 32) || "Mật khẩu quá dài",
        (v) => /\d/.test(v) || "Mật khẩu cần chứa số",
        (v) => /[A-Z]/.test(v) || "Mật khẩu cần ký tự in hoa",
        (v) =>
          /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(v) ||
          "Mật khẩu cần ký tự đặc biệt",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Không được để trống",
        (v) => v === this.password || "Mật khẩu xác nhận không khớp",
      ],
      countryCodeRules: [
        (v) => !!v || "Không được để trống",
        (v) =>
          /[!@#$%^&*,`~'")(+=_-]/.test(v) === false ||
          "Không được chứa ký tự đặc biệt",
      ],
      phonenumberRules: [
        (v) => !!v || "Không được để trống",
        (v) =>
          /[!@#$%^&*,`~'")(+=_-abcdefghijklmnopqrstvwxyz ABCDEFGHIJKLMNOPQRSTVWXYZ]/.test(
            v
          ) === false || "Không được chứa ký tự đặc biệt hoặc chữ cái",
        (v) => (v.length < 11 && v.length > 8) || "Số điện thoại không hợp lệ",
      ],
      confirmCodeRules: [
        (v) => !!v || "Không được để trống",
        (v) =>
          /[!@#$%^&*,`~'")(+=_-abcdefghijklmnopqrstvwxyz ABCDEFGHIJKLMNOPQRSTVWXYZ]/.test(
            v
          ) === false || "Không được chứa ký tự đặc biệt hoặc chữ cái",
        (v) => v.length <= 6 || "Bạn đã nhập sai mã xác minh",
      ],
    };
  },
  methods: {
    // Common func
    closeDialog() {
      if (this.signUpStatus) {
        this.dialogRegister = false;
        (this.firstName = null),
          (this.lastName = null),
          (this.account = null),
          (this.gmail = null),
          (this.password = null),
          (this.confirmPassword = null);

        this.$refs.signupForm1.reset();
      } else {
         this.dialogRegister = false;
      }
    },
    validate() {
      if (this.e1 === 1) {
        this.$refs.signupForm1.validate();
        return this.$refs.signupForm1.validate();
      } else if (this.e1 === 2) {
        this.$refs.signupForm2.validate();
        return this.$refs.signupForm2.validate();
      } else {
        this.$refs.signupForm3.validate();
        return this.$refs.signupForm3.validate();
      }
    },

    // Step
    confirming() {
      // this.isLoadingDialog = !this.isLoadingDialog
      this.disabled = true;
      this.loading = true;
      setTimeout(() => {
        this.disabled = false;
        this.loading = false;
        localStorage.setItem("didLogin", "1");
        this.$router.push("/").catch(() => {});
      }, 2000);
    },
    login() {
      this.$router.push("/login").catch(() => {});
    },
    previousStep() {
      if (this.e1 === 2) {
        this.$refs.signupForm2.reset();
      } else if (this.e1 === 3) {
        this.$refs.signupForm3.reset();
      }
      this.e1 -= 1;
    },
    nextStep() {
      if (!this.validate()) {
        return;
      }
      if (this.e1 !== 3) {
        this.e1 += 1;
      } else {
        this.confirming();
      }
    },
    async register() {
      if (this.validate()) {
        // axios
        //   .post(this.$store.state.url + "register", {
        //     username: this.account,
        //     password: this.password,
        //     name: this.firstName + " " + this.lastName,
        //     email: this.gmail,
        //     permission: "create, update",
        //   },
        //   {
        //     headers: {
        //       "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     if (response.status === 200) {
        //       this.text = "Đăng ký thành công!";
        //       this.dialogRegister = true;
        //     } else {
        //       this.text = "Có lỗi xảy ra!";
        //       this.dialogRegister = true;
        //     }
        //   });
        const params = new URLSearchParams();
        params.append("username", this.account);
        params.append("password", this.password);
        params.append("name", this.firstName + " " + this.lastName);
        params.append("email", this.gmail);
        params.append("permission", "create, update");

        const response = await this.$http.post("public/register", params);
        console.log(response);
        if (response.data.status === 200) {
          this.text = "Đăng ký thành công!";
          this.signUpStatus = true;
          this.dialogRegister = true;
        } else {
          this.text = response.data.message;
          this.dialogRegister = true;
        }
      }
    },
  },
};
</script>
<style scoped>
.colForInputTextFieldMP {
  margin: 0;
  padding: 0;
}

.container:before {
  content: "";
  position: absolute;
  height: 1500px;
  width: 1500px;
  top: -10%;
  left: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 0;
}
</style>
