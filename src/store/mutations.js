const mutations={
    recordUID:function(state,uid){
        state.uid = uid;
        console.log("vuex中的state的uid",state.uid);
    },
    recordUserData:function(state,userData){
        state.userData = userData;
    }
}
export default mutations;