<template>
  <div>
    <MyHeader></MyHeader>
    <header>
      <div style="width:22%"></div>
      <div class="banner">
        <label class="redText">财道号</label>|
        <label class="blackText">自媒体</label>
      </div>
    </header>
    <div class="myContainer">
      <div style="width:22%"></div>
      <section class="leftNav">
        <el-menu class="el-menu-vertical-demo" @select="selectIndex" default-active="1">
          <el-menu-item index="1">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">文章列表</span>
          </el-menu-item>
          <el-submenu index="4">
            <span slot="title">统计</span>
            <el-menu-item-group>
              <el-menu-item index="4.1">粉丝统计</el-menu-item>
              <el-menu-item index="4.2">文章统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <span slot="title">管理</span>
            <el-menu-item-group>
              <el-menu-item index="5.1">我的粉丝</el-menu-item>
              <el-menu-item index="5.2">我的素材</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <span slot="title">账号</span>
            <el-menu-item-group>
              <el-menu-item index="6.1">账号管理</el-menu-item>
              <el-menu-item index="6.2">账户信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </section>
      <section class="tabContent">
        <router-view></router-view>
      </section>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>
<script>
import MyFooter from "../../components/Footer";
import MyHeader from "../../components/Header";
export default {
  name: "personalCenter",
  components: {
    MyFooter,
    MyHeader
  },
  data() {
    return {
      routerConfig: {
        1: "personIndex",
        2: "publishArticle",
        3: "articleList",
        4.1: "statFans",
        4.2: "statArticles",
        5.1: "dealFans",
        5.2: "dealAsset",
        6.1: "accountManager",
        6.2: "accountInfo"
      }
    };
  },
  methods: {
    selectIndex(index) {
      console.log(index);
      let url = this.routerConfig[index];
      this.$router.push({
        path: url
      });
    }
  }
};
</script>
<style scoped>
header {
  height: 70px;
  background-color: #fff;
  font-family: "微软雅黑";
  display: flex;
  align-items: center;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e0e0e0;
  font-size: 20px;
}
.redText {
  color: red;
  font-size: 30px;
  padding-right: 5px;
}
.blackText {
  padding-left: 5px;
  color: black;
  font-size: 20px;
}
.leftNav {
  margin-top: 50px;
  width: 180px;
}
.tabContent{
    background-color: white;
    margin-top: 50px;
    width: 788px;
    height: 850px;
    margin-bottom: 90px;
    margin-left:40px; 
}
.myContainer {
  width: 100%;
  display: flex;
  background-color: #f4f5f6;
}
</style>


