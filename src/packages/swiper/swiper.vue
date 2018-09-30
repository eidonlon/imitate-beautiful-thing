<template>
	<div>
		<div class="appnav">
			<swiper :options="swiperOptionNav" ref="mainSwiper" class="swiper-nav">
		   		<swiper-slide v-for="(item, index) in navList" 
		    			  :key="index"
		    			  >{{item.text}}
		    			
		    	</swiper-slide>
			</swiper>
		</div>
		<div class="swiper-main">
			<swiper :options="swiperOptionMain" ref="navSwiper" class="swiper-content">
		        <swiper-slide v-for="(slide,index) in navList"
		        			  :key="index"
		        			  > {{ slide.text }}<!-- <slot name="swiperMain">{{item.text}}</slot>  --></swiper-slide>
		    </swiper>
		</div>
		  
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide} from 'vue-awesome-swiper'
	export default{
		name: 'appnav',
		props:{
			navList:{
				type:Array
			}
		},
		components:{
			swiper,
			swiperSlide
		},
		data (){
			return{
				isActive:0,
				swiperOptionMain: {
				  loop:true,
		          loopedSlides: 5
		        },
		        swiperOptionNav: {
		          loop:true,
		          slidesPerView: 4,
		          loopedSlides: 5, 
		          slideToClickedSlide: true,
		          on:{
		          	tap:this.changeNav
		          }
				}
			}
		},
		mounted(){
			this.$nextTick(() => {
				const navSwiper = this.$refs.navSwiper.swiper
		        const mainSwiper = this.$refs.mainSwiper.swiper
		        navSwiper.controller.control = mainSwiper
			});
		},
		methods:{
			changeNav: function(){
				console.log("click")
				let index = this.$refs.navSwiper.swiper.clickedIndex;
				this.isActive = index;
				this.$emit('changeView',index);
			}
		}
	};
</script>
<style>
	
</style>
