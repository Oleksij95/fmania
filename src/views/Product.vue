<template>
  <div class="category_page">


    <div class="container" v-if="Object.keys(this.$store.getters.product).length > 0">
      <div class="row">
        <div class="col-md-12">
          <BreadCrumbs :product_name="product.name"></BreadCrumbs>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <VueSlickCarousel
            class="product_slider"
            ref="slider_big"
            v-if="product.images.length > 0"
            v-bind="{
              fade: true,
              responsive: [
                {
                  breakpoint: 640,
                  settings: {
                    dots: true,
                  },
                },
              ],
            }"
            @beforeChange="syncSliders"
          >
            <!-- <div class="product_slider"> -->
            <div v-for="(image, index) in product.images" :key="index">
              <img :src="'/img/' + image" :alt="product.name" />
            </div>
            
            <!-- </div> -->
          </VueSlickCarousel>

          <VueSlickCarousel
            class="product_slider-nav"
            :class="'slider-thumb'"
            ref="slider-thumb"
            v-if="product.images.length > 0"
            v-bind="{ slidesToShow: 4 }"
            :focusOnSelect="true"
            @beforeChange="syncSliders"
          >
            <!-- <div class='product_slider-nav'> -->
            <div v-for="(image, index) in product.images" :key="index">
              <div class="preview_wrapper">
                <img :src="'/img/' + image" :alt="product.name" />
              </div>
            </div>
            <!-- </div> -->
          </VueSlickCarousel>
        </div>
        <div class="col-md-8">
          <div class="product_info">
            <div class="product_name">{{product.name}}</div>
            <div class="product_more_info_wrp">
              <div class="left_part">
                <div class="item">
                  <div class="appraisal">{{product.appraisal}}</div>
                  <div class="ratings">1342 Ratings</div>
                </div>
                <div class="item">
                  <div class="sku">SKU: {{product.sku}}</div>
                </div>
                <div class="add_review">Add Your Review</div>
              </div>

              <div class="right_part">
                <div class="in_stock" v-if="product.in_stock">In Stock</div>
              </div>
            </div>

            <div class="price">
              <div class="current_price price_text">${{product.price}}</div>
              <div class="old_price price_text" v-if="product.old_price && product.old_price !== 0">${{product.old_price}}</div>
            </div>

            <div class="product_setting">
              <p class="product_setting_title">Size</p>
              <div class="product_setting_wrap">
                <a href="#" class="product_setting_item">2XS</a>
                <a href="#" class="product_setting_item">XS</a>
                <a href="#" class="product_setting_item">S</a>
                <a href="#" class="product_setting_item current_size">M</a>
                <a href="#" class="product_setting_item">L</a>
                <a href="#" class="product_setting_item">XL</a>
                <a href="#" class="product_setting_item">2XL</a>
              </div>
            </div>

            <div class="product_setting">
              <p class="product_setting_title">Color</p>
              <div class="product_setting_wrap">
                <a
                  href="#"
                  class="product_setting_item color_item active no_border"
                >
                  <span class="color" style="background-color: #000"></span>
                </a>

                <a href="#" class="product_setting_item color_item no_border">
                  <span class="color" style="background-color: #de720e"></span>
                </a>

                <a href="#" class="product_setting_item color_item no_border">
                  <span class="color" style="background-color: #6278dd"></span>
                </a>

                <a href="#" class="product_setting_item color_item no_border">
                  <span class="color" style="background-color: #625749"></span>
                </a>

                <a href="#" class="product_setting_item color_item no_border">
                  <span class="color" style="background-color: #478c52"></span>
                </a>
              </div>
            </div>

            <div class="product_buy_btn_wrapper">
              <a href="#" class="buy_now">Buy Now</a>
              <a href="#" class="add_cart">Add to Cart</a>
            </div>

            <div class="product_bottom_btn">
              <a href="mailto:anisimovoleksey@gmail.com"
                ><i class="fas fa-envelope"></i>Email to Friend</a
              >

              <a href="#">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.49968 12C-6.18106 4.86468 2.99004 -4.00624 6.49968 1.96816C10.0099 -4.00624 19.1815 4.86468 6.49968 12Z"
                    fill="#211F1F"
                  />
                </svg>
                Add to Wishalist</a
              >

              <a href="#">
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.3605 8.99112H0V10.9822H7.3605V13.9689L11.55 9.98668L7.3605 6.00446V8.99112Z"
                    fill="#211F1F"
                  />
                  <path
                    d="M13.6397 3.01779V0.0311279L9.4502 4.01335L13.6397 7.99557V5.00891H21.0002V3.01779H13.6397Z"
                    fill="#211F1F"
                  />
                </svg>
                Add to Compare
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="product_all_info">
            <b-tabs>
              <b-tab title="Descriptions">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {{product.descriptions}}
                  
                </div>
              </b-tab>
              <b-tab title="Specifications">
                 {{product.specifications}}
              </b-tab>

              <b-tab title="Ratings & Review">
                <p class="title">Customer Review</p>

                <div v-if="product.review.length > 0">
                  <div class="customer_review_item" v-for="(review, index) in product.review" :key="index">
                    <div class="customer_review_item_star">
                    <i
                      class="fas fa-star"
                      :class="{accent: index_empty_star <= review.review_star }"
                      v-for="(index_empty_star) in 5"
                      :key="index_empty_star"
                      >
                    </i>
                    </div>
                    <div class="customer_review_item_theme">
                      {{ review.review_theme }}
                    </div>
                    <div class="customer_review_item_text">
                      {{ review.review_text }}
                    </div>
                    <div class="customer_review_item_theme_name">
                      by {{ review.review_customer_name }}, {{review.review_datetime}}
                    </div>
                  </div>
                </div>
                <div v-else>
                  <p class="no_review">it's still empty here :(</p>
                </div>

                <div class="add_review_block" v-if="currentUser">
                  <p class="title">Give Your Review</p>
                  <form id="add_review" v-on:submit.prevent="sendNewReview">
                    <div class="new_review_star">
                      <i
                        v-for="i in 5"
                        :key="i"
                        class="fas fa-star"
                        :class="{accent: i <= new_review.star || i === 1} "
                        :data-star="i"
                        @click="setStarToNewRevie(i)"
                      ></i>
                    </div>
                    <input
                      name="new_review_theme"
                      type="text"
                      placeholder="Theme"
                      v-model="new_review.theme"
                    >
            
                    <textarea
                      name="new_review"
                      id="new_review"
                      placeholder="Write here"
                      v-model="new_review.text"
                    >
                    </textarea>
                    <button type="submit">Submit</button>
                  </form>
                </div>
                <div v-else>
                  <p><strong>Only logged in users can add comments</strong></p>
                </div>


              </b-tab>


            </b-tabs>
          </div>
        </div>
      </div>
    </div>

    <div class="not_found_wrapper" v-else>
      <p>Product not found</p>
    </div>

  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import firebase from 'firebase/app'

