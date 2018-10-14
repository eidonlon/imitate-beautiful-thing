import Vue from 'vue'
import Router from 'vue-router'

import pageView from '@/pages/pageView'
import Home from '@/pages/home'
import Things from '@/pages/things'
import Designer from '@/pages/designer'
import Personal from '@/pages/personal'
import Pictoral from '@/pages/pictoral'
import Details from '@/pages/details'
import Comment from '@/pages/comment'
import About from '@/pages/about'

Router.prototype.goBack = function(){
	this.isBack = true;
	window.history.go(-1);
};

Vue.use(Router);

const routers = new Router({
  routes: [
    {
      path:'',
      name:'',
      component:pageView,
      children:[
        {
          path:'/',
          name:'',
          component:Home,
          children:[
           {
            path:'',
                name:'pictoral',
                meta:{index:1},
                component:Pictoral
              },
              {
                path:'/things',
                name:'things',
                meta:{index:1},
                component:Things
              },
              {
                path:'/designer',
                name:'designer',
                meta:{index:1},
                component:Designer
              },
              {
                path:'/personal',
                name:'personal',
                meta:{index:1},
                component:Personal
              },
          ]
        },
        {
          path:'/details/:id',
          name:'details',
          meta:{index:2},
          component:Details
        },
        {
          path:'/comment/:id',
          name:'comment',
          meta:{index:2},
          component:Comment
        },
        {
          path:'/about',
          name:'about',
          meta:{index:2},
          component:About
        }
      ]
    }
  ]
})

routers.beforeEach(function (to, from, next) { 
    document.body.scrollTop = document.documentElement.scrollTop = 0
    next()
});

export default routers;
