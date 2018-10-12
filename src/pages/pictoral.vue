<template>
	<div class="pictoral">
		<div class="pictoral-main">
			 <transition-group name="cell" tag="div" class="container"
					v-bind:css="false"
				    v-on:before-enter="beforeEnter"
				    v-on:enter="enter"
   					v-on:leave="leave">
				<div v-for="(data, index) in dataList" class="pictoral-item"  
					:key="index"  
					:data-index="index" >
					<span class="pictoral-item_logo"><img :src="data.icon" alt=""></span>
					<h6>{{data.title}}</h6>
					<p>——{{data.originate}}</p>
					<img :src="data.img" alt="">
					<p>{{data.desc}}</p>
				</div>
			</transition-group>
			<div class="no-more-data"  v-show="noData"><i class="fa fa-hand-o-up"></i><p>没有更多了，试试向上滑动吧！</p></div>
		</div>
	</div>
</template>
<script>
	import AlloyFinger from 'alloyfinger'
	import Velocity from 'velocity-animate/velocity.js'
	import 'velocity-animate/velocity.ui.js'
	import {prevent} from '../utils'
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
				stop:false,
				noData:false
			}
		},
		created: function(){
			this.getData();
		},
		mounted: function(){
			this.bindSlide();
			document.body.addEventListener("touchmove",prevent);
		},
		watch:{
			activeIndex:function(){
				var list = document.querySelectorAll(".pictoral-item");
					this.stop = true;
					for(var i=0;i < list.length;i++){
						this.leave(list[i]);
					}
				if(this.activeIndex == this.dataList.length){
					this.noData = true;
				}else{
					this.noData = false;
				}
			},
			slideEnd: function(){
				if(!this.stop){
					if(this.slideEnd - this.slideStart > 20){
						if(!this.noData){
							this.first += 1;
							this.second += 1;
							this.third += 1;
							this.forth += 1;
							this.activeIndex++;
						}
					}else if(this.slideEnd - this.slideStart < -20){
						if(this.first > 0){
				       		this.first -= 1;
							this.second -= 1;
							this.third -= 1;
							this.forth -= 1;
							this.activeIndex--;
						}
					}
				}
			}
		},
		methods:{
			beforeEnter: function (el) {
		      el.style.opacity = 0;
		      el.style.height = 0;
		    },
		    enter: function (el, done) {
		      var delay = el.dataset.index * 50;
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
		      var self = this;
		      var top = '';
		      var delay = el.dataset.index * 10;
		      var width = this.setWidth(el.dataset.index);

		      if(el.dataset.index < this.first){
		      	top = "99%";
		      }else{
		      	if(el.dataset.index >= (this.first + 4)){
			      	top = 15 + "%";
			      }else{
			      	top = (4 - (el.dataset.index - this.first))*10 + "%";
			      }
		      }
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
		    },
			bindSlide: function(){
				var self = this;
				var el = document.querySelector(".pictoral-main");
				var fl = new AlloyFinger(el,{
					touchStart: function(evt){
						self.slideStart = evt.changedTouches[0].clientY;
					},
					touchMove: function(evt){
						self.slideEnd = evt.changedTouches[0].clientY;
					},
	   				touchEnd:function (evt) { 
	   					self.slideEnd = evt.changedTouches[0].clientY;
	   				}
				});
			},
			setWidth: function(index){
				return index == this.first   ? '76%' :
					   index == this.second  ? '68%' :
					   index == this.third   ? '56%' : '40%';
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

