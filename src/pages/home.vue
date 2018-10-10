<template>
	<div class="home">
		<tabbar></tabbar>
		<div class="home-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>
<script>
	export default{
		name:'home'
	};
</script>