<template>
	<div class="things-details">
		<span @click="goBack" class="goBack"><i class="fa fa-2x fa-arrow-circle-left"></i></span>
		<div class="details-main">
			<div class="img-box">
				<img :src="detailsData.img" alt="">
			</div>
			<div class="things-title">
				{{detailsData.author}} | {{detailsData.name}}
			</div>
			<div class="things-desc">
				<div class="desc-item" v-for="(item, index) in descList" :key="index">
					<span class="desc-item_icon fl"><i class="fa" :class="item.icon"></i></span>
					<div class="desc-item_text">{{item.text}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'thing-details',
		data() {
			return {
				id:'',
				detailsData :{
					title: 'Menu',author:"Menu",name:"'波特尔'研磨瓶",origin:"丹麦极简主义家居",img:"./static/images/pictoral_02.jpeg",logo:"./static/images/logo.jpg"
				},
				descList:[
					{icon:'fa-meh-o',text:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'},
					{icon:'fa-meh-o',text:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'},
					{icon:'fa-meh-o',text:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'}
				]
			}
		},
		mounted(){
			this.id = this.$route.params.id;
		},
		methods:{
			goBack: function(){
				this.$router.goBack();
			}
		}
	}
</script>