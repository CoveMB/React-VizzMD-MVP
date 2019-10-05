module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("VJxl"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _utils = __webpack_require__("z4BS");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__("bBV7");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("6Ndq");

var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VJxl":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("ZOIa");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("1qCV");

var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__("o42t");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./actions/actionsTypes.js
var actionsTypes = __webpack_require__("cwcR");

// CONCATENATED MODULE: ./reducers/patient_reducer.js

/* harmony default export */ var patient_reducer = (function (state = null, action) {
  switch (action.type) {
    case actionsTypes["e" /* PATIENT_ENTERED */]:
      {
        return action.payload;
      }

    default:
      {
        return state;
      }
  }
});
// CONCATENATED MODULE: ../data/muscles.js
const muscles = [
  { name: 'SCM', nerf: '', root: 'NC 11', forceRight: 0, forceLeft: 0, svgPathRight: "M578 486.5l1-5h2l26.5 17 48 118.5-1 5.5-15-3-6.5-3.5-6.5-6-36.5-88.5-12-35z", svgPathLeft: "M780 486l-1.006-5h-2.013l-26.671 17L702 616.5l1.006 5.5 15.097-3 6.542-3.5 6.542-6 36.736-88.5L780 486z", view: "front" },
  { name: 'Trap', nerf: '', root: 'NC 11, C3-4', forceRight: 0, forceLeft: 0, svgPathRight: "M582.5 531l-9-17.5L547 556l-9.5 13-19.5 16-36.5 22.5-2 4 23 14.5 12 5 12.5 2 12-8.5 52-68.5-8.5-25z", svgPathLeft: "M774.386 530.573L783.265 513l26.143 42.678 9.372 13.054 19.238 16.067 36.009 22.594L876 611.41l-22.691 14.561-11.838 5.021L829.139 633l-11.839-8.536-51.3-68.786 8.386-25.105z", view: "front" },
  { name: 'Lat', nerf: 'Thoracodorsal', root: 'C7', forceRight: 0, forceLeft: 0, svgPathRight: "M746 1055.5L829.5 912l13.5-4.5h13.5l28.5-3 24.5-3 18.5-7 31.5-17v20L948 992l-30 143.5-33 66.5-21-9-28-17-23.5-17.5-26-23-12-13.5-9.5-11.5-10-14.5-9-22v-18.5z", svgPathLeft: "M666 1055.73l-82.522-143.283-13.342-4.493h-13.342l-28.166-2.996-24.213-2.995-18.284-6.989L455 878v19.969l11.365 94.355 29.649 143.276 32.614 66.4 20.754-8.99 27.672-16.97 23.225-17.47 25.695-22.97 11.86-13.48 9.388-11.48 9.883-14.48L666 1074.2v-18.47z", view: "back" },
  { name: 'Pec', nerf: 'M&L pec nerve', root: 'C6-7-8', forceRight: 0, forceLeft: 0, svgPathRight: "M506 636.5l-19.5-8.5-21.5 48-32 79.5-41 62.5 73 31 13 10.5 28 30 23.5 10.5H576l24-4.5 45-40 13.5-25v-142l-13.5-21-22.5-15-22.5-6-94-10z", svgPathLeft: "M852 636.5l19.5-8.5 21.5 48 32 79.5 41 62.5-73 31-13 10.5-28 30-23.5 10.5H782l-24-4.5-45-40-13.5-25v-142l13.5-21 22.5-15 22.5-6 94-10z", view: "front" },
  { name: 'Deltoide', nerf: 'Ax nerve', root: 'C5-6', forceRight: 0, forceLeft: 0, svgPathRight: "M400.5 622c9.5-2.667 29.2-8.3 32-9.5l29 3.5 20 12.5-33.5 85-35 63.5-37.5 48.5L340 849l-8.5 13.5H328l-3-13.5-3-72v-18.5l3-18 6.5-27L340 687l18-33.5 17.5-17 25-14.5z", svgPathLeft: "M957 622.5c-9.5-2.667-29.2-8.3-32-9.5l-29 3.5-20 12.5 33.5 85 35 63.5L982 826l35.5 23.5 8.5 13.5h3.5l3-13.5 3-72V759l-3-18-6.5-27-8.5-26.5-18-33.5-17.5-17-25-14.5z", view: "front" },
  { name: 'Biceps', nerf: 'MSK', root: 'C5-6', forceRight: 0, forceLeft: 0, svgPathRight: "M391 853l6.5-28-17.5 3-72.5 77.5-24 71.5-13 67 6 41 21-16 14-16 17.5-33 62-167z", svgPathLeft: "M966.5 854l-6.5-28 17.5 3 72.5 77.5 24 71.5 13 67-6 41-21-16-14-16-17.5-33-62-167z", view: "front" },
  { name: 'Triceps', nerf: 'Radial', root: 'C7', forceRight: 0, forceLeft: 0, svgPathRight: "M1012 822l-41 45.5v16l25 102 42 93c15.33 16.17 46.56 53.08 49.5 48.5 4.5-7-5.83-15.17-4.5-19.5l-15-29-15.5-49v-39c1.67-14.167 5.9-43.1 9.5-45.5 3.6-2.4 19 29.5 30 45.5l-22-145-58-23.5z", svgPathLeft: "M402 822l41 45.442v15.979l-25 101.87-42 92.879c-15.333 16.15-46.558 53.01-49.5 48.44-4.5-6.99 5.833-15.15 4.5-19.47l15-28.97 15.5-48.93v-38.955c-1.667-14.149-5.9-43.045-9.5-45.442-3.6-2.397-19 29.462-30 45.442l22-144.815L402 822z", view: "back" },
  { name: 'PT', nerf: 'Median', root: 'C6-7', forceRight: 0, forceLeft: 0, svgPathRight: "M175 1328.5l-38.5 26.75-8.5 24.28 26.5 7.56 20.5 7.41 15.5 25.5H206l-4-40.47 14-33.53-14-15-27-2.5z", svgPathLeft: "M1182 1329l38.5 26.61 8.5 24.14-26.5 7.52-20.5 7.37-15.5 25.36H1151l4-40.25-14-33.35 14-14.91 27-2.49z", view: "front" },
  { name: 'Supi', nerf: 'Radial', root: 'C5-6', forceRight: 0, forceLeft: 0, svgPathRight: "M227.5 1097.5L257 1049l20.5 48.5h11l-37 57.5-33.5 49-17.5 36.5-29.5 87-26 20.5 13.5-35.5 23-77.5 15.5-55 17.5-48 13-34.5z", svgPathLeft: "M1131 1100.5l-29.5-48.5-20.5 48.5h-11l37 57.5 33.5 49 17.5 36.5 29.5 87 26 20.5-13.5-35.5-23-77.5-15.5-55-17.5-48-13-34.5z", view: "front" },
  { name: 'ECRL(B)', nerf: 'Radial', root: 'C6', forceRight: 0, forceLeft: 0, svgPathRight: "M1159.5 1125.49l2.5-23 11 23 12.5 32.5 20.5 65 25.5 85.5 20 62.5-3 6-20-34.5-12-27.5-13.5-42-11.5-30.5-10.5-24-8-18-6-24.5-7.5-50.5z", svgPathLeft: "M253 1125.95l-2.5-22.96-11 22.96-12.5 32.44-20.5 64.88-25.5 85.35-20 62.38 3 5.99 20-34.44 12-27.45 13.5-41.92 11.5-30.44 10.5-23.96 8-17.97 6-24.45 7.5-50.41z", view: "back" },
  { name: 'FCR', nerf: 'Median', root: 'C7', forceRight: 0, forceLeft: 0, svgPathRight: "M202 1328l129-214.5h5.5L325 1152l-108.5 196.5L202 1328z", svgPathLeft: "M1155 1330.5L1026 1116h-5.5l11.5 38.5 108.5 196.5 14.5-20.5z", view: "front" },
  { name: 'FDP', nerf: 'Med+Ulnar', root: 'C8', forceRight: 0, forceLeft: 0, svgPathRight: "M1110.5 1168.49l-67-78h-13l8.5 58c4.33 12 13 37 13 41s25.33 51.34 38 74.5l62.5 100.5 31 58.5v17l9 23.5 12.5 20 8.5-14.5 7.5-11.5 17.5-17.5-128-271.5z", svgPathLeft: "M303 1168l67-78h13l-8.5 58c-4.333 12-13 37-13 41s-25.333 51.33-38 74.5L261 1364l-31 58.5v17l-9 23.5-12.5 20-8.5-14.5-7.5-11.5-17.5-17.5L303 1168z", view: "back" },
  { name: 'EDC', nerf: 'Radial', root: 'C7', forceRight: 0, forceLeft: 0, svgPathRight: "M1125 1079.49l6-28 15 17.5 9.5 26.5 4 38c3.17 19.5 9.5 59 9.5 61s10.67 25.5 16 37l23 73.5 30 64 28.5 50.5 6.5 10.5-25 5-6-5-67-125-44-103.5-6-68v-54z", svgPathLeft: "M290 1078.96l-6-27.97-15 17.48-9.5 26.46-4 37.96c-3.167 19.47-9.5 58.92-9.5 60.92 0 1.99-10.667 25.46-16 36.95l-23 73.4-30 63.92-28.5 50.43L142 1429l25 4.99 6-4.99 67-124.84 44-103.36 6-67.91v-53.93z", view: "back" },
  { name: 'FDI', nerf: 'Ulnar', root: 'C8-T1', forceRight: 0, forceLeft: 0, svgPathRight: "M263 1155.5l25-35.5 4 9v15.5l-4 22-21.5 48-23.5 46-19.5 29-17.5 27-7 14.5-26-3.5v-5l8.5-20 24.5-61 10.5-18 13.5-23 33-45z", svgPathLeft: "M1095 1153.5l-25-35.5-4 9v15.5l4 22 21.5 48 23.5 46 19.5 29 17.5 27 7 14.5 26-3.5v-5l-8.5-20-24.5-61-10.5-18-13.5-23-33-45z", view: "front" },
  { name: 'APB', nerf: 'Med Nerve', root: 'C8-T1', forceRight: 0, forceLeft: 0, svgPathRight: "M53.5 1420c20.333-13 62.2-39.6 67-42l23.5 7.5-8 11-4.5 23.5-15.5 22.5-42.5 7.5-32 4.5L10 1461l-6.5-6.5 6.5-12 43.5-22.5z", svgPathLeft: "M1303.5 1421c-20.33-13-62.2-39.6-67-42l-23.5 7.5 8 11 4.5 23.5 15.5 22.5 42.5 7.5 32 4.5 31.5 6.5 7-11-7-7.5-43.5-22.5z", view: "front" },
  { name: 'Psoas', nerf: 'Lx plexus & femoral', root: 'Lx plexus, L2', forceLeft: 0, forceRight: 0, svgPathRight: "M616 1171l61.5-28.5v76c-26.975 20.01-40.965 34.72-62 73-9.728 28.39-19.728 59.09-19 79 .728 19.91-33.291 78.72-34 73l-22 51-5-6.5 9-73c12.843-20.48 20.482-31.37 28-59 .65-11.83 2.823-34.79 8-87.5 7.09-48.45 14.308-70.65 35.5-97.5z", svgPathLeft: "M740.5 1171.5L679 1143v76c26.975 20.01 40.965 34.72 62 73 9.728 28.39 19.728 59.09 19 79-.728 19.91 33.291 78.72 34 73l22 51 5-6.5-9-73c-12.843-20.48-20.482-31.37-28-59-.65-11.83-2.823-34.79-8-87.5-7.09-48.45-14.308-70.65-35.5-97.5z", view: "front" },
  { name: 'Add long', nerf: 'Obt nerve', root: 'L2-3', forceRight: 0, forceLeft: 0, svgPathRight: "M565 1558.5l33.5-75 33.5 34v16.5l-13 79-25 73-29-94v-33.5z", svgPathLeft: "M793 1558.19L759.5 1483l-33.5 34.08v16.54l13 79.2 25 73.18 29-94.23v-33.58z", view: "front" },
  { name: 'Quad', nerf: 'Femoral nerve', root: 'L3-4', forceRight: 0, forceLeft: 0, svgPathRight: "M441.5 1506.5L478 1409l10 20c1 23.17 4.3 72.3 9.5 83.5 5.2 11.2 16.5 64.33 21.5 89.5l37.5 85.5c6.167 21 19.2 64.2 22 69 2.8 4.8 11.5 22 15.5 30v121L571 2017l-20 15.5-32 8-5 33.5-19.5 47.5-24.5-34-13.5-13.5-7.5-33.5V2026l-7.5-32-19-91-10.5-116.5-9-99 9-85.5 29.5-95.5z", svgPathLeft: "M918.5 1506.5L882 1409l-10 20c-1 23.17-4.3 72.3-9.5 83.5-5.2 11.2-16.5 64.33-21.5 89.5l-37.5 85.5c-6.167 21-19.2 64.2-22 69-2.8 4.8-11.5 22-15.5 30v121l23 109.5 20 15.5 32 8 5 33.5 19.5 46 24.5-34 13.5-12 7.5-33.5V2026l7.5-32 19-91 10.5-116.5 9-99-9-85.5-29.5-95.5z", view: "front" },
  { name: 'Tib ant', nerf: 'Deep per nerve', root: 'L5', forceRight: 0, forceLeft: 0, svgPathRight: "M443.5 2184l-11.5-15-26 113.5v55l4.5 55 10.5 79 7.5 4.5 2.5-17.5 5.5-77 5-69 2-128.5z", svgPathLeft: "M915 2184l11.5-15 26 113.5v55l-4.5 55-10.5 79-7.5 4.5-2.5-17.5-5.5-77-5-69-2-128.5z", view: "front" },
  { name: 'PL', nerf: 'Sup per nerve', root: 'L5', forceRight: 0, forceLeft: 0, svgPathRight: "M946 2191.5V2158l3.5-6 6 6 11.5 11 20 12 10.5 6.5 5.5 18.5 11 54.5 9 54.5-2.5 55.5v20l2.5 34-4.5 35.5-4.5 27-5.5 25.5-4 35.5-3.5 46v86l-3.5 11.5-10.5 7.5-8 7v-53.5l4-80.5v-66l-4-46-3.5-27-8.5-32.5v-30l-4.5-47.5-4.5-48-6-38-6-45.5z", svgPathLeft: "M468 2196.5V2163l-3.5-6-6 6-11.5 11-20 12-10.5 6.5-5.5 18.5-11 54.5-9 54.5 2.5 55.5v20l-2.5 34 4.5 35.5 4.5 27 5.5 25.5 4 35.5 3.5 46v86l3.5 11.5 10.5 7.5 8 7v-53.5l-4-80.5v-66l4-46 3.5-27 8.5-32.5v-30l4.5-47.5 4.5-48 6-38 6-45.5z", view: "back" },
  { name: 'Tib post', nerf: 'Tibial nerve', root: 'L5', forceRight: 0, forceLeft: 0, svgPathRight: "M403.5 2167l-9.5-12-6 16-4.5 62.5L373 2298v65.5l10.5 65c2.833 18.83 8.8 57.4 10 61 1.5 4.5 7 61.5 7 65.5 0 3.2 2 17.33 3 24l9 20.5 11 30.5v-60l-6.5-68-10.5-70-6-55.5-2-22.5v-56l2-26.5 3-19.5 9-34v-17l-4-16-5-18z", svgPathLeft: "M954 2166l9.5-12 6 16 4.5 62.5 10.5 64.5v65.5l-10.5 65c-2.833 18.83-8.8 57.4-10 61-1.5 4.5-7 61.5-7 65.5 0 3.2-2 17.33-3 24l-9 20.5-11 30.5v-60l6.5-68 10.5-70 6-55.5 2-22.5v-56l-2-26.5-3-19.5-9-34v-17l4-16 5-18z", view: "front" },
  { name: 'Ischios', nerf: 'Static nerve', root: 'L5-S1', forceRight: 0, forceLeft: 0, svgPathRight: "M901 1679.5l-83.5-46.5-4.5 3c-1.333 12.83-4 39.5-4 43.5s-3 20.33-4.5 28l4.5 82-4.5 46 4.5 81.5c3.5 18.5 10.7 56.6 11.5 61 1 5.5 8 64 8 66.5 0 2 9.333 40.5 14 59.5l15.5 64.5 5.5 6.5 18.5-34 16.5-41.5 4-37 11 14.5 18 27 29 47 13.5 17.5 23.5 16.5-8.5-53-9-69.5-10.5-43.5-25-86-35-180.5-8.5-73z", svgPathLeft: "M512.5 1679.5L596 1633l4.5 3c1.333 12.83 4 39.5 4 43.5s3 20.33 4.5 28l-4.5 82 4.5 46-4.5 81.5c-3.5 18.5-10.7 56.6-11.5 61-1 5.5-8 64-8 66.5 0 2-9.333 40.5-14 59.5l-15.5 64.5-5.5 6.5-18.5-34-16.5-41.5-4-37-11 14.5-18 27-29 47-13.5 17.5L416 2185l8.5-53 9-69.5L444 2019l25-86 35-180.5 8.5-73z", view: "back" },
  { name: 'Glut med', nerf: 'Slup glut nerve', root: 'L5', forceRight: 0, forceLeft: 0, svgPathRight: "M835 1233.5l-37 13-5.5 15.5-5 41.5H829l25.5 4.5 25 10.5L906 1338l56 59.5V1380l-22-76.5-27-34-48.5-23-29.5-13z", svgPathLeft: "M578 1233l37 13 5.5 15.5 5 41.5H584l-25.5 4.5-25 10.5-26.5 19.5-56 59.5v-17.5l22-76.5 27-34 48.5-23 29.5-13z", view: "back" },
  { name: 'Gastrocs', nerf: 'Tibial nerve', root: 'S1', forceRight: 0, forceLeft: 0, svgPathRight: "M935.5 2177l-39.5-54.5-11 20c-4.167 7.33-12.6 22.3-13 23.5-.4 1.2-10.5 21.5-15.5 31.5l5 81.5 2.5 37.5 13 52.5 22 46 16 19 4.5 19 17.5 69.5 6.5 29.5c.833 9.5 2.5 29.9 2.5 35.5 0 5.6 1 19 1.5 25v58L946 2700l-5 33-2.5 22.5-3.5 20-4 12.5-3 10.5v16l7 10.5c3.167 2 9.9 6 11.5 6 1.6 0 8.667 1.66 12 2.5h10c5.833-1.34 18-4.1 20-4.5 2-.4 6.5-2.84 8.5-4v-17.5l-11-28-6-24-2.5-33-1.5-28V2677l4-43v-123l-4-58-9.5-45-6.5-19.5v-36l-3.5-28-13-106.5-8-41z", svgPathLeft: "M477.5 2176.5L517 2122l11 20c4.167 7.33 12.6 22.3 13 23.5.4 1.2 10.5 21.5 15.5 31.5l-5 81.5-2.5 37.5-13 52.5-22 46-16 19-4.5 19L476 2522l-6.5 29.5c-.833 9.5-2.5 29.9-2.5 35.5 0 5.6-1 19-1.5 25v58l1.5 29.5 5 33 2.5 22.5 3.5 20 4 12.5 3 10.5v16l-7 10.5c-3.167 2-9.9 6-11.5 6-1.6 0-8.667 1.67-12 2.5h-10c-5.833-1.33-18-4.1-20-4.5-2-.4-6.5-2.83-8.5-4V2807l11-28 6-24 2.5-33 1.5-28v-17.5l-4-43v-123l4-58 9.5-45 6.5-19.5v-36l3.5-28 13-106.5 8-41z", view: "back" },
  { name: 'Glut max', nerf: 'Inf glut nerve', root: 'S1', forceRight: 0, forceLeft: 0, svgPathRight: "M762 1386l29-78h24.5l22 3 23 4 20.5 7.5 17.5 10.5 59 69.5v24L943 1456l-14 36v42l-4 74 4 79-121.5-70-50-42-18-32-8-43 8-44 11-24 11.5-46z", svgPathLeft: "M650.5 1386l-29-78H597l-22 3-23 4-20.5 7.5L514 1333l-59 69.5v24l14.5 29.5 14 36v42l4 74-4 79 121.5-70 50-42 18-32 8-43-8-44-11-24-11.5-46z", view: "back" },
];

/* harmony default export */ var data_muscles = (muscles);

// CONCATENATED MODULE: ./reducers/muscles_reducer.js


/* harmony default export */ var muscles_reducer = (function (state = data_muscles, action) {
  switch (action.type) {
    case actionsTypes["b" /* MUSCLE_FORCE_CHANGED */]:
      {
        return action.payload;
      }

    default:
      {
        return state;
      }
  }
});
// CONCATENATED MODULE: ./reducers/muscle_reducer.js

/* harmony default export */ var muscle_reducer = (function (state = null, action) {
  switch (action.type) {
    case actionsTypes["c" /* MUSCLE_SELECTED */]:
      {
        return action.payload;
      }

    default:
      {
        return state;
      }
  }
});
// CONCATENATED MODULE: ./reducers/body_reducer.js

/* harmony default export */ var body_reducer = (function (state = "front", action) {
  switch (action.type) {
    case actionsTypes["a" /* FLIP_BODY */]:
      {
        return action.payload;
      }

    default:
      {
        return state;
      }
  }
});
// CONCATENATED MODULE: ./reducers/page_load_reducer.js

/* harmony default export */ var page_load_reducer = (function (state = true, action) {
  switch (action.type) {
    case actionsTypes["d" /* PAGE_LOADED */]:
      {
        return action.payload;
      }

    default:
      {
        return state;
      }
  }
});
// CONCATENATED MODULE: ./reducers/index.js





 // State and reducers

const rootReducer = Object(external_redux_["combineReducers"])({
  firstPageLoad: page_load_reducer,
  patient: patient_reducer,
  muscles: muscles_reducer,
  selectedMuscle: muscle_reducer,
  body: body_reducer
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./store/makeStore.js



const makeStore = initialState => {
  return Object(external_redux_["createStore"])(reducers, initialState);
};

/* harmony default export */ var store_makeStore = (makeStore);
// CONCATENATED MODULE: ./pages/_app.jsx
var __jsx = external_react_default.a.createElement;






class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(Component, pageProps));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(store_makeStore)(_app_MyApp));

/***/ }),

