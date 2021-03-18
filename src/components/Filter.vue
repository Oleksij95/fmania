<template>
    <div class="filter">
            <div class="filter__header">Filter</div>
            <div class="filter__body">
              <div class="filter__body_item">
                <div class="title_item">Category</div>
                <div class="filer_list_wrapper">
                  <div class="filter_item">
                    <a href="#"
                      >Suits <span class="filter_item_count">(200)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      >SuitsShirts
                      <span class="filter_item_count">(457)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      >SuitsTrousers
                      <span class="filter_item_count">(873)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      >SuitsWedding
                      <span class="filter_item_count">(934)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      >Suitsjackets
                      <span class="filter_item_count">(834)</span></a
                    >
                  </div>
                </div>
              </div>

              <div class="filter__body_item">
                <div class="title_item">Price</div>
                <div class="filer_list_wrapper">
                  <div
                    id="slider-range"
                    class="price-filter-range"
                    name="rangeInput"
                  ></div>
                  <div class="price_decimal_wrapper">
                    <input
                      type="number"
                      min="0"
                      max="9900"
                      oninput="validity.valid||(value='0');"
                      id="min_price"
                      class="price-range-field"
                    />
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      oninput="validity.valid||(value='10000');"
                      id="max_price"
                      class="price-range-field"
                    />
                    <button class="price_filter">Ok</button>
                  </div>
                </div>
              </div>

              <div class="filter__body_item">
                <div class="title_item">Color</div>
                <div class="filer_list_wrapper">
                  <div class="filter_item">
                    <a href="#"
                      ><span class="color" style="background-color: #000"></span
                      >Black <span class="filter_item_count">(221)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      ><span
                        class="color"
                        style="background-color: #de720e"
                      ></span
                      >Orange <span class="filter_item_count">(124)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      ><span
                        class="color"
                        style="background-color: #6278dd"
                      ></span
                      >Blue <span class="filter_item_count">(44)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      ><span
                        class="color"
                        style="background-color: #625749"
                      ></span
                      >Brown <span class="filter_item_count">(123)</span></a
                    >
                  </div>
                  <div class="filter_item">
                    <a href="#"
                      ><span
                        class="color"
                        style="background-color: #478c52"
                      ></span
                      >Dark Green
                      <span class="filter_item_count">(731)</span></a
                    >
                  </div>
                </div>
              </div>

              <div class="filter__body_item">
                <div class="title_item">Type</div>
                <div class="filer_list_wrapper">
                  <form action="">
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="type_111" name="type_111" />
                      <label for="type_111"
                        >Orange
                        <span class="filter_item_count">(200)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="type_132" name="type_132" />
                      <label for="type_132"
                        >Single Breasted
                        <span class="filter_item_count">(200)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="type_521" name="type_521" />
                      <label for="type_521"
                        >Mandarin
                        <span class="filter_item_count">(200)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="type_862" name="type_862" />
                      <label for="type_862"
                        >Tuxedo Style
                        <span class="filter_item_count">(200)</span></label
                      >
                    </div>
                  </form>
                </div>
              </div>

              <div class="filter__body_item">
                <div class="title_item">Size</div>
                <div class="filer_list_wrapper">
                  <form action="">
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_2XS" name="size_2XS" />
                      <label for="size_2XS"
                        >2XS <span class="filter_item_count">(200)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_XS" name="size_XS" />
                      <label for="size_XS"
                        >XS <span class="filter_item_count">(2)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_S" name="size_S" />
                      <label for="size_S"
                        >S <span class="filter_item_count">(63)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_M" name="size_M" />
                      <label for="size_M"
                        >M <span class="filter_item_count">(24)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_L" name="size_L" />
                      <label for="size_L"
                        >L <span class="filter_item_count">(97)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_XL" name="size_XL" />
                      <label for="size_XL"
                        >XL <span class="filter_item_count">(36)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_2XL" name="size_2XL" />
                      <label for="size_2XL"
                        >2XL <span class="filter_item_count">(11)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_3XL" name="size_3XL" />
                      <label for="size_3XL"
                        >3XL <span class="filter_item_count">(77)</span></label
                      >
                    </div>
                    <div class="filter_item filter_item_check">
                      <input type="checkbox" id="size_FREE" name="size_FREE" />
                      <label for="size_FREE"
                        >FREE <span class="filter_item_count">(53)</span></label
                      >
                    </div>
                  </form>
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

#slider-range {
  margin-top: 10px;
}

.ui-slider .ui-slider-handle {
  width: 28px;
  height: 23px;
  top: -7px;
  background: url("/img/price-filter.svg");
  background-size: cover;
  border: none;
  outline: none;
  margin-left: -3px;
}

.ui-slider .ui-slider-handle:last-child {
  margin-left: -25px;
}

.ui-widget.ui-widget-content {
  background: #eaeaea;
  border: none;
  height: 6px;
}

.ui-slider .ui-slider-range {
  background: #676767;
}

.filter {
  .filter__header {
    background: #545cdc;
    height: 54px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    padding: 0 20px;
  }
  .filter__body {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.134143);
    padding: 0 20px;
    margin-top: -1px;
    .title_item {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #343232;
    }
    .filter__body_item {
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 19px;
      padding-top: 19px;
    }
    .filer_list_wrapper {
      padding-top: 10px;
      .filter_item {
        a {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 33px;
          color: #5b5b5b;
          text-decoration: none;
          &:hover {
            color: #889bff;
          }
        }
        .color {
          width: 14px;
          height: 14px;
          display: inline-block;
          margin-right: 13px;
          vertical-align: -2px;
        }
      }
      .filter_item_check {
        position: relative;
        input {
          opacity: 0;
          position: absolute;
        }
        label {
          position: relative;
          padding-left: 30px;
          cursor: pointer;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: #5b5b5b;
          &:hover {
            color: #889bff;
          }
          &:before {
            content: "";
            width: 21px;
            height: 21px;
            background: #ffffff;
            border: 1px solid #cecece;
            box-sizing: border-box;
            border-radius: 2px;
            position: absolute;
            left: 0;
            top: -4px;
          }
          &:after {
            content: "";
            width: 11px;
            height: 8px;
            position: absolute;
            background-image: url("/img/check.svg");
            top: 3px;
            left: 5px;
            opacity: 0;
          }
        }
      }
    }
  }
}

.filter_item_check input:checked + label:after {
  opacity: 1 !important;
}
.filter_item_check input:checked + label::before {
  border: 1px solid #6d6d6d !important;
}
</style>