<template>
  <div class="commodity-detail">
    <div class="swiper-box">
      <Swiper :swiperParams="swiperParams" :swiperArr="commodityDetail.carousel"></Swiper>
      <i class="iconfont iconfanhui" @click="goBack()"></i>
    </div>
    <div class="title-box">
      <div class="preferential-box">
        <span class="preferential-icon">￥</span>
        <span class="preferential">{{commodityDetail.preferential}}</span>
      </div>
      <div class="price-box">
        <span>价格：￥</span>
        <span class="price">{{commodityDetail.price}}</span>
      </div>
      <span class="title">{{commodityDetail.title}}</span>
      <div class="f-s-box">
        <span>{{'运费；'+ commodityDetail.freight}}</span>
        <span>{{'月销' + commodityDetail.sales}}</span>
        <span>{{commodityDetail.origin}}</span>
      </div>
    </div>
    <van-cell is-link @click="showPopup" value="付款后3天内发货·15天退货·1..." title="服务"></van-cell>
    <!-- <van-cell is-link @click="specificationPopup" value="请选择 安装方式 颜色方式" title="规格"></van-cell> -->
    <van-cell is-link @click="paramsPopup" value="品牌 型号..." title="参数"></van-cell>
    <DetailImg :detail="commodityDetail.detail" />
    <van-popup v-model="serviceShow" round position="bottom" :style="{ 'max-height': '80%' }">
      <div class="service-title">基础服务</div>
      <div class="service-item-box">
        <div class="service-item" v-for="(item, index) in commodityDetail.service" :key="index">
          <i class="iconfont icondui"></i>
          <span class="service-title">{{item.basis}}</span>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="paramsShow" round position="bottom" :style="{ 'max-height': '80%' }">
      <div class="params-title">产品参数</div>
      <div class="params-item-box">
        <div class="params-item" v-for="(item, index) in commodityDetail.params" :key="index">
          <div class="params-name">{{item.paramName}}</div>
          <div class="params-val">{{item.paramVal}}</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="specificationShow" round position="bottom" :style="{ 'max-height': '80%' }">
      <div class="params-title">产品规格</div>
      <div class="specification-box">
        <div class="specification-img">
          <img :src="commodityDetail.listImg" alt />
        </div>

        <div>颜色分类</div>
        <div class="specification-color-box">
          <span
            v-for="(color, index) in commodityDetail.color"
            :key="index"
            class="specification-color"
            :class="{selected: index == current}"
            @click="postColor(color, index)"
          >{{color}}</span>
        </div>
        <div class="specification-num">
          <span>购买数量</span>
          <van-stepper v-model="orderParams.purchaseNum" />
        </div>
        <div class="specification-input-box">
          <input
            class="specification-input"
            type="text"
            placeholder="请输入姓名"
            v-model="orderParams.name"
          />
          <input
            class="specification-input"
            type="text"
            placeholder="请输入手机号"
            v-model="orderParams.telNum"
          />
          <input
            class="specification-input"
            type="text"
            placeholder="请输入地址"
            v-model="orderParams.receipt"
          />
        </div>
        <footer @click="purchase">确定</footer>
      </div>
    </van-popup>
    <!-- <van-sku
      v-model="specificationShow"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :custom-stepper-config="customStepperConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @stepper-change="stepperChange"
    />-->
    <div class="footer-box">
      <div class="cart">
        <i class="iconfont icongouwuche"></i>
        <div class="cart-text" @click="goCart">购物车</div>
      </div>
      <div class="collect">
        <van-icon name="star-o" color="#999" />
        <div class="collect-text">收藏</div>
      </div>
      <div class="button-box">
        <div class="add-cart" @click="specificationPopup('cart')">加入购物车</div>
        <div class="add-buy" @click="specificationPopup('purchase')">立即购买</div>
      </div>
    </div>
    <!-- <van-goods-action>
      <van-goods-action-icon icon-class="chat-icon" icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon
        icon-class="cart-icon"
        icon="cart-o"
        text="购物车"
        badge="5"
        @click="onClickIcon"
      />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>-->
  </div>
