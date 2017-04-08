<style lang="css" src="assets/css/routeDetail.css" scoped></style>
<template>
    <div class="container">
        {{route | Route}}
        {{selectedPeriod==null?selectedPeriod=route.closest():selectedPeriod | hide}}
        <div class="detailOuter">
            <p class="detailOuterNav"><span>国内线路</span>><span>云南</span>><span>线路详情</span></p>
            <div class="detailHeader">
                <div class="detailShow">
                    <div class="detailImg swiper-container">
                        <!--<div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(img,$index) in imgScroll">
                                <img :src="img" :alt="'img'+$index">
                            </div>
                        </div>-->
                        <!-- 如果需要分页器 -->
                        <!--<div class="swiper-pagination"></div>-->
                        <!-- 如果需要导航按钮 -->
                        <!--<div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>-->
                        <!--<span class="after-group">跟团游</span>-->
                        <!--<span class="ground">地接</span>-->
                        <!--<span class="self">自助</span>-->
                        <!--<span class="self">半自助</span>-->
                        <!--<span class="liner">邮轮</span>-->
                        <!--<span class="drive-self">自驾</span>-->
                    </div>
                    <div class="calendar">
                    <p class="headDate">
                        <span class="prevMonth" @click="prevMonth"> < </span>
                        <span>{{curYear}}年{{curMonth}}月</span>
                        <span class="nextMonth" @click="nextMonth"> > </span>
                    </p>
                    <ul class="week">
                        <li v-for="i in week">{{i}}</li>
                    </ul>
                        <table class="table">
                            <tr v-for="item in days">
                                <td v-for="key in item" :class="{'active':new Date().getDate() == key}" :id="curYear+'-'+curMonth+'-'+key" @click="activeDate(curYear+'-'+curMonth+'-'+key)">
                                        {{
                                            period=route.period().find((ele,index)=>{
                                            if(new Date(ele.date).format('yyyy-MM-dd')==new Date(curYear+"-"+curMonth+"-"+key).format('yyyy-MM-dd'))
                                                return ele
                                            else
                                                return false
                                            }) | hide
                                        }}
                                    <span class="date">{{key}}</span>
                                    <span class="remained" v-if="period">
                                        <span>余:</span>{{period.inventory}}
                                    </span>
                                    <span class="price" v-if="period">
                                        ￥{{period.price.adult.inner}}
                                    </span>
                                    
                                    
                                    <!--如果是特价添加下下面的两个span-->
                                    <!--<span class="shape"></span>
                                    <span class="specialText">特</span>-->
                                    <img :src="require('assets/image/specialSign.png')" alt="">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>               
                <div class="detailIntro">
                    <div class="introTitle">
                        <span class="titleName">{{route.title}}</span>
                        <span class="spicial" v-if="route.isSpecial=='Y'">特价</span>
                        <span class="rightTime" v-if="route.immediatelyPay=='on'">即时</span>
                        <span class="TAC" v-if="route.routeType=='TAC'">TAC</span>
                    </div>
                    <div class="detailList"> 
                        <p>
                            产品编号：<span class="listContent">{{route.productId}}</span>
                        </p>
                        <p>
                            行程天数：<span class="listContent listDays">{{route.days}}天</span>
                            提前报名天数：<span class="listContent">{{route.lead}}天</span>
                        </p>
                        <p>
                            即时交易：<span class="listContent" v-if="route.immediatelyPay=='on'">是</span><span class="listContent" v-if="route.immediatelyPay!='on'">否</span>
                            <span class="listQuestion">?</span>
                            <span>即时交易是指即时确认，否则需等待卖家却后才可付款。</span>
                        </p>
                        <p>
                            往返交通：<span class="listContent">未绑定</span>
                        </p>
                        <p>
                            出发地/目的地：<span class="listContent">{{route.departure}}--{{route.destination}}</span>
                        </p>
                    </div>
                    <div class="detailPrice">
                        <!--<p class="beforePrice">
                            <span>
                                <span class="priceTitle">原价：</span>
                                <span class="beforeAdult">￥123132/成人</span>
                                <span class="beforeChildren">￥213132/儿童</span>
                            </span>
                        </p>-->
                        <p class="endPrice">
                            <span>
                                <span class="priceTitle">结算价：</span>
                                <!--<span class="priceTitle">特价：</span>-->
                                <span class="priceSymbol">￥</span>
                                <span class="settlementPrice">{{selectedPeriod.price.adult.inner}}</span>/成人
                                <span class="postionChildren">
                                    <span class="priceSymbol symbolChildren">￥</span>
                                    <span class="settlementPrice">{{selectedPeriod.price.child.inner}}</span>/儿童
                                </span>
                            </span>
                        </p>
                        <p class="salePrice">
                            <span>
                                <span class="priceTitle">建议零售：</span>
                                <span class="priceSymbol">￥</span>
                                <span class="retailPrice">{{selectedPeriod.price.adult.outer}}</span>/成人
                                <span class="postionChildren">
                                    <span class="priceSymbol symbolChildren">￥</span>
                                    <span class="retailPrice">{{selectedPeriod.price.child.outer}}</span>/儿童
                                </span>
                            </span>
                        </p>
                        <p class="buyNow">
                            <!--<a href="javscript:void(0);" class="noJurisdiction">暂无权限</a>-->
                            <router-link :to="{path:'/mall/submitOrderDomestic',query:{productId:route.productId,date:selectedPeriod.date}}" class="buyRoute">立即预定</router-link>
                            <button class="joinTravell">加入收客</button>
                            <span class="dealIntro">交易说明</span>
                        </p>
                        <p class="share">
                            <span class="weChat">
                                <img :src="require('assets/image/share.png')">
                                <span>微信分享</span>
                                <div class="weChatShare">
                                    <img :src="require('assets/image/TD-code.jpg')">
                                    <p>扫描二维码分享</p>
                                </div>
                            </span>
                            <span>
                                <template v-if="colllection==2">
                                    <img :src="require('assets/image/collection.png')">
                                    <span>收藏线路</span>
                                </template>
                                <template v-else>
                                    <img :src="require('assets/image/collectioned.png')">
                                    <span>已收藏</span>
                                </template>
                            </span>
                            <span>
                                <img :src="require('assets/image/download.png')">
                                <span>下载线路</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="brandIntro">
            <img :src="route.Org_Logo"  class="brandImg">
            <div class="brandName">
                <p class="ellipsis">{{route.Org_OrganizationName}}</p>
                <p class="ellipsis">西安某哦某旅行有限公司西安某哦某旅行有限公司西安某哦某旅行有限公司西安某哦某旅行有限公司西安某哦某旅行有限公司西安某哦某旅行有限公司西安某哦某旅行有限公司</p>
            </div>
            <div class="brandConnect">
                <button @click="popChange">联系</button>
                <button>收藏商家</button>
            </div>
            <div class="brandPop"  :class="{'popAnimation':popShow}">
                <p class="popConnect">
                    <span>联系方式</span>
                    <span @click="popHide">×</span>
                </p>
                <p class="popPeople">
                    <span>联系人</span>
                    <span>呃呃</span>
                </p>
                <div class="popDetail">
                    <img src="">
                    <div class="popDetails">
                        <p>
                            <span>手机：</span>dddd
                        </p>
                        <p>
                            <span>电话：</span>ddddd
                        </p>
                            <span>手机：</span>ddddd
                        <p>
                            <span>QQ：</span>ddddd
                        </p>
                        <p>
                            <span>传真：</span>ddddd
                        </p>
                    </div>
                </div>
            </div>
            <div class="cover" :class="{'coverAnimation':popShow}"></div>
        </div>
        <div class="routeDetail">
            <ul class="table">
                <a href="#routeFeature"><li>线路特色</li></a>
                <a href="#tripContent"><li>行程内容</li></a>
                <a href="#costDetail"><li>费用明细</li></a>
                <a href="#remark"><li>备注</li></a>
                <a href="#options"><li>附件</li></a>
                <li class="tableConnect" @click="popChange">联系商家</li>
                <router-link :to="{path:'/mall/confirmOrder',query:{productId:route.productId}}" class="tableReserve" tag="li">立即预定</router-link>
                <!--<li class="tableReserve">暂无权限</li>-->
            </ul>
            <div class="routeFeature">
                <p class="routeDetailtitle" id="routeFeature">线路特色</p>
                <div  class="discription" v-html="route.feature"></div>
            </div>
            <div class="tripContent">
                <p class="routeDetailtitle" id="tripContent">行程内容</p>
                {{route.days}}
                <div class="daysNavOuter">
                    <a v-for="day in route.days" :href="'#days'+day" class="daysNav" :class="'navDays'+day">第{{day}}天
                    </a>
                </div>
  
                <div class="days" v-for="atom in route.content" :id="'days' + atom.day">
                    <div class="daysNumber">第{{atom.day}}天</div>
                    <div class="daysDetail">
                        <p class="daysDetails">
                            <span>{{atom.srcDst}}</span>
                            <span>交通：{{atom.subTraffic}}</span>
                        </p>
                        <p class="daysDetails">
                            <span>用餐：{{atom.subDining}}</span>
                            <span>住宿：{{atom.subAccommodation}}</span>
                        </p>
                        {{subPic=atom.subPic?atom.subPic.split(',') : [] | hide}}
                        {{subPic.pop()}}
                        <div class="daysImg">
                            <img v-for="pic in subPic" :src="pic"> 
                        </div>
                        <p class="discription" v-html="atom.content"></p>
                    </div>
                </div>
            </div>
            <div class="costDetail" v-for="item in listIntro" v-if="item.PRODUCT_ID==productId">
                <p class="routeDetailtitle" id="costDetail">费用明细</p>
                <div class="discription" v-html="route.costDetail"></div>
            </div>
            <div class="remark" v-for="item in listIntro" v-if="item.PRODUCT_ID==productId">
                <p class="routeDetailtitle" id="remark">备注</p>
                <div class="discription" v-html="route.reserveNotes"></div>
            </div>
            <div class="options">
                <p class="routeDetailtitle" id="options">附件</p>
                <span class="optionsIntro">点击文件直接下载</span>
                未绑定
                <!--<p v-for="(item,$index) in downList"><a :href="downUrlList[$index]" class="optionsDetail">{{item}}</a></p>-->
            </div>
        </div>
    </div>
</template>
<script src="assets/js/routeDetail.js"></script>