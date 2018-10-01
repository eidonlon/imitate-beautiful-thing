<template>
	<div class="pictoral">
		<swiper  :dataList="dataList" :swiperOption="swiperOptionMain">
			<div slot="swiperMain" class="pictoral-item" slot-scope="slotProps">
				<h6>{{slotProps.data.desc}}</h6>
				<img :src="slotProps.data.img" alt="">
				<p>——{{slotProps.data.originate}}</p>
			</div>
		</swiper>
	</div>
</template>
<script>
	export default{
		name: 'pictoral',
		data (){
			return{
				dataList:[
					{desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_01.jpeg',originate:'《被束缚的普罗米修斯》'},
					{desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯1》'},
					{desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯2》'},
					{desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯3》'},
					{desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯》'},
					{desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯》'},
					{desc:'站在痛苦之外规劝受苦的人，是件很容易的事。',img:'/static/images/pictoral_02.jpeg',originate:'《被束缚的普罗米修斯》'}
				],
				swiperOptionMain:{
		          slideToClickedSlide: true,
		          on:{
		          	tap:function(){

		          	}
		          }
				}
			}
		}
	};
</script>