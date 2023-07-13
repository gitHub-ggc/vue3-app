export default{
    namespaced:true,
    state:{
        loginToken:"",
    },
    mutations:{
        set_loginToken:function(state:any,token:any){
            state.loginToken = token;
        }
    }

}