<template>
    <footer>
        <div class="pre_footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="wrapper">
                            <div class="item track">
                                <span class="title">Track Your <br>Orders</span>
                            </div>
                            <div class="item returns">
                                <span class="title">Free & Easy <br>Returns</span>
                            </div>
                            <div class="item cancellations">
                                <span class="title">Online <br>Cancellations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_link_part">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-4">
                                <ul class="footer_list">
                                    <li class="title">Quick Links</li>
                                    <li>
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li><a href="#">Self Definition</a></li>
                                    <li><a href="#">Procedure</a></li>
                                    <li><a href="#">Offline Stores</a></li>
                                    <li><a href="#">Our Valued Customers</a></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="footer_list">
                                    <li class="title">Help</li>
                                    <li><a href="#">Payments</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Cancellation & Returns</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Mesurement Process</a></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="footer_list">
                                    <li class="title">Contact Us</li>
                                    <li><a href="#">About Us</a></li>
                                    <li>
                                        <router-link to="contact">Contact</router-link>
                                    </li>
                                    <li><a href="#">Work with Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 offset-md-1">
                        <div class="newsletter_wrapper">
                            <p class="title">Newsletter</p>
                            <p class="desk">Our email subscribers get the inside scoop on new products, Promotions, Contests and more. Sign up, it's right thing to do.</p>
                            <form action="">
                                <label for="newsletter">Enter Your Email</label>
                                <input type="text" name="newsletter" id="newsletter">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer_card_part">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="bank_icon">
                            <div class="item">
                                <img src="/img/bitmap.png" alt="pay">
                            </div>
                            <div class="item">
                                <img src="/img/discover.png" alt="discover">
                            </div>
                            <div class="item">
                                <img src="/img/american-express.png" alt="American Express">
                            </div>
                            <div class="item">
                                <img src="/img/visa.png" alt="visa">
                            </div>
                            <div class="item">
                                <img src="/img/master-card.png" alt="master card">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="social_menu">
                            <ul>
                                <li>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="footer_bottom_part">
            Copyright © 2018 eCommerce. All Rights Reserved.
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
footer{
    .pre_footer{
        background: #F2F2F2;
        padding: 32px 0;
        margin-top: 35px;
        .wrapper{
            display: flex;
            align-items: center;
            justify-content: space-around;
            .item{
                background-repeat: no-repeat;
                background-position: 0;
                border-right: 1px solid #D4D4D4;
                width: 33.3%;
                margin-right: 75px;
                &:last-child{
                    border-right: none;
                }
            }
            .track{
                background-image: url("/img/track.svg");
            }
            .returns{
                background-image: url("/img/returns.svg");
            }
            .cancellations{
                background-image: url("/img/cancellations.svg");
            }
            .title{
                font-weight: 300;
                font-size: 26px;
                line-height: 29px;
                color: #353333;
                padding-left: 100px;
                display: block;
                padding-left: 100px;  
            }
        }
    }
    .footer_link_part{
        margin-top: 65px;
        .footer_list{
            list-style: none;
            margin: 0;
            padding: 0;
            .title{
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #211F1F;
                margin-bottom: 16px;
            }
            li{
                a{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 13px;
                    line-height: 26px;
                    color: #979797;
                    text-decoration: none;
                    transition: color .3s;
                    &:hover{
                        color: #889BFF;
                    }
                }
                
            }
        }
    }
    .newsletter_wrapper{
        .title{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #211F1F;
            margin-bottom: 20px;
        }
        .desk{
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            color: #979797;
        }
        form{
            margin-top: 50px;
            label{
                display: block;
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 15px;
                color: #5C5553;
                margin: 0;
            }
            input{
                border: none;
                border-bottom: 2px solid #E9E9E9;
                outline: none;
                width: 100%;
                background-image: url("/img/sent-mail.svg");
                background-repeat: no-repeat;
                background-position: 100% 0%;
                padding-right: 50px;
                &:focus{
                    border-bottom: 2px solid #889BFF;
                }
            }
        }
    }
    .footer_card_part{
        padding: 44px 0;
        border-top: 1px solid #F0F0F0;
        border-bottom: 1px solid #F0F0F0;
        margin-top: 60px;
        margin-bottom: 30px;
        .bank_icon{
            display: flex;
            .item{
                background: #FFFFFF;
                border: 0.8px solid #E3E3E3;
                border-radius: 2px;
                padding: 2px 5px;
                margin-left: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    max-width: 100%;
                }
                &:first-child{
                    margin-left: 0;
                }
            }
        }
        .social_menu{
            ul{
                list-style: none;
                padding: 0;
                padding: 0;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin: 0;
                min-height: 42px;
                li{
                    margin-left: 20px;
                    a{
                        color: #BABABA;
                        text-decoration: none;
                        font-size: 20px;
                        transition: color .3s;
                        &:hover{
                            color: #889BFF;
                        }
                    }
                }
            }
        }
    }
    .footer_bottom_part{
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 19px;
        color: #9F9F9F;
        margin-bottom: 30px;
    }
}
</style>