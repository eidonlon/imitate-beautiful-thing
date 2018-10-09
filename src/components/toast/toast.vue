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

<style>
.toast {
  position: fixed;
  left:50%;
  transform: translateX(-50%);
  top:60%;
  display: inline-block;
  background: rgba(0,0,0,.6);
  color:#fff;
  font-size:36px;
  border-radius:8px;
  padding:12px 55px;
}
/*.toast-fade-enter-active,.toast-fade-leave-active {
  transition: all .8s ease;
}
.toast-fadeenter, .toast-fade-leave-to{
  transform: translateX(50%);
  opacity: 0;
}*/
</style>

