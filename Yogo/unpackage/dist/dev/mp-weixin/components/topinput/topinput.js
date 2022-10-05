"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "topinput",
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.$router.push("/pages/searchcon/searchcon"))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u5B9E\u8BAD/\u79FB\u52A8\u7AEF/Yogo/components/topinput/topinput.vue"]]);
wx.createComponent(Component);
