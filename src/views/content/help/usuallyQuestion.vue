<style lang="css" src="assets/css/usuallyQuestion.css" scoped></style>
<template>
    <div class="container">
        <help-top></help-top>
        <div class="content-right">
            <ul class="list">
                <router-link :to="list.targetAdress" v-for="list in questionList" :key="list.id" tag="li"><span></span>{{list.tit}}</router-link>
            </ul>
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
<script src="assets/js/usuallyQuestion.js"></script>