const actions={
    recordUID:function({commit},uid){
        commit('recordUID',uid);
    },
    recordUserData:function({commit},userData){
        commit('recordUserData',userData);
    }
}
export default actions;