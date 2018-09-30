<template>
	<div class="tab-bar">
		<ul>
			<li v-for="(item,index) in itemList" :key="item.id" class="tab-bar-item" :class="{active: index == isActive}" @click="addActive(index,item)">
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
					{id:1,text:"画报",icon:"fa fa-clipboard",link:'/'},
					{id:2,text:"有物",icon:"fa fa-smile-o",link:'/things'},
					{id:3,text:"设计师",icon:"fa fa-pencil",link:'/designer'},
					{id:4,text:"我",icon:"fa fa-user-o",link:'/personal'}
				]
			}
		},
		mounted(){
			
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