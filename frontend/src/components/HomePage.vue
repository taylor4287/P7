<template>
  <div id="homePosts">
    <div id="postWrap" class="border">
      <div id="new">
        <span>Unread</span>
      </div>
    </div>
    <div v-on:click="singlePostView(post.id)" v-for='post in posts' :key='post.id' id="postWrap" class="border">
      <h3 class="postTitle">{{ post.title }}</h3>
      <img v-if="post.mediaUrl" class="postImg" :src="post.mediaUrl"/>
      <p v-if="post.message" class="postMessage">{{ post.message }}</p>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data () {
    return {
      posts: [],
      media: ''
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
    await axios.get('http://localhost:3000/posts', {
      headers: {
        // eslint-disable-next-line
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        this.posts = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.error('There was an error!', error)
      })
  },
  methods: {
    singlePostView (id) {
      this.$router.push({ path: `/singlePost/${id}` })
    }
  }
}
</script>

<style lang="scss">
  #homePosts {
    margin: 70px;
    display: flex;
    flex-wrap: wrap;
  }
  #postWrap {
    position:relative;
    border-style: solid;
    width: 250px;
    height: 250px;
    margin: 35px;
    cursor: pointer;
    overflow: hidden;
    object-fit: contain;
  }
  i {
    text-align: center;
    border-style: solid;
    border-radius: 50%;
    height: 17px;
    width: 17px;
    padding: 10px;
    position: absolute;
    top: 315px;
    left: 213px;
  }
  #new {
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    color: white;
    background-color: red;
    height: 15px;
    width: 50px;
  }
  .postTitle {
    position: absolute;
    left: 20px;
    opacity: 0.5;
  }
  $border: 8px;
  @mixin image ($size, $display:false) {
    // height: $size;
    max-width: $size;
    border-radius: $border;
    @if $display {
      display: none;
    }
  }
  .postImg {
    @include image(100%, $display:false);
  }
  .postMessage {
    @include image(100%, $display:true)
  }
</style>
