/* eslint-disable */
import firebase from 'firebase/app'
import router from '../router'

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                    commit('loginUser');
                })
                await dispatch('fetchInfo');
                router.push("/")
            } catch (e) {
                let text_error = document.createElement("div");
                text_error.classList.add("error_auth")
                text_error.innerText = e.message
                document.querySelector(".auth_wrapper").append(text_error)
                setTimeout(() => {
                    document.querySelector(".error_auth").remove()
                }, 2000)
            }
        },
        async register({dispatch, commit}, {email, password, first_name, last_name}) {
            try{
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 0,
                    first_name: first_name,
                    last_name: last_name
                }).then(() => {
                    commit('loginUser');
                })

                await dispatch('fetchInfo');
            } catch (e) {
                console.log(e);
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut().then(() => {
                commit('logOut')
            })
            commit('clearInfo')
        }
    }
}