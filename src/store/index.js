import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './context'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
    
    modules: {
        auth,
        info,
        products
    },
    actions: {
        
    }
})