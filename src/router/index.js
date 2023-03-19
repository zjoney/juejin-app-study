import Vue from 'vue';
import VueRouter from 'vue-router';

/* 导入需要渲染的组件 */
import Home from "../views/Home.vue";

/* 路由懒加载：文件的切割，把组件的代码单独打包为独立的JS  =>对页面第一加载的性能体验有很大的帮助 */

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'hash',
	routes: [{
		path: '/',
		component: Home
	}, {
		path: '/detail/:id',
		component: () => import( /*webpackChunkName:"component"*/ '../views/Detail.vue')
	}, {
		path: '/content/:id/:sectionId',
		component: () => import( /*webpackChunkName:"component"*/ '../views/Content.vue')
	}, {
		path: '/info',
		component: () => import( /*webpackChunkName:"component"*/ '../views/MyInfo.vue')
	}, {
		path: '/buy',
		component: () => import( /*webpackChunkName:"component"*/ '../views/MyBuy.vue')
	}, {
		path: '*',
		redirect: '/'
	}]
});

export default router;