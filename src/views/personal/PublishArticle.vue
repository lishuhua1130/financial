<template>
  <div class="personMain">
    <header class="personHeader">文章发布</header>
    <el-input placeholder="标题(1-32字)" v-model="articleTitle" required></el-input>
    <UE :defaultMsg="defaultMsg" :config="config" ref="ue"></UE>
    <div class="bottomContainer">
      <div>
        <label>封面图：</label>
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8080/api/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="coverImgUrl" :src="coverImgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div>
        <label>分类：</label>
        <el-select v-model="articleType" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="buttonContainer">
      <el-button type="danger" @click="getUEContent">发布</el-button>
      <el-button>存入草稿箱</el-button>
      <el-button>取消</el-button>
    </div>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>
        <i class="el-icon-success"></i>发布成功
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="writeAgain">再写一篇</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">查看文章</el-button>
      </span>
    </el-dialog>
    <el-alert
      title="文章信息填写错误"
      type="error"
      description="标题，内容，封面，类型不能为空"
      v-show="articleError"
      show-icon
      @click="closeErrorAlert"
    ></el-alert>
  </div>
</template>
<script>
import UE from "../../components/UE.vue";
import { constants } from "fs";
export default {
  name: "publishArticle",
  components: {
    UE
  },
  data() {
    return {
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 450
      },
      // -- 文章标题
      articleTitle: "",
      defaultMsg: "",
      // -- 文章封面图
      coverImgUrl: "",
      // -- 文章类型
      articleType: "",
      // -- 文章内容
      artcileContent: "",
      options: [
        {
          value: "随笔",
          label: "随笔"
        },
        {
          value: "专栏",
          label: "专栏"
        },
        {
          value: "个人生活",
          label: "个人生活"
        }
      ],
      centerDialogVisible: false,
      articleError: false
    };
  },
  methods: {
    getUEContent() {
      console.log(
        "添加文章啊",
        this.articleTitle,
        this.artcileContent,
        this.coverImgUrl,
        this.articleType
      );
      this.artcileContent = this.$refs.ue.getUEContent();
      if (
        this.articleTitle == "" ||
        this.artcileContent == "" ||
        this.coverImgUrl == "" ||
        this.articleType == ""
      ) {
        this.articleError = true;
        console.log("显示弹出框", this.articleError);
        return;
      } else {
        console.log("不显示弹出框");
      }
      let obj = {
        uid: this.$store.state.uid,
        title: this.articleTitle,
        content: this.artcileContent,
        coverImgUrl: this.coverImgUrl,
        type: this.articleType
      };
      console.log(obj);
      this.axios
        .post("/api/user/addArticle", obj) //添加数据
        .then(response => {
          // 处理返回结果
          console.log("文章发布成", response);
          this.centerDialogVisible = true;
        });
      console.log(this.artcileContent);
    },
    handleAvatarSuccess(res, file) {
      console.log(res, file);
      this.coverImgUrl = res.result.url;
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
    },
    writeAgain() {
      this.centerDialogVisible = false;
      this.articleTitle = "";
      this.coverImgUrl = "";
      this.articleType = "";
      this.artcileContent = "";
      this.$refs.ue.setUEContent("");
    },
    closeErrorAlert() {
      console.log("隐藏弹出框");
      this.articleError = false;
    }
  }
};
</script>
<style scoped>
.main {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
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
.bottomContainer {
  display: flex;
}
.buttonContainer {
  display: flex;
  justify-content: center;
}
</style>

