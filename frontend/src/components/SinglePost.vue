<template>
    <div id="singlePostView">
        <div v-if="video" id="VideoImg" class="border">
          <video id="video" width="400" height="500" :src="post.mediaUrl" controls>
            <source :src="post.mediaUrl" type="video/*">
            Your browser does not support the video tag.
          </video>
        </div>
        <div v-else-if="image" id="postImg" class="border">
          <img :src="post.mediaUrl" type="image/*"/>
        </div>
        <div>
            <h1 id="title" class="border">{{ post.title }}</h1>
            <p id="message" class="border">{{ post.message }}</p>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
export default {
  data () {
    return {
      id: this.$route.params.id,
      post: {}
    }
  },
  beforeCreate () {
    const userId = localStorage.getItem('userId')
    if (!userId) {
      this.$router.push({ path: '/login' })
    }
  },
  async mounted () {
    const token = JSON.parse(localStorage.getItem('token'))
    const userId = JSON.parse(localStorage.getItem('userId'))
    await axios.get('http://localhost:3000/posts/' + this.id, {
      headers: {
        // eslint-disable-next-line
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response)
        this.post = response.data
        if (this.post.mediaUrl === null) {
          this.video = false
          this.image = false
        } else if (this.post.mediaUrl.includes('jpeg') || this.post.mediaUrl.includes('jpg') || this.post.mediaUrl.includes('webp') || this.post.mediaUrl.includes('gif')) {
          this.video = false
          this.image = true
        } else if (this.post.mediaUrl.includes('mp4') || this.post.mediaUrl.includes('oog') || this.post.mediaUrl.includes('webm')) {
          this.video = true
          this.image = false
        }
      })
    console.log(userId)
    await axios.put('http://localhost:3000/posts/' + this.id)
      .then((response) => {
        if (response.status === 200) {
          if (!this.post.usersRead.includes(userId)) {
            this.post.usersRead.push(userId)
            console.log(this.post.usersRead)
          } else {
            console.log('User already read')
          }
        }
      })
  }
}
</script>

<style lang="scss">
    // $border: 10px;
  @mixin image ($size, $display:false) {
    height: $size;
    max-width: $size;
    // border-radius: $border;
    @if $display {
      display: none;
    }
  }
    #singlePostView {
        margin: 100px 150px;
        display: flex;
        justify-content: center;
        div {
          margin: 0 30px;
        }
    }
    #postImg {
        border-style: solid;
        @include image(500px, $display:false);
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
    }
    #title {
        height: 45px;
        width: 500px;
        margin-top: 50px;
        text-align: center;
    }
    #message {
        border-style: solid;
        height: 190px;
        width: 490px;
        margin: 100px 0;
        font-size: 20px;
        padding: 10px
    }
</style>
