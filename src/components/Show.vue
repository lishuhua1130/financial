<template>
    <div id="show">
        <MyHeader></MyHeader>
        <router-view/>
        <MyFooter></MyFooter>
    </div>
</template>
<script>
import MyFooter from './Footer';
import MyHeader from './Header';
import Register from '../views/register/Register';
export default {
    name:"show",
    components:{
        MyFooter,
        MyHeader,
        Register
    }
}
</script>
<style scoped>
#show{
    min-width: 700px;
}
</style>


