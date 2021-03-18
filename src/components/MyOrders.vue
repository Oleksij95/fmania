<template>
    <div class="orders_list_wrapper">
        <div class="order">
            <div class="product_main_info">
                <div class="product_img">
                    <img src="/img/1-product/2.jpg" alt="">
                </div>
                <div class="text_wrapp">
                    <div class="product_name">
                        <a href="#">Magnoom Slim Women Blue Jeans</a>
                    </div>
                    <div class="middle_block_info">
                        Size: 40, Color: Black
                    </div>
                    <div class="order_info_block">
                        <p>Delivery on <strong>Thu, Jul 5th '18</strong></p>
                        <p>Ordered on<strong>Sun, Jul 1st '18 </strong></p>
                        <p>Order ID <strong>Thu, Jul 5th '18</strong></p>
                    </div>
                </div>
            </div>
            <div class="product_price">
                $299
            </div>
        </div>

        <div class="order">
            <div class="product_main_info">
                <div class="product_img">
                    <img src="/img/1-product/2.jpg" alt="">
                </div>
                <div class="text_wrapp">
                    <div class="product_name">
                        <a href="#">Magnoom Slim Women Blue Jeans</a>
                    </div>
                    <div class="middle_block_info">
                        Size: 40, Color: Black
                    </div>
                    <div class="order_info_block">
                        <p>Delivery on <strong>Thu, Jul 5th '18</strong></p>
                        <p>Ordered on<strong>Sun, Jul 1st '18 </strong></p>
                        <p>Order ID <strong>Thu, Jul 5th '18</strong></p>
                    </div>
                </div>
            </div>
            <div class="product_price">
                $299
            </div>
        </div>

    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .orders_list_wrapper{
        .order{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #EAEAEA;
            padding-bottom: 20px;
            margin-top: 20px;
            &:first-child{
                margin-top: 0;
            }
            .product_img{
                background: #FFFFFF;
                border: 1px solid #DEDCDC;
                box-sizing: border-box;
                max-width: 106px;
                height: 106px;
                margin-right: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            .product_main_info{
                display: flex;
                .product_name a{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    color: #211F1F;
                }
                .middle_block_info{
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 15px;
                    color: #787878;
                    margin-bottom: 35px;
                    margin-top: 10px;
                }
                .order_info_block{
                    display: flex;
                    p{
                        margin-bottom: 0px;
                        font-size: 13px;
                        line-height: 24px;
                        color: #606060;
                        strong{
                            margin-right: 30px;
                            color: #000;
                        }
                    }
                }
            }
            .product_price{
                font-weight: normal;
                font-size: 25px;
                line-height: 29px;
                text-align: right;
                color: #211F1F;
            }
        }
    }
</style>

