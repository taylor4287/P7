<template>
  <div id="homePosts">
    <div
      v-on:click="($event) => singlePostView(post.id)"
      v-for="post in posts"
      :key="post.id"
      id="postWrap"
      class="border"
    >
      <div v-if="post.unread" id="new">
        <span>Unread</span>
      </div>
      <h3 class="postTitle">{{ post.title }}</h3>
      <img v-if="post.image" class="postImg" :src="post.mediaUrl" />
      <p class="postMessage">{{ post.message }}</p>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data () {
    return {
      posts: {},
      media: ''
    }
  },
  beforeCreate () {
    // making sure user is logged in
    const userId = localStorage.getItem('userId')
    if (!userId) {
      this.$router.push({ path: '/login' })
    }
  },

  async mounted () {
    const token = JSON.parse(localStorage.getItem('token'))
    const userId = JSON.parse(localStorage.getItem('userId'))
    // grabbing posts
    await axios
      .get('http://localhost:3000/posts', {
        headers: {
          // eslint-disable-next-line
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => {
        this.posts = response.data
        // showing images if any is added
        for (let i = 0; i < this.posts.length; i++) {
          if (this.posts[i].mediaUrl === null) {
            this.posts[i].image = false
          } else {
            this.posts[i].image = true
          }
          if (this.posts[i].usersRead.includes(userId)) {
            this.posts[i].unread = false
          } else {
            this.posts[i].unread = true
          }
        }
      })
      .catch((error) => {
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
  position: relative;
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
  position: absolute;
  top: 10px;
  right: 10px;
}
.postTitle {
  position: absolute;
  left: 20px;
  opacity: 0.5;
  width: 145px;
}
$border: 8px;
@mixin image($size, $display: false) {
  // max-height: $size;
  width: $size;
  border-radius: $border;
  @if $display {
    display: none;
  }
}
.postImg {
  @include image(100%, $display: false);
}
.postMessage {
  height: 80%;
  margin: 70px 10px 10px 10px;
}
@media screen and (max-width: 768px) {
  #postWrap {
    width: 500px;
    height: 300px;
  }
  #homePosts {
    margin: -50px 0 0 0;
  }
}
</style>
