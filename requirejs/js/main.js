//设置模块路径
require.config({
	paths :{
		'jquery' : 'jquery-1.11.3',
		'cookie' : 'jquery.cookie',
		'rand' : 'randomInt',
		'drag' : 'drag'
	}
})
//导入依赖模块
require(['jquery','cookie','rand','drag'],function($,cookie,rand,drag){
	//alert(rand.randomInt(5,10));
	drag.drag('box');
})
