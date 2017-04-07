<style scoped>
</style>
<template>
  <div>
    <head></head>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    components:{
      'head':require('components/head.vue'),
      'foot':require('components/foot.vue'),
    }
  }
</script>
