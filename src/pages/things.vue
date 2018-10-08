<template>
	<div class="things">
		<div class="things-nav">
			<swiper :dataList="navList" :activeIndex="activeIndex" ref="navSwiper" :swiperOption="swiperOptionNav" ></swiper>
		</div>
		<div class="things-main">
			<scroller :on-refresh="refresh" :refreshText="refreshText" ref="scroller">
				<span style="width:20px;height:20px;" class="spinner" slot="refresh-spinner"></span>
				<div class="things-time">TODAY</div>
				<swiper :dataList="navList"  ref="mainSwiper" :swiperOption="swiperOptionMain" >
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
									<span class="fa fa-sort-up action-up"></span> | <span class="fa fa-sort-desc action-down"></span>
								</div>
							</div>
						</div>
					</div>
				</swiper>
			</scroller>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'designer',
		data (){
			return{
				activeIndex:0,
				navList:[],
				author:'',
				swiperOptionNav: {
				  free:true,
		          slidesPerView: 4,
		          slideToClickedSlide: true,
		          on:{
		          	tap:this.changeView
		          }
		        },
		        swiperOptionMain:{
		        	autoHeight:true,
		        	on:{
			          	transitionEnd:this.changeNav,
			        }
		        },
		        refreshText:''
			}
		},
		created(){
			this.getData();
		},
		mounted(){
		},	
		methods:{
			changeView: function(){
				this.activeIndex = this.$refs.navSwiper.$refs.swiper.swiper.clickedIndex;
				this.$refs.mainSwiper.$refs.swiper.swiper.slideTo(this.activeIndex,1000,false);
			},
			changeNav: function(){
				let index = this.$refs.mainSwiper.$refs.swiper.swiper.activeIndex;
				this.$refs.navSwiper.$refs.swiper.swiper.slideTo(index,1000,false);
				this.activeIndex = this.$refs.mainSwiper.$refs.swiper.swiper.activeIndex;
			},
			refresh: function(done){
				var self = this;
				this.loadMore(function(result){
					setTimeout(function(){
						if(result.code == 200){
							self.navList[self.activeIndex].dataList = result.list.concat(self.navList[self.activeIndex].dataList);
						}
						done();
					},500);
				});
			},
			showDetails: function(index){
				this.$router.push("/details/"+index);
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
