<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background: url("https://user-gold-cdn.xitu.io/2019/3/25/169b4747c7582daa?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1") no-repeat;
  background-size: 100% 100%;
}
</style>
