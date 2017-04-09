<style scoped lang="css" src="assets/css/helpBase.css" scoped></style>
<template>
    <div class="container">
        <help-left></help-left>
        <div class="content-right">
            <prev-page></prev-page>
            <p><span>账号管理</span></p>
            <p><b>1绑定/修改手机</b></p>
            <p>第一步：打开管理后台，在账号管理－账号安全－登陆密码－绑定/修改。</p>
            <img :src="require('assets/image/help/image003.png')">
            <p>第二步：1.绑定手机。输入手机号码，发送并接收手机验证短信，填写验证码完成绑定。</p>
            <img :src="require('assets/image/help/image001.png')">
            <img :src="require('assets/image/help/image005.png')">
            <p>2.修改绑定手机。发送并接收验证码，确认解绑。然后可重新绑定手机号码。未绑定手机状况下无法进行一些交易行为，您的客户可能无法联系到您。</p>
            <img :src="require('assets/image/help/image007.png')">
            <p><b>2绑定/修改邮箱</b></p>
            <p>邮箱可作为登陆使用。</p>
            <p>第一步：打开管理后台，在账号管理－账号安全－邮箱帐号－绑定/修改</p>
            <img :src="require('assets/image/help/image009.png')">
            <p>二步：1.绑定邮箱。输入您的邮箱地址。发送验证，点击邮箱内验证链接后绑定成功。</p>
            <img :src="require('assets/image/help/image011.png')">
            <img :src="require('assets/image/help/image013.png')">
            <p>2.修改绑定邮箱。首先须解绑当前邮箱，发送验证邮件至当前邮箱，点击邮箱内验证链接后解绑成功。然后可重新绑定新邮箱。</p>
            <p><b>3修改密码</b></p>
            <p>第一步：打开管理后台，在账号管理－账号安全－登录密码－修改。</p>
            <img :src="require('assets/image/help/image015.png')">
            <p>第二步：输入原始密码及新密码、确认密码。</p>
            <img :src="require('assets/image/help/image017.png')">
            <p>第三步：修改保存。</p>
        </div>
    </div>
</template>
<script src="assets/js/accountManagement.js"></script>