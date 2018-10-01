<template>
	<div class="swiper-box">
	  <swiper :options="swiperOption" ref="swiper" >
	   		<swiper-slide v-for="(data, index) in dataList" 
	    			  :key="index"
	    			  >
	    		 <slot name="swiperMain" :data="data">{{data.text}}</slot> 	
	    	</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide} from 'vue-awesome-swiper'
	export default{
		name: 'appnav',
		props:{
			swiperOption:{
				type:Object
			},
			dataList:{
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
			}
		},
		methods:{
		}
	};
</script>
<style>
	
</style>
