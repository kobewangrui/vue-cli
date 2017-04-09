<style scoped>
*{
    box-sizing: border-box;
    font-family:"Microsoft Yahei","微软雅黑",'华文细黑',Tahoma,Arial,Helvetica,STHeiti;
    letter-spacing:1px;
}
a{
    display:inline-block;
    width:100px;
    line-height:35px;
    background:#57c8f2;
    font-size:14px;
    color:white;
    text-align:center;
    border-radius:4px;
}
</style>
<template>
	<a @click="back">返回上一页</a>
</template>
<script>
export default{
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>