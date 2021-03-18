<template>
    <section id="auth">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="auth_wrapper">

                        <div class="loggin_succeess" v-if="currentUser">
                            <h3>Hello, {{ this.$store.getters.info.first_name + ' ' + this.$store.getters.info.last_name }}</h3>
                            <button @click="logout">Log out</button> 
                        </div>
                        <div v-else>
                            <p class="title">Customer Login</p>
                            <p class="req">Registered Users</p>
                            <p>If you have an account, sign in with your email address.</p>
                            <form action="" id="auth_form" @submit.prevent="loginHandler">
                                <div class="form">
                                    <input
                                        v-model="email"
                                        type="text"
                                        name="email"
                                        id="email"
                                        :class="{error: notValidMail}"
                                        autocomplete="off"
                                        required />
                                    <label for="email" class="label-name">
                                    <span class="content-name">
                                        Email<span>*</span>
                                    </span>
                                    </label>
                                </div>

                                <div class="form">
                                    <input
                                        v-model="password"
                                        type="password"
                                        name="password"
                                        id="password"
                                        :class="{error: notValidPass}"
                                        autocomplete="off"
                                        required />
                                    <label for="password" class="label-name">
                                    <span class="content-name">
                                        Password<span>*</span>
                                    </span>
                                    </label>
                                </div>

                                <div class="forgot">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            
                                <button class="submit" type="submit">Login</button>

                            </form>
                        </div>
                    
                        <p class="title">New Customer</p>
                        <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                        <router-link to="/register" class="create_link">
                            Create an Account
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase/app'
export default {
    data: () => ({
        email: "",
        password: "",
        notValidMail: false,
        notValidPass: false,
        currentUser: firebase.auth().currentUser
    }),
    methods: {
        async loginHandler() {
            const formData = {
                email: this.email,
                password: this.password
            }

            this.notValidPass = false
            this.notValidMail = false

            console.log(document.querySelectorAll(".error_text"));
            console.log(document.querySelectorAll(".error_text").length);
            
        
            if (this.validateForm()) {
                try {
                    await this.$store.dispatch('login', formData);
                } catch (e) {
                    console.log("Auth error: ", e)
                }
            }
            
        },
        validateForm() {
            let valid = true;

            for(let i = 0; i < document.querySelectorAll(".error_text").length; i++) {
                document.querySelectorAll(".error_text")[i].remove()
            }

            if (!this.validateEmail(this.email)) {
                let text_error = document.createElement("p");
                text_error.classList.add("error_text")
                text_error.innerText = "Enter valid email"
                email.parentElement.append(text_error)
                this.notValidMail = true
                valid = false;
            }

            if (this.password.trim().length < 6) {
                let text_error = document.createElement("p");
                text_error.classList.add("error_text")
                text_error.innerText = "6 characters minimum";

                if (!password.parentElement.querySelector(".error_text")) {
                    password.parentElement.append(text_error)
                }

                this.notValidPass = true
                valid = false;
            }
            
            return valid
        },
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        async logout() {
            await this.$store.dispatch('logout');
            this.currentUser = firebase.auth().currentUser
        }
    }
}
</script>

<style>
    .auth_wrapper{
        background: #F4F5F8;
        border: 1px solid #E3E5EE;
        box-sizing: border-box;
        padding: 60px 150px;
        text-align: center;
        position: relative;
    }

    .loggin_succeess{
        margin-bottom: 50px;
        padding-bottom: 50px;
        border-bottom: 1px solid #D2D2D2;
    }

    .loggin_succeess button{
        width: 176px;
        height: 45px;
        border-radius: 2px;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        border: none;
        background: #ccc;
        margin-top: 20px;

    }
    .auth_wrapper .error_auth{
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
        background: red;
        color: #fff;
        padding: 10px 0;
    }

    .auth_wrapper .title{
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 28px;
        color: #343232;
    }
    .auth_wrapper .req{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #343232;
    }

    .auth_wrapper input.error{
        border: 1px solid #F21C1C;;
    }
    .auth_wrapper p{
        font-size: 14px;
        line-height: 26px;
        color: #727272;
    }

    .auth_wrapper p.error_text{
        color: #F21C1C!important;
        font-size: 12px;
        line-height: 17px;
        text-align: right;
    }

    .auth_wrapper form{
        margin-top: 32px;
        border-bottom: 1px solid #D2D2D2;
        padding-bottom: 25px;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 56px;
    }

    .auth_wrapper .forgot{
        margin-top: -10px;
    }
    .auth_wrapper .forgot a{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #506BFA;
        text-decoration: none;
    }
    .auth_wrapper .submit{
        background: #506BFA;
        border-radius: 2px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        border: none;
        width: 96px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 30px auto;
    }

    .auth_wrapper .create_link{
        background: #211F1F;
        border-radius: 2px;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        width: 176px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin: 22px auto 0 auto;
    }


    .form {
        width: 100%;
        position: relative;
        height: 50px;
        margin-bottom: 30px;
    }

    .form input {
        width: 100%;
        height: 100%;
        padding-left: 11px;
        background: #FFFFFF;
        border: 1px solid #D6D6D6;
        box-sizing: border-box;
    }
    .form label {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    
    .content-name {
        position: absolute;
        bottom: 1px;
        left: 11px;
        padding-bottom: 5px;
        transition: all 0.3s ease;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #676767;
    }
    .content-name span{
        color: red;
    }
    .form input:focus {
        outline: none;
    }
    .form input:focus + .label-name .content-name,
    .form input:valid + .label-name .content-name {
        transform: translateY(-160%);
        font-size: 14px;
        left: 0px;
        color: #506BFA;
    }
    .form input:focus + .label-name::after,
    .form input:valid + .label-name::after {
        transform: translateX(0%);
    }
</style>