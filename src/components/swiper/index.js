import swiper from './swiper.vue'

swiper.install = function(Vue){
	Vue.component('swiper',swiper);
}
export default swiper;