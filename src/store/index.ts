import Vuex from 'vuex';

const store = new Vuex.Store({
    state:{
        index:"store",
        loginToken:"",
    },
    mutations:{
        set_token(state:any,token:any){
            state.loginToken = token;
        }
    },
    actions:{},
    getters:{},
    modules:{

    }
})
export default store;