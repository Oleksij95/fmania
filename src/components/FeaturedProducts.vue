<template>
    <section id="featured_products" class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Featured products</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">


                    <FeaturedProducts :arrows="true" :dots="false" :slidesToShow="4" :slidesToScroll="1" class="slider">
                        <div class="slide">
                            <div class="item">
                                <a href="#" class="product_link">
                                    <div class="item__image_wrapper">
                                        <img src="/img/featured-products/slide-1.png" alt="Net Semi-stitched Dress">
                                    </div>
                                    <div class="item__name">Net Semi-stitched Dress</div>
                                    <div class="item__price">$199</div>
                                </a>
                                
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <a href="#" class="product_link">
                                    <div class="item__image_wrapper">
                                        <img src="/img/featured-products/slide-2.png" alt="Net Semi-stitched Dress">
                                    </div>
                                    <div class="item__name">Net Semi-stitched Dress</div>
                                    <div class="item__price">$299</div>
                                </a>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <a href="#" class="product_link">
                                    <div class="item__image_wrapper">
                                        <img src="/img/featured-products/slide-3.png" alt="Fair N Flair Garments">
                                    </div>
                                    <div class="item__name">Fair N Flair Garments</div>
                                    <div class="item__price">$399</div>
                                </a>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <a href="#" class="product_link">
                                    <div class="item__image_wrapper">
                                        <img src="/img/featured-products/slide-4.png" alt="Net Semi-stitched Dress">
                                    </div>
                                    <div class="item__name">Net Semi-stitched Dress</div>
                                    <div class="item__price">$499</div>
                                </a>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <a href="#" class="product_link">
                                    <div class="item__image_wrapper">
                                        <img src="/img/featured-products/slide-1.png" alt="Net Semi-stitched Dress">
                                    </div>
                                    <div class="item__name">Net Semi-stitched Dress</div>
                                    <div class="item__price">$99</div>
                                </a>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <a href="#" class="product_link">
                                    <div class="item__image_wrapper">
                                        <img src="/img/featured-products/slide-3.png" alt="Net Semi-stitched Dress">
                                    </div>
                                    <div class="item__name">Net Semi-stitched Dress</div>
                                    <div class="item__price">$150</div>
                                </a>
                            </div>
                        </div>
                    </FeaturedProducts>
                   

                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import FeaturedProducts from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
     components: { FeaturedProducts },
}
</script>

<style lang="scss" scoped>
#featured_products{
    .slider{
        .item__image_wrapper{
            background: #FFFFFF;
            border: 1px solid #E5E5E5;
            box-sizing: border-box;
            max-height: 278px;
            height: 278px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin-bottom: 15px;
            padding: 30px 0;
            img{
                max-width: 100%;
                width: inherit;
            }
        }
    }
}
</style>