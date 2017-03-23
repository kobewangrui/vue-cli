<template>
  <div>
    <!--{{a}}-->
    <router-view></router-view>
    <!--{{b}}-->
          <!--<img :src="require('assets/logo.png')">-->
  </div>
</template>

<script>
export default{
  data(){
    return{
      a: 'sb-header',
      b: 'sb-footer'
    }
  }
}
</script>
