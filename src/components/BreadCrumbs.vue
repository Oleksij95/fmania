<template>
    <div class="bread_crumbs">
        <div class="crumb home">
            <router-link to="/">
                Home
            </router-link>
        </div>
        <div class="crumb" v-if="this.product_name">
            <router-link to="/products">Product</router-link>
        </div>
        <div class="crumb last_crumb">{{this.product_name || this.crumb}}</div>
    </div>
</template>

<script>

export default {
    props: ["product_name", "crumb"]
}
</script>

<style lang="scss" scoped>
    .bread_crumbs{
        background: #F3F3F3;
        height: 43px;
        display: flex;
        align-items: center;
        padding: 0 18px;
        margin-bottom: 20px;
        .crumb{
            margin-right: 30px;
            font-size: 14px;
            line-height: 16px;
            color: #211F1F;
            position: relative;
            a{
                color: #211F1F;
                text-decoration: none;
            }
            &:after{
                content: "";
                width: 4px;
                height: 7px;
                position: absolute;
                top: 4px;
                right: -15px;
                background-image: url("/img/breadcrumbs-divider.svg")
            }
            &.last_crumb{
                opacity: 0.7;
                &:after{
                    display: none;
                }
            }
            &.home{
                a{
                    font-weight: 600;
                    color: #211F1F;
                    text-decoration: none;
                }
            }
        }
    }
</style>