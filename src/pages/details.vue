<template>	
	<div class="things-details" >	
		<div class="page-title">	
			<span @click="goBack" class="goBack"><i class="fa fa-2x fa-angle-left"></i></span>	
			<h3>{{id}}</h3>	
		</div>	
		<div class="details-main">	
			<div class="img-box">	
				<img :src="img" alt="">	
			</div>	
			<div class="things-title">	
				{{title}} 	
			</div>	
			<div class="things-desc">	
				<div class="desc-item" v-for="(item, index) in descList" :key="index">	
					<span class="desc-item_icon fl"><i class="fa" :class="item.icon"></i></span>	
					<div class="desc-item_text">{{item.tips}}{{item.text}}</div>	
				</div>	
			</div>	
			<div class="desc-img-item" v-for="(item, index) in imgList" :key="index">	
				<div class="img-item_text">-{{item.originate}}-</div>	
				<div class="desc-item_img"><img :src="item.img" alt=""></div>	
			</div>	
		</div>	
	</div>	
</template>	
<script>	
	import utils from '../utils'
	export default{	
		name: 'thing-details',	
		data() {	
			return {	
				id:'',	
				title:'',	
				img:'',	
				descList:[	
					{icon:'fa-meh-o',tips:"派系: ",text:''},	
					{icon:'fa-meh-o',tips:"代表作: ",text:''},	
					{icon:'fa-meh-o',tips:"简介: ",text:''}	
				],	
				imgList:[]	
			}	
		},	
		created(){	
			this.id = this.$route.params.id;	
			this.loadMore();
			document.removeEventListener("touchmove",utils.prevent);	
		},	
		mounted(){	
			this.id = this.$route.params.id;	
		},	
		methods:{	
			goBack: function(){	
				this.$router.goBack();	
			},	
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