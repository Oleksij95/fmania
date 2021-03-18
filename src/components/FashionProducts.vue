<template>
    <section id="fashion_products" class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Fashion products</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">

                    <FashionProducts :arrows="true" :dots="false" :slidesToShow="4" :slidesToScroll="1" class="slider">
                        <div class="slide">
                            <div class="item">
                                <router-link to="/product/7-sumka-s-plechevym-remnyom">
                                    <div class="item__image_wrapper">
                                        <img src="/img/7-product/1.jpg" alt="Сумка с плечевым ремнём">
                                    </div>
                                    <div class="item__name">Сумка с плечевым ремнём</div>
                                    <div class="item__price">$3000</div>
                                </router-link>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <router-link to="/product/1-ultralyogkaya-kurtka-s-kapyushonom">
                                    <div class="item__image_wrapper">
                                        <img src="/img/1-product/2.jpg" alt="Net Semi-stitched Dress">
                                    </div>
                                    <div class="item__name">Ультралёгкая куртка с капюшоном</div>
                                    <div class="item__price">$1900</div>
                                </router-link>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <router-link to="/product/10-bajkerskaya-kurtka-iz-ehko-kozhi">
                                    <div class="item__image_wrapper">
                                        <img src="/img/10-product/2.jpg" alt="Байкерская куртка из эко-кожи">
                                    </div>
                                    <div class="item__name">Байкерская куртка из эко-кожи</div>
                                    <div class="item__price">$1200</div>
                                </router-link>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <router-link to="product/2-uzkie-belye-dzhinsy">
                                    <div class="item__image_wrapper">
                                        <img src="/img/2-product/1.jpg" alt="Узкие белые джинсы">
                                    </div>
                                    <div class="item__name">Узкие белые джинсы</div>
                                    <div class="item__price">$750</div>
                                </router-link>
                            </div>
                        </div>

                        <div class="slide">
                            <div class="item">
                                <router-link to="product/9-styoganoe-palto">
                                    <div class="item__image_wrapper">
                                        <img src="/img/9-product/1.jpg" alt="Стёганое пальто">
                                    </div>
                                    <div class="item__name">Стёганое пальто</div>
                                    <div class="item__price">$3500</div>
                                </router-link>
                            </div>
                        </div>

                     </FashionProducts>


                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FashionProducts from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        components: { FashionProducts },
    }
</script>

<style scoped lang="scss">
#fashion_products{
   .item{
        a{
            text-decoration: none;
        }
    } 
}
</style>