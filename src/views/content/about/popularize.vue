<style lang="css" src="assets/css/popularize.css" scoped></style>
<template>
    <div class="container">
        <about-scoll></about-scoll>
        <div class="content-right">
            <div class="title">推广合作</div>
            <div>
                <p class="blackTitle">4me信息技术网专业服务于旅游消费者群体和旅游企事业单位，寻求发现美好的同路人，网站可提供多种成熟的合作模式，为客户的品牌和产品推广提供有力的支持。</p>
                <p class="workRange">1.广告形式</p>
                    <span class="addChoose"><img :src="require('assets/image/addIcon.png')"/><span>通栏广告</span></span>
                    <span class="addChoose"><img :src="require('assets/image/addIcon.png')"/><span>按钮广告</span></span>
                    <span class="addChoose"><img :src="require('assets/image/addIcon.png')"/><span>文字链接（含滚动文字链）</span></span>
                    <span class="addChoose"><img :src="require('assets/image/addIcon.png')"/><span>对联</span></span>
                    <span class="addChoose"><img :src="require('assets/image/addIcon.png')"/><span>全屏</span></span>
                    <span class="addChoose"><img :src="require('assets/image/addIcon.png')"/><span>软文专题</span></span>
                    <span class="addChoose"><img :src="require('assets/image/addIcon.png')"/><span>静态小横幅</span></span>
                <p class="workRange">2.单位合作</p>
                <ul>
                    <li>旅游相关单位————旅行社、酒店、景区、车队、餐饮、旅游用品、娱乐、旅游局等。</li>
                    <li>盖丫网在合作中可以提供支持</li>
                    <li>媒体品牌和网民流量支持</li>
                    <li>盖丫网页面黄金版位开设频道出口</li>
                    <li>包版运营指导和业务拓展支持</li>
                    <li>全面技术支持（页面前后台、服务器和带宽、软硬件全面解决方案）</li>
                    <li>企业建站、整体运营、网络优化支持等 其他广告合作形式请电话咨询</li>
                    <li>电话：177-4926-8844</li>
                    <li>E-mail：kobewangrui@163.com</li>
                </ul>
            </div>
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