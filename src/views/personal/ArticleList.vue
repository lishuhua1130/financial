<template>
  <div>
    文章列表
    <el-alert
      title="文章信息填写错误"
      type="error"
      description="标题，内容，封面，类型不能为空"
      v-show="isShow"
      show-icon
      @click="closeErrorAlert"
      :style="styleObject"
    ></el-alert>
    <button @click="changeShowState">显示弹出框按钮</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      styleObject: {
          color:"red"
      }
    };
  },
  methods: {
    closeErrorAlert() {
      console.log("关闭了弹出框");
    },
    changeShowState() {
      this.styleObject = {
        display: "block"
      };
      this.isShow = true;
    }
  }
};
</script>

