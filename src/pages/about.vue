<template>
	<div class="about">
		<div class="page-title">	
			<span @click="goBack" class="goBack"><i class="fa fa-2x fa-angle-left"></i></span>	
			<h3>关于</h3>	
		</div>
		<div class="main">
			<p>声明：这只是一个练习的demo :( </p>
		</div>
	</div>
</template>
<script>
	export default{
		name: '',
		data (){
			return{
				desc:''
			}
		},
	    methods: {
	    	goBack: function(){	
				this.$router.goBack();	
			}
	    }
	};
</script>
