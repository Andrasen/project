// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import user from './components/user.vue'
import test from './components/test.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:user},
		{path:'/test',component:test}
	]
});

/* eslint-disable no-new */
new Vue({
   router,
  template: `
  	<div id="app">
  		<ul>
  			<li>
  				<router-link to="/">user</router-link>
  				<router-link to="/test">test</router-link>
  			</li>
  		</ul>
  		<router-view></router-view>
  	</div>
  `
}).$mount('#app')
