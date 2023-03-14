<template>
  <div id="homePosts">
    <router-link id="postWrap" class="createPost" to="/createPost">
      <i class="fa-solid fa-plus"></i>
    </router-link>
    <div id="postWrap"></div>
    <div id="postWrap"></div>
    <div id="postWrap"></div>
    <div id="postWrap"></div>
  </div>
</template>

<style lang="scss">
  #homePosts {
    margin: 70px;
    display: flex;
    flex-wrap: wrap;
  }
  #postWrap {
    border-style: solid;
    width: 250px;
    height: 250px;
    margin: 35px;
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
</style>
