import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './context'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logged: false
    },
    mutations: {
        loginUser () {
            this.state.logged = true
        },
        logOut() {
            this.state.logged = false
        }
    },
    modules: {
        auth,
        info,
        products
    },
    actions: {
        
    }
})