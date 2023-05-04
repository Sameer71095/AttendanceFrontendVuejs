<template>
  <div>

    <div class="container-fluid">
      <div class="row ">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img class="img-fluid for-light" src="../assets/images/logo/logo.png" alt="looginpage" />
                  <img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage" />
                </a>
              </div>
              <div class="login-main">
                <form class="theme-form">
                  <h4>Sign in to account</h4>
                  <p>Enter your email & password to login</p>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input class="form-control" type="email" required="" placeholder="Test@gmail.com"
                      v-model="user.email.value">
                    <span class="validate-error" v-if="!user.email.value || !validEmail(user.email.value)">{{
                      user.email.errormsg }}</span>

                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <div class="form-input position-relative">
                      <input class="form-control" type="password" name="login[password]" required=""
                        placeholder="*********" v-model="user.password.value">
                      <span class="validate-error" v-if="user.password.value.length < 7">{{ user.password.errormsg
                      }}</span>

                      <div class="show-hide"><span class="show"> </span></div>
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox">
                      <label class="text-muted" for="checkbox1">Remember password</label>
                    </div><router-link class="link" to="/authentication/forgetpassword"> Forgot password?</router-link>
                    <div class="text-end mt-3">
                      <button class="btn btn-primary btn-block w-100" type="submit" @click.prevent="login">Sign
                        in</button>

                    </div>
                  </div>
                  <!-- <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login"
                        target="_blank"><i class="txt-linkedin" data-feather="linkedin"></i> LinkedIn </a><a
                        class="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank"><i
                          class="txt-twitter" data-feather="twitter"></i>twitter</a><a class="btn btn-light"
                        href="https://www.facebook.com/" target="_blank"><i class="txt-fb"
                          data-feather="facebook"></i>facebook</a></div>
                  </div>
                  <p class="mt-4 mb-0 text-center">Don't have account?<a class="ms-2" href="sign-up.html">Create
                      Account</a></p> -->
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

import {baseApiURL } from '../constants/config';


export default {
  name: 'login',
  data() {
    return {

      result: { email: '', password: '' },

      user: {
        email: {
          value: 'sameer71095@gmail.com',
          errormsg: ''
        },
        password: {
          value: 'm.sameer',
          errormsg: ''
        }
      },
    logging: false
    };
  },

  created() {

  },

  methods: {
    async login() {
      if (!this.user.password.value || this.user.password.value.length < 7) {
        this.user.password.errormsg = 'min length 7'
      } else { this.user.password.errormsg = '' }

      if (!this.user.email.value) {
        this.user.email.errormsg = 'empty not allowed'
      } else if (!this.validEmail(this.user.email.value)) {
        this.user.email.errormsg = 'Valid email required.'
      }
      else {
        this.user.email.errormsg = ''
      }
      if (!this.user.email.errormsg && !this.user.password.errormsg) {
      try {
        const response = await axios.post(baseApiURL+'/Employer/Login', {
          email: this.user.email.value,
          password: this.user.password.value,
        },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });

        if (response.data.isSuccess) {
          // Save token to localStorage (or any other storage you'd like to use)
          localStorage.setItem('authToken', response.data.data.token);

 this.logging = true
 this.$nextTick(() => {
  this.$router.push('/');
});


        } else {
          // Display the response message
        // Display the response message using SweetAlert
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: response.data.message,
  });
        }
      } catch (error) {
        // Handle any errors from the API call
        
    // console.error('API call failed:', error);
    // console.log('Error message:', error.message);
    // console.log('Error response:', error.response);
    // console.log('Error request:', error.request);
    // console.log('Error config:', error.config);
    Swal.fire({
  icon: 'error',
  title: 'An error occurred',
  text: 'Please try again.',
});
      }
    }


      
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  },
};
</script>