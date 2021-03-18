import firebase from 'firebase/app'

export default {
    state: {
        info: {},
        list_view: "block_view_active"
    },
    mutations: {
        setInfo(state, info){
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        },
        setViewList(state, view_type) {
            state.list_view = view_type;
        }
    },
    actions: {

        async fetchInfo({dispatch, commit}) {
            try{
                const uid = await dispatch('getUid')
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
                commit('setInfo', info)
            } catch (e) {
                console.log(e)
            }
        },

        changeViewList({commit}, view_type){
            commit('setViewList', view_type);
        }

    },
    getters: {
        info: s => s.info,
        list_view: s => s.list_view
    }
}
