<style scoped>
.content-left{
    float:left;
    width:250px;
    height:500px;
    background-color:white;
    border-radius:4px;
    padding-top:40px;
    margin-bottom:40px;
}
.content-left>a{
    display:block;
    padding-left:60px;
    margin-bottom:15px;
    color:#666;
    border-left:2px solid white;
    font-size:14px;
}
.content-left>a:hover{
    color:#464646;
}
.content-left>p{
    padding-left:60px;
    margin:10px 0 20px 0;
    color:black;
    font-size:20px;
}
.router-link-active{
    border-left:2px solid #41cac0!important;
    color:#41cac0!important;
    font-weight:bold;
}
</style>
<template>
    <div class="content-left">
        <p>组团社专区</p>
        <router-link to="/help/helpCenterSP">购买产品</router-link>
        <router-link to="/help/helpCenterOM">订单管理</router-link>
        <router-link to="/help/helpCenterTM">游客信息</router-link>
        <router-link to="/help/helpCenterRG">收客系统</router-link>
        <router-link to="/help/helpCenterFD">财务数据</router-link>
    </div>
</template>

