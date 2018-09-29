<template>
	<div class="personal">
		<p>{{desc}}</p>
		<tabbar></tabbar>
	</div>
</template>
<script>
	export default{
		name: 'personal',
		data (){
			return{
				desc:'this is personal page'
			}
		}
	};
</script>