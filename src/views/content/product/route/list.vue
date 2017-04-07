<style lang="css" src="assets/css/filterItem.css" scoped></style>
<style lang="css" src="assets/css/routeList.css" scoped></style>
<template>
    <div class="container">
        <div class="routeFilter">
            <div class="filter-sign">
                <label class="nav">首页</label> > <label class="nav">大理</label> >
                <label class="sign" :for="item" v-for="item in this.$route.query.groupWay"v-if="item=='PACKAGED'?productSign='跟团':(item=='LOCAL'?productSign='地接':(item=='HALF_SELF'?productSign='半自助':(item=='ALL_SELF'?productSign='自助':(item=='CRUISES'?productSign='邮轮':(item=='DRIVE_SELF'?productSign='自驾':productSign='其他')))))">{{productSign}}<span>×</span></label>
                <label class="sign" :for="item" v-for="item in this.$route.query.traffic" v-if="item=='PLAIN'?trafficSign='飞机':(item=='TRAIN'?trafficSign='火车':(item=='BUS'?trafficSign='大巴':(item=='SOLOFLY'?trafficSign='单卧单飞':trafficSign='其他')))">{{trafficSign}}<span>×</span></label>
                <label class="sign" :for="item" v-for="item in this.$route.query.days" v-if="item=='ONE'?daysSign='1-2天':(item=='THREE'?daysSign='3-5天':(item=='SIX'?daysSign='6-8天':daysSign='9天以上'))">{{daysSign}}<span>×</span></label>
            </div>
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
            <li class="line-outer" v-for="route in routes">
                {{route | Route}}
                <div class="line-img">
                    <img :src="route.cover">
                    <span class="after-group" v-if="route.groupWay=='PACKAGED'">跟团</span>
                    <span class="ground" v-if="route.groupWay=='LOCAL'">地接</span>
                    <span class="self" v-if="route.groupWay=='ALL_SELF'">自助</span>
                    <span class="self" v-if="route.groupWay=='HALF_SELF'">半自助</span>
                    <span class="liner" v-if="route.groupWay=='CRUISES'">邮轮</span>
                    <span class="drive-self" v-if="route.groupWay=='DRIVE_SELF'">自驾</span>
                </div>
                <div class="line-detail">
                    <p class="ellipsis">{{route.title}}</p>
                    <p>
                        <span class="right-now" v-if="route.immediatelyPay=='on'">即时</span>
                        <span class="spicial-price" v-if="route.isSpecial=='Y'">特价</span>
                        <span class="TAC" v-if="route.routeType=='TAC'">TAC</span>
                    </p>
                    <p>
                        <span>出发地：{{route.departure}}</span>
                        <span>天数：{{route.days}}天</span>
                    </p>
                    <p>
                        最近团期：<span>{{route.closest().date | date_format('M-dd')}}</span><span>更多> ></span>
                    </p>
                    <p>供应商：{{route.Org_OrganizationName}}</p>
                    <router-link :to="{path:'/mall/routeDetail',query:{productId:route.productId}}" class="reserve" target="_blank">查看详情</router-link>
                    <!--<a href="javascript:void(0);" class="reserve" v-if="">暂无资质</a>-->


                    <!--TAC或者特价(如果是tac成员，tac价格和特价显示最低的，非tac成员显示特价)-->
                    <!--逻辑还需严谨，在最近团期TAC价格出现null时没有处理，TAC价格是否会为null，暂时认为TAC产品的每个团期都有TAC价格-->
                    <!--TAC或特价线路逻辑-->

                    <template v-if="($store.state.org.clubLevel=='TAC' && route.routeType=='TAC') || (route.closest().price.adult.special!=null && route.closest().price.adult.special!='-1')">
                        <span class="originalPrice price">
                            <span>原结算价：</span>
                            <span>￥{{route.closest().price.adult.inner}}</span>
                        </span>
                        <template v-if="$store.state.org.clubLevel=='TAC' && route.routeType=='TAC'">
                            <template v-if="(route.closest().price.adult.special!=null && route.closest().price.adult.special!='-1')">
                                <template v-if="Math.min(route.closest().price.adult.special,route.closest().price.adult.tac)==route.closest().price.adult.tac">
                                    <span class="TACprice price">
                                        <span>TAC价：</span>
                                        <span>￥{{route.closest().price.adult.tac}}</span>
                                    </span>
                                </template>
                                <template v-else>
                                    <span class="spicialPrice price">
                                        <span>特价：</span>
                                        <span>￥{{route.closest().price.adult.special}}</span>
                                    </span>
                                </template>
                            </template>
                            <template v-else>
                                <span class="spicialPrice price">
                                    <span>特价：</span>
                                    <span>￥{{route.closest().price.adult.special}}</span>
                                </span>
                            </template>
                        </template>
                        <template v-else>
                            <span class="spicialPrice price">
                                <span>特价：</span>
                                <span>￥{{route.closest().price.adult.special}}</span>
                            </span>
                        </template>
                    </template>
                    <!--非TAC或特价线路逻辑-->
                    <template v-else>
                        <span class="innerPrice price">
                            <span>结算价：</span>
                            <span>￥{{route.closest().price.adult.inner}}</span>
                        </span>
                    </template>
                </div>
            </li>
        </ul>
        <page :pageIndex="pageIndex" :pageCount="count" :paginate="paginate"></page>
    </div>
</template>
<script src="assets/js/routeList.js"></script>