<template>
  <div class="personMain">
    <header class="personHeader">账户信息：</header>
    <section class="singleItem">
      <label class="textTip redTip">财道号名称：</label>
      <section class="content">
        <el-input v-model="financeName" class="dataInupt"></el-input>
        <img src="../../assets/edit.png" class="iconEdit">
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip redTip">财道号介绍：</label>
      <section class="content">
        <el-input v-model="financeInfo" class="dataInupt"></el-input>
        <img src="../../assets/edit.png" class="iconEdit">
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip redTip">财道号头像：</label>
      <section class="content">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8080/api/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="financeImgUrl" :src="financeImgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip redTip">所在地：</label>
      <section class="content">
        <label>{{city}}</label>
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip">领域：</label>
      <section class="content">
        <label>{{field}}</label>
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip">运营者姓名：</label>
      <section class="content">
        <label>{{operatorName}}</label>
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip">运营者身份证号：</label>
      <section class="content">
        <label>{{operatorID}}</label>
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip">运营者电话：</label>
      <section class="content">
        <label>{{operatorTel}}</label>
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip">联系邮箱：</label>
      <section class="content">
        <el-input v-model="operatorTel" class="dataInupt"></el-input>
        <img src="../../assets/edit.png" class="iconEdit">
      </section>
    </section>
    <section class="singleItem">
      <label class="textTip">其他联系方式：</label>
      <section class="content">
        <el-input v-model="operatorRelation" class="dataInupt"></el-input>
        <img src="../../assets/edit.png" class="iconEdit">
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "AccountInfo",
  data() {
    return {
      financeName: "",
      financeInfo: "",
      financeImgUrl: "",
      city: "",
      field: "",
      operatorName: "",
      operatorID: "",
      operatorTel: "",
      operatorEmail: "",
      operatorRelation: ""
    };
  },
  created: function() {
    let userData = this.$store.state.userData;
    (this.financeName = userData.financeName),
      (this.financeInfo = userData.financeInfo),
      (this.city = userData.city),
      (this.financeImgUrl = userData.financeImgUrl),
      (this.field = userData.field),
      (this.operatorName = userData.operatorName),
      (this.operatorID = userData.operatorID),
      (this.operatorTel = userData.operatorTel),
      (this.operatorEmail = userData.operatorEmail),
      (this.operatorRelation = userData.operatorRelation);
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res, file);
      this.financeImgUrl = res.result.url;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
.singleItem {
  width: 100%;
  display: flex;
  margin-top: 25px;
}
.singleItem:last-child{
    padding-bottom: 110px;
}
.dataInupt{
    width: 95%;
}
.iconEdit{
    width: 15px;
    height: 14px;
}
.textTip {
  width: 20%;
  text-align: right;
}
.redTip::before{
    content: "*";
    color: red;
}
.content {
  margin-left: 20px;
  flex: 1;
  display: flex;
  align-items: center;
}
.avatar-uploader,
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 180px;
}
.avatar-uploader,
.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
