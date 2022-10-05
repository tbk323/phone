"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_request_http = require("../request/http.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_icons2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_goods_nav)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "shoplist",
  setup(__props) {
    const list = common_vendor.ref([]);
    let route = common_vendor.useRoute();
    console.log(route.query.id);
    pages_request_http.request(`/goods/detail?goods_id=${route.query.id}`).then((res) => {
      console.log(res.message);
      list.value = res.message;
    });
    const data = common_vendor.reactive({
      options: [{
        icon: "chat",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "#f5f5f5"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff"
        }
      ]
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value.pics, (i, index, i0) => {
          return {
            a: i.pics_big,
            b: index
          };
        }),
        b: common_vendor.t(list.value.goods_price),
        c: common_vendor.t(list.value.goods_name),
        d: common_vendor.p({
          type: "star"
        }),
        e: common_vendor.o(_ctx.onClick),
        f: common_vendor.o(_ctx.buttonClick),
        g: common_vendor.p({
          options: data.options,
          fill: true,
          ["button-group"]: data.buttonGroup
        }),
        h: list.value.goods_introduce
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u5B9E\u8BAD/\u79FB\u52A8\u7AEF/Yogo/pages/shoplist/shoplist.vue"]]);
wx.createPage(MiniProgramPage);
