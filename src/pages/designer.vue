<template>
	<div class="designer">
		<div class="designer-nav">
			<swiper :dataList="navList" :activeIndex="activeIndex" ref="navSwiper" :swiperOption="swiperOptionNav" ></swiper>
		</div>
		<div class="designer-main">
			<keep-alive>
			<scroller :on-refresh="refresh" :refreshText="refreshText" ref="scroller">
				<span style="width:20px;height:20px;" class="spinner" slot="refresh-spinner"></span>
				<div class="designer-time">TODAY</div>
					<swiper :dataList="navList"  ref="mainSwiper" :swiperOption="swiperOptionMain">
						<div slot="swiperMain" slot-scope="slotProps">
							<div v-for="(item, index) in slotProps.data.dataList" :key="index" class="designer-item" >
								<div class="designer-img-wrapper" @click="showDetails(item.id)">
									<img class="designer-item_img" :src="item.img" alt="">
									<span class="foot-desc_logo"><img :src="item.icon" alt=""></span>
								</div>
								<div class="designer-item-foot">
									<div class="foot-desc">
										<div class="foot-desc_text">
											<p>{{item.author}} | <span class="origin">{{item.origin}}</span></p>
										</div>
									</div>
									<div class="foot-action">
										<span @click="showTotast" class="foot-actionr_follow">+ 关注</span>
									</div>
								</div>
							</div>
						</div>
					</swiper>
			</scroller>
		</keep-alive>
			<div class="to-top" @click="toTop">
				<i class="fa fa-arrow-up"></i>
			</div>
		</div>
	</div>
</template>
<script>
	import {pageAct} from '../utils'
	export default{
		name: 'designer',
		mixins:[pageAct],
		methods:{
			showDetails: function(index){
				this.$router.push("/details/"+index);
			},
			getData: function(cb){
				var self = this;
				this.$axios.post("/designer",{}).then(function(response){
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
				this.$axios.post("/designer",{author:self.activeIndex}).then(function(response){
					var result = response.data;
					cb && cb(result);
				}).catch(function(error){
					console.log(error);
				});
			},
			showTotast: function(){
				this.$toast({message:"敬请期待关注功能 :-)"});
			}
		}
	};
</script>
