<style lang="css" src="assets/css/progress.css" scoped></style>
<template>
    <div class="order-progress">
        <p class="order-status">
            <span>提交订单</span>
            <span>支付中</span>
            <span>支付完成</span>
        </p>
        <!--进度条有三个状态，故有a,b,c依次三种样式来分别代表三种状态-->
        <div :class="'progress-status '+status">
            <p class="status-line"></p>
            <span class="status-node"></span>
            <span class="status-node"></span>
            <span class="status-node"></span>

            <span class="current-status-node1"></span>
            <span class="current-status-node2"></span>
            <span class="current-status-node3"></span>
            <p class="current-status1"></p>
            <p class="current-status2"></p>
            <p class="current-status3"></p>
        </div>
    </div>
</template>
<script>
    export default{
        props:[
            "status"
        ]
    }
</script>