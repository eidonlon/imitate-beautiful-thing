import Vue from 'vue'
import Router from 'vue-router'

import pageView from '@/pages/pageView'
import Home from '@/pages/home'
import Things from '@/pages/things'
import Designer from '@/pages/designer'
import Personal from '@/pages/personal'
import Pictoral from '@/pages/pictoral'

Router.prototype.goBack = function(){
	this.isBack = true;
	window.history.go(-1);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageView',
      component: pageView,
      children:[
      	{
      		path:'/home',
      		name:'home',
      		component:Home,
          children:[
            {
              path:'',
              name:'pictoral',
              component:Pictoral
            },
            {
              path:'/home/things',
              name:'things',
              component:Things
            },
            {
              path:'/home/designer',
              name:'designer',
              component:Designer
            },
            {
              path:'/home/personal',
              name:'personal',
              component:Personal
            }
          ]
         }
      ]
    }
  ]
})
