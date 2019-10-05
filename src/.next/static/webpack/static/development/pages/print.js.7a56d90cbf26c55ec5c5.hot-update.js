webpackHotUpdate("static/development/pages/print.js",{

/***/ "./containers/printElements/PrintPopUp.jsx":
/*!*************************************************!*\
  !*** ./containers/printElements/PrintPopUp.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-popup */ "../node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @typeform/embed */ "../node_modules/@typeform/embed/lib/api.js");
/* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_typeform_embed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HomeBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/HomeBtn */ "./components/HomeBtn.jsx");
/* harmony import */ var _components_BrandWhite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BrandWhite */ "./components/BrandWhite.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/printElements/PrintPopUp.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var backHome = function backHome() {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
};

var handleReview = function handleReview(event) {
  event.preventDefault();
  var popUp = _typeform_embed__WEBPACK_IMPORTED_MODULE_2__["makePopup"]('https://vizz.typeform.com/to/IhOm3d', {
    mode: 'popup',
    autoClose: 3000,
    hideHeaders: true,
    hideFooters: true,
    onSubmit: function onSubmit() {
      setTimeout(function () {
        popUp.close();
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
      }, 1000);
    }
  });
  popUp.open();
};

var PrintPopUp = function PrintPopUp() {
  return __jsx("div", {
    id: "not-to-be-printed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modal: true,
    position: "right center",
    open: true,
    onClose: backHome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "gradient-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h5", {
    className: "gradient-square-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Thanks for using"), __jsx(_components_BrandWhite__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx("h2", {
    className: "print-pop-up-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Printing..."), __jsx("div", {
    className: "print-pop-up-btns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_HomeBtn__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("button", {
    onClick: handleReview,
    className: "btn btn-secondary btn-pop-up-review",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Tell us what you think ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowCircleLeft"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PrintPopUp);

/***/ })

})
//# sourceMappingURL=print.js.7a56d90cbf26c55ec5c5.hot-update.js.map