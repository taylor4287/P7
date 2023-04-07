<template>
  <div id="homePosts">
    <div id="postWrap" class="border">
      <div id="new">
        <span>Unread</span>
      </div>
    </div>
    <div v-on:click="singlePostView" v-for='post in posts' :key='post.id' id="postWrap" class="border">
      <h3 class="postTitle">{{ post.title }}</h3>
      <div v-if="media">
        <img v-for="media in medias" :key="media" class="postImg" :src='media'/>
      </div>
      <p class="postMessage">{{ post.message }}</p>
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
    axios
      .get('http://localhost:3000/posts')
      .then((response) => {
        console.log(response.data)
        this.posts = response.data
        this.media = response.data.mediaUrl
      })
      .catch(error => {
        this.errorMessage = error.message
        console.error('There was an error!', error)
      })
  },
  methods: {
    singlePostView () {
      this.$router.push({ path: 'singlePost' })
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
  $border: 10px;
  @mixin image ($size, $display:false) {
    height: $size;
    width: $size;
    border-radius: $border;
    @if $display {
      display: none;
    }
  }
  .postImg {
    @include image(100%, $display:false)
  }
  .postMessage {
    @include image(100%, $display:true)
  }
</style>
