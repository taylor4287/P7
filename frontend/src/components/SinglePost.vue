<template>
    <div id="singlePostView">
        <div v-if="post.mediaUrl" id="postImg" class="border">
          <img :src="post.mediaUrl"/>
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
  mounted () {
    axios.get('http://localhost:3000/posts/' + this.id)
      .then((response) => {
        console.log(response)
        this.post = response.data
      })
    axios.put('http://localhost:3000/posts/' + this.id, {
      userId: localStorage.getItem('userId')
    }).then((response) => {
      console.log(this.post.usersRead)
    })
  }
}
</script>

<style lang="scss">
    // $border: 10px;
  @mixin image ($size, $display:false) {
    height: $size;
    width: $size;
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
