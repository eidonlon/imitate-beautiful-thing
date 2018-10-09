<template>
	<div class="home">
		<tabbar></tabbar>
		<div class="home-content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'home'
	};
</script>