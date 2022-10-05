"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "car",
  setup(__props) {
    const data = common_vendor.reactive({
      ckall: false
    });
    return (_ctx, _cache) => {
      return {
        a: data.ckall
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u5B9E\u8BAD/\u79FB\u52A8\u7AEF/Yogo/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
