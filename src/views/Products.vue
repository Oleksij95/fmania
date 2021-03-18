<template>
  <div class="category_page">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="bread_crumbs">
            <div class="crumb home"><a href="/">Home</a></div>
            <div class="crumb last_crumb">Product</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <FilterBlock></FilterBlock>
        </div>
        <div class="col-md-9">
          <div class="product_block">
            <VueSlickCarousel
              :arrows="false"
              :dots="true"
              :autoplay="true"
              class="product_block_top_slider"
            >
              <a href="#" class="slide">
                <div class="text_wrapper">
                  <p class="title">Get 50% OFF</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </a>
              <a href="#" class="slide">
                <div class="text_wrapper">
                  <p class="title">Get Test</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </a>
              <a href="#" class="slide">
                <div class="text_wrapper">
                  <p class="title">Get 100500% OFF</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </a>
            </VueSlickCarousel>

            <div class="product_block_items">
              <div class="product_block_items_top">
                <h2 class="category_name">Ladies Wear</h2>
                <div class="control_pannel">
                  <div class="panel">
                    <span class="panel_name">Show</span>
                    <select name="per_page" id="per_page">
                      <option value="per_12">9 per page</option>
                      <option value="per_20">12 per page</option>
                      <option value="per_40">15 per page</option>
                    </select>
                  </div>
                  <div class="panel">
                    <span class="panel_name">Sort by</span>
                    <select name="sort_by" id="sort_by">
                      <option value="sort_polularity">Polularity</option>
                      <option value="sort_AZ">A-Z</option>
                      <option value="sort_ZA">Z-A</option>
                    </select>
                  </div>
                  <div class="panel sort_pannel">
                    <span class="panel_name">View</span>
                    <div
                      class="block_view view_item"
                      :class="{active: list_view == 'block_view_active'}"
                      @click="changeView('block_view_active', $event)"
                    ></div>
                    <div
                      class="list_view view_item"
                      :class="{active: list_view == 'list_view_active'}"
                      @click="changeView('list_view_active', $event)"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="products_list" :class="list_view">
                  
                <div class="poduct" v-for="product in products" :key="product.id">
                  <div class="btn_wrp">
                    <div class="compare-button">
                      <svg
                        width="26"
                        height="18"
                        viewBox="0 0 26 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.113 11.56H0V14.12H9.113V17.96L14.3 12.84L9.113 7.71997V11.56Z"
                          fill="#B6B6B6"
                        />
                        <path
                          d="M16.8872 3.87998V0.039978L11.7002 5.15998L16.8872 10.28V6.43998H26.0002V3.87998H16.8872Z"
                          fill="#B6B6B6"
                        />
                      </svg>
                    </div>
                    <div class="wish-button">
                      <i class="far fa-heart"></i>
                    </div>
                  </div>
                  <router-link :to="{name: 'Product', params: {id: product.id, slug: product.slug}}" class="product_link">
                    <div class="item__image_wrapper">
                      <img
                        :src="product.img_url"
                        alt="Net Semi-stitched Dress"
                      />
                    </div>
                    <div class="text_wrapper">
                      <div class="item__name">{{product.product_name}}</div>
                      <div class="item__price">{{product.product_price}}</div>
                      <div class="custom_info">{{product.product_size}}</div>
                      <div class="list_view_add_to_cart">Add to Cart</div>
                    </div>
                  </router-link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FilterBlock from "../components/Filter"

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data: () => ({
      list_view: "",
  }),
  components: { 
      VueSlickCarousel,
      FilterBlock
  },
  computed: {
    products: function() {
      // console.log(this.$store.getters.products)
      return this.$store.getters.products
    }
  },
  beforeMount() {
    this.$store.dispatch('fetchProducts')
    this.list_view = this.$store.getters.list_view
  },
  methods: {
      changeView (view_type, e) {
          if (e.target.classList.contains("view_item")) {
            this.list_view = view_type;
            let view_items = document.querySelectorAll(".view_item");
            for (let i = 0; i < view_items.length; i++) {
              view_items[i].classList.remove("active");
            }
            e.target.classList.add("active")
            this.$store.dispatch("changeViewList", this.list_view)
          }
      }
  }
};
</script>

<style lang="scss">
    .slick-dots {
        position: absolute !important;
        bottom: 10px;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        margin: 0;
        outline: none;
    }
    .slick-dots li {
        background: #fff;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 3px;
        opacity: 0.5;
        outline: none;
    }
    .slick-dots li.slick-active {
        opacity: 1;
    }
    .slick-dots li button {
        opacity: 0;
    }

    .price-range-field {
        border: 1px solid #d2d2d2;
        border-radius: 4px;
        outline: none;
        transition: border 0.2s ease-in-out;
        font-size: 14px;
    }

.price_decimal_wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  input {
    margin-right: 10px;
  }
  .price_filter {
    width: 90px;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &:hover {
      background: #ebebeb;
    }
  }
}



