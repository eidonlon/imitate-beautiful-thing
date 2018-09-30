import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		navIndex:0
	},
	mutations:{
		changeNav: function(state,index){
			state.navIndex = index;
		}
	}
});

export default store