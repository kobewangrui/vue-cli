<style lang="css" src="assets/css/routeDetail.css" scoped></style>
<template>
    <div class="container">
        <div class="detailOuter">
            <p class="detailOuterNav"><span>国内线路</span>><span>云南</span>><span>线路详情</span></p>
            <div class="detailHeader">
                <div class="detailShow">
                    <div class="detailImg swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img :src="require('assets/image/1.jpg')">
                            </div>
                            <div class="swiper-slide">
                                <img :src="require('assets/image/2.jpg')">
                            </div>
                            <div class="swiper-slide">
                                <img :src="require('assets/image/3.jpg')">
                            </div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination swiper-pagination-white"></div>
                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev swiper-button-white"></div>
                        <div class="swiper-button-next swiper-button-white"></div>
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
                                        <!--{{
                                            period=route.period().find((ele,index)=>{
                                            if(new Date(ele.date).format('yyyy-MM-dd')==new Date(curYear+"-"+curMonth+"-"+key).format('yyyy-MM-dd'))
                                                return ele
                                            else
                                                return false
                                            }) | hide
                                        }}-->
                                    <span class="date">{{key}}</span>
                                    <span class="remained">
                                        <span>余:</span>10
                                    </span>
                                    <span class="price">
                                        ￥1234
                                    </span>
                                    <!--<img :src="require('assets/image/specialSign.png')" alt="">-->
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>               
                <div class="detailIntro">
                    <div class="introTitle">
                        <span class="titleName">这是标这是标这是标这是标这是标这是标这是标这是标题</span>
                        <span class="spicial">特价</span>
                        <!--<span class="rightTime">即时</span>
                        <span class="TAC">TAC</span>-->
                    </div>
                    <div class="detailList"> 
                        <p>
                            产品编号：<span class="listContent">cp100000</span>
                        </p>
                        <p>
                            行程天数：<span class="listContent listDays">12天</span>
                            提前报名天数：<span class="listContent">15天</span>
                        </p>
                        <p>
                            即时交易：<span class="listContent">是</span>
                            <span class="listQuestion">?</span>
                            <span>即时交易是指即时确认，否则需等待卖家却后才可付款。</span>
                        </p>
                        <p>
                            往返交通：<span class="listContent">飞机</span>
                        </p>
                        <p>
                            出发地/目的地：<span class="listContent">陕西西安--内蒙古呼和浩特</span>
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
                                <span class="settlementPrice">123456</span>/成人
                                <span class="postionChildren">
                                    <span class="priceSymbol symbolChildren">￥</span>
                                    <span class="settlementPrice">1234</span>/儿童
                                </span>
                            </span>
                        </p>
                        <p class="salePrice">
                            <span>
                                <span class="priceTitle">建议零售：</span>
                                <span class="priceSymbol">￥</span>
                                <span class="retailPrice">1234</span>/成人
                                <span class="postionChildren">
                                    <span class="priceSymbol symbolChildren">￥</span>
                                    <span class="retailPrice">1234</span>/儿童
                                </span>
                            </span>
                        </p>
                        <p class="buyNow">
                            <!--<a href="javscript:void(0);" class="noJurisdiction">暂无权限</a>-->
                            <router-link :to="{path:'/order',query:{productId:'cp10000',date:'2016-05-04'}}" class="buyRoute">立即预定</router-link>
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
                                <img :src="require('assets/image/collection.png')">
                                <span>收藏线路</span>
                                <!--<template v-else>
                                    <img :src="require('assets/image/collectioned.png')">
                                    <span>已收藏</span>
                                </template>-->
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
            <img :src="require('assets/image/1.jpg')"  class="brandImg">
            <div class="brandName">
                <p class="ellipsis">众信假期</p>
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
                <router-link :to="{path:'/order',query:{productId:'cp10000'}}" class="tableReserve" tag="li">立即预定</router-link>
                <!--<li class="tableReserve">暂无权限</li>-->
            </ul>
            <div class="routeFeature">
                <p class="routeDetailtitle" id="routeFeature">线路特色</p>
                <div  class="discription">这里是直接输出html代码这里是直接输出html代码这里是直接输出html代码这里是直接输出html代码这里是直接输出html代码</div>
            </div>
            <div class="tripContent">
                <p class="routeDetailtitle" id="tripContent">行程内容</p>
                这里是直接输出html代码这里是直接输出html代码这里是直接输出html代码这里是直接输出html代码这里是直接输出html代码这里是直接输出html代码
                <div class="daysNavOuter">
                    <!--<a v-for="day in 7" :href="'#days'+day" class="daysNav" :class="'navDays'+day">第{{day}}天-->
                    </a>
                </div>
  
                <div class="days" v-for="atom in 3" :id="'days' + atom.day">
                    <div class="daysNumber">第{{atom}}天</div>
                    <div class="daysDetail">
                        <p class="daysDetails">
                            <span>西安一日游</span>
                            <span>交通：飞机</span>
                        </p>
                        <p class="daysDetails">
                            <span>用餐：泡馍</span>
                            <span>住宿：大酒店</span>
                        </p>
                        <div class="daysImg">
                            <img v-for="i in 3" :src="require('assets/image/3.jpg')"> 
                        </div>
                        <p class="discription">这里可以书出html代码这里可以书出html代码这里可以书出html代码这里可以书出html代码这里可以书出html代码</p>
                    </div>
                </div>
            </div>
            <div class="costDetail">
                <p class="routeDetailtitle" id="costDetail">费用明细</p>
                <div class="discription">这里可以书出html代码这里可以书出html代码这里可以书出html代码这里可以书出html代码这里可以书出html代码</div>
            </div>
            <div class="remark">
                <p class="routeDetailtitle" id="remark">备注</p>
                <div class="discription">这里可以书出html代码这里可以书出html代码这里可以书出html代码这里可以书出html代码这里可以书出html代码</div>
            </div>
            <div class="options">
                <p class="routeDetailtitle" id="options">附件</p>
                <span class="optionsIntro">点击文件直接下载</span>
                <p v-for="i in 3"><a class="optionsDetail">手机打开了房间昆仑山.doc</a></p>
            </div>
        </div>
    </div>
</template>
<script src="assets/js/routeDetail.js"></script>