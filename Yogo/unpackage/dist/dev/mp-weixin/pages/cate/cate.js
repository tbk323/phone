"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_request_http = require("../request/http.js");
if (!Array) {
  const _easycom_topinput2 = common_vendor.resolveComponent("topinput");
  _easycom_topinput2();
}
const _easycom_topinput = () => "../../components/topinput/topinput.js";
if (!Math) {
  _easycom_topinput();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cate",
  setup(__props) {
    const data = common_vendor.reactive({
      leftlist: [],
      catid: 1,
      rightlist: [],
      onelist: []
    });
    const btn = (id, item) => {
      console.log(item);
      data.catid = id;
      data.rightlist = item;
    };
    pages_request_http.request("/categories").then((res) => {
      data.leftlist = res.message;
      console.log(res.message[0].children);
      data.onelist = res.message[0].children;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.leftlist, (i, index, i0) => {
          return {
            a: common_vendor.t(i.cat_name),
            b: i.cat_id,
            c: i.cat_id == data.catid ? 1 : "",
            d: common_vendor.o(($event) => btn(i.cat_id, i.children), i.cat_id)
          };
        }),
        b: common_vendor.f(data.rightlist, (i, index, i0) => {
          return {
            a: common_vendor.t(i.cat_name),
            b: common_vendor.f(i.children, (child, ind, i1) => {
              return {
                a: child.cat_icon
              };
            }),
            c: common_vendor.t(i.cat_name),
            d: index
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u5B9E\u8BAD/\u79FB\u52A8\u7AEF/Yogo/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
