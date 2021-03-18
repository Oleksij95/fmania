<template>
    <div class="cta">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="item exclusive-offers">
                        <div class="text_wrapper">
                            <p class="title">Exclusive Offers</p>
                            <a href="#" class="link">Know More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item men-women">
                        <div class="text_wrapper">
                            <p class="title">Men & Women</p>
                            <a href="#" class="link">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.cta{
    .item{
        min-height: 213px;
        position: relative;
        &.exclusive-offers{
            background: url("/img/exclusive-offers.png"), rgba(0, 0, 0, 0.4);
        }
        &.men-women{
            background: url("/img/men-women.png"), rgba(0, 0, 0, 0.4);
        }
        &:before{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.4);
        }
        .text_wrapper{
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            min-height: 213px;
            padding-top: 20px;
            p.title{
                font-weight: bold;
                font-size: 31px;
                line-height: 36px;
                text-align: center;
                color: #FFFFFF;
            }
            .link{
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                text-transform: uppercase;
                color: #FFFFFF;
                border: 2px solid #FFFFFF;
                box-sizing: border-box;
                width: 117px;
                height: 37px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
            }
        }

    }
}

</style>