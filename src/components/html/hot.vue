<template>
	<div class="main">
		<div class="swiper-container" id="foot">
			<div class="swiper-wrapper">
				<div class="swiper-slide sqxc" id="scroll01">
					<div>
						<div class="clearfix overflowh" id="footliveBox">
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
						</div>
						<div class="clearfix overflowh" id="footliveBox">
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
						</div>
						<div class="clearfix overflowh" id="footliveBox">
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
						</div>
						<div class="clearfix overflowh" id="footliveBox">
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
							<div class="xc_box fl">
								<div class="xc_img">
									<a href="#"><img src="../../../static/img/footlive/xc_01.jpg"/></a>
								</div>
								<div class="xc_title">小丸子啊小丸子</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide" id="scroll02">
					<div class="clearfix overflowh" id="footlifeBox">
						123
					</div>
				</div>
				<div class="swiper-slide">3</div>
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
				classHeader : "hotHeader",
			}
		},
		ready: function(){
			var footSwiper = new Swiper("#foot",{
				onlyExternal : true,
			});
			var scrollObj={
				fadeScrollbars : true,
				//允许鼠标滚轮控制
				mouseWheel : true,
				//允许滚动条显示
				scrollbars : true,
				keyBindings : true
			};
			var myscroll1=new IScroll("#scroll01",scrollObj);
			setTimeout(function(){
				myscroll1.refresh();
			},100);
			$(".iScrollVerticalScrollbar").css("width","5px");
			$(".h_list li").on("click",function(){
				//获得点击的索引
				var i=$(this).index();
				//改变当前选中状态样式
				$(this).children().addClass("active").parent("li").siblings("li").children().removeClass("active");
				//切换swiper,通过索引关联
				 footSwiper.slideTo(i,500,false);
			});
		}
	}
	
</script>
<style type="text/css">
header.hotHeader{
	display: block;
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 5.0625rem;
}
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
header .h_list{
	width: 100%;
	height: 2.2rem;
	background-color: white;
	border-bottom: 1px solid #E8E8E8;
}
header .h_list li{
	position:relative;
	width: 33.3333333%;
	line-height: 2.25rem;
	text-align: center;
}
header .h_list li a{
	font-size: 1rem;
	color: #666666;
}
header .h_list li a.active{
	color: #0DC441;
}
header .h_list li span.active{
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background-color: #0DC441;
}
.main{
	overflow: hidden;
	position: absolute;
	top: 5.3rem;
	left: 0;
	bottom: 2.8125rem;
	width: 100%;
}
.main .swiper-container{
	overflow: hidden;
	position: absolute;
	top: 0;
	bottom: 2.8125rem;
	width: 100%;
	height: 100%;
}
.main .xc_box{
	display: inline-block;
	width: 49%;
	margin-bottom: 0.3125rem;
	background-clip: border-box;
}
.main .xc_box:nth-of-type(2n+1){
	margin-right: 2%;
}
.main .xc_box:nth-of-type(2n){
	float: right;
}
.main .xc_box img{
	width: 100%;
	border: 1px solid #E5E5E5;
	background-clip: border-box;
}
.main .xc_box .xc_title{
	width: 100%;
	border: 1px solid #E5E5E5;
	border-top: 0;
	background-clip: border-box;
	text-align: center;
}
</style>