/***/ "Z0wt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("ZOIa");

var _Object$assign = __webpack_require__("U8Yc");

var _Object$defineProperty = __webpack_require__("hHgk");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("Jxiz"));

const utils_1 = __webpack_require__("z4BS");

const rewrite_url_for_export_1 = __webpack_require__("Z0wt");

const route_matcher_1 = __webpack_require__("VOyh");

const route_regex_1 = __webpack_require__("BukW");

const is_dynamic_1 = __webpack_require__("BCwt");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("k3h2");

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hHgk"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("e4Qu");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cwcR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PATIENT_ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLIP_BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MUSCLE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MUSCLE_FORCE_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PAGE_LOADED; });
const PATIENT_ENTERED = 'PATIENT_ENTERED';
const FLIP_BODY = 'FLIP_BODY';
const MUSCLE_SELECTED = 'MUSCLE_SELECTED';
const MUSCLE_FORCE_CHANGED = 'MUSCLE_FORCE_CHANGED';
const PAGE_LOADED = "PAGE_LOADED";

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "e4Qu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hHgk");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k3h2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("tvLF");

var _Object$defineProperty = __webpack_require__("hHgk");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pzQc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("U8Yc");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("1qCV");

var _Object$defineProperty = __webpack_require__("hHgk");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ })

/******/ });