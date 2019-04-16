<template>
  <div class="personMain">
    <header class="personHeader">我的粉丝</header>
    <ul class="fansList">
      <li v-for="fan in fansList">
        <img src="../../assets/lll.jpg" class="fansImg">
        <label class="fansName">林乐乐</label>
      </li>
    </ul>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="perPage"
        :total="total"
        @current-change="pageChange"
        background
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allFansList: [],
      perPage: 24,
      curPage: 1,
      total: 0
    };
  },
  methods: {
    pageChange(index) {
      console.log(index);
      this.curPage = index;
    }
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.allFansList.push(i);
    }
    this.total = 100;
  },
  computed: {
    fansList() {
      let startIndex = (this.curPage - 1) * this.perPage;
      return this.allFansList.slice(startIndex, startIndex + this.perPage);
    }
  }
};
</script>

<style scoped>
.fansList {
  margin-top: 15px;
  display: flex;
  height: 500px;
  flex-wrap: wrap;
  list-style-type: none;
}
.fansList > li {
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.fansImg {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.fansName {
  padding-top: 10px;
  font-size: 14px;
  color: #333333;
  font-family: "微软雅黑";
}
.pagination {
  display: flex;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 100px;
}
</style>