</template>
<script>
import Swiper from "@/components/common/Swiper.vue";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Popup,
  Cell,
  Sku,
  Toast,
  Icon,
  Stepper,
  Field
} from "vant";
export default {
  data() {
    return {
      serviceShow: false, //服务展示
      specificationShow: false, //规格展示
      paramsShow: false, //参数展示
      swiperParams: {
        paginationType: "fraction", //页面数量显示
        autoplay: false, //是否自动轮播
        prevNextButton: false //左右按钮是否展示
      },
      // swiperArr: [
      //   {
      //     imgSrc:
      //       "https://img.alicdn.com/imgextra/i1/2675669696/O1CN01YKLlof2LUopbI1RmM_!!2675669696.jpg_640x640q80_.webp"
      //   },
      //   {
      //     imgSrc:
      //       "https://img.alicdn.com/imgextra/i4/2675669696/O1CN01zMM5Vl2LUomTvM4mo_!!2675669696.jpg_640x640q80_.webp"
      //   },
      //   {
      //     imgSrc:
      //       "https://img.alicdn.com/imgextra/i3/2675669696/O1CN012LUoi20KG2deA9H_!!2675669696.jpg_640x640q80_.webp"
      //   },
      //   {
      //     imgSrc:
      //       "https://img.alicdn.com/imgextra/i3/2675669696/TB2aCZ3cNGYBuNjy0FnXXX5lpXa_!!2675669696.jpg_640x640q80_.webp"
      //   },
      //   {
      //     imgSrc:
      //       "https://img.alicdn.com/imgextra/i3/2675669696/TB2z2TFvg0kpuFjSspdXXX4YXXa_!!2675669696.jpg_640x640q80_.webp"
      //   }
      // ],
      detail: [
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i3/2675669696/O1CN01VfHN4H2LUojckpx0Q_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i4/2675669696/TB2BCTeXHnA11Bjy0FjXXapoFXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i4/2675669696/TB2dq6fXHbC11BjSszbXXXRbpXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i4/2675669696/TB2dq6fXHbC11BjSszbXXXRbpXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i4/2675669696/TB2dq6fXHbC11BjSszbXXXRbpXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i3/2675669696/TB2QOLgXIHA11Bjy0FiXXckfVXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i4/2675669696/TB2PQjhXKvB11BjSspnXXbE.pXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i3/2675669696/TB22CHeXRjC11BjSszdXXbGFpXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i4/2675669696/TB2ihPfXOYC11Bjy1zbXXbYLFXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i4/2675669696/TB2ju2kXLTz11Bjy1XcXXapnpXa_!!2675669696.jpg_640x0q80_.webp"
        // },
        // {
        //   imgSrc:
        //     "https://img.alicdn.com/imgextra/i2/2675669696/TB2oDzfXJYA11Bjy0FhXXbIwVXa_!!2675669696.jpg_640x0q80_.webp"
        // }
      ],
      commodityDetail: {
        carousel: [],
        detail: []
        // price: 399,
        // preferential: 299,
        // title: "汉尼斯床头柜",
        // freight: 10,
        // sales: 5,
        // origin: "广州",
        // params: [
        //   { paramsName: "brand", paramsVal: "初寓" },
        //   { paramsName: "model", paramsVal: "WF4050002" },
        //   { paramsName: "meterial", paramsVal: "人造板" },
        //   { paramsName: "pattern", paramsVal: "其他" },
        //   { paramsName: "style", paramsVal: "简约现代" },
        //   {
        //     paramsName: "color",
        //     paramsVal:
        //       "白色50cm,白色50cm（两个）,白色50cm（升级款）,白色50cm（升级款）（两个）,白色40cm（实木板款）,白色40cm（实木板款）（2个）,白色30cm"
        //   },
        //   { paramsName: "customize", paramsVal: "可定制" },
        //   { paramsName: "suitable", paramsVal: "成人" },
        //   { paramsName: "delivery", paramsVal: "广州, 北京" },
        //   { paramsName: "instructions", paramsVal: "提供说明书" }
        // ],
        // service: [
        //   "付款后三天内发货",
        //   "15天退货",
        //   "一次破损补寄",
        //   "运费险",
        //   "在指定的393个主城区内享受“长途运费＋同城配送＋搬楼（电梯免费入户，步梯 《＝7楼免费入户）＋安装（拆包/拼装等）”服务"
        // ]
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl:
                  "http://img.alicdn.com/imgextra/i1/2675669696/O1CN01LrsZzc2LUomSlb8h5_!!2675669696.jpg_120x120q50s150.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl:
                  "http://img.alicdn.com/imgextra/i1/2675669696/O1CN01LrsZzc2LUomSlb8h5_!!2675669696.jpg_240x240q50s150.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl:
                  "http://img.alicdn.com/imgextra/i4/2675669696/TB2VLu4owLD8KJjSszeXXaGRpXa_!!2675669696.jpg_120x120q50s150.jpg",
                previewImgUrl:
                  "http://img.alicdn.com/imgextra/i4/2675669696/TB2VLu4owLD8KJjSszeXXaGRpXa_!!2675669696.jpg_120x120q50s150.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "30349", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "2.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture:
          "http://img.alicdn.com/imgextra/i1/2675669696/O1CN01LrsZzc2LUomSlb8h5_!!2675669696.jpg_120x120q50s150.jpg"
      },
      customStepperConfig: {
        // 自定义限购文案
        quotaText: "每次限购xxx件",
        // 自定义步进器超过限制时的回调
        handleOverLimit: data => {
          const { action, limitType, quota, quotaUsed, startSaleNum } = data;

          if (action === "minus") {
            Toast(
              startSaleNum > 1 ? `${startSaleNum}件起售` : "至少选择一件商品"
            );
          } else if (action === "plus") {
            // const { LIMIT_TYPE } = Sku.skuConstants;
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              let msg = `单次限购${quota}件`;
              if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
              Toast(msg);
            } else {
              Toast("库存不够了");
            }
          }
        },
        // 步进器变化的回调
        handleStepperChange: currentValue => {},
        // 库存
        stockNum: 1999,
        // 格式化库存
        stockFormatter: stockNum => {}
      },
      goodsId: "946755",
      quota: 0,
      quotaUsed: 0,
      orderParams: {
        purchaseNum: 1,
        telNum: "",
        name: "",
        receipt: "",
        color: ""
      },
      id: this.$route.query.id,
      current: 0,
      cart: false
    };
  },
  async created() {
    await this.getCommodityDetail();
    this.orderParams.color = this.commodityDetail.color[this.current];
  },
  methods: {
    // 跳转到购物车
    goCart() {
      this.$router.push({
        path: '/cart'
      })
    },
    postColor(color, index) {
      this.current = index;
      this.orderParams.color = color;
    },
    purchase() {
      let cParams = {};
      Object.assign(
        cParams,
        { commodity: this.commodityDetail },
        this.orderParams,
        { token: localStorage.token }
      );
      if (this.cart) {
        this.$http.post(`/api/cart`, cParams);
        Toast("成功加入购物车");
      } else {
        this.$http.post(`/api/order`, cParams);
        Toast("成功购买");
      }
      this.specificationShow = false;
    },
    // 获取详情
    async getCommodityDetail() {
      const res = await this.$http.get(`/api/commodity/${this.id}`);
      this.commodityDetail = res.data;
    },
    // 购买数量变化时
    stepperChange(val) {
      console.log(val);
    },
    goBack() {
      this.$router.back();
    },
    // 点击购买
    onBuyClicked(val) {
      console.log(val);
    },
    // 添加进购物车
    onAddCartClicked(val) {
      console.log(val);
    },
    // 展示服务
    showPopup() {
      this.serviceShow = true;
    },
    // 展示购买
    specificationPopup(type) {
      if (type == "cart") {
        this.cart = true;
      } else {
        this.cart = false;
      }
      this.specificationShow = true;
    },
    // 展示参数
    paramsPopup() {
      this.paramsShow = true;
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      console.log(this.sku);
    }
  },
  components: {
    Swiper,
    DetailImg: () => import("@/components/special/DetailImg/index.vue"),
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [Sku.name]: Sku,
    [Icon.name]: Icon,
    [Stepper.name]: Stepper,
    [Field.name]: Field
  }
};
</script>
<style lang="scss" scoped>
.commodity-detail {
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 0.25rem;
  .swiper-box {
    position: relative;
    width: 100%;
    height: 3.75rem;
  }
  .iconfanhui {
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 99;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.4);
  }
  .title-box {
    padding: 0.1rem;
    width: 100%;
    box-sizing: border-box;
    background: white;
    .preferential-box {
      .preferential-icon {
        font-size: 0.15rem;
        color: #ff5000;
      }
      .preferential {
        font-size: 0.25rem;
        color: #ff5000;
      }
    }
    .price-box {
      span {
        color: #999;
      }
      .price {
        text-decoration: line-through;
      }
    }
    .title {
      font-weight: 600;
      font-size: 0.18rem;
    }
    .f-s-box {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      span {
        color: #999;
      }
    }
  }
  .van-popup--round {
    padding: 0.1rem 0.5rem;
    background: white;
    .service-title {
      text-align: center;
      font-size: 0.2rem;
    }
    .service-item-box {
      display: flex;
      flex-direction: column;
      margin-top: 0.2rem;
      .service-item {
        display: flex;
        padding-top: 0.1rem;
        .icondui {
          color: #ff9000;
          font-size: 0.15rem;
        }
        .service-title {
          padding-left: 0.2rem;
          font-size: 0.15rem;
        }
      }
    }
    .params-title {
      text-align: center;
      font-size: 0.2rem;
    }
    .params-item-box {
      .params-item {
        margin-top: 20px;
        display: flex;
        .params-name {
          color: #999;
          font-size: 0.15rem;
          width: 35%;
        }
        .params-val {
          flex: 1;
        }
      }
    }
    .specification-box {
      .specification-img {
        width: 0.8rem;
        height: 0.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .specification-color-box {
        display: flex;
        margin-top: 0.1rem;
        .specification-color {
          margin-left: 0.1rem;
          padding: 0.1rem;
          box-sizing: border-box;
          background: #d6d7da;
          &.selected {
            background: #a7a7aa;
          }
        }
      }
      .specification-num {
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
        &::v-deep .van-stepper {
          button {
            width: 0.2rem;
            height: 0.2rem;
          }
          input {
            font-size: 0.15rem;
            width: 0.2rem;
            height: 0.2rem;
          }
        }
      }
      .specification-input-box {
        margin-top: 0.2rem;
        .specification-input {
          margin-top: 0.1rem;
        }
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.2rem;
        width: 100%;
        height: 0.3rem;
        border-radius: 40px;
        color: white;
        background-image: linear-gradient(to right, #ffd01e, #ff8917);
      }
    }
  }
  .van-cell--clickable {
    margin-top: 30px;
    height: 50px;
    justify-content: space-between;
    font-size: 0.15rem;
    .van-cell__title {
      flex-grow: 0;
      flex-basis: 20%;
    }
  }
  .footer-box {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem;
    width: 100%;
    background: white;
    .cart {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.12rem;
      color: #999;
      span {
        color: #999;
      }
      .icongouwuche {
        color: #999;
        font-size: 0.2rem;
      }
      .cart-text {
        color: #999;
      }
    }
    .collect {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 0.4rem;
      height: 0.4rem;
      font-size: 0.12rem;
      span {
        color: #999;
      }
      .van-icon-star-o {
        font-size: 0.2rem;
      }
      .collect-text {
        color: #999;
      }
    }
    .button-box {
      display: flex;
      width: 70%;
      .add-cart {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        border-radius: 0.2rem 0 0 0.2rem;
        background-image: linear-gradient(to right, #ffd01e, #ff8917);
      }
      .add-buy {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        border-radius: 0 0.2rem 0.2rem 0;
        background: linear-gradient(to right, #ff6034, #ee0a24);
      }
    }
  }
  &::v-deep .van-sku__price-symbol {
    font-size: 0.15rem;
  }
  &::v-deep .van-sku__price-num {
    font-size: 0.15rem;
  }
}
</style>