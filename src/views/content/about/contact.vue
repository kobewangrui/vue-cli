<style lang="css" src="assets/css/contact.css" scoped></style>
<template>
    <div class="container">
        <about-scoll></about-scoll>
        <div class="content-right">
            <div class="title">联系我们</div>
            <p class="name">4me信息技术有限公司</p>
            <p>地<span class="whiteMid">址</span>：<span class="nbspMid">陕西省西安市高新区科技5路</span></p>
            <p>联系电话：<span class="nbspMid">177-4926-8844</span></p>
            <p>客服电话：<span class="nbspMid">177-4926-8844</span></p>
            <p>E<span class="whiteMidP"></span>-<span class="whiteMidP"></span>mail：<span class="nbspMid">kobewangrui@163.com</span></p>
            <img :src="require('assets/image/swiper3.jpg')">
        </div>
    </div>
</template>
<script>
export default{
  components: {
    'aboutScoll': require('./aboutLeft.vue')
  }
}
</script>