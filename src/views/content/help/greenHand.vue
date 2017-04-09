<style lang="css" src="assets/css/greenHand.css" scoped></style>
<template>
    <div class="container">
        <help-top></help-top>
        <div class="content-right">
            <table>
                <tr>
                    <router-link to="/help/gaiaTrip" tag="td">
                        <p class="icon iconA"></p>
                        <p>盖丫旅行</p>
                    </router-link>
                    <td>
                        <p class="icon iconB"></p>
                        <p>平台规则</p>
                    </td>
                    <td>
                        <p class="icon iconC"></p>
                        <p>服务协议</p>
                    </td>
                    <td>
                        <p class="icon iconD"></p>
                        <p>平台规范</p>
                    </td>
                    <router-link to="/help/disclaimer" tag="td">
                        <p class="icon iconE"></p>
                        <p>免责申明</p>
                    </router-link>
                </tr>
                <tr>
                    <router-link to="/help/helpCenterSP" tag="td">
                        <p class="icon iconF"></p>
                        <p>组团社</p>
                    </router-link>
                    <router-link to="/help/helpCenterQC" tag="td">
                        <p class="icon iconG"></p>
                        <p>供应商</p>
                    </router-link>
                    <router-link  tag="td" :to="{path:'/help/helpCenterFD', query:{currentQuestion:'question2'}}">
                        <p class="icon iconH"></p>
                        <p>账务财务</p>
                    </router-link>
                    <router-link  tag="td" :to="{path:'/help/helpCenterFD', query:{currentQuestion:'question5'}}">
                        <p class="icon iconI"></p>
                        <p>数据统计</p>
                    </router-link>
                    <td>
                        <p class="icon iconJ"></p>
                        <p>公司管理</p>
                    </td>
                </tr>
                <tr>
                    <router-link  tag="td" :to="{path:'/help/helpCenterSP', query:{currentQuestion:'question6'}}">
                        <p class="icon iconK"></p>
                        <p>尾单特价</p>
                    </router-link>
                    <router-link  tag="td" :to="{path:'/help/helpCenterSP', query:{currentQuestion:'question7'}}">
                        <p class="icon iconL"></p>
                        <p>定制抢单</p>
                    </router-link>
                    <router-link  tag="td" :to="{path:'/help/helpCenterSP', query:{currentQuestion:'question5'}}">
                        <p class="icon iconM"></p>
                        <p>支付方式</p>
                    </router-link>
                    <router-link  tag="td" :to="{path:'/help/helpCenterRG', query:{currentQuestion:'question0'}}">
                        <p class="icon iconN"></p>
                        <p>收客系统</p>
                    </router-link>
                    <router-link to="/help/accountMan" tag="td">
                        <p class="icon iconO"></p>
                        <p>账号管理</p>
                    </router-link>
                </tr>
            </table>
        </div>
        <ul class="connectUs">
            <li>
                <p></p>
                <p>客服QQ</p>
                <p>3102317067</p>
            </li>
            <li>
                <p></p>
                <p>客服电话</p>
                <p>400-9900-516</p>
            </li>
            <li>
                <p></p>
                <p>客服邮箱</p>
                <p>support@gaiatrip.com</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
  components: {
    'helpTop': require('components/helpTop.vue')
  }
}
</script>