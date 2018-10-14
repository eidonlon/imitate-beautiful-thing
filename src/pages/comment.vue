<template>
	<div class="comment" >
		<div class="page-title">
			<span @click="goBack" class="goBack"><i class="fa fa-2x fa-arrow-circle-left"></i></span>
			<h3>{{title}}</h3>
		</div>
		<div class="comment-main">
			<div class="comment-main_img">
				<swiper :dataList="imgList"  ref="imgSwiper" :swiperOption="swiperOptionImg" >
					<div slot="swiperMain" slot-scope="slotProps">
						<img class="comment-item_img" :src="slotProps.data.img" alt="">
					</div>
				</swiper>
			</div>
			<div class="comment-act">
				<span @click="like" class="fa fa-meh-o action-up"></span><span  v-show="likeNum" class="comment-act__like"><i>+{{likeNum}}</i></span> || 
				<span @click="dislike" class="fa fa-frown-o action-down"></span><span v-show="dislikeNum" class="comment-act__dislike"><i>{{dislikeNum}}</i></span>
			</div>
			<div class="comment-desc">
				<div class="desc-item" v-for="(item, index) in descList" :key="index">
					<span class="desc-item_icon fl"><i class="fa" :class="item.icon"></i></span>
					<div class="desc-item_text"><em>{{item.tips}}：</em><p>{{item.text}}</p></div>
				</div>
			</div>
			<div class="comment-designer-desc">
				<span class="comment-desc-icon"><img :src="icon" alt=""></span>
				<h3 class="comment-desc-designer" >{{title}}</h3>
				<span @click="showTotast" class="foot-actionr_follow">+ 关注</span>
				<div class="desc-item_text"><p>{{designer}}</p></div>
			</div>	
			<div class="comment-designer-word clearfix">
				<div class="img fr">
					<img :src="wordImg" alt="">
				</div>
				<div class="word">
					<h4>我同疯子的唯一区别，在于我不是疯子。我同人类的唯一区别，在于我是疯子</h4>
					<p>——达利</p>
				</div>
			</div>
			<div class="comment-list">
				<span class="comment-list-tips">评论({{cNum}})</span>
				<div class="list">
					<ul>
						<li v-for="(item,index) in commentList" :key="index">
							<span class="comment-user_logo fl"><img :src="item.icon" alt=""></span>
							<div class="comment-content">
								<p class="user-name">{{item.name}}:</p>
								<p class="user-time">{{item.time}}</p>
								<p class="user-word">{{item.content}}</p>
							</div>
						</li>
					</ul>
				</div>
				<p class="page-footer">—— 没有了呢 ——</p>
			</div>		
		</div>
		<div class="comment-area" >
			<span class="icon"><img :src="icon" alt=""></span>
			<input class="send-input" type="text" placeholder="留下爪印" v-model="sendMsg" @focus="setPosition">
			<input type="button" class="send-btn" value="评论" @click="send">
		</div>
		<transition name="slide-fade">
			<div class="showNew" v-show="showNew">
				最新评论:{{commentList[0].content}}
			</div>
		</transition>
	</div>
</template>
<script>
	import  {prevent,mixin}  from '../utils'
	export default{
		name: 'comment-details',
		mixins:[mixin],
		data() {
			return {
				id:'',
				title:'',
				img:'',
				icon:'',
				wordImg:'',
				likeNum:0,
				dislikeNum:0,
				swiperOptionImg:{
					autoplay:true,
					loop :true,
			        pagination: {
			          el: '.swiper-pagination',
			          dynamicBullets: true
			        }
				},
				designer:'',
				descList:[
					{icon:'fa-paint-brush',tips:"派系",text:''},
					{icon:'fa-map-o',tips:"代表作",text:''}
				],
				imgList:[],
				commentList:[
					{icon:'./static/images/logo.jpg',name:'路人甲',time:'2018-10-01 12:12:12',content:'这是一条评论'},
					{icon:'./static/images/logo.jpg',name:'路人甲',time:'2018-10-01 12:12:12',content:'这是另外一条评论'},
					{icon:'./static/images/logo.jpg',name:'路人甲',time:'2018-10-01 12:12:12',content:'这是一条长长长长长长长长长长长长长长长长长长长长长长长长长长长的评论'},
				],
				cNum:3,
				sendMsg:'',
				showNew:false
			}
		},
		created(){
			this.id = this.$route.params.id;
			this.loadData();
		},
		mounted(){
			this.id = this.$route.params.id;
			document.body.removeEventListener("touchmove",prevent);
		},
		watch:{
			showNew: function(){
				var self = this;
				setTimeout(function(){
					self.showNew = false;
				},1000);
			}
		},
		methods:{
			loadData: function(cb){
				var self = this;
				this.$axios.post("/designer",{id:self.id}).then(function(response){
					var result = response.data;
					if(result.code == 200){
						self.title = (result.list.title).split("/")[0];
						self.icon = result.list.icon;
						self.img = result.list.portrait;
						self.descList[0].text = result.list.genre;
						self.descList[1].text = result.list.magnumOpus;
						self.designer = result.list.desc;
						self.imgList = result.list.arts;
						self.wordImg = result.list.arts[0].img;
					}
				}).catch(function(error){
					console.log(error);
				});
			},
			send: function(){
				if(this.sendMsg){
					this.commentList.unshift({
						icon:'./static/images/logo.jpg',name:'路人乙',time:'刚刚',content:this.sendMsg
					});
					this.cNum ++;
					this.showNew = true;
					this.sendMsg = '';
				}
			},
			setPosition: function(){
				// 解决安卓手机输入时键盘弹起遮盖输入框的问题
				document.querySelector(".page-footer").scrollIntoView(true);
			}
		}
	}
</script>
