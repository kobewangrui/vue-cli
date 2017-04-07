<style lang="css" src="assets/css/footer.css" scoped></style>
<template>
	<div class="footer">
		<div class="container foot-border">
			<div class="footer-top">
				<ul>
					<li>关于</li>
					<router-link to="/mall/about" tag="li">关于我们</router-link>
					<router-link to="/mall/contact" tag="li">联系我们</router-link>
					<router-link to="/mall/add" tag="li">加入我们</router-link>
				</ul>
				<ul>
					<li>帮助</li>
					<router-link to="/mall/usuallyQuestion" tag="li">帮助手册</router-link>
					<li>免责声明</li>
					<li>意见反馈</li>
				</ul>
				<ul>
					<li>合作</li>
					<router-link to="/mall/cooperation" tag="li">广告合作</router-link>
					<router-link to="/mall/popularize" tag="li">推广合作</router-link>
				</ul>
				<ul>
					<li>媒体</li>
					<li>官方微信</li>
					<li><img :src="require('assets/image/TD-code.jpg')"/></li>
				</ul>
				<ul>
					<li>400-9900-516</li>
					<li><span>周一至周日</span><span>9:00——18:00</span></li>
				</ul>
			</div>
		</div>
		<div class="container foot-botttom">
			<div>
				<span>Copyright © 2016, Gaiya Information Technology Co., Ltd All Rights Reserved.</span>
				<span>西安盖丫信息技术有限公司</span>
				<span>陕ICP备15001819号-1</span>
				</a>
			</div>
		</div>
	</div>
</template>