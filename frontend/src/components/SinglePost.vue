<template>
    <div id="singlePostView">
        <div id="postImg" class="border"></div>
        <div id="message" class="border"></div>
    </div>
</template>

<script>
export default {
  beforeCreate () {
    const userId = localStorage.getItem('userId')
    if (!userId) {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss">
    #singlePostView {
        margin: 100px 150px;
        display: flex;
        justify-content: space-between;
    }
    #postImg {
        height: 500px;
        width: 500px;
        border-style: solid;
    }
    #message {
        border-style: solid;
        height: 200px;
        width: 500px;
        margin: 100px 0;
        // position: absolute;
        // left: 100px;
        // bottom: 60px;
    }
</style>
