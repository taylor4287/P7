
<template>
  <headerView />
</template>

<script>
import headerView from '@/components/HeaderView.vue'

export default {
  components: {
    headerView
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#post {
  margin-left: 65px;
  display: block;
  text-align: center;
  border-color: black;
  border-style: inset;
  border-width: 2px;
  background: radial-gradient(red 65%, black);
  color: white;
  border-radius: 50%;
  text-decoration: none;
}
.border {
  border-style: solid;
  border-color: black;
  border-style: inset;
  border-width: 2px;
  border-radius: 10px;
}
</style>
