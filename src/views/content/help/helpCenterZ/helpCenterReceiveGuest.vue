<style scoped lang="css" src="assets/css/helpBase.css" scoped></style>
<template>
    <div class="container">
        <help-top v-if="isShow"></help-top>
        <help-left></help-left>
        <div class="content-right">
            <ul v-if="isShow">
                <li @click="act($index)" id="'question' + $index}}" v-for="(list,$index) in questionList"><span></span>{{list.tit}}</li>
            </ul>
            <template v-if="!isShow">
                <a @click="close">返回上一级</a>
                <p><span>{{questionList[actTit].tit}}</span></p>
                <p v-html="questionList[actTit].ctt"></p>
            </template>
        </div>
    </div>
</template>
<script src="assets/js/helpCenterReceiveGuest.js"></script>