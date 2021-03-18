<template>
    <header>
        <div class="top_line">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="wrapper">
                            <nav>
                                <div class="main_menu">
                                    <ul>
                                        <li>
                                            <b-dropdown id="collection_dropdown_menu" text="Collection" class="collection_dropdown_menu">
                                                <b-dropdown-item>
                                                    <router-link to="cabinet">
                                                        Stainless Steel Store
                                                    </router-link>
                                                </b-dropdown-item>

                                                <b-dropdown-item>
                                                    <router-link to="cabinet">
                                                        Milton
                                                    </router-link>
                                                </b-dropdown-item>

                                                <b-dropdown-item>
                                                    <router-link to="cabinet">
                                                        Bombay Dyeing
                                                    </router-link>
                                                </b-dropdown-item>

                                                <b-dropdown-item>
                                                    <router-link to="cabinet">
                                                        Ajanta
                                                    </router-link>
                                                </b-dropdown-item>

                                                <b-dropdown-item>
                                                    <router-link to="cabinet">
                                                        Spaces by Welspun
                                                    </router-link>
                                                </b-dropdown-item>

                                                <b-dropdown-item>
                                                    <router-link to="cabinet">
                                                        Prestige
                                                    </router-link>
                                                </b-dropdown-item>
                                            </b-dropdown>
                                        </li>
                                        <li>
                                            <router-link to="/">Home</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products">Women</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/featured_products">
                                                Home & Featured
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products?category=sport">
                                                Sports
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="second_menu">
                                    

                                    <b-dropdown id="lang_dropdown_menu" text="EN" class="lang_dropdown_menu">
                                        <b-dropdown-item>
                                            EN
                                        </b-dropdown-item>

                                        <b-dropdown-item>
                                            RU
                                        </b-dropdown-item>
                                    </b-dropdown>

                                    <b-dropdown id="currency_dropdown_menu" text="₴UAH" class="currency_dropdown_menu">
                                        <b-dropdown-item>
                                            $USD
                                        </b-dropdown-item>

                                        <b-dropdown-item>
                                            ₴UAH
                                        </b-dropdown-item>
                                    </b-dropdown>

                                    <div class="shopping_cart">
                                        <a href="#">
                                            <div class="count">0</div>
                                            <img src="/img/shopping-cart.svg" alt="shopping cart">
                                        </a>
                                    </div>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="botton_line">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="wrapper">
                            <router-link to="/"><img src="/img/logo.svg" alt="Logo"></router-link>
                            
                            <div class="search_wrapper">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                      <button class="btn btn-outline-secondary" type="button">
                                          <img src="/img/search.svg" alt="Search">
                                      </button>
                                    </div>
                                </div>
                            </div>
                            <div class="user_btn">
                                                               
                                <div class="logget_user_block" v-if="logged">                                 
                                    <strong class="hellow_tetx">Hello</strong>
                                    <b-dropdown id="user_dropdown_menu" :text="name" class="user_dropdown_menu">
                                        <b-dropdown-item>
                                            <router-link to="/cabinet?to=personal_information" class="inner_link">
                                                <img src="/img/profile.svg" alt="Profile">Profile
                                            </router-link>
                                        </b-dropdown-item>

                                        <b-dropdown-item>
                                            <router-link to="/cabinet?to=personal_orders" class="inner_link">
                                                <img src="/img/orders.svg" alt="Orders">Orders
                                            </router-link>
                                        </b-dropdown-item>

                                        <b-dropdown-item>
                                            <router-link to="/cabinet?to=wishlist" class="inner_link">
                                                <img src="/img/wishlist.svg" alt="Wishlist">Wishlist
                                            </router-link>
                                        </b-dropdown-item>

                                        <b-dropdown-item class="logout" @click="logout">
                                            <img src="/img/logout.svg" alt="Logout">Logout
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </div>

                                <div class="no_logged" v-else>
                                    <router-link to="/auth" class="accent_btn">Login</router-link>
                                    <router-link to="/register" class="black_btn">Register</router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
