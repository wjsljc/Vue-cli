<template>
	<div class="C_wrap">
		<header class="register">
			<div class="h_title">足球圈—注册</div>
		</header>
		<div class="main">
			<div class="form_in">
				<form>
					<div class="input_row">
						<input type="text" placeholder="手机号" v-model="rPhone.num" @blur="checkPhone" />
						<div v-if="rPhone.isShow" class="hidden_info">{{rPhone.waring}}</div>
					</div>
					<div class="input_row">
						<input type="text" placeholder="昵称" @blur="checkNickName" v-model="nickName.name"/>
						<div v-if="nickName.isShow" class="hidden_info">{{nickName.waring}}</div>
					</div>
					<div class="input_row">
						<input type="text" placeholder="密码" @focus="psdFocus" @blur="checkPsd" v-model="Psd.psd" />
						<div v-if="Psd.isShow" class="hidden_info">{{Psd.waring}}</div>
					</div>
					<div class="input_row" v-if="isReCheckPsd">
						<input type="text" placeholder="确认密码" @blur="reCheckPsd" v-model="rePsd.psd" />
						<div v-if="rePsd.isShow" class="hidden_info">{{rePsd.waring}}</div>
					</div>
					<div class="input_row" v-if="putCheck">
						<input type="text" placeholder="请输入验证码" v-model="myReg.reg" />
						<div v-if="myReg.isShow" class="hidden_info">验证码不正确</div>
					</div>
					<div class="input_row">
						<button :class="YzmBtn" @click="reGetReg(rPhone.num)" :disabled=isDisables>{{yzmVal}}</button>
					</div>
					<button class="mtop" @click="checkInfo">提交</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script >
	module.exports = {
		data : function(){
			return {
				rPhone : {
					num : "",
					isShow : false,
					waring : "请先完善个人信息!",
					isOk : false
				},
				putCheck : false,
				yzmVal : "获取验证码信息",
				YzmBtn : {},
				isDisables : false,
				Psd : {
					psd : "",
					isShow : false,
					waring : "请先完善个人信息!",
					isOk : false
				},
				//确认密码的开关
				isReCheckPsd : false,
				rePsd : {
					psd : "",
					isShow : false,
					waring : "请先完善个人信息!",
					isOk : false
				},
				//验证昵称
				nickName : {
					name : "",
					isShow : false,
					waring : "请先完善个人信息!",
					isOk : false
				},
				//接收到的验证码
				reg : "",
				//我输入的验证码
				myReg : {
					reg : "",
					isShow : false
				}
			}
		},
		methods : {
			//验证手机号码
			checkPhone : function(){
				//对手机号进行正则运算
				var regPhone = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;	//验证密码
				//如果没有填写号码
				if(this.rPhone.num === ""){
					//提示信息
					this.rPhone.isShow = true;
					this.rPhone.waring = "你还没有填写手机号哦。";
				}else if(!this.rPhone.num.match(regPhone)){		//如果号码有误
					//提示信息
					this.rPhone.isShow = true;
					this.rPhone.waring = "手机号码格式有误，请重新输入！";
				}else{	//正确的情况
					//隐藏错误提示文字
					this.rPhone.isShow = false;
					this.rPhone.isOk = true;
				}
			},
			//密码验证
			checkPsd : function(){
				var 
					//设置默认参数
//					isReCheckPsd = false,
					//基本密码要求
					enoughPsd = new RegExp("(?=.{6,16}).*", "g"),
					 //密码为六位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
					mediumPsd = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"),
					//密码为八位及以上并且字母数字特殊字符三项都包括
					strongPsd= new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
					if(this.Psd.psd === ""){
						this.Psd.isShow = true;
						this.Psd.waring = "你还没有填写密码哦";
					}else if (false == enoughPsd.test(this.Psd.psd)) {	//不满足基本要求的密码
						//提示信息
						this.Psd.isShow = true;
						this.Psd.waring = "输入密码需在6位到32位间。";
					}else{	//	满足要求
						//关闭waring提示
						this.Psd.isShow = false;
						this.Psd.isOk = true;
					}
			},
			//控制再次输入密码的显示
			psdFocus : function(){
				//开启确认密码
				this.isReCheckPsd = true;
			},
			//两次密码的比较
			reCheckPsd : function(){
				if(this.rePsd.psd === ""){
					//提示信息
					this.rePsd.isShow = true;
					this.rePsd.waring = "你还没有填写确认密码哦。"
				}else if(this.rePsd.psd !== this.Psd.psd){	//两次密码不一致
					//提示信息
					this.rePsd.isShow = true;
					this.rePsd.waring = "两次密码输入不一致，请重新输入。"
				}else{	//两次密码一致
					//提示信息
					this.rePsd.isShow = false;
					this.rePsd.isOk = true;
					this.rePsd.waring = "";
				}
			},
			//用户昵称的判断
			checkNickName : function(){
				//设置默认参数
				var regNickName = /^[0-9a-zA-Z\u4e00-\u9fa5_]{2,16}$/ig;//验证用户昵称
				//如果没有填写昵称
				if(this.nickName.name === ""){
					//提示信息
					this.nickName.isShow = true;
					this.nickName.waring = "你还没有填写昵称哦。";
				}else if(!this.nickName.name.match(regNickName)){		//如果号码有误
					//提示信息
					this.nickName.isShow = true;
					this.nickName.waring = "用户昵称不合法,请重新输入!"
				}else{	//正确的情况
					//隐藏错误提示文字
					this.nickName.isShow = false;
					this.nickName.isOk = true;
				}
			},
			getCheckNum : function(phoneNum){
				//打开验证码输入框
				this.putCheck = true;
				var 
					aArr = [0,1,2,3,4,5,6,7,8,9],
					sStr = "";
					for(var i = 0;i < 6;i++){
						var	iRandom = Math.floor(Math.random() * 10);
						sStr += aArr[iRandom];
					}
					var sNewStr = "【锦超科技】您在锦超科技请求的验证码是：" + sStr + "，有效时间为1分钟，请不要告诉他人。";
					sNewStr = encodeURIComponent(sNewStr);
				$.ajax({
						type : "get",
						url : "http://apis.baidu.com/kingtto_media/106sms/106sms?mobile=" +  phoneNum +"&content=" + sNewStr,
						headers : {apikey : "705954d7bf9842ccf3da23f4a3edb007"},
						dataType : "json",
						success : function(data){
							
						},
						error : function(xhr){
							console.log(xhr);
						}
				});
console.log(sStr);
				return sStr;
			},
			reGetReg : function(phoneNum){
				//获取验证码
				this.reg = this.getCheckNum(phoneNum);
				//显示验证码有效时间,重新发送不可点击
				var time = 60;
				//初始化重置时间
				this.yzmVal = "重新发送(" + time +")";
				//设置获取验证码的按钮
				this.YzmBtn = {
					YzmBtn : true
				}
				//倒计时按钮开始
				var oTimer = setInterval(function(){
					//锁定按钮
					this.isDisables = true;
					this.yzmVal = "重新发送(" + time +")";
					//倒计时
					if(time === 0){
						this.isDisables = false;
						this.YzmBtn = {
							YzmBtn : false
						}
						this.yzmVal = "获取短信验证码";
						//设置为可以点击
						time = 60;
						//验证码失效
						this.reg = Math.random();
						clearInterval(oTimer);
					}else{
						time--;
					}
				}.bind(this),1000);
			},
			//判断注册条件
			checkInfo : function(){
				//依次验证各项信息是否满足
				if(this.rPhone.isOk === false){
					this.rPhone.isShow = true;
				}else if(this.nickName.isOk === false){
					this.nickName.isShow = true;
				}else if(this.Psd.isOk === false){
					this.Psd.isShow = true;
				}else if(this.rePsd.isOk === false){
					this.rePsd.isShow = true;
				}else if(this.reg !== this.myReg.reg){	//没有满足验证码
					this.myReg.isShow = true;
				}else{	//满足各项条件显示验证码
					//存储信息到本地存储
					this.saveInfo();
					this.$route.router.go('/index');
				}
			},
			saveInfo : function(){
				var userInfo = localStorage.getItem("userInfo");
				var objArr = [];
				if(userInfo === null){
					objArr.push({
						"nickName" : this.nickName.name,
					});
					//存入localStorage
					var userInfo = JSON.stringify(objArr);
					localStorage.setItem("userInfo",userInfo);
					
					//向后台发送请求
					this.$http.post('/api/register',{"name":1}).then(function(res){
						
					},function(res){
						
					})
				}else{	//不是第一次存储
					alert("操作出错!")
				}
			}
		}
	}
	
</script>
<style type="text/css">
header.register{
	overflow: hidden;
    display: block;
    z-index: 9999;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 2.8125rem!important;
}
	.main .form_in .YzmBtn{
		color: grey;
	}
	.main .form_in .hidden_info{
		color: red;
	}
</style>