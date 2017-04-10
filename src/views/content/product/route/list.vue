<style lang="css" src="assets/css/filterItem.css" scoped></style>
<style lang="css" src="assets/css/routeList.css" scoped></style>
<template>
    <div class="container">
        <div class="routeFilter">
            <div class="filter-out">
                <div class="filter">
                    <span class="filter-title">{{product.title}}：</span>
                    <span class="filter-all" :class="{'checkedAll': this.$route.query.groupWay == undefined || this.$route.query.groupWay.length==0}" @click="clear('groupWay')">全部</span>
                    <span class="filter-item" v-for="item in product.filterType">
                        <input :id="item.arg" type="checkbox" v-model="query.groupWay" :value="item.arg">
                        <label :for="item.arg" class="label">{{item.name}}</label>
                    </span>
                </div>
                <div class="filter">
                    <span class="filter-title">出游时间：</span>
                    <span class="filter-all">全部</span>
                    <span class="dateChoose">
                        <input type="text" placeholder="请选择" v-model="query.start" readonly="true" @click="calendarToggle">
                        <span></span>
                        <input type="text" placeholder="请选择" v-model="query.end" readonly="true" @click="calendarToggle">
                        <button @click="dateSubmit">确定</button>
                        <calendar  :inputDate1="start" v-if="calendarShow"></calendar>
                    </span>
                </div>
                <div class="filter">
                    <span class="filter-title">{{traffic.title}}：</span>
                    <span class="filter-all" :class="{'checkedAll': this.$route.query.traffic == undefined || this.$route.query.traffic.length==0}" @click="clear('traffic')">全部</span>
                    <span class="filter-item" v-for="item in traffic.filterType">
                        <input :id="item.arg" type="checkbox" v-model="query.traffic" :value="item.arg">
                        <label :for="item.arg" class="label">{{item.name}}</label>
                    </span>
                </div>
                <div class="filter">
                    <span class="filter-title">{{days.title}}：</span>
                    <span class="filter-all" :class="{'checkedAll': this.$route.query.days == undefined || this.$route.query.days.length==0}" @click="clear('days')">全部</span>
                    <span class="filter-item" v-for="item in days.filterType">
                        <input :id="item.arg" type="checkbox" v-model="query.days" :value="item.arg">
                        <label :for="item.arg" class="label">{{item.name}}</label>
                    </span>
                </div>
            </div>
            <div class="filter sort">
                <span class="filter-title">排序：</span>

                <input id="all" type="radio" name="sort" v-model="query.sort" value="all">
                <label for="all" class="label">综合</label>

                <input id="hot" type="radio" name="sort" v-model="query.sort" value="hot">
                <label for="hot" class="label">热门</label>

                <input id="newest" type="radio" name="sort" v-model="query.sort" value="new">
                <label for="newest" class="label">最新</label>

                <input id="price" type="radio" name="sort" v-model="query.sort" value="up">
                <label for="price" class="price">价格</label>
                <label for="price" class="price-sort"></label>
                <span class="price-limit">
                    <span class="">价格区间</span>
                    <input type="number" placeholder="￥" v-model="priceStarts">
                    <span></span>
                    <input type="number" placeholder="￥" v-model="priceEnds">
                    <button @click="priceSubmit()">确认</button>
                </span>
                <input id="immediately" type="checkbox" class="sort-input" v-model="query.IMMEDIATELY_PAY" value="on">
                <label for="immediately" class="immediately-confirm"></label>
                <label for="immediately">即时确认</label>
                <input id="spicial" type="checkbox" class="sort-input" v-model="query.IS_SPECIAL" value="on">
                <label for="spicial" class="spicial-price"></label>
                <label for="spicial">特价</label>
            </div>
        </div>
        <ul>
            <router-link :to="{path:'/product/route/detail',query:{productId:'cp10000'}}" tag="li" class="line-outer" v-for="(route,$index) in 20" :key="route.id">
                <div class="line-img">
                    <img :src="require('assets/image/1.jpg')">
                    <span class="after-group" v-if="$index%2==0">跟团</span>
                    <span class="ground" v-else-if="$index%3==0">地接</span>
                    <span class="self" v-else-if="$index%5==0">自助</span>
                    <span class="self" v-else-if="$index%6==0">半自助</span>
                    <span class="liner" v-else-if="$index%7==0">邮轮</span>
                    <span class="drive-self" v-else-if="$index%8==0">自驾</span>
                </div>
                <div class="line-detail">
                    <p class="ellipsis">实力肯定jfk老师讲课了jfk老师</p>
                    <p>
                        <span class="right-now" v-if="$index%5==0">即时</span>
                        <span class="spicial-price" v-else-if="$index%4==0">特价</span>
                    </p>
                    <p>
                        <span>出发地：山西</span>
                        <span>天数：7天</span>
                    </p>
                    <p>
                        最近团期：<span>2017-05-06</span><span>更多> ></span>
                    </p>
                    <p>供应商：众信假期</p>
                    <router-link :to="{path:'/product/route/detail',query:{productId:'cp10000'}}" class="reserve">查看详情</router-link>

                        <span class="originalPrice price" v-if="$index%4==0 && $index!=0">
                            <span>原结算价：</span>
                            <span>￥1234</span>
                        </span>
                        <span class="spicialPrice price" v-if="$index%4==0 && $index!=0">
                            <span>特价：</span>
                            <span>￥1234</span>
                        </span>
                    <span class="innerPrice price" v-if="$index%4!=0 || $index==0">
                        <span>结算价：</span>
                        <span>￥1324</span>
                    </span>
                </div>
            </router-link>
        </ul>
        {{pagiNate}}
        <page :paginate='pagiNate'></page>
    </div>
</template>
<script src="assets/js/routeList.js"></script>