<template>
	<div class="things">
		<div class="things-nav">
			<swiper :dataList="navList" ref="navSwiper" :swiperOption="swiperOptionNav" ></swiper>
		</div>
		<div class="things-main">
			<scroller :on-refresh="refresh" :refreshText="refreshText">
				<span style="width:20px;height:20px;" class="spinner" slot="refresh-spinner"></span>
				<swiper :dataList="navList"  ref="mainSwiper" :swiperOption="swiperOptionMain" ></swiper>
			</scroller>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'things',
		data (){
			return{
				navList:[
					{text:"Daily"},
					{text:"有物精选"},
					{text:"首饰"},
					{text:"包袋"},
					{text:"鞋履"},
					{text:"家居饰品"},
					{text:"Men"},
					{text:"配饰"},
					{text:"烛台"},
					{text:"服饰"},
					{text:"其他"}
				],
				swiperOptionNav: {
				  free:true,
		          slidesPerView: 4,
		          slideToClickedSlide: true,
		          on:{
		          	tap:this.changeView
		          }
		        },
		        swiperOptionMain:{
		        	on:{
			          	transitionEnd:this.changeNav
			        }
		        },
		        refreshText:''
			}
		},
		mounted(){
		},
		methods:{
			changeView: function(index){
				console.log("it is change.")
			},
			changeNav: function(){
				console.log(this.$refs.mainSwiper.$refs.swiper.swiper.activeIndex);
				let index = this.$refs.mainSwiper.$refs.swiper.swiper.activeIndex;

				this.$refs.navSwiper.$refs.swiper.swiper.slideTo(index,1000,false);

			},
			refresh: function(done){
				console.log("loading.......");
				setTimeout(function(){
					done(); // 刷新结束的回调函数
				},2000);
			}
		}
	};
</script>
