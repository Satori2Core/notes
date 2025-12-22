(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md":
/*!****************************************************************!*\
  !*** ./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Go_md_vue_type_template_id_750a05aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa */ "./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _C_Go_md_vue_type_template_id_750a05aa__WEBPACK_IMPORTED_MODULE_0__["render"],
  _C_Go_md_vue_type_template_id_750a05aa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa":
/*!**********************************************************************************************!*\
  !*** ./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_C_Go_md_vue_type_template_id_750a05aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--3-0!../../../../node_modules/babel-loader/lib??ref--3-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??ref--1-1!../../../../node_modules/@vuepress/markdown-loader??ref--1-2!./从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_C_Go_md_vue_type_template_id_750a05aa__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_8c2f02a4_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_3_0_node_modules_babel_loader_lib_index_js_ref_3_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_C_Go_md_vue_type_template_id_750a05aa__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"8c2f02a4-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"8c2f02a4-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/archive/tech-notes/go/从继承体系到行为契约：C++转Go的接口编程思考.md?vue&type=template&id=750a05aa ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h2', {
    attrs: {
      "id": "bg"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#bg"
    }
  }, [_vm._v("#")]), _vm._v(" BG")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("我是24届毕业生，原技术栈为 "), _c('code', [_vm._v("C/C++")]), _vm._v(" 客户端相关，现在公司担任 "), _c('code', [_vm._v("Go")]), _vm._v(" 后端开发助理工程师。")]), _vm._v(" "), _c('li', [_vm._v("由于对 "), _c('code', [_vm._v("Go")]), _vm._v(" 语言学习认识比较粗浅，因此希望通过笔记方式记录学习与思考。")]), _vm._v(" "), _c('li', [_vm._v("本文，将站在从 "), _c('code', [_vm._v("C++")]), _vm._v(" "), _c('code', [_vm._v("OOP")]), _vm._v(" 理念，转 "), _c('code', [_vm._v("Go")]), _vm._v(" 语言开发进行简单实践思考。")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "思考结论"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#思考结论"
    }
  }, [_vm._v("#")]), _vm._v(" 思考结论")]), _vm._v(" "), _c('p', [_vm._v("经过在业务组几个月的摸爬滚打，算是能够使用Go语言进行基本的业务开发。回忆 "), _c('code', [_vm._v("C++")]), _vm._v(" 学习的内容，与 "), _c('code', [_vm._v("Go")]), _vm._v(" 语言业务开发后，得出如下思考总结：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("C++")]), _vm._v(" "), _c('code', [_vm._v("OOP")]), _vm._v(" 的继承体系更多的表达 —— "), _c('strong', [_vm._v("是什么")]), _vm._v("！")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("Go")]), _vm._v(" 语言中更多表达 —— "), _c('strong', [_vm._v("能做什么")]), _vm._v("！")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_1-理念转型-从类型层级到行为契约"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-理念转型-从类型层级到行为契约"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 理念转型：从类型层级到行为契约")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("维度")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("C++ OOP")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("Go 接口")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("抽象单元")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("类（class）")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("接口（interface）")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("关系定义")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("显式继承（class B ： class A）")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("隐式实现（实现方法即满足接口）")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("多态基石")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("虚函数表（编译器生成）")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("接口方法表（itab，运行时动态生成）")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("设计哲学")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("“是什么”（is-a关系）")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("“能做什么”（行为契约）")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("扩展性")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("需修改基类（易破坏继承链）")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("无需修改接口（新增行为即新接口）")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("解耦程度")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("类层级紧耦合")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v("接口与实现完全分离")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-1-案例对比说明"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-1-案例对比说明"
    }
  }, [_vm._v("#")]), _vm._v(" 1.1 "), _c('strong', [_vm._v("案例对比说明")])]), _vm._v(" "), _c('p', [_vm._v("案例对比：图形渲染")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("极简简化")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("如下：在 "), _c('code', [_vm._v("C++")]), _vm._v(" 中，如果我们想要抽象某些东西，一般会设计基类，并定义公共属性及其方法。通过继承的方式来补全对实际对象的定义。在使用中，如果存在多个不同的子类，支持通过...")])]), _vm._v(" "), _c('div', {
    staticClass: "language-cpp extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-cpp"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 强耦合")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("Shape")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("virtual")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("void")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Draw")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("Circle")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token base-clause"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("public")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("Shape")])]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("void")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Draw")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("override")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// TODO")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("void")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Render")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("Shape"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v(" shape"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    shape"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("->")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Draw")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 多态调用")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('ul', [_c('li', [_vm._v("然而，在 "), _c('code', [_vm._v("Go")]), _vm._v(" 语言中，是通过"), _c('strong', [_vm._v("实现接口中定义的所有方法")]), _vm._v("，即：认为是对接口的实现！(鸭子类型)")])]), _vm._v(" "), _c('div', {
    staticClass: "language-go extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-go"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" Drawer "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("interface")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Draw")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 一个具体类型")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" Circle "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("struct")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 在的类型上实现接口中定义的方法，即：是对 Circle 对 Drawer 接口的实现！")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("func")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("c Circle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Draw")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// TODO")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("func")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Render")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("d Drawer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    d"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Draw")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 动态派发")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])])]), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-2-go-接口设计哲学-go-接口的底层本质"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-2-go-接口设计哲学-go-接口的底层本质"
    }
  }, [_vm._v("#")]), _vm._v(" 1.2 "), _c('strong', [_vm._v("Go 接口设计哲学 / Go 接口的底层本质")])]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("Go")]), _vm._v(" 的接口是 "), _c('strong', [_vm._v("隐式契约")]), _vm._v(" 与 "), _c('strong', [_vm._v("鸭子类型")]), _vm._v(" 的结合：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-go extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-go"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" Writer "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("interface")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" \n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Write")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("byte")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" \n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 任何拥有 Write 方法的类型自动满足 Writer 接口")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" NetworkSocket "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("struct")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("func")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("n NetworkSocket"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Write")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("data "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("byte")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("...")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" DiskFile "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("struct")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("func")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("d DiskFile"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Write")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("data "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("byte")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("...")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n")])])]), _c('p', [_c('strong', [_vm._v("对比 "), _c('code', [_vm._v("C++")]), _vm._v(" 的核心差异")]), _vm._v("：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("C++")]), _vm._v("：类型关系在编译期强制绑定（比如："), _c('code', [_vm._v("Circle")]), _vm._v("必须是"), _c('code', [_vm._v("Shape")]), _vm._v("的子类）")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("Go")]), _vm._v("：行为匹配在运行是动态判断（只要你能"), _c('code', [_vm._v("Draw")]), _vm._v("，你就是"), _c('code', [_vm._v("Drawer")]), _vm._v("）")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-3-实战场景对比-跨数据源读取器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-3-实战场景对比-跨数据源读取器"
    }
  }, [_vm._v("#")]), _vm._v(" 1.3 "), _c('strong', [_vm._v("实战场景对比：跨数据源读取器")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("C++ 实现")]), _vm._v("：")]), _vm._v(" "), _c('div', {
    staticClass: "language-cpp extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-cpp"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("DataReader")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("public")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("virtual")]), _vm._v(" vector"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("byte"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Read")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("DatabaseReader")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token base-clause"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("public")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("DataReader")])]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("APIDataReader")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token base-clause"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("public")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("DataReader")])]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n")])])]), _c('p', [_c('strong', [_vm._v("Go 实现")]), _vm._v("：")]), _vm._v(" "), _c('div', {
    staticClass: "language-go extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-go"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" Reader "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("interface")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Read")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("byte")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" DatebaseConn "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("struct")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("...")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("func")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("db DatabaseConn"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Read")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("byte")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("...")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("type")]), _vm._v(" HTTPFetcher "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("struct")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("...")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("func")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("hf HTTPFetcher"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Read")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("byte")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("...")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 使用")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("func")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("PrecessData")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("r Reader"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    data "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":=")]), _vm._v(" r"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("Read")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// TODO")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n")])])]), _c('p', [_c('strong', [_vm._v("如何拓展？可拓展性？")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("如果业务上需要拓展 —— 新增：CloudStorageReader，Go语言相比之下，优势展现。\n"), _c('ul', [_c('li', [_vm._v("C++ 需继承基类（可能涉及已有代码修改）")]), _vm._v(" "), _c('li', [_vm._v("Go 只需实现 Read() 方法（零侵入）")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-4-小结-思维转换的本质-go-接口的精髓"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-4-小结-思维转换的本质-go-接口的精髓"
    }
  }, [_vm._v("#")]), _vm._v(" 1.4 小结：思维转换的本质 / Go 接口的精髓")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("总结")]), _vm._v("：思维转换的本质")])]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("C++ OOP")]), _vm._v(" "), _c('th', [_vm._v("Go Interface")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("设计时关注 "), _c('strong', [_vm._v("类型血统")])]), _vm._v(" "), _c('td', [_vm._v("设计时关注 "), _c('strong', [_vm._v("行为能力")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("编译期强约束")]), _vm._v(" "), _c('td', [_vm._v("运行时柔性适配")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("适合复杂对象关系")]), _vm._v(" "), _c('td', [_vm._v("适合轻量行为组合")])])])]), _vm._v(" "), _c('ol', {
    attrs: {
      "start": "2"
    }
  }, [_c('li', [_c('strong', [_c('code', [_vm._v("Go")]), _vm._v(" 接口的精髓")])])]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("\"如果它走起来像鸭子，叫起来像鸭子，那么它就是鸭子。\"")])]), _vm._v(" "), _c('p', [_vm._v("通过剥离类型与行为的强绑定，Go 用 "), _c('strong', [_vm._v("接口组合")]), _vm._v(" 替代 "), _c('strong', [_vm._v("继承链")]), _vm._v("，实现更高程度的模块化与可扩展性。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_2-工程实践中的差异"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-工程实践中的差异"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 工程实践中的差异")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-1-关键名词解释"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-1-关键名词解释"
    }
  }, [_vm._v("#")]), _vm._v(" 2.1 关键名词解释")]), _vm._v(" "), _c('ol', [_c('li', [_c('strong', [_vm._v("虚函数表（vtable）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_c('code', [_vm._v("C++")]), _vm._v(" 多肽基石")]), _vm._v("：编译器为含虚函数的类生成静态表，存储函数指针。在对象内存布局包含vptr指针指向该表。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("调用过程​")]), _vm._v("：obj->Draw() → 通过vptr找到vtable → 定位Draw()地址 → 跳转执行。")])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("接口表（itab）")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_c('code', [_vm._v("Go")]), _vm._v(" 动态派发核心")]), _vm._v("：运行时构建的结构体，包含接口类型、具体类型和方法地址映射。")]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("内存布局")]), _vm._v("​：接口变量 = 数据指针 + itab指针（如 var d Drawer = Circle{}）。")])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("非侵入式接口")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_c('code', [_vm._v("Go")]), _vm._v(" 核心设计")]), _vm._v("​：类型无需声明实现接口，只需拥有同名方法即自动满足契约（鸭子类型）。")]), _vm._v(" "), _c('li', [_vm._v("​"), _c('strong', [_vm._v("对比")]), _vm._v("​："), _c('code', [_vm._v("C++")]), _vm._v(" 需显式继承抽象基类（侵入式）。")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-2-接口设计-大而全-vs-小而精"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-2-接口设计-大而全-vs-小而精"
    }
  }, [_vm._v("#")]), _vm._v(" 2.2 接口设计：大而全 vs 小而精")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-3-复用机制-组合-vs-继承"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-3-复用机制-组合-vs-继承"
    }
  }, [_vm._v("#")]), _vm._v(" 2.3 复用机制：组合 VS 继承")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-4-多态实现-侵入式-vs-非侵入式"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-4-多态实现-侵入式-vs-非侵入式"
    }
  }, [_vm._v("#")]), _vm._v(" 2.4 多态实现：侵入式 VS 非侵入式")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-5-错误处理-异常-vs-显式返回"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-5-错误处理-异常-vs-显式返回"
    }
  }, [_vm._v("#")]), _vm._v(" 2.5 错误处理：异常 VS 显式返回")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-6-并发模型-线程锁-vs-通信顺序进程"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-6-并发模型-线程锁-vs-通信顺序进程"
    }
  }, [_vm._v("#")]), _vm._v(" 2.6 并发模型：线程锁 vs 通信顺序进程")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('LastUpdated')], 1);
};
var staticRenderFns = [];


/***/ })

}]);
//# sourceMappingURL=65.92a78b67.js.map