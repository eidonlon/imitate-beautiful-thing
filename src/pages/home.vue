<template>
	<div class="home">
		<div class="home-content">
			<router-view></router-view>
		</div>
		<tabbar></tabbar>
	</div>
</template>
<script>
	export default{
		name:'home',
		data (){
			return {

			}
		}
	};
</script>