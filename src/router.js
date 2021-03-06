import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Home from './views/Home.vue'
import Articel from './views/Articel.vue'
import CreateArticle from './views/CreateArticle.vue'
Vue.use(Router)
const router =new Router ({
	mode:'history',
	routes:[{
		path:'/login',
		component: Login
	},
	{
		path:'/signup',
		component: Signup
	},
	{
		path:'/',
		component: Home
	},
	{
		path:'/articel/:id',
		component: Articel
	
	},
	{
		path:'/articles/create',
		component:CreateArticle
	}]
})
export default router;