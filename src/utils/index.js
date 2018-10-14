export let prevent = function(e){
	e.preventDefault();
};

export let mixin = {
	methods:{
		like: function(item){
			if(item.likeNum || item.likeNum === 0){
				item.likeNum++;
			}else{
				this.likeNum++;
			}
			
			this.$toast("感谢你的喜欢 (^.^) ");
		},
		dislike: function(item){
			if(item.dislikeNum || item.dislikeNum === 0){
				item.dislikeNum--;
			}else{
				this.dislikeNum--;
			}
			this.$toast("我会努力的 : )");
		},
		showTotast: function(){
			this.$toast({message:"敬请期待关注功能 :-)"});
		},
		goBack: function(){
			this.$router.goBack();
		}
	}
};

export let goBack = {
	methods:{
		goBack: function(){
			this.$router.goBack();
		},
	}
};

export let pageAct = {
	data(){
		return {
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
						self.$toast("新增了两条数据.");
					}
					done();
				},600);
			});
		},
		toTop:function(){
			this.$refs.scroller.scrollTo(0,0,true);
		}
	}
};