
<template>
    <section id="signUp">
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp" id="signUpForm">
            <span class="message">{{ error }}</span><br>
            <input type="text" v-model="form.firstName" placeholder="First Name"><br>
            <input type="text" v-model="form.lastName" placeholder="Last Name"><br>
            <input type="email" v-model="form.email" placeholder="Email"><br>
            <input type="password" v-model="form.password" placeholder="Create Password"><br>
            <input type="text" v-model="form.position" placeholder="Job Role"><br>
            <button type="button" id="post" class="postBtn" v-on:click="signUp">Sign Up</button>
            <router-link to="/logIn">Have an account?</router-link>
        </form>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      error: '',
      validMessage: '',
      form: {
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        password: ''
      }
    }
  },
  methods: {
    async signUp () {
      if (this.form.firstName === '' || this.form.lastName === '' || this.form.email === '' || this.form.password === '' || this.form.position === '') {
        this.error = 'Invalid form'
        return
      }

      this.error = ''

      const result = await axios.post('http://localhost:3000/users/signup', {
        firstname: this.form.firstName,
        lastname: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        position: this.form.position
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.warn(result)
      if (result.status === 201) {
        alert('Sign Up Done')
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>

<style lang="scss">
    #signUp {
        text-align: center;
        margin-top: 100px;
    }
    #signUpForm {
        width: 200px;
        margin: auto;
        padding:10px;
        border-style: solid;
        border-color: red;
        input {
            margin: 5px;
        }
        .postBtn {
            margin-left: 50px;
            width: 90px;
            height: 45px;
            padding: 15px;
            cursor: pointer;
        }
    }
</style>
