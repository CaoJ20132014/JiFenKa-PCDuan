import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        UserInfo: {}
    },
    getters: {
        setInfo: (state) => {
            return state.UserInfo;
        }
    },
    mutations: {
        //新増 TodoList item
        ONADDINFO: (state, item) => {
            state.UserInfo = item;
        },
        ONDELETEINFO: (state, item) => {
            state.UserInfo = item;
        }
    },
    modules: {}
});
export default store;