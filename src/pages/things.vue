<template>
	<div class="things">
		<p>{{desc}}</p>
		<router-link to="/details">to details</router-link>
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