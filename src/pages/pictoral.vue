<template>
	<div class="pictoral">
		<div class="pictoral-main">
			 <transition-group name="cell" tag="div" class="container"
					v-bind:css="false"
				    v-on:before-enter="beforeEnter"
				    v-on:enter="enter"
   					v-on:leave="leave">
				<div v-for="(data, index) in dataList" :key="index" class="pictoral-item"  
					:data-index="index" >
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
	import Velocity from 'velocity-animate/velocity.js'
	import 'velocity-animate/velocity.ui.js'
	import utils from '../utils'
	export default{
		name: 'pictoral',
		data (){
			return{
				dataList:[],
				first:0,
				second:1,
				third:2,
				forth:3,
				slideStart:0,
				slideEnd:0,
				activeIndex:0,
				stop:false
			}
		},
		created: function(){
			this.getData();
		},
		mounted: function(){
			this.bindSlide();
			document.body.addEventListener("touchmove",utils.prevent);
		},
		watch:{
			activeIndex:function(){
				var list = document.querySelectorAll(".pictoral-item");
				if(!this.stop){
					this.stop = true;
					for(var i=0;i < list.length;i++){
						this.leave(list[i]);
					}
				}
			}
		},
		methods:{
			beforeEnter: function (el) {
		      el.style.opacity = 0
		      el.style.height = 0
		    },
		    enter: function (el, done) {
		      var delay = el.dataset.index * 50
		      var top = '';
		      var width = this.setWidth(el.dataset.index);

		      if(el.dataset.index >= (this.first + 4)){
		      	top = 15 + "%";
		      }else{
		      	top = (4 - (el.dataset.index - this.first))*8 + "%";
		      }
		      setTimeout(function () {
		        Velocity(
		          el,
		          { opacity: 1, 
		          	height: '80%',
		          	translateY:top,
		          	width:width,
		          	zIndex: 1000 - el.dataset.index
		          },
		          { complete: done }
		        )
		      }, delay);
		    },
		    leave: function (el, done) {
		      var delay = el.dataset.index * 10
		      var self = this;
		      var top = '';
		      if(el.dataset.index < this.first){
		      	top = "99%";
		      }else{
		      	if(el.dataset.index >= (this.first + 4)){
			      	top = 15 + "%";
			      }else{
			      	top = (4 - (el.dataset.index - this.first))*10 + "%";
			      }
		      }
		      var width = this.setWidth(el.dataset.index);
		      // setTimeout(function(){
		      	Velocity(
		          el,
		          { 
		          	width:width,
		          	translateY:top
		          },{
		          	mobileHA:true,
		          	easing: [ 0.4, 0.01, 0.165, 0.99 ],
		          	complete: function(){
			          	if(el.dataset.index == (self.dataList.length - 1)){
			          		self.stop = false;
			          	}
		      	    } 
		          }
		        );
		      // },0);
		    },
			bindSlide: function(){
				var self = this;
				var el = document.querySelector(".pictoral-main");
				var fl = new AlloyFinger(el,{
					touchStart: function(evt){
						self.slideStart = evt.changedTouches[0].clientY;
					},
					touchMove: function(evt){
						if(evt.deltaY > 0){
							var _first = document.querySelectorAll(".pictoral-item")[self.first];
							// _first.style.top = (_first.offsetTop + 10 ) + "px";
						}else{
							// var _first = document.querySelectorAll(".pictoral-item")[self.first];
							// _first.style.top = (_first.offsetTop - 20 ) + "px";
						}
					},
	   				touchEnd:function (evt) { 
	   					self.slideEnd = evt.changedTouches[0].clientY;
	   					if(self.slideEnd - self.slideStart > 20){
	   						self.first += 1;
	   						self.second += 1;
	   						self.third += 1;
	   						self.forth += 1;
	   						self.activeIndex++;
	   					}else if(self.slideEnd - self.slideStart < -20){
	   						if(self.first > 0){
					       		self.first -= 1;
								self.second -= 1;
								self.third -= 1;
								self.forth -= 1;
	   							self.activeIndex--;
							}
	   					}
	   				}
				});
			},
			setWidth: function(index){
				var width = '';
				if(index == this.first){
					width = '76%';
				}else if(index == this.second){
					width = '68%';
				}else if(index == this.third){
					width = '56%';
				}else if(index == this.forth){
					width = '40%';
				}else{
					width = '40%';
				}
				return width;
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
			}
		}
	};
</script>

