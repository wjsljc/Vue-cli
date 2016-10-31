<template>
	<header v-bind:class="[classHeader]">
		<div class="h_button">
			<div class="h_buttonIn clearfix">
				<div v-link="{path:'/index/inmain/hot'}" class="h_hot active fl" @click="showNav">热点</div>
				<div v-link="{path:'/index/inmain/focus'}" class="h_follow fl" @click="hiddenNav">关注</div>
			</div>
		</div>
		<ul class="h_list clearfix" v-show="nav">
			<li class="fl">
				<a class="active">足球现场</a>
				<span class="active"></span>
			</li>
			<li class="fl">
				<a href="javascript:;">足球生活</a>
				<span></span>
			</li>
			<li class="fl">
				<a href="javascript:;">足球美女</a>
				<span></span>
			</li>
		</ul>
	</header>
	<router-view></router-view>
</template>
<script type="text/javascript">
	var Swiper =require("../../../static/js/lib/swiper.min.js");
	var $ =require("../../../static/js/lib/zepto.min.seajs.js");
	require("../../../static/css/swiper-3.3.1.min.css");
	require("../../../static/js/lib/zepto.tap.js");
//	$(".h_list li").on("click",function(){
//			alert(111);
//		//获得点击的索引
//		var i=$(this).index();
//		//改变当前选中状态样式
//		$(this).children().addClass("active").parent("li").siblings("li").children().removeClass("active");
//		//切换swiper,通过索引关联
//		 footSwiper.slideTo(i,500,false);
//	});
	module.exports = {
		data : function(){
			return {
				nav : true,
				classHeader : "hotHeader"
			}
		},
		methods : {
			showNav : function(){
				this.nav = true,
				this.classHeader = "hotHeader";
			},
			hiddenNav : function(){
				this.nav = false,
				this.classHeader = "focusHeader";
			},
		},
		ready : function(){
//			$(".iScrollVerticalScrollbar").css("width","5px");
		}
	}
</script>
<style type="text/css">

</style>
