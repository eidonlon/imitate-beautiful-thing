<template>
	<div class="things">
		<p>{{desc}}</p>
		<tabbar></tabbar>
	</div>
</template>
<script>
	export default{
		name: 'things',
		data (){
			return{
				desc:'this is things page'
			}
		}
	};
</script>