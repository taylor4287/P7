<template>
    <section id="createPost">
        <div id="imageInput">
            <input @change="onFileSelected" id="input" type="file" accept="image/*">
            <img v-if="url" id="uploadImage" :src="url">
        </div>
        <form @submit.prevent="post" id="inputText">
            <span class="message">{{ error }}</span><br>
            <h3>Title:</h3>
            <input v-model="title" type="text" placeholder="Input title here ..."><br/>
            <h4>Description:</h4>
            <textarea id="script" type="text" placeholder="Input description here ..." cols="50" rows="10"></textarea><br/>
            <button v-on:click="post" id="post" class="postBtn">Post</button>
        </form>
    </section>
</template>

// delete button needs post model and user model
// need to figure out new posts
// authorization headers -> proj 6

<script>
export default {
  data () {
    return {
      url: null,
      error: '',
      title: ''
    }
  },
  methods: {
    async post () {
      if (this.title === '') {
        this.error = 'Title Required'
      }
    },
    onFileSelected (e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
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
        border-style: solid;
        border-color: black;
        border-style: inset;
        border-width: 2px;
        border-radius: 10px;
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
            border-radius: 10px;
            border-style: inset;
            border-width: 2px;
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
