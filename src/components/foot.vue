<style lang="css" src="assets/css/footer.css" scoped></style>
<template>
	<div class="footer">
		<div class="container foot-border">
			<div class="footer-top">
				<ul>
					<li>关于</li>
					<router-link to="/about" tag="li">关于我们</router-link>
					<router-link to="/about/contact" tag="li">联系我们</router-link>
					<router-link to="/about/add" tag="li">加入我们</router-link>
				</ul>
				<ul>
					<li>帮助</li>
					<router-link to="/help/usuallyQuestion" tag="li">帮助手册</router-link>
					<li>免责声明</li>
					<li>意见反馈</li>
				</ul>
				<ul>
					<li>合作</li>
					<router-link to="/about/cooperation" tag="li">广告合作</router-link>
					<router-link to="/about/popularize" tag="li">推广合作</router-link>
				</ul>
				<ul>
					<li>媒体</li>
					<li>官方微信</li>
					<li><img :src="require('assets/image/TD-code.jpg')"/></li>
				</ul>
				<ul>
					<li>177-4926-8844</li>
					<li><span>周一至周五</span><span>9:00——18:00</span></li>
				</ul>
			</div>
		</div>
		<div class="container foot-botttom">
			<div>
				<span>Copyright © 2017,  4me Information Technology Co., Ltd All Rights Reserved.</span>
				<span>4me信息技术有限公司</span>
				<span>沪ICP备100000000号-4</span>
				</a>
			</div>
		</div>
	</div>
</template>