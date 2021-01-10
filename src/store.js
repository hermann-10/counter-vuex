import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentValue: 0
    },
    mutations: { //on commit les mutations
        INCREMENT_COUNTER(state) {
            state.currentValue += 1;
        },
        DECREMENT_COUNTER(state) {
            state.currentValue -= 1;
        }  
    },
    actions: { //on disptach les actions
        
    }
})