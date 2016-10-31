<template>
	<div class="C_wrap">
		<header>
			<div class="h_title">发现</div>
			<div class="h_search clearfix">
				<input type="text" class="fl" placeholder="请输入昵称"/>
				<button class="fr">收索</button>
			</div>
		</header>
		<div class="main" id="main">
			<div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
				<div class="f_box">
					<div class="f_boxTtile">
						<div class="f_boxTitleImg fl">
							<img src="../../../static/img/follow/follow_title01.png" />
						</div>
						<dl class="fl">
							<dt>这里是标题</dt>
							<dd>我是标题下面的内容,哈哈哈哈</dd>
						</dl>
						<div class="f_count">
							<span>123456</span>
							<a href="#"><i class="fa fa-thumbs-o-up"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	var Swiper =require("../../../static/js/lib/swiper.min.js");
	var $ = require("../../../static/js/lib/zepto.min.seajs.js");
	var IScroll = require("../../../static/js/lib/iscroll-probe.js");
	require("../../../static/js/lib/zepto.tap.js");
	//关联点击切换swiper
	module.exports = {
		data : function(){
			return {
				
			}
		},
		ready: function(){
			var scrollObj={
				fadeScrollbars : true,
				//允许鼠标滚轮控制
				mouseWheel : true,
				//允许滚动条显示
				scrollbars : true,
				keyBindings : true
			};
			var findScroll=new IScroll("#main",scrollObj);
			setTimeout(function(){
				findScroll.refresh();
			},100);
			$(".iScrollVerticalScrollbar").css("width","5px");
		}
	}
</script>
<style type="text/css">
	header{
	display: block;
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 5.0625rem;
}
header .h_search{
	overflow: hidden;
	width: 96.85%;
	height: 2.8125rem;
	line-height: 2.8125rem;
	margin: 0 auto;
}
header .h_search input{
	width: 80%;
	height: 1.4rem;
	margin: 0.65625rem 0;
	padding-left: 3%;
	border: 1px solid #AAAAAA;
	border-radius: 5px;
}
header .h_search button{
	width: 14.838%;
	height: 1.5rem;
	line-height: 1.5rem;
	margin: 0.65625rem 0;
	background-color: #0DC441;
	border: 0;
	border-radius: 5px;
	color: white;
	letter-spacing: 1px;
}
.main{
	overflow: hidden;
	position: absolute;
	top: 6.0625rem;
	left: 0;
	bottom: 2.8125rem;
	width: 100%;
}
.main .f_box{
	width: 100%;
	border-bottom: 1px solid #E5E5E5;
}
.main .f_box .f_boxTtile{
	position:relative;
	height: 3.125rem;
	padding: 0.75rem;
	background-color: white;
}
.main .f_box .f_boxTitleImg{
	width: 3.125rem;
	height: 3.125rem;
}
.main .f_box .f_boxTitleImg img{
	width: 100%;
	border: 1px solid #B4B4B4;
	border-radius: 100%;
}
.main .f_box .f_boxTtile dl{
	margin-left: 0.625rem;
}
.main .f_box .f_boxTtile dl dt{
	line-height: 1.5rem;
	font-size: 1rem;
	color: #000000;
}
.main .f_box .f_boxTtile dl dd{
	line-height: 1.5rem;
	font-size: 0.9rem;
	color: #999999;
}
.main .f_box .f_boxTtile .f_count{
	position: absolute;
	right: 0.75rem;
	top: 0.75rem;
	color: #CCCCCC;
}
.main .f_box .f_boxTtile .f_count a i{
	color: #CCCCCC;
}

</style>