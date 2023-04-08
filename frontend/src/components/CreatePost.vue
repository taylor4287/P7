<template>
  <section id="createPost">
    <div id="imageInput" class="border">
      <input
        @change="onFileSelected"
        ref="file"
        id="input"
        type="file"
        accept="image/*"
      />
      <img v-if="url" id="uploadImage" :src="url" />
    </div>
    <form @submit.prevent="post" id="inputText">
      <span>{{ error }}</span
      ><br />
      <h3>Title:</h3>
      <input
        class="border"
        v-model="title"
        name="title"
        type="text"
        placeholder="Input title here ..."
      /><br />
      <h4>Message:</h4>
      <textarea
        id="script"
        class="border"
        v-model="message"
        name="message"
        type="text"
        placeholder="Input message here ..."
        cols="10"
        rows="10"
        length="500"
      ></textarea
      ><br />
      <button id="post" class="postBtn">Post</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  beforeCreate () {
    const userId = localStorage.getItem('userId')
    if (!userId) {
      this.$router.push({ path: '/login' })
    }
  },
  data () {
    return {
      url: '',
      error: '',
      title: '',
      message: '',
      file: ''
    }
  },
  methods: {
    async post () {
      const token = JSON.parse(localStorage.getItem('token'))
      if (this.title === '') {
        this.error = 'Title Required'
      }
      if (this.message === '') {
        this.error = 'Message Required'
      }
      if (this.title === '' || this.message === '') {
        this.error = 'Title and Message Required'
      }
      const formData = new FormData()
      formData.append('mediaUrl', this.file)
      formData.append('title', this.title)
      formData.append('message', this.message)
      formData.append('userId', localStorage.getItem('userId'))
      try {
        const createPost = await axios.post(
          'http://localhost:3000/posts',
          {
            userId: localStorage.getItem('userId'),
            title: this.title,
            message: this.message,
            mediaUrl: this.file
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              // eslint-disable-next-line
              'Authorization': `Bearer ${token}`
            }
          }
        )
        if (createPost.status === 201) {
          console.log(createPost)
          this.$router.push({ path: '/' })
        }
      } catch (error) {
        this.errorMessage = error.message
        console.error('There was an error!', error)
      }
    },
    onFileSelected (e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    }
  }
}
</script>

<style lang="scss">
#createPost {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  height: 400px;
}
#imageInput {
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 40%;
  height: 100%;
  input {
    margin: auto;
    // display: none;
  }
}
#inputText {
  width: 40%;
  input,
  textarea {
    padding: 10px;
    width: 95.5%;
  }
}
#script {
  height: 40%;
  margin-bottom: 20px;
}
.postBtn {
  margin-left: 230px;
  width: 70px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
}
</style>
