<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
    margin: 0px;
}
.personHeader{
  height: 45px;
  color: #ed4040;
  font-size: 16px;
  font-family: "微软雅黑";
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-bottom: 1px solid #e8e8e8;
}
.personMain {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
