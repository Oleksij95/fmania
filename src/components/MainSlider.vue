<template>
    <section id="main_slider">
        <div class="container">
            <div class="row">
                <div class="col-md-12">


                     <VueSlickCarousel :arrows="false" :dots="true" :autoplay="true" class="slider_wrapper">
                        <div class="slide slide_1">
                            <div class="text_wrapper">
                                <h2>50% OFF</h2>
                                <p>Discount on Women’s Wear</p>
                                <a href="#">View Products</a>
                            </div>
                        </div>
                       <div class="slide slide_2">
                            <div class="text_wrapper">
                                <h2>51% OFF</h2>
                                <p>Discount on Women’s Wear</p>
                                <a href="#">View Products</a>
                            </div>
                        </div>
                        <div class="slide slide_3">
                            <div class="text_wrapper">
                                <h2>52% OFF</h2>
                                <p>Discount on Women’s Wear</p>
                                <a href="#">View Products</a>
                            </div>
                        </div>

                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
}
</script>

<style lang="scss">
    #main_slider{
        .slider_wrapper{
            .slide{
                min-height: 528px;
                .text_wrapper{
                    color: #fff;
                    font-style: normal;
                    font-weight: normal;
                    padding-left: 84px;
                    min-height: 528px;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    margin-top: -3px;
                    h2{
                        font-size: 84px;
                        line-height: 123px;
                        font-family: 'Anton', sans-serif;
                        margin: 0;
                    }
                    p{
                        font-size: 26px;
                        line-height: 38px;
                        font-family: 'Anton', sans-serif;
                        margin-bottom: 30px;
                    }
                    a{
                        color: #fff;
                        text-decoration: none;
                        background: #506BFA;
                        width: 140px;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-transform: uppercase;
                        font-weight: 500;
                        font-size: 12px;
                    }
                }
            }
            .slide_1, .slide_2, .slide_3{
                background-image: url("/img/main-slider/slide-1.png")
            }
        }
        .slick-dots{
            position: absolute!important;
            bottom: 20px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 0;
            margin: 0;
            outline: none;
        }
        .slick-dots li{
            background: #fff;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin: 0 3px;
            opacity: 0.5;
            outline: none;
        }
        .slick-dots li.slick-active{
            opacity: 1;
            transform: scale(1.3);
        }
        .slick-dots li button{
            opacity: 0;
        }
    }

</style>