import BreadCrumbs from "../components/BreadCrumbs";

export default {
  props: ["data_product"],
  data: () => ({
    product: {
      id: "",
      name: "",
      price: "",
      old_price: null,
      specifications: "",
      sku: "",
      appraisal: "",
      descriptions: "",
      in_stock: false,
      images: [],
      review: [],
    },
    new_review: {
      customer_name: "",
      star: 1,
      text: "",
      theme: ""
    },
    currentUser: firebase.auth().currentUser
  }),
  components: {
    VueSlickCarousel,
    BreadCrumbs,
  },
  async created() {

    const product_id = this.$route.params.id;
    await this.$store.dispatch('fetchProductInfo', product_id)

    
    if (Object.keys(this.$store.getters.product).length > 0) {
      this.product.id = this.$store.getters.product.product.id
      this.product.name = this.$store.getters.product.product.product_name
      this.product.price = this.$store.getters.product.product.product_price
      this.product.old_price = this.$store.getters.product.product.product_old_product_price
      this.product.sku = this.$store.getters.product.product.product_SKU
      this.product.appraisal = this.$store.getters.product.product.product_appraisal
      this.product.descriptions = this.$store.getters.product.product.product_descriptions
      this.product.specifications = this.$store.getters.product.product.product_specifications
      this.product.in_stock = this.$store.getters.product.product.product_in_stock
      for (let i = 0; i < this.$store.getters.product.product.img.length; i++) {
        this.product.images.push(this.$store.getters.product.product.img[i].img_url)
      }
      for (let i = 0; i < this.$store.getters.product.product.review.length; i++) {
        this.product.review.push(this.$store.getters.product.product.review[i])
      }
    }

    
  },

  methods: {
    syncSliders(currentPosition, nextPosition) {
      this.$refs["slider_big"].goTo(nextPosition);
      this.$refs["slider-thumb"].goTo(nextPosition);
    },
    setStarToNewRevie(count_star) {
      this.new_review.star = count_star
    },
    sendNewReview(){
      const new_review = {
        product_id: this.product.id,
        theme: this.new_review.theme,
        text: this.new_review.text,
        datetime: new Date(),
        customer_name: this.$store.getters.info.first_name + ' ' + this.$store.getters.info.last_name,
        star: this.new_review.star
      }
      console.log(new_review);
    }
  }
  
};
</script>

<style lang="scss">
.product_slider {
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  margin-bottom: 30px;
  text-align: center;
  img {
    min-height: 420px;
    margin: auto;
  }
}

.not_found_wrapper{
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 20px;
  }
}


.product_all_info .tab-content p.no_review{
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  margin: 45px 0;
  text-transform: uppercase;
}

.hidden{
  display: none!important;
}

.slider-thumb{
  img{
    max-width: 100%;
  }
}

.add_review_block{
  i.accent{
    color: #edc207!important;
  }
  input{
    width: 100%;
    height: 40px;
    resize: none;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    padding: 11px;
    margin-bottom: 10px;
  }
}

