<style src="assets/css/base.css"></style>
<template>
  <div>
    <mall-head></mall-head>
    <router-view></router-view>
    <mall-foot></mall-foot>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    components:{
      'mall-head':require('components/head.vue'),
      'mall-foot':require('components/foot.vue')
    }
  }
</script>