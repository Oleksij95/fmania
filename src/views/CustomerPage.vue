<template>
    <div class="customer_page_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="customer_menu">
                        <a  href="#"
                            class="item"
                            :class="{active: personal_page == 'personal_information'}"
                            @click.prevent="visitPage('personal_information')"
                            >
                            <i class="far fa-user"></i>
                            Personal Information
                        </a>
                        <a 
                            href="#"
                            class="item"
                            :class="{active: personal_page == 'personal_orders'}"
                            @click.prevent="visitPage('personal_orders')"
                            >
                            <i class="fas fa-sort-amount-down-alt"></i>
                            My Orders
                        </a>
                        <a
                            href="#"
                            class="item"
                            :class="{active: personal_page == 'addresses'}"
                            @click.prevent="visitPage('addresses')"
                            >
                            <i class="fas fa-map-marker-alt"></i>
                            Manage Addresses
                        </a>
                        <a
                            href="#"
                            class="item"
                            :class="{active: personal_page == 'wishlist'}"
                            @click.prevent="visitPage('wishlist')"
                            >
                            <i class="far fa-heart"></i>
                            Wishlist
                        </a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="page_inside">
                        
                        <PersonalInformation v-if="personal_page == 'personal_information'"></PersonalInformation>
                        <MyOrders v-if="personal_page == 'personal_orders'"></MyOrders>
                        <Addresses v-if="personal_page == 'addresses'"></Addresses>
                        <Wishlist v-if="personal_page == 'wishlist'"></Wishlist>

                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

import PersonalInformation from '../components/PersonalInformation'
import MyOrders from '../components/MyOrders'
import Addresses from '../components/ManageAddresses'
import Wishlist from '../components/Wishlist'
export default {
    data: () => ({
        personal_page: "wishlist"
    }),
    components: {
        PersonalInformation,
        MyOrders,
        Addresses,
        Wishlist
    },
    beforeMount() {
        let cabinet_tab = window.location.search.replace("?to=", "");
        if (cabinet_tab || cabinet_tab !== "") {
            this.personal_page = cabinet_tab
        }
    },
    methods: {
        visitPage (page) {
            this.personal_page = page
        }
    }
}
</script>

<style lang="scss" scoped>
.customer_menu{
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    .item{
        display: flex;
        align-items: center;
        height: 55px;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #1D1F1F;
        text-decoration: none;
        border-bottom: 1px solid #ECECEC;
        padding: 0 26px;
        &.active{
            background: #506BFA!important;
            color: #fff;
        }
        &:hover{
            background: #F2F2F2;
        }
        i{
            margin-right: 10px;
            font-size: 18px;
        }
    }
}
</style>