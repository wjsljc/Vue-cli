<template>
	<div>
		<router-view  keep-alive></router-view>
		<footer>
			<div>
				<a><i class="fa fa-home active" v-link="{path:'/index/inmain/hot'}"></i></a>
				<p><a v-link="{path:'/index/inmain/hot'}" class="active">首页</a></p>
			</div>
			<div>
				<a><i class="fa fa-search" v-link="{path:'/index/find'}"></i></a>
				<p><a v-link="{path:'/index/find'}">发现</a></p>
			</div>
			<div>
				<a href="shop.html" class="icenter"><i class="fa fa-camera"></i></a>
			</div>
			<div>
				<a><i class="fa fa-user" v-link="{path:'/index/mine'}"></i></a>
				<p><a v-link="{path:'/index/mine'}">我的</a></p>
			</div>
			<div>
				<a href="exit.html"><i class="fa fa-power-off"></i></a>
				<p><a href="exit.html">退出</a></p>
			</div>
		</footer>
	</div>
</template>
<script type="text/javascript">
	module.exports={
		
	}
</script>

<style type="text/css">

.iScrollVerticalScrollbar {
	width: 5px;
}


</style>