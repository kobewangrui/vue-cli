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
                <p>862452159</p>
            </li>
            <li>
                <p></p>
                <p>客服电话</p>
                <p>177-4926-8844</p>
            </li>
            <li>
                <p></p>
                <p>客服邮箱</p>
                <p>kobewangrui@163.com</p>
            </li>
        </ul>
    </div>
</template>
<script src="assets/js/usuallyQuestion.js"></script>