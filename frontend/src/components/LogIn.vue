<template>
  <main>
    <section id="login">
      <h2 id="loginTitle">Login</h2>
      <form @submit.prevent="login" id="loginForm">
        <span class="message">{{ error }}</span
        ><br />
        <label for="email">Email:</label><br />
        <input v-model="form.email" type="email" /><br />
        <label for="password">Password:</label><br />
        <input v-model="form.password" type="password" /><br />
        <button id="post" class="submitBtn" type="button" v-on:click="login">
          Submit
        </button>
      </form>
      <router-link id="link" to="/signup">Create New Account</router-link>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      error: '',
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      // invalid form
      if (this.form.email === '' || this.form.password === '') {
        this.error = 'Invalid form'
        return
      }
      this.error = ''
      // grabbing correct email and password
      try {
        const response = await axios.post('http://localhost:3000/users/login', {
          email: this.form.email,
          password: this.form.password
        })
        console.warn(response)
        if (response.status === 200) {
          localStorage.setItem('userId', JSON.stringify(response.data.userId))
          localStorage.setItem('token', JSON.stringify(response.data.token))
          this.$router.push({ path: '/' })
        } else {
          this.error = 'Please enter correct email and password'
        }
      } catch {
        this.error = 'Please enter correct email and password'
      }
    }
  },
  mounted () {
    // seeing if user is logged in
    const userId = JSON.parse(localStorage.getItem('userId'))
    if (userId) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
#login {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#loginForm {
  width: 200px;
  height: 190px;
  padding: 10px;
  margin: auto;
  margin-bottom: 20px;
  border-style: solid;
  border-color: red;
  label,
  input {
    margin: 10px;
    width: 170px;
  }
}
.submitBtn {
  margin-left: 60px;
  width: 80px;
  height: 50px;
  padding: 15px;
  cursor: pointer;
}
</style>
