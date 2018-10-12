<template>
	<div class="tab-bar">
		<ul>
			<li v-for="(item,index) in itemList" 
				:key="index" class="tab-bar-item" 
				:class="{active: index == isActive}" 
				@click="addActive(index,item)">
				
				<span class="tab-bar-item_icon" :class="item.icon"></span>
				<span class="tab-bar-item_Text">{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'tabbar',
		data (){
			return {
				isActive:this.$store.state.tabIndex,
				itemList:[
					{text:"推荐",icon:"fa fa-clipboard",link:'/'},
					{text:"作品",icon:"fa fa-smile-o",link:'/things'},
					{text:"设计师",icon:"fa fa-pencil",link:'/designer'},
					{text:"我",icon:"fa fa-user-o",link:'/personal'}
				]
			}
		},
		mounted(){
			if(this.isActive != 0){
				this.$router.push(this.itemList[this.isActive].link);
			}
		},
		methods:{
			addActive: function(index,item){
				this.isActive = index;
				this.$router.push(item.link);
				this.$store.commit("changeTab",index);
			}
		}
	};
</script>