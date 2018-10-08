<template>
	<div class="pictoral">
		<div class="pictoral-main">
			 <transition-group name="cell" tag="div" class="container">
				<div v-for="(data, index) in dataList" :key="index" class="pictoral-item" 
					:class="{'first': index == first,'second ': index == second,'third ': index == third,'forth ': index == forth,'showed':index < first && showed}"
				>
					<span class="pictoral-item_logo"><img :src="data.icon" alt=""></span>
					<h6>{{data.title}}</h6>
					<p>——{{data.originate}}</p>
					<img :src="data.img" alt="">
					<p>{{data.desc}}</p>
				</div>
			</transition-group>
		</div>
	</div>
</template>
<script>
	import AlloyFinger from 'alloyfinger'
	// import Velocity from 'velocity-animate/velocity.js'
	// import 'velocity-animate/velocity.ui.js'
	export default{
		name: 'pictoral',
		data (){
			return{
				dataList:[],
				translatey:0,
				isTouchMove:false,
				isDown:false,
				first:0,
				second:1,
				third:2,
				forth:3,
				slideStart:0,
				slideEnd:0,
				showed:false
			}
		},
		created: function(){
			this.getData();
		},
		mounted: function(){
			setTimeout(this.bindSlide,500)
		},
		methods:{
			bindSlide: function(){
				var self = this;
				var el = document.querySelector(".pictoral-main");

				self.setWidth();
				var fl = new AlloyFinger(el,{
					touchStart: function(evt){
						self.slideStart = evt.changedTouches[0].clientY;
					},
					touchMove: function (evt) {
						self.slideDown(evt);
					},
	   				swipe:  function (evt) { 
	   					self.slideEnd = evt.changedTouches[0].clientY;
	   					var timer = null;
	   					if(self.slideEnd - self.slideStart > 30){
	   							self.showed = true;
		   						self.first += 1;
		   						self.second += 1;
		   						self.third += 1;
		   						self.forth += 1;
	   						 	
	   						 setTimeout(function(){
								self.setWidth();
							 },0);
							 setTimeout(function(){
							 	var itemList = document.querySelectorAll(".showed");
					 			itemList[itemList.length - 1].style.zIndex =2000 - (1000 - self.first);
					 		},10);
	   						  setTimeout(function(){
							 	self.loadMore();
							 },1000);
	   					}else if(self.slideEnd - self.slideStart < -30){
	   						if(self.first > 0){
	   							var itemList = document.querySelectorAll(".showed");
	   							itemList[itemList.length - 1].style.top = '40%';

					       		self.first -= 1;
								self.second -= 1;
								self.third -= 1;
								self.forth -= 1;

								setTimeout(function(){
									var itemList = document.querySelectorAll(".showing");
									itemList.forEach(function(val,index){
										val.style.top = '';
									});
									self.setWidth();
								},0);
	   						}
	   						
	   					}
	   				}
				})
			},
			setWidth: function(){
				document.querySelector(".first").style.width = '76%';
	 			document.querySelector(".second").style.width = '68%';
	 			document.querySelector(".third").style.width = '56%';
	 			document.querySelector(".forth").style.width = '40%';
			},
			slideDown: function(evt){
				var self = this;
				var el = document.querySelector(".pictoral-main");
       			var maxWidth = document.querySelector(".pictoral-main").offsetWidth *.76;
			    var itemList = document.querySelectorAll(".pictoral-item");
			    var len = 0;
		       if(evt.deltaY >= 0){
		       		if(evt.deltaY != 0){
	       				itemList[self.first].style.top = (itemList[self.first].offsetTop + 10) + "px";
		       		}
	       			itemList[self.first].style.zIndex = (1000 - self.first);
		       }
			},
			getData: function(){
				var self = this;
				this.$axios.post("/pictoral",{}).then(function(response){
					var result = response.data;
					if(result.code == 200){
						self.dataList =self.dataList = result.list;
					}
				}).catch(function(error){
					console.log(error);
				});
			},
			loadMore: function(){
				var self = this;
				this.$axios.post("/pictoral",{pageSize:2}).then(function(response){
					var result = response.data;
					if(result.code == 200){
						self.dataList = self.dataList.concat(result.list);
					}
				}).catch(function(error){
					console.log(error);
				});
			}
		}
	};



	
</script>
<style>
.cell-move {
  transition: transform .5s linear;
  transform: translate3d(0,0,0);
}
</style>