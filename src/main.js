// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

Vue.use(VueRouter);
Vue.use(VueResource);


/* eslint-disable no-new */
/*new Vue({
  el: 'app',
  components: {App}
})*/

let routes = [
{
	path: '/goods',
	component: goods
}, {
	path: '/ratings', 
	component: ratings
}, {
	path: '/seller', 
	component: seller}
];
//let app = Vue.extend(App);
let router = new VueRouter({
	linkActiveClass: 'active',
	routes
});
/*router.map({
	'goods': {
		components: goods
	}
});*/
/*const app = new Vue({
	router
}).$mount('#app')*/
/*router.start(app,'#app');*/
new Vue({
	el: '#app',
	router,
	render: h=>h(App)
});
/*let app = new Vue({
  router
}).$mount('#app');
  
export default app;*/
router.push('/goods');