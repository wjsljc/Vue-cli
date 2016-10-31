var Vue = require('vue');

var vueRouter = require('vue-router');

var http = require('vue-resource'); 

var routerConfig = require('./router-config');


//使用插件
Vue.use(vueRouter);
Vue.use(http);

var router = new vueRouter({
	//设置切换路由的默认的类
	linkActiveClass:"active"
});
router.alias({
	"/":"/html/inheader",
	"/index":"/index/inmain/hot",
})
//配置路由
routerConfig(router);
var App = require('./App');
router.start(App,"#app");