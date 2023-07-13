import Vuex from 'vuex';
import Token from './modules/token'
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
        Token
    }
})
export default store;