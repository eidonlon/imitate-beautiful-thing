<template>
	<div class="things-details" >
		<div class="page-title">
			<span @click="goBack" class="goBack"><i class="fa fa-2x fa-arrow-circle-left"></i></span>
			<h3>{{title}}</h3>
		</div>
		<div class="details-main">
			<div class="img-box">
				<img :src="img" alt="">
			</div>
			<div class="things-label">简介</div>
			<div class="things-desc">
				<div class="desc-item" v-for="(item, index) in descList" :key="index">
					<span class="desc-item_icon fl"><i class="fa" :class="item.icon"></i></span>
					<div class="desc-item_text"><em>{{item.tips}}：</em><p>{{item.text}}</p></div>
				</div>
			</div>
			<div class="things-label">其他作品</div>
			<div class="desc-img-box clearfix">
				<div class="desc-img-item" v-for="(item, index) in imgList" :key="index">
					<div class="img-item_text">—{{item.originate}}—</div>
					<div class="desc-item_img"><img :src="item.img" alt=""></div>
				</div>
			</div>
			<p class="page-footer">—— 没有了呢 ——</p>
		</div>
	</div>
</template>
<script>
	import {prevent,goBack} from '../utils/index.js'
	export default{
		name: 'thing-details',
		mixins:[goBack],
		data() {
			return {
				id:'',
				title:'',
				img:'',
				descList:[
					{icon:'fa-paint-brush',tips:"派系",text:''},
					{icon:'fa-map-o',tips:"代表作",text:''},
					{icon:'fa-newspaper-o',tips:"简介",text:''}
				],
				imgList:[]
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.loadMore();
		},
		mounted(){
			this.id = this.$route.params.id;
			document.body.removeEventListener("touchmove",prevent);
			document.body.addEventListener("touchmove",function(){
			},{passive: true});
		},
		methods:{
			loadMore: function(cb){
				var self = this;
				this.$axios.post("/designer",{id:self.id}).then(function(response){
					var result = response.data;
					if(result.code == 200){
						self.title = result.list.title;
						self.img = result.list.portrait;
						self.descList[0].text = result.list.genre;
						self.descList[1].text = result.list.magnumOpus;
						self.descList[2].text = result.list.desc;

						self.imgList = result.list.arts;
					}
				}).catch(function(error){
					console.log(error);
				});
			}
		}
	}
</script>