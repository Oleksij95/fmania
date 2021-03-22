// import firebase from 'firebase/app'

export default {
    state: {
      
        list_view: "block_view_active"
    },
    mutations: {
        setViewList(state, view_type) {
            state.list_view = view_type;
        }
    },
    actions: {
        changeViewList({commit}, view_type){
            commit('setViewList', view_type);
        }
    },
    getters: {
        list_view: s => s.list_view
    }
}
