<template>
	<div class="page-view">
		<transition :name="transitionName">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>
<script>
	export default {
		name:"pageView",
		data() {
			return {
				transitionName:'slide-left'
			}
		},
		mounted(){
			console.log(this.$router)
			console.log(this.$route)
		},	
		watch:{
			$route: function(to,from){
				console.log(to.meta.index);
				let isBack = this.$router.isBack;
				if(isBack){
					this.transitionName = 'slide-right';
				}else{
					this.transitionName = 'slide-left';
				}
				this.$router.isBack = false;
			}
		}
	}
</script>