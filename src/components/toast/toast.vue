<template>
  <transition name="toast-fade">
    <div class="toast" v-show="visible" >
        <div class="toast-content">{{message}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name:'toast',
  data(){
    return {
      visible:false,
      message:''
    }
  }
}
</script>


