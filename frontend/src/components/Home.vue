<template>
  <div class="home">
    <Header />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from './Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>
