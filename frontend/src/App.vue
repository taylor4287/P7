
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Sign Up</router-link>
    <router-link to="/createPost">Create Post</router-link>
    <router-link to="/Account">Account</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
  // text-align: right;
//   color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
