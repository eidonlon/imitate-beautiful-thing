<template>
	<div class="test02">
		 <div class="">
		     <input type="button" @click="goBack" value="返回">
		   </div>
	<p>test02 page</p>
	</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    goBack: function(){
      this.$router.goBack();
    }
  }
}
</script>