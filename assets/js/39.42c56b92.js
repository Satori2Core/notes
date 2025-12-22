(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.iterator.constructor.js */ "./node_modules/core-js/modules/es.iterator.constructor.js");
/* harmony import */ var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.iterator.some.js */ "./node_modules/core-js/modules/es.iterator.some.js");
/* harmony import */ var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _theme_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme/helpers/utils */ "./node_modules/vuepress-theme-reco/helpers/utils.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_2__["defineComponent"])({
  functional: true,
  props: ['item', 'sidebarDepth'],
  render(h, {
    parent: {
      $page,
      $site,
      $route,
      $themeConfig,
      $themeLocaleConfig
    },
    props: {
      item,
      sidebarDepth
    }
  }) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = Object(_theme_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isActive"])($route, item.path);
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto' ? selfActive || item.children.some(c => Object(_theme_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["isActive"])($route, item.basePath + '#' + c.slug)) : selfActive;
    const link = renderLink(h, item.path, item.title || item.path, active);
    return link;
  }
}));
function renderLink(h, to, text, active) {
  return h('router-link', {
    props: {
      to,
      activeClass: '',
      exactActiveClass: ''
    },
    class: {
      active,
      'sidebar-link': true
    }
  }, text);
}

// function renderChildren (h, children, path, route, maxDepth, depth = 1) {
//   if (!children || depth > maxDepth) return null
//   return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
//     const active = isActive(route, path + '#' + c.slug)
//     return h('li', { class: 'sidebar-sub-header' }, [
//       renderLink(h, path + '#' + c.slug, c.title, active),
//       renderChildren(h, c.children, path, route, maxDepth, depth + 1)
//     ])
//   }))
// }

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--13-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--13-oneOf-1-2!./node_modules/stylus-loader??ref--13-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vuepress-theme-reco/components/SidebarLink.vue":
/*!*********************************************************************!*\
  !*** ./node_modules/vuepress-theme-reco/components/SidebarLink.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarLink.vue?vue&type=script&lang=js */ "./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _SidebarLink_vue_vue_type_style_index_0_id_2890f9a4_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus */ "./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_dist_cjs_js_ref_3_0_babel_loader_lib_index_js_ref_3_1_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../cache-loader/dist/cjs.js??ref--3-0!../../babel-loader/lib??ref--3-1!../../cache-loader/dist/cjs.js??ref--0-0!../../vue-loader/lib??vue-loader-options!./SidebarLink.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_dist_cjs_js_ref_3_0_babel_loader_lib_index_js_ref_3_1_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_2890f9a4_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../mini-css-extract-plugin/dist/loader.js!../../css-loader/dist/cjs.js??ref--13-oneOf-1-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--13-oneOf-1-2!../../stylus-loader??ref--13-oneOf-1-3!../../cache-loader/dist/cjs.js??ref--0-0!../../vue-loader/lib??vue-loader-options!./SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuepress-theme-reco/components/SidebarLink.vue?vue&type=style&index=0&id=2890f9a4&prod&lang=stylus");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_2890f9a4_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_2890f9a4_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_2890f9a4_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_2890f9a4_prod_lang_stylus__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);
//# sourceMappingURL=39.42c56b92.js.map