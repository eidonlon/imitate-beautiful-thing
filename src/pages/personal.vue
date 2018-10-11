<template>
	<div class="personal">
		<div class="personal-logo">
			<div class="logo">
				<span class="logo_img"><img src="/static/images/logo.jpg" alt=""></span>
				<span>登录</span>
			</div>
		</div>
		<div class="personal-main">
			<div class="personal-main_menu">
				<ul>
					<li><i class="fa fa-meh-o"></i><span>我推荐的</span></li>
					<li><i class="fa fa-meh-o"></i><span>我关注的</span></li>
					<li><i class="fa fa-meh-o"></i><span>我的作品</span></li>
				</ul>
			</div>
			<div class="personal-main_list">
				<ul>
					<li><i class="fa fa-meh-o"></i><span>我的订单</span><i class="fa fa-angle-right"></i></li>
					<li><i class="fa fa-meh-o"></i><span>我的订单</span><i class="fa fa-angle-right"></i></li>
					<li @click="toAbout"><i class="fa fa-meh-o"></i><span>关于</span><i class="fa fa-angle-right"></i></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import {prevent} from '../utils'
	export default{
		name: 'personal',
		data (){
			return{
				desc:'this is personal page'
			}
		},
		mounted(){
			document.body.removeEventListener("touchmove",prevent);
		},
	    methods: {
	    	toAbout:function(){
	    		this.$router.push("/about");
	    	}
	    }
	};
</script>