.product_slider-nav {
  margin-left: 35px;
  margin-right: 35px;
  .slick-slide {
    background: #ffffff;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 66px;
    width: 66px;
    &.slick-current {
      border: 1px solid #8a8a8a;
    }
  }
  .preview_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 66px;
  }
  .slick-prev,
  .slick-next {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 0.9px solid #dcdcdc;
    background: #fff;
    z-index: 1;
    box-sizing: border-box;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 50%;
    top: calc(50% - 47px);
    background-repeat: no-repeat;
    background-position: center;
    &::before {
      display: none;
    }
  }
  .slick-prev {
    left: -35px;
    transform: rotate(0);
    background-image: url("/img/silver-arrow.svg");
  }
  .slick-next {
    right: -35px;
    background-image: url("/img/silver-arrow.svg");
  }
}

.product_info {
  padding-left: 20px;
  .product_name {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #343232;
    margin-bottom: 25px;
  }
  .product_more_info_wrp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 25px;
    .left_part,
    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .item {
      padding-right: 23px;
      margin-right: 23px;
      border-right: 1px solid #d8d8d8;
    }
    .appraisal {
      background: #3aa343;
      border-radius: 2px;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      line-height: 15px;
      padding: 4px 7px;
      color: #ffffff;
      display: inline;
      margin-right: 10px;
    }
    .ratings {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      color: #5a5a5a;
    }
    .sku,
    .add_review {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 15px;
      color: #484848;
    }
    .add_review {
      cursor: pointer;
    }
    .in_stock {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 15px;

      color: #36a140;
    }
  }
}

.price {
  margin-top: 19px;
  display: flex;
  align-items: center;
  .price_text {
    font-style: normal;
    font-weight: normal;
    font-size: 33px;
    line-height: 39px;
    color: #343232;
    &.old_price {
      text-decoration-line: line-through;
      color: #cecece;
      margin-left: 15px;
    }
  }
}

.product_setting {
  margin-top: 30px;
  .product_setting_title {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #343232;
    margin-bottom: 10px;
  }
  .product_setting_wrap {
    display: flex;
    align-items: center;
    .product_setting_item {
      color: #343232;
      height: 33px;
      margin-right: 7px;
      margin-bottom: 9px;
      padding-left: 16px;
      padding-right: 16px;
      border: 1px solid #d2d2d2;
      border-radius: 4px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 34px;
      -webkit-transition: 0.2s ease-in-out;
      -o-transition: 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      &:hover {
        border: 1px solid #545cdc;
        color: #545cdc;
      }
      &.current_size {
        border: 1px solid #545cdc;
        color: #545cdc;
      }
      &.no_border {
        border: none;
        padding: 0;
      }
      &.color_item.active {
        border: 1px solid #d2d2d2;
        padding: 5px;
        height: auto;
      }
      .color {
        display: block;
        width: 33px;
        height: 33px;
        border-radius: 4px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-decoration: none;
      }
    }
  }
}

.product_buy_btn_wrapper {
  display: flex;
  margin-top: 30px;
  .buy_now {
    width: 137px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #211f1f;
    border: 1px solid #211f1f;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffffff;
    margin-right: 10px;
  }
  .add_cart {
    width: 137px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #211f1f;
    margin-right: 10px;
    border: 1px solid #211f1f;
  }
}

.product_bottom_btn {
  margin-top: 39px;
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-decoration: none;
    text-transform: uppercase;
    color: #211f1f;
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #d8d8d8;
    &:last-child {
      border-right: none;
    }
    i,
    svg {
      margin-right: 10px;
      font-size: 16px;
      vertical-align: -1px;
    }
  }
}

.product_all_info {
  margin-top: 60px;
  margin-bottom: 100px;
  .nav-tabs {
    border-bottom: none;
    overflow: hidden;
    .nav-item {
      margin-left: -1px;
      &:first-child {
        margin-left: 0;
      }
    }
    .nav-link {
      border: 1px solid #d5d5d5;
      border-bottom: none;
      border-radius: 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #343232;
      padding: 13px 16px;
    }
    .nav-link.active {
      background: #f8f7f7;
      box-sizing: border-box;
      border-radius: 0;
    }
  }
  .tab-content {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    padding: 25px 30px;
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #727272;
    }
    .list_item {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 33px;
      color: #3b3939;
      .value {
        width: 140px;
        display: inline-block;
      }
      strong {
        font-weight: 600;
      }
    }
    .title {
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      color: #343232;
      margin-bottom: 23px;
    }
  }
}

.customer_review_item {
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ececec;
  .customer_review_item_star {
    margin-bottom: 7px;
    i {
      color: #d7d7d7;
      &.accent {
        color: #edc207;
      }
    }
  }
  .customer_review_item_theme {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #343232;
    margin-bottom: 10px;
  }
  .customer_review_item_text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #727272;
    margin-bottom: 7px;
  }
  .customer_review_item_theme_name {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #a8a8a8;
  }
}

.add_review_block {
  textarea {
    width: 100%;
    height: 111px;
    resize: none;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    padding: 11px;
  }
  .new_review_star {
    margin-bottom: 16px;
    font-size: 20px;
    i {
      color: #d7d7d7;
      cursor: pointer;
      &.active_star {
        color: #edc207;
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 117px;
    height: 37px;
    background: #211f1f;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    margin-top: 15px;
    cursor: pointer;
  }
}
</style>