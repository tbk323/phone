"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_request_http = require("../request/http.js");
if (!Array) {
  const _easycom_topinput2 = common_vendor.resolveComponent("topinput");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_topinput2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_topinput = () => "../../components/topinput/topinput.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_topinput + _easycom_u_grid_item + _easycom_u_grid)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      banlist: [],
      imglist: [],
      floorlist: []
    });
    const getban = () => {
      pages_request_http.request("/home/swiperdata").then((res) => {
        data.banlist = res.message;
      });
    };
    getban();
    const getcen = () => {
      pages_request_http.request("/home/catitems").then((res) => {
        data.imglist = res.message;
      });
    };
    getcen();
    const getfloor = () => {
      pages_request_http.request("/home/floordata").then((res) => {
        console.log(res.message);
        data.floorlist = res.message;
      });
    };
    getfloor();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.banlist, (i, index, i0) => {
          return {
            a: i.image_src,
            b: i.id
          };
        }),
        b: common_vendor.f(data.imglist, (i, index, i0) => {
          return {
            a: i.image_src,
            b: i.name,
            c: i.id
          };
        }),
        c: common_vendor.f(data.floorlist, (i, index, i0) => {
          return {
            a: i.floor_title.image_src,
            b: i.product_list[0].image_src,
            c: common_vendor.f(i.product_list, (item, index2, i1) => {
              return {
                a: item.image_src,
                b: "c005db4c-2-" + i0 + "-" + i1 + "," + ("c005db4c-1-" + i0)
              };
            }),
            d: "c005db4c-1-" + i0,
            e: index
          };
        }),
        d: common_vendor.p({
          col: 2,
          border: _ctx.fasle
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/\u5B9E\u8BAD/\u79FB\u52A8\u7AEF/Yogo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
