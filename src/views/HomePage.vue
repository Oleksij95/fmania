<template>
    <div>
        <MainSlider></MainSlider>
        <FashionProducts></FashionProducts>
        <HomeCta></HomeCta>
        <FeaturedProducts></FeaturedProducts>
    </div>
</template>


<script>
import MainSlider from '../components/MainSlider'
import FashionProducts from '../components/FashionProducts'
import HomeCta from '../components/HomeCta'
import FeaturedProducts from '../components/FeaturedProducts'
export default {
    components: {
        MainSlider,
        FashionProducts,
        HomeCta,
        FeaturedProducts
    }
}
</script>

<style scoped>

</style>