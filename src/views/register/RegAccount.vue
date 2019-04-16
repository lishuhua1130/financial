<template>
  <div id="main">
    <form class="accountForm" @submit.prevent="submit">
      <div class="mainCon firstCon">
        <label class="tip">手机号</label>
        <div class="rightCon">
          <input
            type="text"
            required
            class="regularInput normalInput"
            placeholder="请输入手机号"
            v-model="phoneNum"
            oninput="value=value.replace(/[^\d]/g,'')"
          >
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">密码</label>
        <div class="rightCon">
          <input
            type="password"
            required
            class="regularInput normalInput"
            placeholder="请输入密码"
            v-model="password"
            id="psd"
            maxlength="12"
            minlength="6"
            oninput="this.value=this.value.replace(/[^\w_]/g,'');"
          >
          <label class="psdTip agree">字母、数字或者英文符号，6-12位。必须包含数字、英文字母</label>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">确认密码</label>
        <div class="rightCon">
          <input
            type="password"
            required
            class="regularInput normalInput"
            placeholder="请再次输入密码"
            v-model="repeatPassword"
            maxlength="12"
            minlength="6"
            oninput="this.value=this.value.replace(/[^\w_]/g,'');"
          >
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">图片验证码</label>
        <div class="rightCon">
          <input type="text" required class="picCheck normalInput">
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">验证码</label>
        <div class="rightCon">
          <input type="text" required placeholder="请输入验证码" class="verification normalInput">
          <input type="button" value="发送验证码" class="sendVerification normalInput">
        </div>
      </div>
      <div class="mainCon lastOne">
        <div class="lastTip"></div>
        <div class="rightCon">
          <input type="checkbox">
          <label class="agree">同意遵守</label>
          <label class="agreement">《财知道协议》</label>
          <input type="submit" value="注册" class="submitBtn normalInput">
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "RegAccount",
  data() {
    return {
      phoneNum: "", //手机号
      password: "", //密码
      repeatPassword: "" //重复密码
    };
  },
  // created() {
  //   this.axios
  //     .post("/api/user/updateUser", {
  //       password:'666666',
  //       username: 123
  //     })
  //     .then(response => {
  //       console.log("111111111111111");
  //       // 处理返回结果
  //       console.log(response);
  //     });
  //  this.axios
  //     .post("/api/user/getUser", {
  //       username: 110,
  //       password: 111111
  //     })
  //     .then(response => {
  //       console.log("111111111111111");
  //       // 处理返回结果
  //       console.log(response);
  //     });
  // },
  methods: {
    //-- 提交之前的各种验证
    submit(event) {
      // -- 验证两次密码输入是否一致
      if (this.password == this.repeatPassword) {
        // -- 提交到服务器
        console.log("this.$store.state.uid", this.$store.state.uid);
        // -- 提交数据，需要将数据格式统一
        this.axios
          .post("/api/user/addUser", {
            username: this.phoneNum,
            password: this.password
          }) //添加数据
          .then(response => {
            // 处理返回结果
            this.axios
              .post("/api/user/getUser", {
                username: this.phoneNum,
                password: this.password
              }) //查询数据
              .then(response => {
                // 处理返回结果
                this.$store.dispatch("recordUID", response.data[0].id);
                console.log("this.$store.state.uid", this.$store.state.uid);
                // -- 跳转到类型选择
                this.$router.push("chooseType");
              });
          });
      } else {
        // this.$alert("密码不一致,请重新输入");
        <el-alert title="警告提示的文案" type="warning" />;
        let psdUI = document.getElementById("psd");
        psdUI.focus();
      }
    }
  }
};
</script>
<style scoped>
#main {
  display: flex;
  justify-content: center;
}
.accountForm {
  margin-top: 40px;
  margin-bottom: 100px;
  width: 999px;
  height: 530px;
  background-color: #fff;
  border: 1px solid #d7d7d7;
}
.firstCon {
  margin-top: 50px;
}
.mainCon {
  display: flex;
  font-size: 16px;
  font-family: "微软雅黑";
  margin-bottom: 30px;
  align-items: center;
}
.tip,
.lastTip {
  width: 35%;
  text-align: right;
  margin-right: 50px;
}
.tip:before {
  content: "*";
  color: red;
}
.normalInput {
  height: 45px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
}
.regularInput {
  width: 380px;
}
.picCheck {
  width: 180px;
}
.verification {
  width: 230px;
}
.sendVerification {
  width: 145px;
}
.agree {
  font-size: 14px;
  font-family: "微软雅黑";
  color: #999999;
}
.agreement {
  font-size: 14px;
  font-family: "微软雅黑";
  color: #4d7cd9;
}
.submitBtn {
  margin-top: 10px;
  display: flex;
  background-color: #cdcdcd;
  color: #fff;
  width: 380px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  font-family: "微软雅黑";
}
.lastOne {
  margin-top: -15px;
}
.psdTip {
  position: absolute;
}
</style>