// import { mapState } from 'vuex';
export default {
    methods: {
        async logout() {
            await this.$store.dispatch('logout');
            // this.$store.state.logged = false;
            this.$router.push("/auth")
        }
    },
    async mounted() {
        if (!Object.keys(this.$store.getters.info).length) {
            await this.$store.dispatch('fetchInfo');
        }
        if (Object.keys(this.$store.getters.info).length) {
            await this.$store.commit('loginUser');
        }
    },
    computed: {
        logged: function() {
            return this.$store.state.logged
        },
        name() {
            return this.$store.getters.info.first_name + ' ' + this.$store.getters.info.last_name
        }
    }
}
</script>

<style lang="scss">
#collection_dropdown_menu > button{
    padding-left: 0;
    background-color: transparent!important;
}
#collection_dropdown_menu > button[aria-expanded='true']{
    color: #889BFF;
}

#collection_dropdown_menu{
    .dropdown-menu{
        a{
            padding: 6px 17px;
        }
    }
}

header{
    .top_line{
        height: 45px;
        background-color: #211F1F;
        nav{
            display: flex;
            justify-content: space-between;
            .main_menu > ul{
                list-style: none;
                padding: 0;
                display: flex;
                align-items: center;
                margin-bottom: 0;
                height: 45px;
            }
            a{
                font-weight: normal;
                color: #fff;
                text-decoration: none;
                font-size: 14px;
                padding: 0 17px;
                transition: color .3s;
                &.bold{
                    font-weight: bold;
                    padding-left: 0;
                }
                &:hover{
                    color: #889BFF;
                }
                
            }
        }
        .second_menu{
            display: flex;
            align-items: center;
        }
        #collactions_dropdown{
            padding: 0;
            outline: none;
            box-shadow: none;
        }
        .collactions_dropdown_body{
            min-width: 250px;
            padding: 15px 0 0 0;
            margin-left: -1px;
            .dropdown_title{
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #211F1F;
                padding: 0 17px;
                margin-bottom: 9px;
            }
        }
        .collactions_dropdown_body > a{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 33px;
            color: #5B5B5B;
        }
        .dropdown{
            button{
                color: #fff;
                background-color: transparent;
                outline: none;
                border: none;
                padding: 0 17px;
            }
            a{
                color: #000;
            }
        }
        .shopping_cart{
            position: relative;
        }
        .count{
            width: 23px;
            height: 23px;
            position: absolute;
            border-radius: 50%;
            color: #fff;
            line-height: 23px;
            text-align: center;
            background-color: #506BFA;
            top: -5px;
            right: 0;
        }
    }
    .botton_line{
        padding: 35px 0;
        .wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .search_wrapper{
                min-width: 696px;
                input{
                    border: 1px solid #DEDEDE;
                    border-right: none;
                    outline: none;
                    box-shadow: none;
                    border-radius: 0;
                }
                .btn-outline-secondary{
                    border: 1px solid #DEDEDE;
                    border-left: none;
                    border-radius: 0;
                    &:hover{
                        background: transparent;
                    }
                }
            }
            .accent_btn, .black_btn{
                height: 37px;
                padding: 0 19px;
                text-align: center;
                line-height: 37px;
                display: inline-block;
                text-decoration: none;
                color: #fff;
            }
        }
    }
}
.user_btn .accent_btn{
    margin-right: 6px;
}

.logget_user_block{
    display: flex;
}
.user_dropdown_menu{
    .btn-secondary{
        background: transparent!important;
        padding: 0;
        border: none;
        outline: none;
        box-shadow: none;
        color: #222220!important;
        font-size: 16px;
        margin-left: 3px;
    }
    .dropdown-menu{
        min-width: 270px;
        padding: 0;
        li{
            a{
                display: flex;
                align-items: center;
                height: 50px;
                border-bottom: 1px solid #E2E2E2;
                color: #212529;
                text-decoration: none;
                padding: 0;
                img{
                    margin-right: 10px;
                }
                &.inner_link{
                    padding: 0 25px;
                    width: 100%;
                }
            }
            &.logout{
                a{
                    border-bottom: none;
                    padding: 0 25px!important;
                }
            }
        }
    }
}

.hellow_tetx{
    font-size: 16px;
    padding-right: 4px;
}

</style>