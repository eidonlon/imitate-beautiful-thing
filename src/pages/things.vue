<template>
	<div class="things">
		<swiper :navList="navList"  @changeView="changeView" ></swiper>
	</div>
</template>
<script>
	export default{
		name: 'things',
		data (){
			return{
				desc:'this is things page',
				navList:[
					{text:"daily"},
					{text:"有物精选"},
					{text:"首饰"},
					{text:"包袋"},
					{text:"鞋履"},
					{text:"家居饰品"},
					{text:"Men"},
					{text:"配饰"},
					{text:"烛台"},
					{text:"服饰"},
					{text:"其他"}
				]
			}
		},
		methods:{
			changeView: function(index){
				
			}
		}
	};
</script>
