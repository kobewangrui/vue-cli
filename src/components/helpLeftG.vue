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
        <p>供应商专区</p>
        <router-link to="/help/helpCenterQC">资质认证</router-link>
        <router-link to="/help/helpCenterPM">产品管理</router-link>
        <router-link to="/help/helpCenterGOM">订单管理</router-link>
        <router-link to="/help/helpCenterGFD">财务数据</router-link>
    </div>
</template>

