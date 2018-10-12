<template>
	<div class="swiper-box">
		<swiper :options="swiperOption" ref="swiper" >
			<swiper-slide v-for="(data, index) in dataList" 
		  	  			  :key="index"
		  	  			  :class="{active: activeIndex == index}">
				<slot name="swiperMain" :data="data">{{data.text}}</slot> 	
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide} from 'vue-awesome-swiper'
	export default{
		name: 'appnav',
		props:{
			activeIndex:{},
			swiperOption:{
				type:Object
			},
			dataList:{}
		},
		components:{
			swiper,
			swiperSlide
		}
	};
</script>
