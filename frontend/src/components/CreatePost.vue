<template>
    <section id="createPost">
        <div id="imageInput">
            <input @change="onFileSelected" ref="file" id="input" type="file" accept="image/*">
            <img v-if="url" id="uploadImage" :src="url">
        </div>
        <form @submit.prevent="post" id="inputText">
            <span>{{ error }}</span><br>
            <h3>Title:</h3>
            <input class="border" v-model="title" type="text" placeholder="Input title here ..."><br/>
            <h4>Message:</h4>
            <textarea id="script" class="border" v-model="message" type="text" placeholder="Input message here ..." cols="50" rows="10"></textarea><br/>
            <button v-on:click="post" id="post" class="postBtn">Post</button>
        </form>
    </section>
</template>

// delete button needs post model and user model
// need to figure out new posts
// authorization headers -> proj 6

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
      url: null,
      error: '',
      title: '',
      message: '',
      file: '',
      userId: ''
    }
  },
  methods: {
    async post () {
      if (this.title === '') {
        this.error = 'Title Required'
      }
      if (this.message === '') {
        this.error = 'Message Required'
      }
      const formData = new FormData()
      formData.append('mediaUrl', this.file)
      formData.append('title', this.title)
      formData.append('message', this.message)
      formData.append('userId', this.userId)
      const createPost = await axios.post('http://localhost:3000/posts', {
        title: this.title,
        message: this.message,
        userId: localStorage.getItem('userId'),
        formData
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(createPost)
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
        input, textarea {
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
