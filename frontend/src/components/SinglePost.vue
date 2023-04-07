<template>
    <div id="singlePostView">
        <div id="postImg" class="border"></div>
        <div>
            <div id="title" class="border">{{ this.title }}</div>
            <div id="message" class="border">{{ this.message }}</div>
        </div>
    </div>
</template>

<script>
// const axios = require('axios')
export default {
  data () {
    return {
      media: null,
      message: '',
      title: '',
      usersRead: []
    }
  },
  beforeCreate () {
    const userId = localStorage.getItem('userId')
    if (!userId) {
      this.$router.push({ path: '/login' })
    }
  },
  mounted () {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    const singlePost = 'http://localhost:3000/posts/' + id
    console.log(params)
    console.log(singlePost)
    const userId = localStorage.getItem('userId')
    this.usersRead.push(userId)
    console.log(this.usersRead)
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
        justify-content: space-between;
    }
    #postImg {
        border-style: solid;
        @include image(500px, $display:false)
    }
    #title {
        height: 100px;
        width: 500px;
        margin-top: 50px;
    }
    #message {
        border-style: solid;
        height: 200px;
        width: 500px;
        margin: 100px 0;
    }
</style>
