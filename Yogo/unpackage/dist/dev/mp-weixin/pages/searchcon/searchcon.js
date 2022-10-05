"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_request_http = require("../request/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "searchcon",
  setup(__props) {
    const data = common_vendor.reactive({
      soucon: "",
      conlist: []
    });
    const shoplist = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/shoplist/shoplist?id=${id}`
      });
    };
    const sou = () => {
      getsou();
    };
    const erro = () => {
      data.soucon = "";
      data.conlist = [];
    };
    const getsou = () => {
      pages_request_http.request(`/goods/qsearch?query=${data.soucon}`).then((res) => {
        data.conlist = res.message;
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o([($event) => data.soucon = $event.detail.value, sou]),
        b: data.soucon,
        c: data.soucon,
        d: common_vendor.o(erro),
        e: common_vendor.f(data.conlist, (i, index, i0) => {
          return {
            a: common_vendor.t(i.goods_name),
            b: i.goods_id,
            c: common_vendor.o(($event) => shoplist(i.goods_id), i.goods_id)
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u5B9E\u8BAD/\u79FB\u52A8\u7AEF/Yogo/pages/searchcon/searchcon.vue"]]);
wx.createPage(MiniProgramPage);
