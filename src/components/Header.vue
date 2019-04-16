<template>
    <div id="myHeader">
        <div class="leftC">
            <img src="../assets/headIcon.png"/>
            <router-link to="/"><label>财知道首页</label></router-link>
            
        </div>
        <div class="rightC">
            <label>电话：31063666</label><label> QQ：2881320776</label>
        </div>
    </div>
</template>
<script>
export default {
    name:"myHeader"
}
</script>
<style scoped>
#myHeader{
    width: 100%;
    height: 35px;
    background-color: #333333;
    display: flex;
}
.leftC{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.leftC label{
    padding-left: 15px;
}
.rightC{
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rightC label{
    margin:auto 15px;
}
.headIcon{
    background-image: "../assets/headIcon.png";
}
label{
    color: #fff;
}
a{
    list-style-type: none;
    text-decoration: none;
}
</style>


