<template>
	<div class="pictoral">
		<div class="pictoral-main">
			<div v-for="(data, index) in dataList" :key="index" class="pictoral-item" 
				:class="{first: index == first,second: index == second,third: index == third,fouth: index == fouth,'slider-down':isDown === index,'showed':index < first}" :style="{transform:'translateY('+translatey+'px)'}">
				<span class="pictoral-item_logo"><!-- <img :src="data.icon" alt=""> --></span>
				<h6>{{data.title}}</h6>
				<p>——{{data.originate}}</p>
				<img :src="data.img" alt="">
				<p>{{data.desc}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	import AlloyFinger from 'alloyfinger'
	export default{
		name: 'pictoral',
		data (){
			return{
				dataList:[
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_01.jpeg',originate:'《被束缚的普罗米修斯》'},
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯1》'},
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯2》'},
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯3》'},
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_01.jpeg',originate:'《被束缚的普罗米修斯》'},
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_01.jpeg',originate:'《被束缚的普罗米修斯》'},
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_01.jpeg',originate:'《被束缚的普罗米修斯》'},
					{title:"梵高/ 自画像",icon:'/static/images/logo.jpg',desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_01.jpeg',originate:'《被束缚的普罗米修斯》'},
				],
				translatey:0,
				activeIndex:0,
				isTouchMove:false,
				isDown:false,
				first:0,
				second:1,
				third:2,
				fouth:3,
				slideStart:0,
				slideEnd:0
			}
		},
		mounted(){
			var self = this;
			var el = document.querySelector(".pictoral-main");
			var items = document.querySelector(".pictoral-item");
			var fl = new AlloyFinger(el,{
				touchStart: function(evt){
					self.slideStart = evt.changedTouches[0].clientY;
					console.log("toush start...")
				},
				touchMove: function (evt) {
					console.log("toush Move...");
					self.slideDown(evt);
				},
   				touchEnd:  function (evt) { 
   					self.slideEnd = evt.changedTouches[0].clientY;
   					if(self.slideEnd - self.slideStart > 120){
   						 self.isDown = self.first;
   						 setTimeout(function(){
	   						self.first += 1;
	   						self.second += 1;
	   						self.third += 1;
	   						self.fouth += 1;
	   						self.translatey = 0;
	   					},700);
   					}else{
   						self.translatey = 0;
   					}

   					
   					console.log(self.slideEnd - self.slideStart);
   					console.log("toush end...");
   				},
			 //    touchCancel: function () { 
			 //    	console.log("toush Cancel...")
			 //    },
			    // multipointStart: function () {
			    // 	console.log("toush Start...")
			    // },
			    // multipointEnd: function () {
			    // 	console.log("toush multipointEnd...");
			    // },
			    // tap: function () {
			    // 	console.log("toush tap...");
			    // },
			    // doubleTap: function () {
			    // 	console.log("toush doubleTap...");
			    // },
			    // longTap: function () {
			    // 	console.log("toush longTap...");
			    // },
			    // singleTap: function () {
			    // 	console.log("toush singleTap...");
			    // },
			    // rotate: function (evt) {
			    //     console.log(evt.angle);
			    // },
			    // pinch: function (evt) {
			    //     console.log(evt.zoom);
			    // },
			    // pressMove: function (evt) {
			    //     console.log(evt.deltaX);
			    //     console.log(evt.deltaY);
			    // },
			    // swipe: function (evt) {
			    //     console.log("swipe" + evt.direction);
			    //     console.log(evt)
			    // }
			})
		},
		methods:{
			slideDown: function(evt){
				var self = this;
				var el = document.querySelector(".pictoral-main");
				var items = document.querySelector(".pictoral-item");
       			var maxWidth = document.querySelector(".pictoral-main").offsetWidth;
			    var itemList = document.querySelectorAll(".pictoral-item");

				self.translatey += Number(evt.deltaY);
			    self.isTouchMove = true;
			
		       if(evt.deltaY > 0){
		       		itemList.forEach(function(val,index){
		       			val.style.zIndex = (10000 - index);
			        })
		       }else{
		       		document.querySelectorAll(".pictoral-item").forEach(function(val,index){
		       			
			        })
		       }
			},
			// slideDown: function(evt){
			// 	var self = this;
			// 	var el = document.querySelector(".pictoral-main");
			// 	var items = document.querySelector(".pictoral-item");

			// 	self.translatey += Number(evt.deltaY);
			//         self.isTouchMove = true;
			//         var maxWidth = document.querySelector(".pictoral-main").offsetWidth;
			//         var itemList = document.querySelectorAll(".pictoral-item");

			//        if(evt.deltaY > 0){
			//        		itemList.forEach(function(val,index){
			//        			if(index == self.activeIndex){
			//        				val.style.width = (val.offsetWidth+2) +"px";
			// 			       	val.style.left = (val.offsetLeft-1) +"px";
			// 			       	val.style.top = (val.offsetTop + 8) + "px";

			// 			       	if(val.offsetTop > 260) {
			// 			       		console.log("down........")
			// 			       		self.isDown = true;

			// 			       		setTimeout(function(){
						       			
			// 			       			console.log(self.activeIndex )
			// 			       			val.className += val.className.indexOf('showed') > -1 ? '' : ' showed';
			// 			       		},1000);
			// 			       	}
			//        			}else{

			// 	       			if(val.offsetWidth < maxWidth){
			// 	       				val.style.width = (val.offsetWidth+2) +"px";
			// 			       		val.style.left = (val.offsetLeft-1) +"px";
			// 	       			}

			// 	       			if(index >　3){
			// 	       				val.style.width = (itemList[3].offsetWidth - 50) + "px";
			// 	       				val.style.left = (itemList[3].offsetLeft + 25) + "px";
			// 	       				val.style.top = (itemList[3].offsetTop - 30) + "px";
			// 	       			}
			//        			}

			//        			val.style.zIndex = (10000 - index);
			// 	        })
			//        }else{
			//        		document.querySelectorAll(".pictoral-item").forEach(function(val,index){
			//        			if(index == self.activeIndex){
			//        				val.style.width = (val.offsetWidth-2) +"px";
			// 			       	val.style.left = (val.offsetLeft+1) +"px";
			// 			       	val.style.top = (val.offsetTop - 8) + "px";
			//        			}else{
			//        				val.style.width = (val.offsetWidth-2) +"px";
			// 		      	 	val.style.left = (val.offsetLeft+1) +"px";
			//        			}
			// 	        })
			//        }
			// }
		}
	};
</script>