.bread_crumbs {
  background: #f3f3f3;
  height: 43px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  margin-bottom: 20px;
  .crumb {
    margin-right: 30px;
    font-size: 14px;
    line-height: 16px;
    color: #211f1f;
    position: relative;
    a {
      color: #211f1f;
      text-decoration: none;
    }
    &:after {
      content: "";
      width: 4px;
      height: 7px;
      position: absolute;
      top: 4px;
      right: -15px;
      background-image: url("/img/breadcrumbs-divider.svg");
    }
    &.last_crumb {
      opacity: 0.7;
      &:after {
        display: none;
      }
    }
    &.home {
      a {
        font-weight: 600;
        color: #211f1f;
        text-decoration: none;
      }
    }
  }
}

.product_block_top_slider {
  .slide {
    display: block;
    min-height: 230px;
    width: 100%;
    background-image: url("/img/category-slider/slide-1.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    text-decoration: none;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.35);
    }
    .text_wrapper {
      position: relative;
      z-index: 1;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #ececec;
    }
    p.title {
      font-style: normal;
      font-weight: bold;
      font-size: 34px;
      line-height: 40px;
      color: #ffffff;
      margin-bottom: 13px;
    }
  }
}

.product_block_items {
  .product_block_items_top {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }
  .control_pannel {
    display: flex;
    justify-content: space-between;
    .panel {
      margin-left: 10px;
      background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
      border: 1px solid #e2e2e2;
      box-sizing: border-box;
      border-radius: 2px;
      height: 32px;
      display: flex;
      align-items: center;
      padding: 0 11px 0 11px;
      &.sort_pannel {
        padding-right: 0;
        .panel_name {
          border-right: none;
        }
      }
      .panel_name {
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        color: #707070;
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid #cdcdcd;
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        outline: none;
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;
        color: #343232;
        cursor: pointer;
        background-image: url("/img/select-bg.svg");
        background-repeat: no-repeat;
        background-position: 100% 58%;
        padding-right: 15px;
      }
      .view_item {
        width: 30px;
        height: 30px;
        background-position: center;
        cursor: pointer;
        &.active {
          cursor: inherit;
          box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.174677);
        }
        &.block_view {
          background-image: url("/img/block-view.svg");
          background-repeat: no-repeat;
        }
        &.list_view {
          background-image: url("/img/list-view.svg");
          background-repeat: no-repeat;
        }
      }
    }
  }
  .category_name {
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;
    color: #343232;
    margin-bottom: 0;
  }
}

.products_list.block_view_active {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: -10px;
  margin-right: -10px;
  .poduct {
    width: 33.3%;
    padding: 10px;
    margin-bottom: 20px;
    position: relative;
    .btn_wrp {
      position: absolute;
      right: 20px;
      top: 22px;
      display: flex;
      align-items: center;
      > div {
        cursor: pointer;
        margin-left: 12px;
      }
      .wish-button {
        margin-top: -4px;
        color: #b6b6b6;
        font-size: 19px;
        &.added_to_wish {
          color: #545cdc;
        }
      }
      .added_to_compare {
        svg,
        path {
          fill: #545cdc;
        }
      }
    }
    &:hover {
      .item__image_wrapper {
        border: 1px solid #5558dd;
      }
    }
    a {
      text-decoration: none;
    }
  }
  .item__image_wrapper {
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    max-height: 278px;
    height: 278px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-bottom: 15px;
    padding: 30px 0;
    overflow: hidden;
    img {
      max-width: 100%;
      width: inherit;
    }
  }
  .item__name,
  .item__price {
    text-align: center;
  }
  .item__image_wrapper {
    padding-bottom: 15px;
  }
  .item__name {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #211f1f;
    padding-bottom: 10px;
  }
  .item__price {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #5558dd;
  }
  .custom_info,
  .list_view_add_to_cart {
    display: none;
  }
}

.products_list.list_view_active {
  .poduct {
    position: relative;
    .btn_wrp {
      position: absolute;
      right: 20px;
      top: 22px;
      display: flex;
      align-items: center;
      > div {
        cursor: pointer;
        margin-left: 12px;
      }
      .wish-button {
        margin-top: -4px;
        color: #b6b6b6;
        font-size: 19px;
        &.added_to_wish {
          color: #545cdc;
        }
      }
      .added_to_compare {
        svg,
        path {
          fill: #545cdc;
        }
      }
    }
    .product_link {
      display: block;
      background: #ffffff;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      margin-bottom: 10px;
      display: flex;
      padding: 20px 10px 20px 50px;
      text-decoration: none;
      &:hover {
        border: 1px solid #545cdc;
      }
      .item__image_wrapper {
        margin-right: 50px;
        img {
          max-height: 175px;
        }
      }
      .text_wrapper {
        padding-top: 20px;
      }
      .item__name {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 16px;
        color: #211f1f;
        margin-bottom: 14px;
      }
      .item__price {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #5558dd;
      }
      .custom_info {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        margin-top: 18px;
        color: #222020;
      }
      .list_view_add_to_cart {
        background: #211f1f;
        width: 117px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: #ffffff;
        margin-top: 18px;
      }
    }
  }
}
</style>