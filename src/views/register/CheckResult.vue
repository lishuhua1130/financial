<template>
  <div class="main">
      <div v-if="checkState==0" class="resultContainer"><label class="tipText">审核中</label></div>
    <div v-if="checkState==1" class="resultContainer">
        <div class="successBtn"><el-button type="success" icon="el-icon-check" circle></el-button></div>
        <label class="tipText">恭喜你，审核通过</label>
        <div><el-button type="danger" @click="gotoIndex">进入财经道</el-button></div>
    </div>
    
    <div v-if="checkState==2" class="resultContainer">
        <div class="successBtn"><i class="el-icon-error"></i></div>
        <label class="tipText">抱歉，您的信息没有通过审核</label>
        <div><el-button type="danger" @click="gotoBack">立即修改</el-button></div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkState: ""
    };
  },
  created() {
    this.checkState = this.$route.query.state;
  },
  methods:{
      gotoIndex(){
          this.$router.push("/")
      },
      gotoBack(){
          this.$router.go(-1);
      }
  }
};
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
}
.resultContainer {
  width: 999px;
  height: 530px;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.successBtn{
    margin-top: 30px;
}
.tipText{
    font-family: "微软雅黑";
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>

