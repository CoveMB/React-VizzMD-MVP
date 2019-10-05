webpackHotUpdate("static/development/pages/print.js",{

/***/ "./containers/printElements/ComponentToPrint.jsx":
/*!*******************************************************!*\
  !*** ./containers/printElements/ComponentToPrint.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PatientRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PatientRef */ "./containers/PatientRef.jsx");
/* harmony import */ var _components_Date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Date */ "./components/Date.jsx");
/* harmony import */ var _components_Brand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Brand */ "./components/Brand.jsx");
/* harmony import */ var _MusclesTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MusclesTable */ "./containers/MusclesTable.jsx");
/* harmony import */ var _body_FaceBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../body/FaceBody */ "./containers/body/FaceBody.jsx");
/* harmony import */ var _PrintPopUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrintPopUp */ "./containers/printElements/PrintPopUp.jsx");





var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/printElements/ComponentToPrint.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var ComponentToPrint =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ComponentToPrint, _Component);

  function ComponentToPrint() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ComponentToPrint);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ComponentToPrint).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ComponentToPrint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.print();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_PrintPopUp__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx("div", {
        id: "printComponent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        className: "print-container print-brand-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("div", {
        className: "print-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(_components_Brand__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx("div", {
        className: "print-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("div", {
        className: "print-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(_components_Date__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx(_PatientRef__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })))), __jsx("div", {
        className: "print-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("div", {
        className: "print-body-part",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(_body_FaceBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
        frontBodyViewbox: "-18 0 700 2830",
        bodySide: "front",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), __jsx("div", {
        className: "print-body-part",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(_body_FaceBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
        backBodyViewBox: "717 0 700 2840",
        bodySide: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), __jsx("div", {
        className: "print-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(_MusclesTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "print-body-part",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_body_FaceBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
        backBodyViewBox: "-18 0 700 2840",
        bodySide: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), __jsx("div", {
        className: "print-body-part",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_body_FaceBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
        frontBodyViewbox: "675 0 700 2830",
        bodySide: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })))));
    }
  }]);

  return ComponentToPrint;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ComponentToPrint);

/***/ })

})
//# sourceMappingURL=print.js.70580ef02b70cb199388.hot-update.js.map