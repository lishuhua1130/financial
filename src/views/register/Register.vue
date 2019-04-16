<template>
  <div id="register">
    <div class="tab">
      <ul>
        <li
          v-for="tab in tabUrl"
          v-bind:key="tab.name"
          v-bind:class="curPath==tab.path?'choosed':'unchoosed'"
        >{{tab.name}}</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      tabUrl: [
        {
          index: 0,
          name: "账号注册",
          path: "/show/register/regaccount"
        },
        {
          index: 1,
          name: "类型选择",
          path: "/show/register/chooseType"
        },
        {
          index: 2,
          name: "入驻审核",
          path: "/show/register/checkEnter"
        }
      ],
      curPath: "/show/register/regaccount"
    };
  },
  methods: {
    getPath() {
      if (
        this.$route.path == "/show/register/privateEnter" ||
        this.$route.path == "/show/register/firmEnter"
      ) {
        this.curPath = "/show/register/checkEnter";
      } else {
        this.curPath = this.$route.path;
      }
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: "getPath"
  }
};
</script>
<style scoped>
#register {
  background-color: #f4f5f6;
}
.tab {
  padding-top: 80px;
  display: flex;
  justify-content: center;
}
ul {
  display: flex;
  list-style-type: none;
  justify-content: center;
}
li {
  width: 333px;
  height: 68px;
  border: 1px solid #d7d7d7;
  background-color: #fff;
  font-size: 20px;
  font-family: "微软雅黑";
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
}
.choosed {
  color: #fff;
  background-color: #ff0000;
}
.unchoosed {
  color: #000;
  background-color: #fff;
}
</style>


