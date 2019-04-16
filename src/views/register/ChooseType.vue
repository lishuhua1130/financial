<template>
  <div id="main">
    <div class="content">
      <div>
        <img src="../../assets/privateLogo.png">
        <label class="title">个人</label>
        <label class="proText">适合垂直领域专家、意见领袖、评论家及自媒体人士申请。</label>
        <button class="selectBtn" @click="privateSelected">选择</button>
      </div>
      <div>
        <img src="../../assets/firmLogo.png">
        <label class="title">企业</label>
        <label class="proText">适合企业、公司，分支机构，企业相关品牌，产品与服务等。</label>
        <button class="selectBtn" @click="firmSelected">选择</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChooseType",
  data() {
    return {};
  },
  methods: {
    privateSelected() {
      console.log("选择了个人");
      this.$router.push('privateEnter')
    },
    firmSelected() {
      console.log("选择了企业");
      this.$router.push('firmEnter')
    }
  }
};
</script>
<style scoped>
#main {
  display: flex;
  justify-content: center;
}
.content {
  margin-top: 40px;
  margin-bottom: 100px;
  width: 999px;
  height: 530px;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  display: flex;
  justify-content: center;
}
.content > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  font-family: "微软雅黑";
}
.title {
  margin-top: 10px;
  color: #333333;
  font-size: 20px;
}
.proText {
  margin-top: 25px;
  width: 150px;
  color: #666666;
  font-size: 14px;
}
.selectBtn {
  margin-top: 40px;
  width: 160px;
  height: 40px;
  border: 1px solid #ed4040;
  color: #ed4040;
  font-size: 20px;
  background-color: #fff;
}
</style>


