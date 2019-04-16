<template>
<div>
  <el-container class="indexContainer" v-if="isShowLoginView">
      <div class="bgContainer">
          <img src="../assets/bg.jpg"></img>
      </div>
    <form id="accountForm">
      <label class="formTitle">财之道通行证</label>
      <router-link to="/show/register" @click="onRegister">立即注册</router-link>
      </span><el-input v-model="userName" placeholder="请输入登录名" class="textInput"><i slot="prefix" class="iconfont iconuser"></i></el-input>
      <el-input placeholder="请输入密码" v-model="psd" show-password class="textInput"><i slot="prefix" class="iconfont iconpsd"></i></el-input>
      <el-checkbox v-model="checked" class="checked">记住密码</el-checkbox>
      <router-link to="" class="forgetPsd">忘记密码？</router-link>
      <el-button type="primary" class="loginBtn" @click="loginAccount">登陆</el-button>
      <label class="tip">您还可以通过一下方式登录：</label>
      <div class="loginStyle">
          <div class="eachLogin">
              <img src="../assets/QQ.png"></img>
              <label>QQ登录</label>
          </div>
          <div class="eachLogin">
            <img src="../assets/weixin.png"></img>
              <label>微信登录</label>
          </div>
          <div class="eachLogin">
              <img src="../assets/weibo.png"></img>
              <label>微博登录</label>
          </div>
      </div>
    </form>
  </el-container>
  <router-view></router-view>
</div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
        userName:"",
        psd:"",
        checked:false,
        isShowLoginView:true,
    }
  },
  methods:{
      onRegister:function(){
          this.isShowLoginView = false;
      },
      loginAccount:function(){
          console.log("登陆");
             this.axios
      .post("/api/user/getUser", {
        username: this.userName,
        password: this.psd
      })
      .then(response => {
        this.$store.dispatch("recordUID", response.data[0].id);
        console.log("this.$store.state.uid",this.$store.state.uid);
        this.$router.push({
              // -- 0:审核中，1：审核通过 2:审核不通过
              path: "/personalCenter"
            });
      this.axios.post("/api/user/getUserDate", {
        uid: this.$store.state.uid
      })
      .then(response => {
        // 处理返回结果
          let userData = response.data[0];
          console.log(userData);
          this.$store.dispatch("recordUserData", userData)
});
      });
      }
  }
};
</script>
<style scoped>
.indexContainer {
  width: 100%;
}
.bgContainer{
    position: fixed;
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
}
.bgContainer img{
    width:100%;
    height: 100%;
    min-width: 1280px;
    min-height: 768px;
}
#accountForm {
  position: absolute;
  background-color: #fff;
  width: 410px;
  height: 525px;
  right: 370px;
  top: 215px;
  min-width: 410px;
  min-height: 525px;
}
.formTitle {
  display: block;
  font-size: 24px;
  font-family: "微软雅黑";
  color: black;
  text-align: center;
  margin-top: 45px;
}
a{
    position: relative;
    display: block;
    color: red;
    left:320px;
    margin-bottom: 10px;
    font-size: 14px;
}
.textInput{
    display: block;
    position: relative;
    left:30px;
    width: 85%;
    margin-bottom: 35px;
}
.iconuser,.iconpsd{
    position: relative;
    font-size: 24px;
    margin-left: 2px;
    top: 5px;
}
.checked{
    display: inline-block;
    left:30px;
}
.forgetPsd{
    color: black;
    display: inline-block;
    left:190px;
}
.loginBtn{
    width: 85%;
    position: relative;
    left:30px;
    display: block;
    margin-top: 10px;
}
.loginStyle{
    margin-top: 50px;
    display: flex;
    justify-content:center;
}
.eachLogin{
    display: flex;
    flex-direction:column;
    margin-left: 20px;
    justify-content:center;
    align-items: center;
}
.eachLogin img{
    width: 34px;
    height:34px;
    margin-bottom: 10px;
}
.eachLogin label{
    font-size: 14px;
    color: #999999;
    text-align: center;
}
.tip{
    position: relative;
    top: 30px;
    left: 30px;
    font-size: 14px;
    color: #999999;
    text-align: center;
}
</style>


