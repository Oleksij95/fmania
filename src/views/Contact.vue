<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <BreadCrumbs crumb="Contact"></BreadCrumbs>
                </div>
            </div>
        </div>
        <div class="contact_page">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="leave_message">
                            <h2>Leave a Message</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                            <form>
                                <div class="flex_wrap">
                                    <div class="form-wrapper">
                                        <label for="name">Name</label>
                                        <input type="text" name="name" id="name">
                                    </div>
                                    <div class="form-wrapper">
                                        <label for="email">Email</label>
                                        <input type="text" name="email" id="email">
                                    </div>
                                </div>
                                <div class="textarea_wrap">
                                    <label for="comments_text">Comments</label>
                                    <textarea name="comments_text" id="comments_text" class="comments_text"></textarea>
                                </div>
                                <button type="submit" class="black_btn">Submit</button>

                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="wrapper right_contact_part">
                            <div class="item email">
                                <p class="title">Email</p>
                                <div class="value">support@ecommerce.com</div>
                            </div>
                            <div class="item phone">
                                <p class="title">Phone</p>
                                <div class="value">01 123 4567 8901</div>
                            </div>
                            <div class="item location">
                                <p class="title">Main Office</p>
                                <div class="value">402 Floor 12, LA Building - Street Name, CA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumbs from "../components/BreadCrumbs";
export default {
    components: {
        BreadCrumbs
    }
}
</script>

<style lang="scss" scoped>
.contact_page{
    margin: 30px 0 70px 0;
}

.black_btn{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #211F1F;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
}

.leave_message{
    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #211F1F;
        margin-bottom: 15px;
    }
    p{
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #606060;
    }
    form{
        margin-top: 40px;
        .flex_wrap{
            display: flex;
            justify-content: space-between;
            .form-wrapper{
                width: 49%;
            }
        }
        label{
            display: block;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            margin-bottom: 9px;
            color: #747474;
        }
        input, textarea{
            border: 1px solid #D2D2D2;
            box-sizing: border-box;
            border-radius: 4px;
            width: 100%;
            padding: 10px 15px;
        }
        input{
            height: 50px;
        }
        textarea{
            height: 100px;
            resize: none;
        }
        .textarea_wrap{
            margin-top: 28px;
        }
        .black_btn{
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            width: 105px;
            height: 37px;
            margin-top: 30px;
        }
    }
}

.right_contact_part{
    margin-top: 50px;
    margin-left: 50px;
    .item{
        position: relative;
        margin-bottom: 85px;
        padding-left: 80px;
        &:before{
            content: "";
            position: absolute;
            left: 0;
            top: -10px;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            border: 2px solid #ECECEC;
            background-repeat: no-repeat;
            background-position: center;
        }
        &.email{
            &:before{
                background-image: url("/img/contact/email.svg")
            }
        }
        &.phone{
            &:before{
                background-image: url("/img/contact/phone.svg")
            }
        }
        &.location{
            &:before{
                background-image: url("/img/contact/location.svg")
            }
        }
        .title{
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            color: #606060;
            margin-bottom: 8px;
        }
        .value{
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;
            color: #211F1F;
            margin-bottom: 0;
        }
    }
}
</style>