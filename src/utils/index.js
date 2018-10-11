export let prevent = function(e){
	e.preventDefault();
};

export let mixin = {
	methods:{
		like: function(item){
			if(item.likeNum){
				item.likeNum++;
			}else{
				this.likeNum++;
			}
			
			this.$toast("感谢你的喜欢 (^.^) ");
		},
		dislike: function(item){
			if(item.dislikeNum){
				item.dislikeNum--;
			}else{
				this.dislikeNum--;
			}
			this.$toast("我会努力的 : )");
		},
		showTotast: function(){
			this.$toast({message:"敬请期待关注功能 :-)"});
		},
		goBack: function(){
			this.$router.goBack();
		}
	}
}

