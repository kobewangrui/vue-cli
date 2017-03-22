<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    {{a}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: '你好'
    }
  }
}
</script>
