<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  components: {
    Layout
  }
}
</script>

<style lang="scss">
section.section{
    margin: 45px 0;
    h2{
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #211F1F;
        margin-bottom: 25px;
    }
}

.slider{
    margin-left: -15px;
    margin-right: -15px;
    * {
        outline: none!important;
    }
    .slick-arrow{
        position: absolute;
        top: -35px;
        right: 15px;
        background: #FFFFFF;
        border: 1px solid #D6D6D6;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all .5s;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        &:hover{
            background: #000;
            border: 1px solid #000;
            background-repeat: no-repeat;
            background-position: center;
            &::before{
              color: #fff;
            }
            
        }
        &::before{
          color: #000;
          font-family: inherit;
        }
        
        &.slick-prev{
          background-repeat: no-repeat;
          background-position: center;  
          right: 50px;
          left: auto;
        }
        &.slick-next{
          background-repeat: no-repeat;
          background-position: center;  
        }
    }
    .item{
        margin: 0 15px;
        .product_link{
            text-decoration: none;
        }
        .item__name, .item__price{
            text-align: center;
        }
        .item__image_wrapper{
            padding-bottom: 15px;
            img{
                width: 100%;
            }
        }
        .item__name{
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #211F1F;
            padding-bottom: 10px;
        }
        .item__price{
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #5558DD;
        }
    }
}
</style>
