<template>
  <div id="homePosts">
    <div id="postWrap">
      <div id="new">
        <span>Unread</span>
      </div>
    </div>
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
  #new {
    border: 1px solid red;
    padding: 10px;
    color: white;
    background-color: red;
    height: 15px;
    width: 50px;
  }
</style>
