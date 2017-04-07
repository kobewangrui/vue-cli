<style lang="css" src="assets/css/header.css" scoped></style>
<template>
	<div class="mall">
		<div class="first">
			<div class="container">
				<a class="logo">
					<img :src="require('assets/image/logo.png')" alt="旅游批发平台">
				</a>
				<div class="place">
					<span>西安</span>
					<span class="placeicon"></span>
				</div>
				<form id="search">
					<ul class="nav Wline">
						<li>
							<label @click="showSlide"  class="head-label" v-text="curSrh"></label>
							<span class="placeicon"></span>
							<ul class="nav buisnessDown" v-if='hide'>
								<li v-for="item in items" @click="hideSlide(item)">{{item}}</li>
							</ul>
						</li>
					</ul>
					<input type="text" class="search_input" placeholder="三亚、泰国、兵马俑" v-model="keys">
					<button type="submit" class="searchimg"></button>
				</form>
                <ul class="first-right nav">
                    <li class="dropdown use">
                        <a href="javascript:void(0);" class="ellipsis"><img class="collect user-head"/><span class="username ellipsis">大锤大锤</span><span class="caret-down placeicon"></span></a>
                        <ul class="nav dropdown-menu userlog">
                            <li><a href="javascript:void(0);">后台管理</a></li>
                            <li><a href="javascript:void(0);">订单管理</a></li>
                            <li><a href="javascript:void(0);">发布产品</a></li>
                            <li><a href="javascript:void(0);">账户管理</a></li>
                            <li><a href="javascript:void(0);">退出</a></li>
                        </ul>
                    </li>
                    <li class="dropdown messagelist">
                        <a href="javascript:void(0);">
                            <span class="message"></span>
                            <span class="messageT">消息</span>
                        </a>
                        <ul class="nav dropdown-menu">
                            <li><span>未读消息</span><span><a href="javascript:void(0);">查看全部</a></span></li>
                            <li>
                                <a href="javascript:void(0);">交易消息</a>
                                <p>您有新的订单需要确认</p>
                            </li>
                            <li>
                                <a href="javascript:void(0);">系统消息</a>
                                <p>您尚未绑定手机</p>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown wechatlist">
                        <a href="javascript:void(0);">
                            <span class="wechat"></span>
                            <span class="wechatT">微信</span>
                        </a>
                        <ul class="nav dropdown-menu TD-code">
                            <li></li>
                        </ul>
                    </li>
                </ul>
			</div>
		</div>
		<div class="second">
		</div>
		<div class="third">
			<div class="container">
				<ul class="nav">
					<router-link to="/" tag="li" exact>首页</router-link>
					<router-link :to="{path:'/product',query:{routeCategroy:'NEARBY'}}" tag="li" exact>周边</router-link>
					<router-link :to="{path:'/product',query:{routeCategroy:'INLAND'}}" tag="li" exact>国内</router-link>
					<router-link :to="{path:'/product',query:{routeCategroy:'OVERSEAS'}}" tag="li" exact>出境</router-link>
					<router-link :to="{path:'/product',query:{routeCategroy:'SPECIAL'}}" tag="li" exact>特价</router-link>
					<router-link :to="{path:'/product',query:{routeCategroy:'CRUISES'}}" tag="li" exact>邮轮</router-link>
					<router-link :to="{path:'/product',query:{routeCategroy:'DRIVE_SELF'}}" tag="li" exact>自驾</router-link>
					<!--<router-link  to="/product" tag="li">签证</router-link>-->
					<!--<router-link class="firmInf" to="/product" tag="li">商家</router-link>-->
				</ul>
			</div>
		</div>
	</div>
</template>
<script src="assets/js/header.js"></script>
