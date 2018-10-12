<template>
	<div class="things">
		<div class="things-nav">
			<swiper :dataList="navList" :activeIndex="activeIndex" ref="navSwiper" :swiperOption="swiperOptionNav" ></swiper>
		</div>
		<div class="things-main">
			<scroller 
				:on-refresh="refresh" 
				:refreshText="refreshText" ref="scroller">
				<span style="width:20px;height:20px;" class="spinner" slot="refresh-spinner"></span>
				<div class="things-time">TODAY</div>
				<swiper 
					:dataList="navList"  
					:swiperOption="swiperOptionMain"  ref="mainSwiper">
					<div slot="swiperMain" slot-scope="slotProps">
						<div v-for="(item, index) in slotProps.data.dataList" :key="index" class="things-item" >
							<div class="things-img-wrapper" @click="showDetails(item.id)">
								<img class="things-item_img" :src="item.img" alt="">
								<span class="things-item_tips">{{item.author}}</span>
							</div>
							<div class="things-item-foot">
								<div class="foot-desc">
									<span class="foot-desc_logo"><img :src="item.icon" alt=""></span>
									<div class="foot-desc_text">
										<p>{{item.author}}</p>
										<p class="origin">{{item.origin}}</p>
									</div>
								</div>
								<div class="foot-action">
									<span @click="like(item)" class="fa fa-meh-o action-up"></span><span  v-show="item.likeNum" class="like">+<i>{{item.likeNum}}</i></span> | <span @click="dislike(item)" class="fa fa-frown-o action-down"></span><span v-show="item.dislikeNum" class="dislike"><i>{{item.dislikeNum}}</i></span>
								</div>
							</div>
						</div>
					</div>
				</swiper>
			</scroller>
			<div class="to-top" @click="toTop"><i class="fa fa-arrow-up"></i></div>
		</div>
	</div>
</template>
<script>
	import { mixin,pageAct } from '../utils'
	export default{
		name: 'things',
		data (){
			return{
		        likeNum:0,
		        dislikeNum:0,
			}
		},
		mixins:[mixin,pageAct],
		methods:{
			showDetails: function(index){
				this.$router.push("/comment/"+index);
			},
			getData: function(cb){
				var self = this;
				this.$axios.post("/things",{}).then(function(response){
					var result = response.data;
					if(result.code == 200){
						self.navList  = result.list;
					}
					
				}).catch(function(error){
					console.log(error);
				});
			},
			loadMore: function(cb){
				var self = this;
				this.$axios.post("/things",{author:self.activeIndex}).then(function(response){
					var result = response.data;
					cb && cb(result);
				}).catch(function(error){
					console.log(error);
				});
			}
		}
	};
</script>