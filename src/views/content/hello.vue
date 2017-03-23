<!--<style>
  body{
    background: red;
  }
</style>-->
<!--<style src="assets/a.css" scoped></style>-->
<template>
  <div>
    hello header
    <router-view></router-view>
    <router-link to="/index">这是hello首页</router-link>
    <router-link to="/">返回首页</router-link>
    hello footer
    <date></date>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    created(){
      console.log("123")
    },
    components:{
      'date':require('components/date.vue')
    }
  }
</script>
