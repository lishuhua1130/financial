<template>
  <div id="main">
    <form class="accountForm">
      <div class="mainCon">
        <label class="tip redTip">财道号名称</label>
        <div class="rightCon">
          <el-input
            v-model="financeName"
            class="regularInput"
            clearable
            maxlength="11"
            minlength="2"
            oninput="this.value=this.value.replace(/[^\w_]/g,'');"
          ></el-input>
          <label class="psdTip agree">2-11个字，只能包含英文、数字、下划线</label>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip redTip">财道号介绍</label>
        <div class="rightCon">
          <el-input
            type="textarea"
            v-model="financeInfo"
            class="regularInput"
            maxlength="40"
            minlength="10"
          ></el-input>
          <label class="psdTip agree">10~40个字，要求内容完整通顺，无特殊符号，请勿添加任何联系方式如微博、手机号、QQ</label>
        </div>
      </div>
      <div class="mainCon extraCon">
        <label class="tip redTip">财道号头像</label>
        <div class="rightCon uploadContainer">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/api/upload"
            :show-file-list="false"
            :on-success="handlerFinanceImgUrl"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="financeImgUrl" :src="financeImgUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>

          <div class="uploadTip">
            <div class="empty"></div>
            <label>要求清晰、健康、代表品牌形象。</label>
            <label>请勿使用二维码，最大5M,200x200像素</label>
          </div>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip redTip">所在地</label>
        <el-select v-model="province" placeholder="请选择省份" class="selectGap" @change="proviceChange">
          <el-option
            v-for="item in provinces"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
        <el-select v-model="city" placeholder="请选择地区">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>
      <div class="mainCon">
        <label class="tip">领域</label>
        <div class="rightCon">
          <el-select v-model="field" placeholder="请选择">
            <el-option
              v-for="item in provinces"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">运营者姓名</label>
        <div class="rightCon">
          <el-input v-model="operatorName" class="regularInput" clearable></el-input>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip redTip">运营者身份证号</label>
        <div class="rightCon">
          <el-input v-model="operatorID" class="regularInput" clearable></el-input>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip redTip">运营者身份证照片</label>
        <div class="rightCon uploadContainer">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/api/upload"
            :show-file-list="false"
            :on-success="handlerOperatorImgUrl"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="operatorImgUrl" :src="operatorImgUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="uploadTip">
            <div class="empty"></div>
            <label>照片形式请参考示例进行拍摄</label>
            <label>身份证上的信息清晰可见</label>
            <label>身份证号码必须清晰可识别，大小不超过2M</label>
          </div>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">运营者电话</label>
        <div class="rightCon">
          <el-input v-model="operatorTel" class="regularInput" clearable></el-input>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">联系邮箱</label>
        <div class="rightCon">
          <el-input v-model="operatorEmail" class="regularInput" clearable></el-input>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">其他联系方式</label>
        <div class="rightCon">
          <el-input v-model="operatorRelation" class="regularInput" clearable></el-input>
        </div>
      </div>
      <div class="mainCon">
        <label class="tip">辅助材料</label>
        <div class="rightCon">
          <el-input type="textarea" v-model="assistInfo" class="regularInput"></el-input>
          <label class="psdTip agree">
            10-300个字，请提供您本人的专栏、博客或微信公众号等链接，我们会以您已发布的
            文章作为参考依据，审核您申请的账号。
          </label>
        </div>
      </div>
      <div class="mainCon lastOne">
        <div class="tip"></div>
        <div class="rightCon">
          <input type="checkbox">
          <label class="agree">同意</label>
          <label class="agreement">财道号媒体平台用户协议</label>
          <div class="buttonContainer">
            <el-button type="info" class="infoBtn">上一步</el-button>
            <el-button type="info" class="infoBtn" @click="submit">提交审核</el-button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CheckEnter",
  data() {
    return {
      financeName: "", //名称
      financeInfo: "", //简介
      financeImgUrl: "", //头像,
      province: "", //省份
      city: "", //城市
      field: "", //领域
      operatorName: "", //运营者姓名
      operatorID: "", //运营者身份证
      operatorImgUrl: "", //运营者身份证照片
      operatorTel: "", //运营者电话
      operatorEmail: "", //运营者邮箱
      operatorRelation: "", //其他联系方式
      assistInfo: "", //辅助资料
      provinces: [], //省份合集
      fields: [],//领域合集
      cities: [] //所选省份的城市合集
    };
  },
  methods: {
    submit() {
      // -- 向服务器请求添加数据
      let userData = {
        // -- 0:表示个人 1:表示企业
        uid: this.$store.state.uid,
        accountType: 0,
        financeName: this.financeName, //名称
        financeInfo: this.financeInfo, //简介
        financeImgUrl: this.financeImgUrl, //头像,
        province: this.province, //省份
        city: this.city, //城市
        field: this.field, //领域
        operatorName: this.operatorName, //运营者姓名
        operatorID: this.operatorID, //运营者身份证
        operatorImgUrl: this.operatorImgUrl, //运营者身份证照片
        operatorTel: this.operatorTel, //运营者电话
        operatorEmail: this.operatorEmail, //运营者邮箱
        operatorRelation: this.operatorRelation, //其他联系方式
        assistInfo: this.assistInfo //辅助资料
      };
      console.log("提交审核", userData);
      this.axios
        .post("/api/user/addUserData", userData) //查询数据
        .then(response => {
          // -- 根据回调的状态显示审核结果
          if (response.status == 200 && response.statusText == "OK") {
            this.$router.push({
              // -- 0:审核中，1：审核通过 2:审核不通过
              path: "/show/register/checkResult",
              query: { state: 1 }
            });
          }
          console.log(response);
        });
    },
    /**
     * 处理财经道头像
     */
    handlerFinanceImgUrl(res, file) {
      this.financeImgUrl = res.result.url;
    },
    /**
     * 处理运营者身份证照
     */
    handlerOperatorImgUrl(res, file) {
      this.operatorImgUrl = res.result.url;
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
    /**
     * 省份选择对应的城市集合进行更新
     */
    proviceChange(selectValue) {
      let cities = this.provinces.find(item => {
        //这里的userList就是上面遍历的数据源
        return item.value === selectValue; //筛选出匹配数据
      });
      this.cities = cities.children;
    }
  },
  created() {
    // -- 获取数据
    this.axios.get("../../static/province.json").then(response => {
      this.provinces = response.data;
    });
    this.axios.get("../../static/province.json").then(response => {
      this.fields = response.data;
    });
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
  background-color: #fff;
  border: 1px solid #d7d7d7;
}
.firstCon {
  margin-top: 50px;
}
.mainCon {
  margin-top: 15px;
  display: flex;
  font-size: 16px;
  font-family: "微软雅黑";
  margin-bottom: 25px;
  align-items: center;
}
.extraCon {
  margin-top: 45px;
}
.tip {
  width: 35%;
  text-align: right;
  margin-right: 50px;
}
.redTip:before {
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
.lastOne {
  margin-top: 45px;
}
.psdTip {
  position: absolute;
  width: 400px;
}
.uploadContainer {
  display: flex;
  justify-content: center;
}
.uploadTip {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: #8c939d;
  font-size: 14px;
  font-family: "微软雅黑";
}
.empty {
  flex: 1;
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
.buttonContainer {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 380px;
}
.infoBtn {
  width: 120px;
}
.selectGap {
  margin-right: 15px;
}
</style>


