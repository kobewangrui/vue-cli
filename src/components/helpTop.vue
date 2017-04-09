<style scoped>
*{
    box-sizing: border-box;
    font-family:"Microsoft Yahei","微软雅黑",'华文细黑',Tahoma,Arial,Helvetica,STHeiti;
    letter-spacing:1px;
}
header ul{
    height:60px;
    background:white;
    margin-bottom:20px;
    border-radius:4px;
}
header ul li{
    display:inline-block;
    width:290px;
    border-right:1px solid #f1f2f7;
    text-align:center;
    font-size:16px;
    color:#999;
    margin-top:20px;
    cursor:pointer;
}
.router-link-active{
    color:#464646;
}
header ul li:last-child{
    border:none;
}
</style>
<template>
<header>
    <ul>
        <router-link to="/help/usuallyQuestion" tag="li">常见问题</router-link>
        <router-link to="/help/greenHand" tag="li">新手上路</router-link>
        <router-link to="/help/helpCenterSP" tag="li">组团社专区</router-link>
        <router-link to="/help/helpCenterQC" tag="li">供应商专区</router-link>
    </ul>
</header>
</template>
