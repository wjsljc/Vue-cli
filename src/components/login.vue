<template>
	<div class="C_wrap">
		<header class="login">
			<div class="h_title">足球圈—登录</div>
		</header>
		<div class="main">
			<div class="form_in">
				<form>
					<div class="input_row">
						<input type="text" placeholder="手机号" v-model="User.name" />
					</div>
					<div class="input_row">
						<input type="text" placeholder="密码" v-model="User.psd" />
					</div>
					<p>还没有账号？点击此处立即<a v-link="{path:'/register'}">注册</a></p>
					<button @click="login">提交</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	module.exports = {
		data:function(){
			return {
				User:{
					name:'',
					psd:''
				}
			}
		},
		methods : {
			login : function(){
				this.$http.post('/api/login',{"user":this.User}).then(function(res){
					if(this.User.name == res.data.name && this.User.psd == res.data.psd){
						this.$route.router.go('/index');
					}else{
						alert("用户名或密码输入错误!");
					}
				},function(res){
					console.log("服务忙！请稍后再试!");
				})
			}
		}
	}
</script>
<style scoped>
header.login{
	overflow: hidden;
    display: block;
    z-index: 9999;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 2.8125rem!important;
}
</style>