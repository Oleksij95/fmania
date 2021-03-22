<template>
    <section id="register">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="register_wrapper">
                        <p class="title">Create New Customer Account</p>
                        <p class="req">Personal Information</p>
                    
                        <form action="" id="req_form" @submit.prevent="registerHandler">
                            <div class="form">
                                <input type="text"
                                        v-model="first_name"
                                        name="first_name"
                                        id="first_name"
                                        :class="{error: notValidFirstName}"
                                        autocomplete="off"
                                        required />
                                <label for="first_name" class="label-name">
                                  <span class="content-name">
                                    First Name<span>*</span>
                                  </span>
                                </label>
                            </div>

                            <div class="form">
                                <input type="text"
                                        v-model="last_name"
                                        name="last_name"
                                        id="last_name"
                                        :class="{error: notValidLastName}"
                                        autocomplete="off"
                                        required />
                                <label for="last_name" class="label-name">
                                  <span class="content-name">
                                    Last Name<span>*</span>
                                  </span>
                                </label>
                            </div>

                            <div class="form">
                                <input type="text"
                                        v-model="email"
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

                            <div class="newsletter_wrapper">
                                <input type="checkbox" id="newsletter" v-model="newsletter">
                                <label for="newsletter">Signup for Newsletter</label>
                            </div>

                            <p class="req signin_info">Signin Information</p>

                            <div class="form">
                                <input type="password"
                                        v-model="password"
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

                            <div class="form">
                                <input type="password"
                                        name="confirm_password"
                                        id="confirm_password"
                                        :class="{error: password !== confirm_password}"
                                        autocomplete="off"
                                        v-model="confirm_password"
                                        required />
                                <label for="confirm_password" class="label-name">
                                  <span class="content-name">
                                    Confirm password<span>*</span>
                                  </span>
                                </label>
                            </div>
                            <button class="submit" type="submit">Create an Account</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* eslint-disable */
export default {
    data: () => ({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        newsletter: false,
        notValidMail: false,
        notValidFirstName: false,
        notValidLastName: false,
        notValidPass: false,
    }),
    methods: {
        async registerHandler() {
            const formData = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirmation: this.confirm_password
            }

            this.notValidFirstName = false
            this.notValidLastName = false
            this.notValidPass = false
            this.notValidMail = false

            if (this.validateForm()) {
                try {
                    await this.$store.dispatch('register', formData);
                    this.$router.push("/")
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


            if (this.first_name.trim() === "" || this.first_name.trim().length === 0) {
                this.notValidFirstName = true
                valid = false;
            }
            
            if (this.last_name.trim() === "" || this.last_name.trim().length === 0) {
                this.notValidLastName = true
                valid = false;
            }

            if (this.password.trim().length < 6) {
                let text_error = document.createElement("p");
                text_error.classList.add("error_text")
                text_error.innerText = "6 characters minimum"
                password.parentElement.append(text_error)
                this.notValidPass = true
                valid = false;
            }

            if (this.password !== this.confirm_password) {
                let text_error = document.createElement("p");
                text_error.classList.add("error_text")
                text_error.innerText = "Passwords do not match"
                if (!confirm_password.parentElement.querySelector(".error_text")) {
                    confirm_password.parentElement.append(text_error)
                }
                this.notValidPass = true
                valid = false;
            }

            if (!this.validateEmail(this.email)) {
                let text_error = document.createElement("p");
                text_error.classList.add("error_text")
                text_error.innerText = "Enter valid email"
                email.parentElement.append(text_error)
                this.notValidMail = true
                valid = false;
            }

            return valid;

        },
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style lang="scss" >
    .register_wrapper{
        background: #F4F5F8;
        border: 1px solid #E3E5EE;
        box-sizing: border-box;
        padding: 60px 150px 30px 150px;
        text-align: center;
    }

    .register_wrapper .title{
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 28px;
        color: #343232;
    }
    .register_wrapper .req{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #343232;
    }
    .register_wrapper .signin_info{
        margin-top: 44px;
    }
    .register_wrapper p{
        font-size: 14px;
        line-height: 26px;
        color: #727272;
    }

    .register_wrapper form{
        margin-top: 32px;
        padding-bottom: 0;
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 0;
    }

    .register_wrapper p.error_text{
        color: #F21C1C!important;
        font-size: 12px;
        line-height: 17px;
        text-align: right;
    }


    .register_wrapper .submit{
        background: #506BFA;
        border-radius: 2px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        border: none;
        width: 176px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 30px auto;
    }

    .register_wrapper .create_link{
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

    .register_wrapper .newsletter_wrapper input{
        opacity: 0;
    }

    .register_wrapper .newsletter_wrapper label{
        position: relative;
    }

    .register_wrapper .newsletter_wrapper label::before{
        content: "";
        width: 21px;
        height: 21px;
        background: #FFFFFF;
        border: 1px solid #6D6D6D;
        box-sizing: border-box;
        border-radius: 2px;
        position: absolute;
        left: -30px;
    }

    .register_wrapper .newsletter_wrapper label::after{
        content: "";
        width: 11px;
        height: 8px;
        position: absolute;
        background-image: url("/img/check.svg");
        top: 6px;
        left: -25px;
        opacity: 0;
    }
    .register_wrapper .newsletter_wrapper input:checked + label:after{
        opacity: 1;
    }



    .form {
        width: 100%;
        position: relative;
        height: 50px;
        margin-bottom: 25px;
    }

    .form input {
        width: 100%;
        height: 100%;
        padding-left: 11px;
        background: #FFFFFF;
        border: 1px solid #D6D6D6;
        box-sizing: border-box;
    }
    .form input.error{
        border: 1px solid #F21C1C;;
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
        transform: translateY(-176%);
        font-size: 14px;
        left: 0px;
        color: #506BFA;
    }
    .form input:focus + .label-name::after,
    .form input:valid + .label-name::after {
        transform: translateX(0%);
    }
        
</style>