import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		tabIndex:0
	},
	mutations:{
		changeTab: function(state,index){
			state.tabIndex = index;
		}
	}
});

export default store