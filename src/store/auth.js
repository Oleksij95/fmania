/* eslint-disable */
import firebase from 'firebase/app'
import router from '../router'

export default {
    state: {
        logged: false,
        current_user: {},
    },
    mutations: {
        loginUser (state) {
            state.logged = true
        },
        setUser(state, info){
            state.current_user = info.current_user
        },
        logOut(state) {
            state.logged = false
        },
        clearInfo(state){
            localStorage.removeItem("token")
            state.current_user = {}
        }
    },
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try{
                
                const login_url = 'https://store-rails-api.herokuapp.com/api/v1/sessions';
                const login_data = { email: email, password: password };
                const login_response = await fetch(login_url, {
                    method: 'POST',
                    body: JSON.stringify(login_data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const json = await login_response.json();
                 
                if (login_response.status >= 200 && login_response.status < 300) {
                    // await dispatch('fetchInfo');
                    commit('setUser', json)
                    commit('loginUser')
                    localStorage.setItem("token", json.session_token);
                    router.push("/")
                } else {
                    let text_error = document.createElement("div");
                    text_error.classList.add("error_auth")
                    text_error.innerText = json.errors[0]
                    document.querySelector(".auth_wrapper").append(text_error)
                    setTimeout(() => {
                        document.querySelector(".error_auth").remove()
                    }, 2000)
                }
            } catch (e) {
                console.log(e)
            }
        },
        async register({dispatch, commit}, {first_name, last_name, email, password, password_confirmation}) {
            try{
                const register_url = "https://store-rails-api.herokuapp.com/api/v1/users"
                const register_data = { first_name, last_name, email, password, password_confirmation }

                const register_response = await fetch(register_url, {
                    method: 'POST',
                    body: JSON.stringify(register_data),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })

                const register_response_json = await register_response.json();

                if (register_response.status >= 200 && register_response.status < 300) {
                    commit('loginUser');
                    commit('setInfo', register_response_json.current_user)
                } else {
                    console.log(register_response_json.errors)
                }
            } catch (e) {
                console.log(e)
            }
        },
        async fetchUserInfo ({commit}, token) {
            try {
                const fetchUserWithToken = await fetch("https://store-rails-api.herokuapp.com/api/v1/users/profile", {
                    method: 'GET',
                    headers: {
                        'Session-Token': token,
                        'Content-Type': 'application/json',
                    }
                })
                const fetchUserWithTokenJson = await fetchUserWithToken.json();
                if (fetchUserWithToken.status >= 200 && fetchUserWithToken.status < 300) {
                    commit('setUser', fetchUserWithTokenJson)
                    commit('loginUser');
                }
            } catch(e) {
                console.log(e)
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}, token) {
            await fetch("https://store-rails-api.herokuapp.com/api/v1/sessions/logout", {
                method: 'DELETE',
                headers: {
                    'Session-Token': token,
                    'Content-Type': 'application/json',
                }
            }).then( commit('logOut') ).then( commit('clearInfo'))
        }
    },
    getters: {
        logged: s => s.logged,
        usser_info: s => s.current_user
    }
}