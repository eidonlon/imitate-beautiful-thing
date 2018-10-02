<template>
	<div class="things">
		<div class="things-nav">
			<swiper :dataList="navList" ref="navSwiper" :swiperOption="swiperOptionNav" ></swiper>
		</div>
		<div class="things-main">
			<scroller :on-refresh="refresh" :refreshText="refreshText" ref="scroller">
				<span style="width:20px;height:20px;" class="spinner" slot="refresh-spinner"></span>
				<div class="things-time">TODAY</div>
				<swiper :dataList="navList"  ref="mainSwiper" :swiperOption="swiperOptionMain" >
					<!-- <div v-for="(item, index) in thingsList" slot="swiperMain" :key="index" class="things-item"> -->
					<div slot="swiperMain" slot-scope="slotProps">
						<div v-for="(item, index) in slotProps.data.dataList" :key="index" class="things-item" >
							<div class="things-img-wrapper" @click="showDetails(item.id)">
								<img class="things-item_img" :src="item.img" alt="">
								<span class="things-item_tips">{{item.author}} | {{item.name}}</span>
							</div>
							<div class="things-item-foot">
								<div class="foot-desc">
									<span class="foot-desc_logo"><img :src="item.logo" alt=""></span>
									<div class="foot-desc_text">
										<p>{{item.author}}</p>
										<p class="origin">{{item.origin}}</p>
									</div>
								</div>
								<div class="foot-action">
									<span class="fa fa-sort-up action-up"></span> | <span class="fa fa-sort-desc action-down"></span>
								</div>
							</div>
						</div>
					</div>
				</swiper>
			</scroller>
		</div>
	</div>
</template>
<script>
	var demoData = [
    	{id:1,title: 'Menu',author:"Menu",name:"'波特尔'研磨瓶",origin:"丹麦极简主义家居",img:"/static/images/pictoral_02.jpeg",logo:"/static/images/logo.jpg"},
    	{id:2,title: 'Menu',author:"Menu",name:"'波特尔'研磨瓶",origin:"丹麦极简主义家居",img:"/static/images/pictoral_02.jpeg",logo:"/static/images/logo.jpg"},
    	{id:3,title: 'Menu',author:"Menu",name:"'波特尔'研磨瓶",origin:"丹麦极简主义家居",img:"/static/images/pictoral_02.jpeg",logo:"/static/images/logo.jpg"},
    	{id:4,title: 'Menu',author:"Menu",name:"'波特尔'研磨瓶",origin:"丹麦极简主义家居",img:"/static/images/pictoral_02.jpeg",logo:"/static/images/logo.jpg"},
    	{id:5,title: 'Menu',author:"Menu",name:"'波特尔'研磨瓶",origin:"丹麦极简主义家居",img:"/static/images/pictoral_02.jpeg",logo:"/static/images/logo.jpg"}
    ];

	export default{
		name: 'things',
		data (){
			return{
				navList:[
					{text:"Daily",dataList:demoData},
					{text:"有物精选",dataList:[]},
					{text:"首饰",dataList:[]},
					{text:"包袋",dataList:[]},
					{text:"鞋履",dataList:[]},
					{text:"家居饰品",dataList:[]},
					{text:"Men",dataList:[]},
					{text:"配饰",dataList:[]},
					{text:"烛台",dataList:[]},
					{text:"服饰",dataList:[]},
					{text:"其他",dataList:[]}
				],
				swiperOptionNav: {
				  free:true,
		          slidesPerView: 4,
		          slideToClickedSlide: true,
		          on:{
		          	tap:this.changeView
		          }
		        },
		        swiperOptionMain:{
		        	on:{
			          	transitionEnd:this.changeNav,
			          	transitionStart:function(){
			          		console.log("start....");
			          	}
			        }
		        },
		        refreshText:'',
		        dataList:11,
		        thingsList:demoData
			}
		},
		mounted(){
			this.thingsList = demoData;
		},
		methods:{
			changeView: function(index){
				console.log("it is change.");
				console.log(this.$refs.navSwiper.$refs.swiper.swiper.activeIndex)
				console.log(this.$refs.navSwiper.$refs.swiper.swiper.clickedIndex)
			},
			changeNav: function(){
				console.log(this.$refs.mainSwiper.$refs.swiper.swiper.activeIndex);
				let index = this.$refs.mainSwiper.$refs.swiper.swiper.activeIndex;
				// this.thingsList = [];
				this.$refs.navSwiper.$refs.swiper.swiper.slideTo(index,1000,false);


				var self = this;
				this.$refs.scroller.triggerPullToRefresh()

				setTimeout(function(){
					self.navList[index].dataList = demoData;
				},2000)
			},
			refresh: function(done,cb){
				console.log("loading.......");
				setTimeout(function(){
					cb &&　cb();
					done(); // 刷新结束的回调函数
				},2000);
			},
			showDetails: function(index){
				this.$router.push("/details/"+index);
			}
		}
	};
</script>
