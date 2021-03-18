import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';

import store from './store'

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

let app 


firebase.initializeApp({
  apiKey: "AIzaSyD_SW-_LahnWDu8vkGAWaQn3_X0h7gCTfw",
  authDomain: "my-fmania.firebaseapp.com",
  projectId: "my-fmania",
  storageBucket: "my-fmania.appspot.com",
  messagingSenderId: "268444931716",
  appId: "1:268444931716:web:78c7f0498105eefb0354d1"
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')  
  }
})

