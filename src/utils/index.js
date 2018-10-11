export let prevent = function(e){
	e.preventDefault();
};

export let mixin = {
	methods:{
		like: function(item){
			item.likeNum++;
			this.$toast("感谢你的喜欢 (^.^) ");
		},
		dislike: function(item){
			item.dislikeNum--;
			this.$toast("我会努力的 : )");
		},
		showTotast: function(){
			this.$toast({message:"敬请期待关注功能 :-)"});
		},
	}
}

