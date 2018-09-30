<template>
	<div class="thing-details">
		<p>things details.</p>
		<span @click="goBack">goBack</span>
	</div>
</template>
<script>
	export default{
		name: 'thing-details',
		data() {
			return {

			}
		},
		methods:{
			goBack: function(){
				this.$router.goBack();
			}
		}
	}
</script>