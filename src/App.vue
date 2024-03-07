<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import video from './components/视频详情.vue';
import video_page from './components/video_page.vue'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    video,video_page
  }
}
</script>

<style>
html,body,#app{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
