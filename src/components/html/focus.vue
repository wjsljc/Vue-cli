<template>
	<div class="main main_sp" id="main">
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
				<div class="f_boxContent">
					<div class="f_contentImg">
						<img src="../../../static/img/follow/f_boxImg.jpg" alt="" />
					</div>
					<div class="f_contentText">这里是我的内容</div>
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
				<div class="f_boxContent">
					<div class="f_contentImg">
						<img src="../../../static/img/follow/f_boxImg.jpg" alt="" />
					</div>
					<div class="f_contentText">这里是我的内容</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	var IScroll = require("../../../static/js/lib/iscroll-probe.js");
	module.exports = {
		data : function(){
			return {
				
			}
		},
		ready:function(){
			var followScroll = new IScroll("#main",{
				fadeScrollbars : true,
				//允许鼠标滚轮控制
				mouseWheel : true,
				//允许滚动条显示
				scrollbars : true,
				keyBindings : true
			});
			setTimeout(function(){
				followScroll.refresh();
			},100);
			$(".iScrollVerticalScrollbar").css("width","5px");
		}
	}
</script>
<style type="text/css">
header.focusHeader{
	display: block;
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 2.8125rem;
}
header .h_button{
	overflow: hidden;
	width: 100%;
	height: 2.8125rem;
	background-color: #0DC441;
}
header .h_button .h_buttonIn{
	width: 7.5rem;
	height: 1.5625rem;
	line-height: 1.5625rem;
	margin: 0.625rem auto;
}
header .h_button .h_buttonIn > div{
	width: 50%;
	font-size: 0.9rem;
	text-align: center;
	color: #A3E9B7;
	background-color: rgba(61,208,103,.8);
}
header .h_button .h_buttonIn > div:nth-of-type(1){
	border-radius: 15px 0 0 15px;
}
header .h_button .h_buttonIn > div:nth-of-type(2){
	border-radius: 0 15px 15px 0;
}
header .h_button .h_buttonIn .active{
	color: white;
	background-color: rgba(100,230,135,.8);
}
.main.main_sp{
	overflow: hidden;
	position: absolute;
	top: 2.8125rem;
	left: 0;
	bottom: 2.8125rem;
	width: 100%;
}
.main .f_box{
	width: 100%;
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
.main .f_box .f_boxContent{
	width: 100%;
}
.main .f_box .f_boxContent .f_contentImg img{
	width: 100%;
}

</style>