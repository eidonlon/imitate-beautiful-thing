import toast from './toast.vue'

let plugin = {};
plugin.install = function(Vue, options ={}){
	let vueToast = Vue.extend(toast);
	let toaster = null;

	vueToast.prototype.close = function(){
		this.visible = false;
		this.message = '';
	}
	vueToast.prototype.show = function(){
		this.visible = true;
	}

	Vue.prototype.$toast = function(option = {}){
        var duration = option.duration || options.duration || 2500;
		if(!toaster){
			toaster = new vueToast().$mount(document.createElement("div"));
       		document.body.appendChild(toaster.$el);
		}
		toaster.message = typeof option === 'string' ? option : option.message;
		toaster.show();
        setTimeout(function () {
            toaster.close()
        }, duration);
	}
}

export default plugin;
