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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "../node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

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

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

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

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
/*!*********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/mitt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "../node_modules/next/dist/next-server/lib/router-context.js":
/*!*******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router-context.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
/*!******************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/router.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "../node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "../node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "../node_modules/next/dist/next-server/lib/utils.js":
/*!**********************************************************!*\
  !*** ../node_modules/next/dist/next-server/lib/utils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!******************************************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../node_modules/next/node_modules/react-is/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/next/node_modules/react-is/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./actions/actionsTypes.js":
/*!*********************************!*\
  !*** ./actions/actionsTypes.js ***!
  \*********************************/
/*! exports provided: PATIENT_ENTERED, FLIP_BODY, MUSCLE_SELECTED, MUSCLE_FORCE_CHANGED, PAGE_LOADED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATIENT_ENTERED", function() { return PATIENT_ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_BODY", function() { return FLIP_BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSCLE_SELECTED", function() { return MUSCLE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSCLE_FORCE_CHANGED", function() { return MUSCLE_FORCE_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_LOADED", function() { return PAGE_LOADED; });
const PATIENT_ENTERED = 'PATIENT_ENTERED';
const FLIP_BODY = 'FLIP_BODY';
const MUSCLE_SELECTED = 'MUSCLE_SELECTED';
const MUSCLE_FORCE_CHANGED = 'MUSCLE_FORCE_CHANGED';
const PAGE_LOADED = "PAGE_LOADED";

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: enterPatient, flipBody, selectMuscle, changeMuscleForce, pageLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterPatient", function() { return enterPatient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipBody", function() { return flipBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMuscle", function() { return selectMuscle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMuscleForce", function() { return changeMuscleForce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actionsTypes */ "./actions/actionsTypes.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


function enterPatient(patient) {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_7__["PATIENT_ENTERED"],
    payload: patient
  };
}
function flipBody(face) {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_7__["FLIP_BODY"],
    payload: face
  };
}
function selectMuscle(muscleName) {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_7__["MUSCLE_SELECTED"],
    payload: muscleName
  };
}
function changeMuscleForce(force, muscleInfo, musclesState) {
  const [name, side] = muscleInfo.split("-");
  const newMuscles = musclesState.map(muscleObj => {
    if (muscleObj.name === name) {
      if (side === "right") {
        return _objectSpread({}, muscleObj, {
          forceRight: Number(force)
        });
      }

      if (side === "left") {
        return _objectSpread({}, muscleObj, {
          forceLeft: Number(force)
        });
      }
    }

    return muscleObj;
  });
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_7__["MUSCLE_FORCE_CHANGED"],
    payload: newMuscles
  };
}
function pageLoaded() {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_7__["PAGE_LOADED"],
    payload: false
  };
}

/***/ }),

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_PatientPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/PatientPopUp */ "./containers/PatientPopUp.jsx");
/* harmony import */ var _containers_MusclePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/MusclePopUp */ "./containers/MusclePopUp.jsx");
/* harmony import */ var _containers_PatientRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/PatientRef */ "./containers/PatientRef.jsx");
/* harmony import */ var _containers_body_BodySelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/body/BodySelect */ "./containers/body/BodySelect.jsx");
/* harmony import */ var _components_Scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Scale */ "./components/Scale.jsx");
/* harmony import */ var _containers_body_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/body/Body */ "./containers/body/Body.jsx");
/* harmony import */ var _components_Brand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Brand */ "./components/Brand.jsx");
/* harmony import */ var _containers_printElements_PrintBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/printElements/PrintBtn */ "./containers/printElements/PrintBtn.jsx");
/* harmony import */ var _components_Reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Reset */ "./components/Reset.jsx");
/* harmony import */ var _containers_MusclesTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/MusclesTable */ "./containers/MusclesTable.jsx");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/components/App.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const App = () => {
  return __jsx("div", {
    className: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "top-actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_components_Brand__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_containers_PatientPopUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_containers_body_BodySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_components_Reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_containers_printElements_PrintBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx(_containers_MusclePopUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_containers_PatientRef__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("div", {
    className: "scale-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_components_Scale__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_containers_body_Body__WEBPACK_IMPORTED_MODULE_6__["default"], {
    frontBodyViewbox: "-200 0 1700 2830",
    backBodyViewBox: "-200 0 1700 2840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx(_containers_MusclesTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Brand.jsx":
/*!******************************!*\
  !*** ./components/Brand.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/components/Brand.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import logo from '../../static/logo.png';

const Brand = () => {
  return __jsx("img", {
    className: "brand",
    src: "../../static/images/logo.png",
    alt: "VizzMD logo",
    height: "50",
    width: "140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ "./components/Reset.jsx":
/*!******************************!*\
  !*** ./components/Reset.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/components/Reset.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Reset = () => {
  const reload = () => {
    window.location.reload();
  };

  return __jsx("button", {
    className: "btn btn-danger reset",
    onClick: reload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Next patient ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSyncAlt"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./components/Scale.jsx":
/*!******************************!*\
  !*** ./components/Scale.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/components/Scale.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Scale = () => {
  return __jsx("div", {
    className: "scale",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h2", {
    className: "zero-force",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "0"), __jsx("h2", {
    className: "one-force",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "1"), __jsx("h2", {
    className: "two-force",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "2"), __jsx("h2", {
    className: "three-force",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "3"), __jsx("h2", {
    className: "four-force",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "4"), __jsx("h2", {
    className: "five-force",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "5"));
};

/* harmony default export */ __webpack_exports__["default"] = (Scale);

/***/ }),

/***/ "./containers/MusclePopUp.jsx":
/*!************************************!*\
  !*** ./containers/MusclePopUp.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/index */ "./actions/index.js");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/MusclePopUp.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class MusclePopUp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.closeModal = () => {
      this.props.selectMuscle(null);
    }, this.isMuscleSelected = () => {
      if (this.props.selectedMuscle) {
        return true;
      }

      return false;
    }, this.handleForceOnMuscle = event => {
      event.preventDefault();
      this.props.changeMuscleForce(event.target.innerText, this.props.selectedMuscle, this.props.muscles);
      this.props.selectMuscle(null);
    }, _temp;
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.selectedMuscle !== this.props.selectedMuscle;
  }

  render() {
    return __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_3___default.a, {
      modal: true,
      position: "right center",
      open: this.isMuscleSelected(),
      onClose: this.closeModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "scale-muscle-popup",
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
    }, this.props.selectedMuscle)), __jsx("button", {
      onClick: this.handleForceOnMuscle,
      className: "zero-force",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "0"), __jsx("button", {
      onClick: this.handleForceOnMuscle,
      className: "one-force",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "1"), __jsx("button", {
      onClick: this.handleForceOnMuscle,
      className: "two-force",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "2"), __jsx("button", {
      onClick: this.handleForceOnMuscle,
      className: "three-force",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "3"), __jsx("button", {
      onClick: this.handleForceOnMuscle,
      className: "four-force",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "4"), __jsx("button", {
      onClick: this.handleForceOnMuscle,
      className: "five-force",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "5")));
  }

}

function mapStateToProps(state) {
  return {
    selectedMuscle: state.selectedMuscle,
    muscles: state.muscles
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    selectMuscle: _actions_index__WEBPACK_IMPORTED_MODULE_4__["selectMuscle"],
    changeMuscleForce: _actions_index__WEBPACK_IMPORTED_MODULE_4__["changeMuscleForce"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MusclePopUp));

/***/ }),

/***/ "./containers/MusclesTable.jsx":
/*!*************************************!*\
  !*** ./containers/MusclesTable.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableRow */ "./containers/TableRow.jsx");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/MusclesTable.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class MusclesTabe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.buildTable = () => {
      return this.props.muscles.map(muscleObj => {
        return __jsx(_TableRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
          rightMuscleId: `${muscleObj.name}-right`,
          leftMuscleId: `${muscleObj.name}-left`,
          name: muscleObj.name,
          rightForce: muscleObj.forceRight,
          nerf: muscleObj.nerf,
          root: muscleObj.root,
          leftForce: muscleObj.forceLeft,
          key: muscleObj.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      });
    }, _temp;
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.muscles !== this.props.muscles;
  }

  render() {
    return __jsx("table", {
      className: "table table-striped table-bordered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("thead", {
      className: "thead-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("th", {
      scope: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Right"), __jsx("th", {
      scope: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Muscle"), __jsx("th", {
      scope: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Nerf"), __jsx("th", {
      scope: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Root"), __jsx("th", {
      scope: "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Left"))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, this.buildTable()));
  }

}

function mapStateToProps(state) {
  return {
    muscles: state.muscles
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MusclesTabe));

/***/ }),

/***/ "./containers/PatientPopUp.jsx":
/*!*************************************!*\
  !*** ./containers/PatientPopUp.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/index */ "./actions/index.js");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/PatientPopUp.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class PatientPopUp extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    this.openModal = () => {
      this.setState({
        open: true
      });
    };

    this.closeModal = () => {
      this.setState({
        open: false
      });
    };

    this.handleChange = event => {
      this.setState({
        patient: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      this.props.enterPatient(this.state.patient);
      this.setState({
        patient: "",
        open: false
      });
    };

    this.focusInput = () => {
      setTimeout(() => {
        if (this.patientRefInput) {
          this.patientRefInput.focus();
        }
      }, 100);
    };

    this.state = {
      patient: '',
      open: false
    };
  }

  componentDidMount() {
    if (this.props.firstPageLoad) {
      this.openModal();
      this.props.pageLoaded();
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-blue",
      onClick: this.openModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Change reference ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx(reactjs_popup__WEBPACK_IMPORTED_MODULE_3___default.a, {
      modal: true,
      className: "pop-up-print",
      position: "right center",
      open: this.state.open,
      onClose: this.closeModal,
      onOpen: this.focusInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: "gradient-square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("h5", {
      className: "gradient-square-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "What is the patient's reference?")), __jsx("input", {
      className: "form-control patient-ref-input",
      type: "text",
      id: "ref",
      ref: el => {
        this.patientRefInput = el;
      },
      name: "ref",
      required: true,
      size: "15",
      value: this.state.patient,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx("button", {
      className: "btn btn-blue btn-pop-up-ok float-right",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Ok"))));
  }

}

function mapStateToProps(state) {
  return {
    firstPageLoad: state.firstPageLoad
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    enterPatient: _actions_index__WEBPACK_IMPORTED_MODULE_6__["enterPatient"],
    pageLoaded: _actions_index__WEBPACK_IMPORTED_MODULE_6__["pageLoaded"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PatientPopUp));

/***/ }),

/***/ "./containers/PatientRef.jsx":
/*!***********************************!*\
  !*** ./containers/PatientRef.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/PatientRef.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PatientRef extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return __jsx("h2", {
      className: "patient-ref",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Patient: ", this.props.patient);
  }

}

function mapStateToProps(state) {
  return {
    patient: state.patient
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(PatientRef));

/***/ }),

/***/ "./containers/TableRow.jsx":
/*!*********************************!*\
  !*** ./containers/TableRow.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./actions/index.js");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/TableRow.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class TableRow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClickMuscle = event => {
      event.persist();
      this.props.selectMuscle(event.target.getAttribute('id'));
    }, this.btnForceClass = force => {
      const classes = "btn btn-force";

      switch (force) {
        case 1:
          {
            return `${classes} one-force`;
          }

        case 2:
          {
            return `${classes} two-force`;
          }

        case 3:
          {
            return `${classes} three-force`;
          }

        case 4:
          {
            return `${classes} four-force`;
          }

        case 5:
          {
            return `${classes} five-force`;
          }

        default:
          {
            return classes;
          }
      }
    }, _temp;
  }

  shouldComponentUpdate(nextProps) {
    return this.props.rightForce !== nextProps.rightForce || this.props.leftForce !== nextProps.leftForce;
  }

  render() {
    const {
      name,
      nerf,
      root,
      rightForce,
      rightMuscleId,
      leftForce,
      leftMuscleId
    } = this.props;
    return __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("button", {
      className: this.btnForceClass(rightForce),
      id: rightMuscleId,
      onClick: this.handleClickMuscle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, rightForce, __jsx("i", {
      className: "arrow down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }))), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, name), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, nerf), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, root), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("button", {
      className: this.btnForceClass(leftForce),
      id: leftMuscleId,
      onClick: this.handleClickMuscle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, leftForce, __jsx("i", {
      className: "arrow down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }))));
  }

}

function mapStateToProps(state) {
  return {
    selectedMuscle: state.selectedMuscle
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    selectMuscle: _actions_index__WEBPACK_IMPORTED_MODULE_3__["selectMuscle"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(TableRow));

/***/ }),

/***/ "./containers/body/Body.jsx":
/*!**********************************!*\
  !*** ./containers/body/Body.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FaceBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaceBody */ "./containers/body/FaceBody.jsx");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/body/Body.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import FrontBody from './FrontBody';



class Body extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.bodyParts = () => {
      if (this.props.body === "back") {
        return __jsx(_FaceBody__WEBPACK_IMPORTED_MODULE_2__["default"], {
          svgViewBox: this.props.backBodyViewBox,
          bodySide: "back",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      }

      return __jsx(_FaceBody__WEBPACK_IMPORTED_MODULE_2__["default"], {
        svgViewBox: this.props.frontBodyViewbox,
        bodySide: "front",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }, _temp;
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.body !== this.props.body;
  }

  render() {
    return __jsx("div", {
      className: "svg-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, this.bodyParts());
  }

}

function mapStateToProps(state) {
  return {
    body: state.body
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Body));

/***/ }),

/***/ "./containers/body/BodyMuscle.jsx":
/*!****************************************!*\
  !*** ./containers/body/BodyMuscle.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/index */ "./actions/index.js");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/body/BodyMuscle.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class BodyMusclesCouple extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.muscleClass = () => {
      switch (this.props.muscleForce) {
        case 1:
          return "one-force";

        case 2:
          return "two-force";

        case 3:
          return "three-force";

        case 4:
          return "four-force";

        case 5:
          return "five-force";

        default:
          return "zero-force";
      }
    }, this.handleClickMuscle = event => {
      event.persist();
      this.props.selectMuscle(event.target.getAttribute('id'));
    }, _temp;
  }

  shouldComponentUpdate(nextProps) {
    return this.props.muscleForce !== nextProps.muscleForce;
  }

  render() {
    return __jsx("path", {
      id: this.props.muscleId,
      className: this.muscleClass(),
      ref: muscleSVG => {
        this.muscleSVG = muscleSVG;
      },
      fill: " #FFFFFF",
      onClick: this.handleClickMuscle,
      d: this.props.muscleSVGPath,
      stroke: "#CD0F0F",
      strokeWidth: "7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
  }

}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    selectMuscle: _actions_index__WEBPACK_IMPORTED_MODULE_3__["selectMuscle"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(BodyMusclesCouple));

/***/ }),

/***/ "./containers/body/BodyMuscleCouple.jsx":
/*!**********************************************!*\
  !*** ./containers/body/BodyMuscleCouple.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BodyMuscle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BodyMuscle */ "./containers/body/BodyMuscle.jsx");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/body/BodyMuscleCouple.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class BodyMusclesCouple extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  shouldComponentUpdate(nextProps) {
    return this.props.muscleRightForce !== nextProps.muscleRightForce || this.props.muscleLeftForce !== nextProps.muscleLeftForce;
  }

  render() {
    const {
      muscleName,
      muscleRightSVGPath,
      muscleRightForce,
      muscleLeftSVGPath,
      muscleLeftForce
    } = this.props;
    return [__jsx(_BodyMuscle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: `${muscleName}-right`,
      muscleId: `${muscleName}-right`,
      muscleSVGPath: muscleRightSVGPath,
      muscleForce: muscleRightForce,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx(_BodyMuscle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: `${muscleName}-left`,
      muscleId: `${muscleName}-left`,
      muscleSVGPath: muscleLeftSVGPath,
      muscleForce: muscleLeftForce,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })];
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BodyMusclesCouple);

/***/ }),

/***/ "./containers/body/BodySelect.jsx":
/*!****************************************!*\
  !*** ./containers/body/BodySelect.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/index */ "./actions/index.js");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/body/BodySelect.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class BodySelect extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleBodyFlip = event => {
      if (event.target.innerText === " Back") {
        this.props.flipBody("back");
      }

      if (event.target.innerText === "Front ") {
        this.props.flipBody("front");
      }
    }, _temp;
  }

  render() {
    return __jsx("div", {
      className: "body-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-blue",
      onClick: this.handleBodyFlip,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Front ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRedo"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), __jsx("button", {
      className: "btn btn-blue",
      onClick: this.handleBodyFlip,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUndo"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), " Back"));
  }

}

function mapStateToProps(state) {
  return {
    body: state.body
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    flipBody: _actions_index__WEBPACK_IMPORTED_MODULE_5__["flipBody"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(BodySelect));

/***/ }),

/***/ "./containers/body/FaceBody.jsx":
/*!**************************************!*\
  !*** ./containers/body/FaceBody.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BodyMuscleCouple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BodyMuscleCouple */ "./containers/body/BodyMuscleCouple.jsx");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/index */ "./actions/index.js");
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/body/FaceBody.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class BackBody extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.buildBodyMuscleSVG = () => {
      const backMuscles = this.props.muscles.filter(muscle => muscle.view === this.props.bodySide);
      return backMuscles.map(muscle => {
        return __jsx(_BodyMuscleCouple__WEBPACK_IMPORTED_MODULE_3__["default"], {
          muscleName: muscle.name,
          key: muscle.name,
          muscleRightSVGPath: muscle.svgPathRight,
          muscleLeftSVGPath: muscle.svgPathLeft,
          muscleRightForce: muscle.forceRight,
          muscleLeftForce: muscle.forceLeft,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        });
      });
    }, _temp;
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.bodySide !== this.props.bodySide || nextProps.muscles !== this.props.muscles;
  }

  buildBodyFace() {
    if (this.props.bodySide === "back") {
      return __jsx("div", {
        className: "back-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("svg", {
        width: "100%",
        viewBox: this.props.svgViewBox,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("g", {
        id: "back",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("path", {
        id: "Vector",
        d: "M679.428 1.892c-21.3 1.8-40.4 7-61.8 16.8-24.2 11-42.3 23.1-58.1 39-20.6 20.8-32.4 42.1-39.8 72.1-4.7 19.4-6.2 31.5-6.8 56.2-.8 31.6 1.9 57.2 10.3 98 1.9 9.1 3.4 17.6 3.4 18.7 0 3.5-2.2 7.1-5.6 9.2-9.2 5.6-13 39.5-7 62.2 2.9 11.2 7.5 22.4 13.7 33.4 10.3 18 18 19.7 32.7 7.2 4-3.4 7.4-6 7.6-5.8.2.2 1.2 4.9 2.1 10.3 1.6 8.6 1.7 13.3 1.1 34.6-.6 20.8-.4 25.9.9 32.6 2.2 10.5 6.3 20.5 13 31.8 6.4 10.6 6.9 13.9 2.8 17.8-3.7 3.4-42.7 23.7-112.8 58.4-62.2 30.8-75.2 38.4-89.5 52.1-4.6 4.3-10.2 10.6-12.6 13.9-11.7 16.4-23.7 50.9-29 83.4-1.3 8.1-1.8 18.2-2 44.3-.3 37-.4 37.8-6.4 46.7-14.9 22.1-27.9 50.8-35.6 78.8-6 21.9-8.8 37.6-13.4 73.7-2.9 22.298-10 46.698-19.1 64.798-2.8 5.5-9.2 16.6-14.2 24.6-17.7 28.3-34 63.7-45.5 99.1-4.6 14.2-26.5 92.1-53.7 191.5-5.9 21.4-11.9 41.4-13.3 44.3-4 8.2-10.8 14.5-21 19.2-19.8 9.4-27.1 13.4-34.9 19.3-4.5 3.4-13 9.9-19 14.5-14.5 11.1-23.2 15.4-39.4 19.7-22.5 6-28.5 10.2-26 18.4 1.3 4.6 8.2 11.8 13.5 14.2 5.7 2.6 14.4 2.4 30-.6 7.1-1.4 13.2-2.3 13.4-2 .3.2-10.2 20.2-23.2 44.4-18.9 35-23.8 44.9-24.3 48.8-1 9 3.9 14.3 13.2 14.3 6.1 0 9.1-1.7 15.5-8.7 4.8-5.2 33.6-43 35.8-46.9.6-1.1 1.4-1.4 2.4-.8 1.4.8 1.3 1.9-.8 8.9-2.9 9.7-5.1 14.3-15 31-8.9 15.1-14.9 28-19.4 42-4.3 13.5-4.8 19-2.2 24.1 3 5.9 5.7 7.9 10.7 7.8 7.4-.2 12.2-3.7 19.8-14.9 8.7-12.6 16-27.5 29-58.8 5.7-13.7 10.8-24.8 11.3-24.7 1.4.1 2.5 5.2 1.8 8.5-.4 1.6-2.8 9.7-5.4 18-5 15.5-9.8 31.8-13.1 44-1.1 4.1-1.9 10.4-1.9 15.3 0 8.2 0 8.2 3.3 10.3 2.4 1.5 4.4 1.9 8.2 1.6 4.4-.4 5.4-1 9.6-5.6 2.8-3 6.9-9.4 10.1-15.8 13.4-27.1 37.3-72.2 37.9-71.5.3.4-1.3 8.6-3.7 18.2-5.3 21-9.4 40.9-9.4 45.3 0 3.8 3 9 6.5 11.3 4.5 3 16.3-.5 19.8-5.9.9-1.4 2.8-6.7 4.2-11.8 6.5-23 19.1-64.9 24.5-81.4 8.1-24.7 10.8-36 12.1-50 1.9-20.5 3.2-25.6 9.3-36.4 8.5-14.9 9.6-18.9 10.6-38.1.8-16.6 2-22.3 6.4-30.8.9-1.7 8.5-14.3 16.9-27.9 28-45.3 75-122.6 82.5-135.8 18.3-32.1 30.7-61.9 38.7-93 4-15.6 6-27.2 8-46.4 2.5-23.8 4.8-31.5 21.5-72.1 16.1-38.998 20.5-52.498 31.9-96.898 3.3-12.8 6.2-23.5 6.5-23.8 1-1 1.7 8.8 2.6 36.2.5 16.5 1.6 33.8 2.5 40 2.5 16.698 9.5 49.998 21.7 102.998 8 34.7 11.1 49.9 11.2 55 .1 3.8-1.1 14-2.6 22.5-4.9 27.5-7.7 61.5-7.8 94 0 15.8-2.4 26.4-9.8 43.5-3.3 7.7-7.4 18-9.1 22.9-10.2 28.8-21.2 81.9-24.6 118.1-1.9 20.5-3.1 28.1-9 54-11 48-13.4 61.5-15.9 89-3 32.1-4 58.1-4 109-.1 58-.6 50.2 8.9 133 14.4 125.4 17.4 165.7 14.6 200.4-.6 8.1-2.5 31.5-4.1 52.1-5 62.8-6 68.4-26.4 152.5-12 49.3-15.4 79.9-14.3 130 .7 31 2 46.6 8.3 98 6.9 57.1 9.7 90.8 12.4 152.5.5 12.9 1.2 27.4 1.5 32.1.3 4.8.3 15.4-.1 23.6l-.7 14.9-5.7 1.1c-6.5 1.2-17.8 6.6-26.5 12.7-3.3 2.3-8.1 4.9-10.6 5.9-7.6 2.9-10.9 7.8-10.9 16.1 0 4 .5 4.8 7 11.3l7 7v10c0 16.6 4.9 28.3 17.7 42.4 4.2 4.6 10.7 13.1 14.6 18.9 11.6 17.2 21 26 32.5 30.2 7.7 2.9 30.3 3.1 40.2.4 9.6-2.6 17.7-7.2 20.9-12 4.8-7 5.3-10 4.9-29.3-.3-16.6-.2-18.1 1.8-21.8 13.3-25.2 16.2-31.6 17.4-38.6 1.7-9.7.8-37-2.6-80.4-2.1-27.1-2.5-36.7-2-53.5 1.1-39.6 5.8-62.6 21.3-104 17.3-46.1 27.3-86.2 39.7-159 5.3-30.9 7.6-49.2 11.1-90.7 2.8-33.6 3.6-39 7-47.8 2.4-6.4 17-36.3 19.7-40.5 2.5-3.9 4.5-11.8 8.3-32.5 5.1-28.5 4.9-27 26.4-202.5 11.1-89.9 23.9-193.9 28.5-231 4.7-37.1 9.3-76.4 10.3-87.4 2-22.9.6-20.6 14.8-23.3 9.5-1.8 22.5-1.3 30 1.3 2.8.9 5.1 1.8 5.2 1.8.1.1 1.1 10.3 2.3 22.6 1.1 12.3 6.3 56.2 11.5 97.4 5.2 41.3 18 145.1 28.5 230.6 10.4 85.5 20.2 162.5 21.6 171 4.3 25.8 8.3 45.1 10.4 49.4 1.1 2.3 5.9 11.7 10.6 21.1 8.6 17 11.6 24.1 13.5 32.3.5 2.4 2.3 19.7 3.9 38.5 3.9 43.7 5.2 54.3 10.6 87.1 12.4 74.5 24.8 123.5 42.3 167.4 8.8 22.1 14.7 46 17.7 72.2 2 17.5 1.4 59.6-1.1 86-.8 9.1-1.8 29.1-2.2 44.5-.7 33.6-.9 32.6 11.5 56.8l8.7 16.8-.4 8.2c-1.1 20.2-.7 27.9 1.7 32.9 4.5 9.1 13.7 14.7 28.9 17.3 16.6 2.9 31.8 1.3 41.8-4.4 8.402-4.8 15.002-11.6 23.602-24.3 4.5-6.7 11.1-15.3 14.6-19.1 15-16.3 20.8-29.9 20.1-47.3l-.3-7.4 6.8-6.8c6.6-6.6 6.7-6.8 6.7-12.1 0-8.7-3.9-14.2-11.9-16.6-1.3-.4-6.1-3.2-10.7-6.2-10.6-6.9-20.3-11.3-26.5-12l-4.9-.6v-22.1c0-12.2.9-39.4 2-60.6 3.3-64.5 4.8-82.2 11.5-137 7.1-58.1 7.7-65.6 8.2-103.7.9-59.9-1.2-76.2-18.6-148-14.402-59.3-17.302-76-21.102-124.6-1.1-14.3-2.7-34.5-3.6-45-2.3-29.4-2.8-50.6-1.5-68.2 1.6-22.4 9.3-97.8 14.602-143 10.5-89.5 11.4-105.7 9.7-164.2-2.5-80.6-5-104.2-16.802-155.4-8.7-38.2-10.3-46.8-12.4-68.8-5-50.5-17.6-104.2-32.5-138.6-10-23.2-10.4-25.1-11.5-61-.9-33.5-2.8-52.8-7.6-81.5-2-11.9-3.2-21.7-2.8-23.5.3-1.6 5.5-24.6 11.5-51 12.8-55.8 21.4-97.998 22.8-111.498.6-5.2 1.3-19.4 1.6-31.5.7-26 1.4-36.5 2.5-36.5.4 0 2.4 6.6 4.4 14.7 11.6 46.7 17.7 65.4 33.802 104.798 17 41.4 19.6 50.3 21.9 73.5 4.4 46.8 19.6 91.6 47.2 139.7 7.5 13 56.1 92.9 83.2 136.8 8.1 13.2 15.8 26.3 17.1 29.1 3.4 7.6 5.3 18.6 5.2 29.9-.2 15 1.7 20.9 12.5 39.5 3.6 6.2 5.4 14.2 6.7 28.8 1.3 16.2 3.5 25.5 11.5 50.2 5.4 16.8 19.8 65 26.9 90 1.8 6.5 5.3 10.3 11.5 12.5 5.4 1.9 7.4 1.9 11.1 0 6.1-3.1 7.3-9.7 4.4-24.5-1.9-10-10-43.7-11.4-47.4-.7-1.9-.6-2.6.3-2.6 1.3 0 5.7 8.3 29 53.7 14.9 29.1 18.8 35.3 24 37.9 4.1 2.2 11 1.4 14.4-1.7 2.4-2.3 2.5-2.7 2-10.9-.6-8.8-4.3-22.8-15.3-57.8-3-9.5-5.4-19-5.4-21 0-3.5 1.4-7.2 2.3-6.2.2.3 4.6 10.6 9.7 23 15.8 38.2 27 59.6 36.9 70.3 7.8 8.5 18.7 8.3 23.2-.5 3.2-6.1 2.8-11.4-1.6-24.8-5.4-16.5-9.5-25.2-20.8-44.8-7.1-12.3-10.8-20.1-12.9-26.5-4.2-13.5-2.7-15.4 4.3-5.5 16.7 23.9 35.5 46.9 40.2 49.1 7.3 3.5 17.4 1.2 19.7-4.4.7-1.6 1.1-5.2.8-8.2-.4-4.5-3.6-11-24.1-49.1-13-24.2-23.5-44.1-23.3-44.3.2-.2 6.1.8 13.2 2.2 22 4.3 31.5 2.8 39.2-6 6.2-7 6.8-12.1 2-16.9-3.4-3.3-8.1-5.1-29.8-11.1-10.8-3-20.1-7.9-32.1-17.1-29.4-22.6-34.5-25.9-47.7-31-14.5-5.7-23.4-12.9-28.1-22.7-1.1-2.3-12-40.2-24.1-84.2-40.7-147.5-42.7-154.3-53.7-182-10-25.3-20.8-46.5-35.9-70.7-19.6-31.4-27.7-54.6-32.9-94.998-8.2-63.6-21.3-103.6-46.5-142.3-7.9-12-8.3-14.4-7.5-39.5 1.3-40.8-4.1-75.8-16.9-108.4-8.1-20.8-13.7-29.9-25.7-41.7-14.3-14.2-33.802-25.7-86.402-51.1-36.5-17.5-111.6-56-116.2-59.5-4.9-3.6-5.2-6.7-1.5-13.3 7.1-12.2 13.3-25.9 15.3-33.5 1.7-6.5 2.1-10.4 1.9-21-.8-36.5.2-54.9 3-59.5.6-1 2.3 0 6.7 4 16.2 14.8 24.2 12 37.2-13 9.6-18.5 13.6-35.9 12.8-55.5-.8-18.7-3.7-28.7-9.4-33.1-6.5-5-6.7-6.9-2.8-26.6 8.4-41.3 10.9-62 10.9-90.8.1-51-9.8-88.7-31.2-119-7.8-11-27.6-31.4-37.6-38.8-16.7-12.2-33.3-19.7-57.1-25.7-35.4-9-65.7-12-94.7-9.4zm49.7 13.4c27.7 3.2 47.1 8.5 69.2 19 32.8 15.6 56.1 37.7 70.7 67.2 11.5 23 19.2 58.1 20.3 91.9 1.2 38.2-4.3 68.8-20.7 115-17.7 49.6-25.2 64.6-41.5 83.7-12 13.9-32.5 29-46 33.8-3.3 1.2-13.6 3.4-23 5-11.5 2-18.7 3.8-22.2 5.5-14.5 7-18 20.7-17 65.4.6 23.4 1.1 30.5 5.7 69.5 1.9 15.9 13.4 101.6 14.5 107.9.5 2.9-1.1 10.1-7.5 32.8-4.9 17.4-6.9 34.4-11.5 97.3-1.8 23.8-3.7 110.6-3.9 175.5l-.1 43.498 2.9 13.5c4.3 20.4 2.6 28.8-8.1 40.8l-4.8 5.4-5.3-6.6c-9.6-11.7-11.2-20.8-7.1-40.2 2.6-12.8 4-33.3 3.3-50.898-.3-7.7-.9-44.4-1.4-81.5-.9-64.2-1.9-87.9-5.5-132-3.7-45.2-4-46.8-12.5-77.5-5-17.7-5.1-13.1 1.9-63.5 11.1-79.4 14.5-112.9 14.5-143 0-48.4-5.1-56.8-37.4-61.5-6.3-.9-14.8-2.5-18.8-3.6-24.1-6.4-52-30.2-68.4-58.2-7.4-12.7-22.9-51.6-32.5-81.7-15.4-48.6-17.9-93.7-7.7-142.4 10.9-52.3 33.6-82.9 79.4-106.9 24.6-13 47.8-21.2 66.5-23.6 11.4-1.4 40-1.2 54 .4zm-194.2 313.7c4.4 11.1 12.3 26.8 23.2 46.3 5.8 10.4 10.7 19.4 10.8 20 .1.5-2.2 1.8-5.2 2.8-8.2 2.7-13.3.4-17.6-8.1-1.2-2.4-5.4-22.2-5.5-26 0-.1-.6-.2-1.4-.2-4.4 0-3 21.2 2.3 32.5 1.5 3.4 4.2 7.6 5.8 9.5 4.7 5.5 2.1 8-4.2 4.1-5.3-3.2-15.6-26.4-18.9-42.5-4.1-19.8-3-35.4 2.9-41.3 1.8-1.8 3.7-3.3 4.3-3.3.5 0 2.1 2.8 3.5 6.2zm350.6-3.1c4.5 4.4 5.4 9.3 4.8 24.4-.7 16.9-3.8 28.9-11.5 45-6 12.4-9.7 16.9-13.6 16.3-3.1-.5-2.9-2 1.3-7.6 6.3-8.3 8.3-14.8 8.9-28.5.4-10.1.2-11.7-1.1-11.7-2.2 0-2.4.5-4.2 11.4-2.3 14.7-5.3 20.3-12.3 23.3-3.5 1.5-9 .6-12.6-2-1.7-1.3-1.3-2.3 7.3-17.6 8-14.1 23.1-43.2 23.1-44.4 0-1.5 5.2-11.7 5.9-11.7.5 0 2.3 1.4 4 3.1zm-295.8 87.8c2.4 1.5 5.7 4.2 7.2 5.9 5.4 5.7 5.5 6.8 3 43.3-1.2 18.4-2.5 35.9-2.9 38.9l-.6 5.5-3-3.5c-1.6-1.9-4.2-6.2-5.7-9.5-5.5-11.6-5.8-15.3-5.3-59.8.1-18.7.5-23.7 1.5-23.7.7 0 3.3 1.3 5.8 2.9zm240.9 29.3c0 35.1-.7 41.7-5.5 51.4-3.3 6.8-8.3 13.1-8.9 11.3-.3-.8-1.7-18.6-3.2-39.6l-2.7-38.2 2.7-4.5c2.7-4.6 6.6-8.2 12.1-11 5.7-3 5.5-4.3 5.5 30.6zm-210.1-8.1c7.2 2.5 8.1 3.4 8.1 8.3 0 4.2-4.2 37.8-6 47.6-2.3 12.8-7.2 26.8-10 28.5-.7.4-1-13.9-1-43.5 0-41.7.1-44.2 1.8-43.5.9.4 4.1 1.6 7.1 2.6zm179.9 63.1l-.3 22.3-3.1-6.5c-4.1-8.5-5.9-15.8-8.9-37-3.6-24.8-4.5-34.8-3.5-37.5.7-1.7 2.7-2.9 8.2-4.7l7.3-2.5.3 21.9c.1 12 .1 31.8 0 44zm-149.6-57.4c4.8 1 8.9 2 9.3 2.3.6.7-24.8 50.6-26.6 52.4-.7.7-.9-.4-.5-3.5.4-2.5 1.3-12.8 2.1-23 2.5-30.5 2.4-30 4.8-29.9 1.2 0 6.1.8 10.9 1.7zm126.5 24.7c1.3 14.3 2.2 27.1 2 28.5-.1 1.7-4.2-5.4-13.8-24-7.6-14.6-13.5-26.7-13.3-26.9.8-.8 17.1-3.9 19.9-3.8l3 .2 2.2 26zm-102-15.3c5.3 5.8 7.3 13.8 8 31.3.6 16.7-1.9 43.5-7.2 76-1.8 11.5-4.1 27.1-5 34.5-1.8 14.2-4.7 34-9 60.5-3.3 19.9-3.4 32.1-.4 42.5 9.1 32.3 10.4 39.9 13.9 82 4 48.3 5.9 94.5 6 141.5.1 27 1.1 58.4 2.6 85.298.7 12.2-.9 30.4-3.2 35.9-2.7 6.6-4.2 5-19.7-20.5-33.7-55.198-60.9-105.998-85.2-158.698-23.9-52.1-32.3-76.6-43.5-128.5-5.9-26.9-12.4-50-16.9-59.6-8.2-17.4-24.5-36.5-41-47.8l-8.3-5.8 11.8-7c29.7-17.5 40.2-23.3 74.9-41 42.4-21.7 49.7-25.9 60.5-34.6 20.5-16.4 35.4-37.2 49.3-69.2 5.6-12.8 8.8-19 9.8-19 .3 0 1.5 1 2.6 2.2zm71 9.5c3 6.5 7.4 15.8 9.7 20.8 8.8 18.6 24.3 40 36.7 50.6 14.8 12.5 20.9 16.2 71.4 42.1 31.2 15.9 81.5 44.2 81.5 45.7 0 .4-3.6 3.1-7.9 6-8.9 6-23.3 20.2-30.6 30.1-6.3 8.6-11.6 19.3-15.3 31.1-3.4 10.4-11.1 41.3-13.7 54.9-8.9 45.3-26.7 91.7-63.1 164-21.3 42.3-38.1 72.5-64.1 115.198-12.9 21-14.8 23.6-16.4 22.7-3.1-1.6-4-4.6-5.6-18.2-1.3-11.7-1.3-14.9.1-31.598 1-11.6 1.6-29.7 1.6-48.1 0-50.7 2-109.8 5-150 4.1-53.3 6.6-71.1 12.9-91.1 3.6-11.3 5.1-19.4 5.1-26.8 0-3.1-2-18-4.4-33.1-2.4-15.1-5.4-35.2-6.6-44.5-1.2-9.4-3.9-28-6.1-41.5-2.1-13.5-4.3-29.5-4.8-35.5-.6-6.1-1.5-15.7-2.2-21.5-1.8-16.8.3-37.6 4.7-46.3 1.9-3.8 4.4-6.7 5.6-6.7.5 0 3.4 5.3 6.5 11.7zm-283.9 169.9c14.4 7.2 39 42.3 45.2 64.4 3.1 11 3.8 28.1 1.5 35.1-3.2 9.5-26.1 31.4-48.8 46.6-10.7 7.1-31.1 18-44.7 23.8-9.2 4-61 24.5-61.8 24.5-1 0 .8-50.9 2.3-65 5.6-52.5 14.2-74 39.4-99.1 11.1-11.1 20.6-18.1 33.1-24.4 18.6-9.4 24.7-10.5 33.8-5.9zm515.1 2.7c33.202 15 58.802 42.4 69.502 74.6 6.3 19 10.2 48.2 11.5 85.1.5 12.9.6 25.4.2 27.7l-.6 4.2-25.5-10c-44.702-17.5-65.502-27.7-85.502-41.8-18.7-13.1-38.8-32.5-42.9-41.1-2.8-6.2-2.7-21.9.3-34.5 4.1-17.2 18.4-41.2 34.7-58.1 12.5-12.9 20.4-14.2 38.3-6.1zm-56.4 180.6c-8.3 14.7-17.5 31.1-20.3 36.6-11.1 21.4-30.1 38.5-49.2 44.3-10.3 3.1-14 3.6-14 1.8 0-2.5 8-22.4 20.8-51.6 13.5-31.1 20.1-48.5 24.3-64.6 2.5-9.4 5.9-28 5.9-32.2 0-.6 10.7 7.9 23.8 19l23.8 20.2-15.1 26.5zm-396.2-59.7c2.1 22.5 9.7 45.7 30.5 93.3 9.5 21.9 17.9 42.5 19.7 48.3.6 2.2.5 2.3-3.2 1.7-15.2-2.6-27.4-8.9-39.5-20.4-10-9.5-15.8-17.1-21.1-27.7-2-3.9-10.6-19.4-19.2-34.4-14.9-26.1-15.5-27.5-13.8-29.1 4.3-4.1 44.7-37.9 45.3-37.9.4 0 1 2.8 1.3 6.2zm-59.6 42c4.8 5.3 13.8 20.9 25.6 44.3 13.2 26.3 21.2 39.6 29.1 48.2 5.7 6.3 5.4 6.4-9.3 3.3-10.3-2.1-17.7-5.8-35.1-17.8-16.6-11.3-30.2-22.7-56.3-46.6l-8.8-8.1 25.8-12.7c14.2-6.9 26.1-12.7 26.4-12.7.3-.1 1.5.9 2.6 2.1zm510.5 10.5l26.102 12.8-8.402 7.8c-24.9 23.2-43 38.1-60.9 50-14.9 9.9-22.9 13.5-34.8 15.6l-10 1.8 5.1-6.1c8.9-10.8 16.2-22.9 30.6-51.3 12.1-23.8 23.7-43.3 25.7-43.3.3 0 12.3 5.7 26.6 12.7zm-578.8 20.5c-.4 1.3-2.9 7-5.7 12.8-4.6 9.9-7.4 16.5-26.9 64-9.4 22.9-27.3 59.7-35.2 72.5-3.1 4.9-5.6 8.6-5.6 8.2 0-.5 1.3-8.8 3-18.5 1.6-9.8 5.2-33.2 8-52.2 7.9-53.7 8.9-60 10.6-63.1 1.6-3.2 9.9-7.8 28.9-15.9 6.1-2.6 13.3-5.9 16-7.3 6.4-3.3 7.9-3.4 6.9-.5zm624.102-.2c2.2 1.2 11.2 5.3 20 9.1 18.5 8.1 23.9 11.1 26 14.3 1.9 2.9 2.2 4.6 9.9 56.6 3.7 24.5 7.9 52.1 9.5 61.4 3.2 18.8 3.3 18.7-5 4.7-11.5-19.3-22.1-42-40.6-87.1-6.8-16.8-15.3-36.6-18.7-44-9-19.2-9-19-1.1-15zm-596.202 25.4c11.8 10.9 13.7 13.6 13.7 20.4 0 11.1-11.4 64-19.5 90.7-3.3 10.9-19.9 55.198-27.4 73.398-7.6 18.1-19.3 37.3-34.8 56.6-9.5 11.8-29.5 32.4-30 30.8-.2-.6 4.8-11.8 11.1-24.9 14.5-30.3 19.2-44.3 23.2-69 2.2-13.9 3-50.098 1.5-70.898l-1.3-17 5-12c2.7-6.6 11.7-28.7 20-49 8.3-20.4 16-39.2 17.1-41.9l2.1-4.8 4.8 4.3c2.6 2.4 9.1 8.4 14.5 13.3zm606.302 41.3l20.4 50.1-1.2 9.9c-1.6 13.8-1.6 57.398 0 69.298 4.1 28.4 9.1 44.7 22.9 73.5 5.8 12.1 11.2 23.5 12 25.4l1.4 3.3-2.8-2c-1.6-1.1-7.5-6.8-13-12.5-18.5-19.2-34.5-41.8-44.9-63.2-6.6-13.6-24.7-60.198-30.802-78.998-9.7-29.7-22.5-90-21.1-99.1.5-3.4 1.9-5.3 9.3-12.6 4.8-4.7 12.1-11.6 16.2-15.2l7.502-6.6 1.8 4.3c1.1 2.3 11.1 26.8 22.3 54.4zm-702.102-17c-.3 2.1-1.9 14.5-3.5 27.6-3.4 27.3-14.9 96.4-18.5 111.198-3.3 13.9-11.4 42.7-12.1 43.4-.7.7.3-28.5 1.7-49.4 2.1-31.098 7.3-62.798 14.4-88.498 8.3-29.9 20-58.8 18-44.3zm760.502 7.6c17.5 45.9 26.3 94.3 27.5 152.698l.5 22.5-4-14c-7.7-26.9-10-37.5-17-78.698-6.3-37.2-13.1-85-13-91.8.1-2.4.1-2.4 1.5-.6.8 1 2.8 5.5 4.5 9.9zm-617.202 8c25.5 15.5 30.5 16.6 80.2 18.2 11.3.4 22.2 1.1 24.3 1.6 5.7 1.5 10.2 6.2 16.4 17.3 3.1 5.5 15.2 27 26.8 47.6 46.9 82.798 45.5 80.198 45.5 87.898 0 12-8 30.3-19.7 45.1-9.2 11.7-37.7 40-50 49.8-18.6 14.7-47.5 32.4-62 38.1l-5.2 2-6.5-12.2c-12.1-22.8-22-46.3-28.2-66.5-5.8-19.1-27.9-132.798-31.9-163.998-2.3-17.7-5.5-56.3-5.5-66 0-9.7-1.9-9.8 15.8 1.1zm484.2-6.1c0 16.4-5.7 72.1-10 97.8-3.5 20.298-19.8 104.098-23.6 120.998-5.3 23.2-17.5 54.5-31.9 81.6-3.6 6.8-6.9 12.6-7.4 12.8-1.3.8-27.2-12.4-39.1-19.9-29-18.3-56.3-42.6-77.3-69-13.1-16.3-21.9-37.7-20.3-48.9.8-4.8 6.4-15.4 37.1-69.598 11.7-20.6 25.4-44.9 30.5-54 10.5-18.8 13-22.4 17-24.5 3.7-1.9 8.2-2.3 40.5-3.5 38.9-1.5 43.8-2.8 69-18.3 7.7-4.7 14.3-8.6 14.8-8.7.4 0 .7 1.5.7 3.2zm-605.9 110.3c-2.9 39.798-12.5 71.898-41.5 138.498-5.9 13.5-11.1 24.9-11.6 25.4-1.4 1.4-2.5-12-2.4-29.4.1-18 2-34.4 5.8-49.3 2.9-11.4 21.8-59.1 37.4-94.398l11.7-26.5.9 10.4c.5 6.6.4 15.7-.3 25.3zm723.702-8.8c9.9 22.298 27.3 64.498 33.9 82.098 6 16.3 9.8 45.4 9 70.1-.8 25.5-.5 25.5-13-3-24.9-57.2-35.1-87.4-40.3-119.4-1.9-11.6-3.2-57.598-1.6-55.998.5.5 5.9 12.3 12 26.2zm-791.402 80.798c3.6 22.5 4.5 40.8 2.6 59.1-.5 5.5-2.1 24.4-3.5 42.2l-2.6 32.4-19.3 43.6c-22.2 50.1-31 69.1-44.3 95.6-16.2 32.5-45.3 87-47.7 89.4-2 2.1-2.7 2.2-6.7 1.3-2.4-.5-7.7-1.2-11.7-1.6l-7.3-.7 1.9-2.2c4.5-4.8 29.1-47.5 40.1-69.4 12.4-24.8 20.1-43.3 30.1-72.7 3.7-11 10.9-30.4 16-43 17.9-44.6 19.1-49.1 25.1-87.2 3.7-23.3 4.2-28.7 4.1-41.5-.2-17.8 1.1-22.7 9.3-36.8 3.1-5.2 6.8-11.9 8.2-14.7 1.5-2.9 3-5 3.4-4.5.4.4 1.4 5.2 2.3 10.7zm856.302.5c12.3 20.9 14.5 28 13.6 45-.4 8.6 0 14.4 2.6 32 6.6 44.3 8.4 50.9 26.1 95.5 5.9 14.8 12.4 32.2 14.5 38.5 11.7 35.5 25.5 67.2 43.8 100.5 9.8 17.8 24.6 42.3 27.8 45.9l3 3.4-7.8.7c-4.3.4-9.6 1.1-11.8 1.5-2.9.7-4.6.5-6-.4-3.2-2.2-45.9-84-64.8-124.1-14.2-30.2-46.6-103.8-47.2-107.1-.4-2.6-4.2-49.5-6.5-80.4-1.2-16.7.6-40.8 4.7-60.5.4-2.3.8-2.7 1.5-1.5.5.8 3.4 5.8 6.5 11zm-454.602 17.2c8.7 12.2 20.1 25.8 21.4 25.8 1.7 0 9.2-8.7 19.3-22.3l7.9-10.7 5.2 10.1c13.2 25.7 28 45.9 49 67 23.9 23.8 44.3 38.2 78.8 55.5 22 11 31.1 18.3 40.2 32.4 3.6 5.7 10.3 20.1 9.6 20.8-.4.4-23.2-12.4-50.2-28.2-13.1-7.5-21.4-10.1-33.3-10-5.2 0-11.5.6-14 1.3-7.7 2.2-18.5 7.8-22.8 12-7.6 7.4-7.8 8.1-14.2 50.1-3.2 21-6.6 34.7-14.2 58-11.4 34.7-31.1 90.5-36.7 103.7-8.7 20.7-9.5 24.5-9.5 48.8 0 19.1.3 23.3 3.6 45.5 4 26.9 4.8 33 4.3 33-.2 0-3.2-.7-6.7-1.6-3.7-1-10.5-1.7-16.3-1.7-8.7 0-12.5.5-20.9 3-1.8.5-1.8.1-1.2-5.8.4-3.5 2.3-17.4 4.3-30.9 2.9-20.2 3.6-27.4 3.6-41 .1-20.8-1.9-30.7-9.6-48.7-5.8-13.4-22.1-59.1-36.3-101.8-8.8-26.6-13.7-47.7-16.9-73-2.2-18-4-26-6.9-31-9.7-16.5-38.1-24.6-60.1-17.1-4.4 1.5-12.7 5.6-18.5 9-18.6 11.2-46.3 26.7-46.8 26.1-.9-.9 5.1-13.7 9.8-20.9 9.7-14.6 17.8-21.1 41.5-32.9 9.4-4.7 22.1-11.7 28.3-15.6 42.4-26.4 75.2-61.8 97-104.8 3.1-6.2 5.8-11.3 5.9-11.3.1 0 2.5 3.3 5.4 7.2zm-308.8 12.5c-4.6 39.8-11.7 69-22.1 91.5-4.7 10.1-31.1 59.4-47.2 88.3-16.9 30.3-33.9 59.2-48 81.5-20.8 33-21.7 34.4-24.9 40.8-5.1 10-8.9 22.9-9.9 33.2-.6 5.2-.8 9.9-.5 10.3 1.3 2.2-1.3 9.2-5.7 15.3-6.5 8.7-8.3 13.9-11.4 32.4-1.5 9.1-5.4 25.7-9.5 40.3-4.8 16.8-8 30.7-10.1 43.5-4.3 25.8-16.1 70.1-20.5 76.9-2.1 3.1-5.8 3-8.4-.3-2.7-3.5-2.6-6.6.4-17.8 4.8-17.7 12.6-56.9 11.4-58.1-.5-.5-4.1-1-7.9-1-11.1 0-12.6 1.8-25.1 31.5-6.7 15.8-17.6 40.1-23.3 52.1-4.2 8.9-7.3 11.2-10.7 7.8-1.6-1.6-1.8-2.7-1.3-5.7 1.6-9.3 5.3-21.9 15-50.7 5.7-17 10.4-31.2 10.4-31.6 0-.3-3.2-2.8-7.2-5.4-5.4-3.6-7.6-4.5-8.7-3.8-2.7 1.7-14.3 23.1-27.4 50.7-20.9 43.8-25.5 50.4-32.8 46.5-3-1.6-4.1-5.4-2.8-10.2.6-2.3 6.4-14.1 12.9-26.2 19.5-36.2 24.8-47.6 26.5-57.9 2.5-14.6 2.3-16-3.3-21.8l-4.8-5-9.7 10.5c-10.8 11.9-17.8 21.1-28.6 38.1-11.8 18.5-15.5 21.4-20.7 16.5-2.2-2-2.2-2.4-.9-5.6.8-1.9 6.4-12 12.4-22.6 25.4-44.7 62.9-112.4 63.2-114.2.9-4.5-2.9-2.1-8.6 5.6-10.7 14.4-16.5 21.3-19.4 23.2-2.9 1.7-16.8 6.1-34.3 10.7-7.6 2-9.3 2.1-13 1.1-4.8-1.4-7.9-3.6-9.7-7-2.7-4.9 3.4-7.4 20.3-8.6 18.9-1.2 28.4-5.5 43.1-19.5 16.2-15.5 26.7-22.8 46.6-32.5l11.7-5.7 12.3 1.1c12.9 1.2 21.6 3.1 27.5 5.8 3.3 1.6 3.5 1.6 5.3-.3 3.8-3.9 35-64.9 53.8-105.3 16.8-36.2 35.7-79.3 55.5-126.6l18.4-44 35.5-35.2c19.5-19.4 35.7-35.3 36-35.3.3 0 .4 1.2.2 2.7zm699.902 35.1l32.7 32.9 15.5 36.9c38.6 92.3 64.2 148.5 93.4 204.9 20.2 38.8 19 37.2 25.2 34 5-2.6 14.1-4.5 26.6-5.6l12.2-1 9.3 4.4c19.6 9.2 33.2 18.6 49.1 34 14.6 14.1 23.6 17.9 45.9 19.6 12.8 1 16.7 2.3 17.6 5.9.8 3.2-3.7 7.5-9.6 9.3-3.5 1-5.3.9-13.3-1.1-18.8-4.7-33.8-9.7-36.4-12.1-1.4-1.3-7.3-8.6-13.2-16.2-10.1-13.1-13-15.6-12.5-10.8.3 1.9 32.6 60.6 63.8 115.6 6.3 11 11.7 21.2 12 22.6.5 2.1.1 3-1.6 4.3-5.9 4.1-8 2-24.4-22.9-6.2-9.4-15.2-21.4-20.1-26.9-4.9-5.5-10.1-11.3-11.5-13l-2.7-3.1-4.3 4.9c-2.4 2.7-4.7 5.4-5.1 6-.9 1.6.9 17 2.8 23.6 1.9 6.6 11.9 26.7 25.5 51.6 13.9 25.3 15.3 30.5 9.7 34.7-6.1 4.5-11.3-1.3-23.8-26.8-4.3-8.8-12.1-24.8-17.3-35.5-10.5-21.4-18.2-35-20.1-35-2.1 0-14.6 9-14.6 10.5 0 .8 4.9 16.2 10.9 34.2 14.6 43.8 16.4 52.5 11.4 54.4-1.7.6-2.9.3-4.7-1.4-2.5-2.3-13.9-26.4-27.1-57.4-12.9-30.4-15.8-34.3-25.6-34.3-2.6 0-5.8.4-7.2.9l-2.4.9 4.8 22.9c2.6 12.5 5.7 26.6 6.9 31.3 3.4 13 3.9 16 2.8 19.2-1.1 3.1-3.5 4.8-6.7 4.8-1.4 0-2.7-1.3-4-3.9-4.4-8.5-16-52.4-19.1-72.1-3-18.7-4.1-23.5-11-48-3.4-11.8-7.4-28.9-8.9-38-3.3-18.9-5.7-26-11-32.8-5.6-7.1-6.1-8.4-6.1-16.9-.1-15.2-4.7-31.7-13-46.9-2.2-4-8.4-14.2-13.8-22.6-27.5-42.7-63-104.8-96.5-168.8-16.4-31.3-23.9-57.9-29.3-103.4l-.7-5.9 3.4 2.6c1.9 1.4 18.1 17.4 36.1 35.5zm-828.202 16.9c-4.4 35.4-6.5 42.6-22.7 79.3-6.4 14.4-12.8 31.3-19.3 51-5.3 16.2-11.9 34.7-14.4 41-4 9.5-27.2 56-28 56-.2 0 4.5-14.3 10.4-31.8 5.8-17.4 16.1-51.3 22.9-75.2 26.2-92.7 36.5-125 50.2-157.5l3.4-8 .3 10.2c.2 6.9-.7 18.1-2.8 35zm922.802-25.9c12.7 32.2 21.2 59.2 40.2 126.7 14.7 52.2 22.7 78.6 31.9 105.3 3.9 11.1 6.8 20.2 6.6 20.2-.8 0-23.4-44.7-26.8-53-4.5-10.9-11.4-30.8-16.8-48-5-16.2-9.4-27.3-18.7-48.2-8.5-18.8-13.3-31.5-16.1-42.3-4.6-17.3-11.2-80.9-8.3-79.1.6.3 4.2 8.6 8 18.4zm-671.202 53.9c2.5 5.4 6.6 13.9 8.9 18.9l4.3 9.2-10.5 13.3c-5.8 7.4-10.9 13.5-11.3 13.7-1.4.5-2.1-24.1-1-35.8 1.3-14.1 3.7-29 4.6-29 .2 0 2.5 4.4 5 9.7zm421.9 1.8c1.9 11.8 3.1 38.3 2.1 47.8l-.8 6.7-10.9-13.9c-6-7.7-10.9-14.3-10.9-14.7 0-1.8 17.6-37.2 18.2-36.6.3.4 1.4 5.2 2.3 10.7zm-322 64.4c8.1 4 12.8 9.3 15 16.7 2 6.7 9.5 35.6 9.5 36.5 0 .3-8.2.9-18.2 1.3-47.3 1.8-73.3 9.7-96.4 29.3-3.6 3-13.5 14.1-22.1 24.6-18.7 22.8-32.4 38.9-32.9 38.4-.2-.2 1.4-7.3 3.5-15.8 6.3-24.7 22.9-69.9 29.7-80.6 7.9-12.3 16.3-19 36.4-28.5 7.5-3.6 19.7-9.9 27.2-14.1 16.1-9.2 19.1-10.5 26-11.5 7.5-1.1 15.1.2 22.3 3.7zm242.6-2.3c2.5.8 11.5 5.3 20 10 8.5 4.8 22.4 12 30.9 16.1 14.4 7 16 8 23.6 15.6 5.4 5.5 9.2 10.3 11.4 14.7 8 15.8 24 61 28.5 80.3 1.5 6.5 2.6 12 2.4 12.2-.5.4-16.1-17.7-32.6-38-19.6-24.1-29.2-32.3-46.7-40.6-19.1-8.9-48.1-13.8-82.3-13.9h-8.1l4.8-18.8c5.9-23.1 7.3-26.5 11.9-30.1 11.3-8.9 23.5-11.4 36.2-7.5zm-221.7 72.6c2.4 2.5 4 5.9 6.5 13.8 1.7 5.8 5.5 16.3 8.3 23.5 9.3 23.9 13.8 39.6 20.2 70.8 2.8 13.6 4.4 18.9 10 32 8.3 19.4 9.8 26.1 9.8 44.2.1 20.7-3.3 36.1-11.8 53.1-15.1 30.1-53.4 60.8-118.8 95.1-11.1 5.8-27.8 14.8-37.2 19.9-9.4 5.2-17.7 9.4-18.3 9.4-.8 0-1.1-1-.7-2.8.3-1.5 1.1-8.6 1.8-15.7 1.5-15.5 1.6-36.8.4-84-.7-30.5-.6-37.2.9-52 2.9-28.6 1.2-40-8.4-54.8-2.6-3.9-9.1-14.9-14.4-24.2-13.3-23.5-13.4-23.2 3.7-48.9 19.1-28.8 41.8-53.6 60.8-66.4 10.6-7.1 21.3-9.7 58.8-14.1 23.3-2.8 24.6-2.7 28.4 1.1zm212.1.3c34.5 4.4 41.2 6.7 57.5 20.2 17.4 14.5 34.8 34.5 50.7 58.3 11.4 17 13.7 21.7 13.8 27.4 0 4.6-.9 6.6-9.3 21.3-5.1 9-11.7 20.2-14.8 25-9.8 15.6-11.5 25.3-8.9 50.3 2.1 19.8 2.3 34.5 1.1 85-.8 33.7-.7 40.6.9 55.7.9 9.5 1.5 17.6 1.4 18.2-.2.5-6.5-2.5-13.9-6.6s-23.4-12.7-35.5-19c-42.1-22.1-62.5-34.8-85.5-53.3-38.6-31.1-53.6-61.3-51.7-103.5.8-16 2.2-21.9 8.8-37.1 7.1-16.3 7.6-17.9 11-34.4 6.4-30.7 11.1-47.3 19.9-69.5 2.6-6.6 6.4-17.4 8.4-23.9 2.8-8.9 4.5-12.7 6.7-14.9l3-3 8.7.7c4.8.4 17.3 1.8 27.7 3.1zm-369.8 146.2c6.7 13.7 12.6 26.3 13.2 28.1 2.1 6.9 2.3 14.6.5 25.7-1.6 9.6-1.8 16.5-1.6 55.3.2 37-.1 48.5-1.8 69.5-1.1 13.9-2.2 29-2.6 33.7-1.3 19.8-5.1 40.2-15 81.4-11.7 48.6-15.6 72.3-20.5 124.5-1.1 12.4-2.2 22.7-2.4 22.9-1.5 1.6-13.8-129.9-15.6-166.8-.6-12.9-1.2-40.2-1.3-60.5l-.1-37 4.3-32.5c5.8-44.3 14.9-107.7 16.8-117.5 1.9-9.7 11.4-49.6 12-50.7.3-.4.8-.8 1.2-.8.4 0 6.2 11.1 12.9 24.7zm502.7-23c2.4 8.5 10.9 46.3 12.5 55.8 2.6 15.7 11 75.3 15.8 112l3.8 29-.1 45c0 24.7-.6 54-1.3 65-2.2 37.4-13.7 156.3-15.2 158-.5.5-.9-1.2-.9-4.2 0-6.8-3.4-41.2-6.6-65.8-3.2-24.7-6.3-40.8-15.3-78-10.7-44.5-14.2-63.8-15.6-88-.3-6.1-1.3-18.4-2.2-27.5-1.2-12.5-1.6-28.9-1.7-67-.1-38.6-.4-52.1-1.5-57.4-1.9-9.5-1-22.4 2-30.1 3.5-8.9 23.8-48.5 24.9-48.5.5 0 1.1.8 1.4 1.7zm-318.1 318.6c-13 98.8-23.9 179.4-24.1 179.2-1.4-1.3-7.7-144-9.2-207-1-42.1-1.1-44-5.1-73.1-2-15.1-2.1-17.5-.9-20.4 1.7-4.2 3.1-5.6 31-30.9 31.7-28.9 31.1-28.3 31.6-27.8.3.3-10.2 81.3-23.3 180zm125.6-153.7c16.1 14.6 30.1 28 31.2 29.8 2.5 4.1 2.4 8.6-.5 30.3-3.1 22.4-3.5 28.7-4.6 78.4-1 40.9-3.7 108.6-6.5 160.2-.8 15.3-1.5 29.6-1.5 31.9 0 2.3-.2 3.9-.5 3.6-.3-.3-11.1-80.3-24-177.9-12.9-97.6-23.7-178.6-23.9-180.2-.3-1.5-.2-2.7.2-2.7.5 0 14 12 30.1 26.6zm-173.4 79.4c4 46.8 4 53.7.5 68.8-3.5 14.8-12 32.4-22.3 46.2-5.2 7-29.6 35.7-33.1 38.9-2.1 2-2.6 2.1-2.6.8 0-6 10.2-67.1 16-95.9 8.3-41.3 17.6-82 19.8-86.6 1.3-2.9 16.9-16.8 17.8-16 .1.2 1.9 19.9 3.9 43.8zm233.8-31.3c2.2 2.4 3.5 5.9 6.7 18.9 11.2 45.9 23.6 109.7 29.5 152.4.8 6.3 1.8 12.6 2.1 14 .5 2.2-.1 1.8-4.6-2.5-8.2-7.9-29.8-34.2-36.2-43.9-13.4-20.4-19.7-40-19.8-61.1 0-8.4 5.7-86.5 6.6-89.3.4-1.3 10.5 6.1 15.7 11.5zm-263.7 5c-.3 1-4.6 18.2-9.5 38.3-19.1 77.3-26.6 122.5-39 234.5-10.5 94.2-12.7 108.8-18.2 123.9-3.7 10.2-22.8 49.3-31.4 64.1-15.1 26.1-38.8 56-48.4 60.9l-3.4 1.8.7-2.9c1.4-6.4 5.8-34.1 11.1-69.8 6.6-44.8 7-46.4 18.5-88.5 11.2-41.1 13.8-51.6 20.1-80.2 21.2-97.5 45.6-225.8 46.8-246.2l.6-10.8 25.5-13.4c14-7.3 25.9-13.4 26.3-13.4.5 0 .6.8.3 1.7zm301.8 12.2l25.6 13.3-.1 9.2c-.1 10.8 8.5 60.5 23.7 137.1 18.8 95 29.2 141.1 41.9 187 11.4 41.1 13.1 49.5 21 102.3 6.8 45.4 8.3 54 10.1 60.5.5 1.7.3 1.7-3.4-.2-8.5-4.3-30.5-31.2-44.5-54.3-8.9-14.7-31.4-59.8-35.5-71.1-1.8-4.9-3.9-12.8-4.7-17.5-2.5-13.9-8.1-59.3-13-104.7-12.1-111.2-20.2-159.3-41-243.3-4.1-16.7-7.5-30.8-7.5-31.4 0-1.3-1.7-2.1 27.4 13.1zm-396 183.7c-18.5 90.7-33.8 165.1-34 165.3-.8.9-1.5-.8-2.3-5.5-.7-4.7 1-63.3 2.4-82.9 2-27.6 7.4-71.7 12.6-103 1.1-6.6 5.3-28.9 9.3-49.5 4.1-20.6 7.9-40.6 8.5-44.4 1.5-10.1 6.8-20.3 15-28.6 5.9-6 20.9-17.5 21.7-16.7.2.2-14.8 74.6-33.2 165.3zm437.8-159.9c18.4 13.3 26.6 25.7 29.3 44.3.8 5.8 4.8 27.4 8.9 48 10.4 51.7 18 105.5 20.5 145.5 1.7 26.2 3.3 75.6 2.6 81-.5 4.1-2.4 9.8-2.5 7.3 0-.4-.7-4-1.6-8-.8-4-15.4-75.5-32.4-158.8-17-83.3-31.5-154.5-32.3-158.3-.8-3.7-1.2-6.7-.9-6.7.2 0 4.1 2.6 8.4 5.7zm-311.9 106c.4 2.1 1.1 10.8 1.8 19.3 2.9 38.8-2.2 88.1-22.1 216-6.1 38.9-7.6 46.3-11.5 58.5-2.4 7.7-7.6 28.1-11.5 45.4-3.8 17.3-7.1 31.6-7.3 31.7-.4.5-18.9-38.8-22.7-48.4-7.9-20-10.5-36.9-9-57.7 1-13.1 11-111.9 16.5-162.7 3.1-28.8 3.7-32.4 6-36.6 1.4-2.6 10.8-14.2 20.8-25.8 10-11.6 22.5-26.1 27.7-32.2 5.2-6.1 9.8-11.1 10.1-11.1.4-.1.9 1.6 1.2 3.6zm235.3 22.8c11 12.6 23 26.6 26.8 31 11 12.8 10.8 12.2 15.5 56.5 14.3 135.3 15.5 147.3 15.5 165 0 14.8-.3 18.9-2.2 26.2-3 12.2-8.3 25.8-16.4 42.8-3.9 8-8.4 17.4-10.1 21l-3 6.5-3.3-15c-8.4-37.7-11.8-51.4-15.4-62.3-4-12.3-9.1-41.3-19.4-111.2-11-74.6-13.6-98.5-14.3-132.1-.5-24.1.7-51.4 2.4-54.3.7-1 .1-1.6 23.9 25.9zm-222.7 129.5c3.5 21.4 4.4 32.7 4.4 56.5-.1 30.8-2.2 51.8-9.8 94.5-1.9 10.7-3.9 23.9-4.5 29.3-1.1 10.3-3.1 16.7-7.5 24.3-3.9 6.7-8.5 11.4-21.7 22.6l-11.8 9.9v-3.5c0-6.6 3.2-28.2 6.2-42.1 1.6-7.7 6.1-23.7 10-35.5 3.8-11.8 7.2-22.2 7.4-22.9.3-.8 2.5-13.9 4.9-29 11.1-69.5 16.5-103.2 17.6-111 .7-5 1.5-7.8 1.9-7 .5.8 1.7 7 2.9 13.9zm193.7 14.2c2.4 15.6 6.9 43.6 9.9 62.3 3.1 18.7 5.8 35.8 6.1 38 1.5 11.2 4.1 21.6 9.5 37.6 9.6 28.8 15 53.1 16.7 74.6.9 11.9 2.3 11.9-12 0-10.9-9.2-15.8-14.3-20.2-21.2-5.1-7.9-6.6-12.7-8.6-29-1.1-8.3-2.6-18.3-3.4-22.1-2.2-10.6-6.3-37.3-8.3-53.4-2.4-20.3-2.5-69.4 0-86.5 2.2-15.9 4.8-29.7 5.4-29.1.3.3 2.5 13.2 4.9 28.8zm110.9 142.7c4.7 8.9 10.7 19.7 13.3 23.9 6.2 9.9 7.6 13.5 7.6 19.1.1 6.3-1.3 12.3-2.6 11.9-1.4-.5-30.5-40.2-32.6-44.5-1.3-2.8-1.4-4.1-.4-8.4 1.7-7.1 5.4-19.1 5.8-18.7.1.2 4.2 7.7 8.9 16.7zm-410.6-4.6c1.8 6.6 2.9 12.2 2.5 13.3-.4 1-8.2 12.1-17.3 24.7-18.1 25-17.9 24.8-18.9 13.2-.6-7.8.7-11.9 6.9-21.6 2.6-4.2 8.7-15.1 13.4-24.3 4.8-9.1 9-16.6 9.5-16.6.4 0 2.2 5.1 3.9 11.3zm20.4 50.4c5.7 12.1 13.4 27.3 17.1 33.5 6.3 10.9 6.6 11.8 6.6 17.9 0 12.9-6.4 97.3-8.6 113.9-5.1 38.9-18.4 75.2-36.1 98.8-5.8 7.8-10.2 11.2-14.4 11.2-3.8 0-10.7-4.8-17.6-12.5-12.1-13.1-18-25-19-38-.9-12.3 4.5-70.8 11.3-122 6.6-50 8.4-57.3 19.4-79 7.3-14.5 28.9-48 30.1-46.8.4.4 5.4 10.8 11.2 23zm378-9.9c21.8 32.9 29.4 49.1 33.7 71.9 4 21.9 11.4 82.4 15 123.6 3.5 40 3.1 45.7-4.3 60-4.2 8.2-15.6 21.4-23.1 26.9-8.3 6-14.4 2.4-26.2-15.2-14.5-21.8-25.7-54.1-30.9-88.7-2.8-18.4-10.1-118.8-8.9-122.6.3-1.2 3.7-7.6 7.5-14.2 3.7-6.6 11.4-21.8 17-33.7 5.6-12 10.5-21.5 11-21.3.4.3 4.6 6.3 9.2 13.3zm-440.2 25.3c1.7 11.3.2 24.9-6.1 54.1-3.4 15.6-5.6 33.3-10 80.3-1.7 18.1-3.7 38.4-4.5 45-1.9 15.7-2.1 22.8-1.1 35.1.6 8.2.5 11.3-.8 15.7-2.7 9.2-17.6 27.7-22.4 27.7-5.8 0-17.1-8.9-21.1-16.7-3.1-6.2-4.6-25.5-4.5-60.8.1-31.9 1.2-47 5.5-77 2.4-17.3 13.8-73.9 15.3-76.3.3-.5 3.2-1.9 6.5-3.1 9.3-3.4 17.2-9.3 29.3-22.1 7.6-8 11.5-11.4 12-10.6.4.7 1.3 4.6 1.9 8.7zm495.8 2.7c12.5 12.7 19.9 18.2 28.9 21.4 3.1 1.1 5.8 2.1 6 2.3 1.6 1.5 13.202 59.8 16.102 80.5 4 29.2 4.6 38.8 4.6 76-.1 37.6-1.1 52.4-4 58-4 7.7-15.202 17-20.602 17-3.6 0-6.9-2.8-14-12.1-10.1-13.3-10.9-16.2-9.5-35.9.6-9.5.3-15.6-1.8-35-1.4-12.9-3.5-33.4-4.6-45.5-3.2-34.6-5.9-58.2-8.1-68.5-1.1-5.2-3.2-15.1-4.6-22-2.1-10.1-2.6-15.4-2.7-27.5-.1-14.1.6-20.5 2.1-20.5.4 0 5.9 5.3 12.2 11.8zm-385.8 48.3c-1.7 10.1-4.6 30.1-6.6 44.4-4.1 30-4.2 30.7-13.9 84.5-4.1 22.3-8.3 46.6-9.5 54.1-5 31.7-12.5 55.6-30.9 97.9-13.5 31.3-18 62.9-19.2 134-.7 48.8-.8 49.6-7.1 59.5-3.8 6-9.9 13.5-10.9 13.5s-2.1-30.7-2.1-58c0-31.7 3.3-65.8 12.2-125.3 3-20 5.6-33.2 10.4-52 3.5-13.9 6.8-26.3 7.3-27.7.6-1.4 4-5.9 7.6-10 21.2-23.9 34.6-54.9 41.6-96 4-23.6 5.5-43.5 7.5-95.5.7-17.2 2.1-24.3 6.1-30.7 2.8-4.4 9.5-12 10.1-11.5.2.2-1 8.7-2.6 18.8zm268.6-7.3c5 8.5 5.4 11 6.9 46.2 1.5 37.7 2.6 51.5 5.5 70.9 6.7 46.3 20 78.9 42.6 104.8 3.5 4.1 7.1 8.9 7.9 10.8 3.6 8.7 13.5 51.8 16.8 73.2 7.7 49.8 12.4 92.2 13.2 119.8.6 18.8-.9 68.1-2.1 69.3-1.5 1.6-13-15.7-15.7-23.8-2.2-6.2-2.3-8.1-2.4-45.5-.1-40.4-1.2-58.4-5.4-87.5-3.5-23.6-6.7-34.2-20.5-66-7.6-17.7-15.1-39.5-19-55.4-1.4-5.9-4.8-23.9-7.5-40-2.6-16-7.5-44-10.9-62.1-3.3-18.2-7.6-44.7-9.6-59-3.3-24.1-8.9-61.5-10-65.9-.6-2.8 7.1 4.9 10.2 10.2zm-385.6 205.7c8.5 13.1 20.6 23.2 32 26.8 1.5.5 1.3 1.9-1.7 13.4-24.1 89.7-28.4 117.3-28.4 179.2 0 57.4 5.5 104.4 18.1 154.3 3.6 14.3 3.7 21.8.6 27.3-4.9 8.6-16.8 13.2-31.7 12.2-15.6-1-22.6-3.6-27.3-9.8-2.8-3.9-2.4-9.3 1.6-19 10.5-25.5 14.8-47.2 19.3-99.6 1.8-20.2 1.8-20.4-.4-42.5-3.9-38.3-6-114.6-4.3-151.7 1.8-39.5 5.1-65.5 10.6-84.5 2.4-8.4 5.3-15.2 6-14.4.2.2 2.7 3.9 5.6 8.3zm505.8 2.9c9.2 28.8 12.8 71.1 11.7 140.6-.7 50.3-1.9 78.2-4 96.5-2.1 17.5-2 32.9.4 58 4.1 42.2 7.4 58.6 17.1 83.7 5.5 14.2 5.8 16.8 2.9 21.6-4 6.6-19.9 11-35.3 9.9-12.6-1-20.9-5.8-24.8-14.2-2.6-5.6-2.4-10.2 1.1-23.5 17.3-67.1 23.2-151.7 15.5-219.5-3.1-27-7.6-48.2-20.5-97.2-4.4-16.6-8-30.4-8-30.6 0-.3 3.3-2 7.3-3.9 10.8-5.2 21.6-15.9 28.8-28.5 3.1-5.4 4.1-4.5 7.8 7.1zm-558.1 16.4c5.1 4.5 10 8.2 10.9 8.2 2.7 0 9.6-3.7 14.1-7.6 2.3-1.9 4.2-3.3 4.2-3 0 .4-.7 4.8-1.5 9.9-1.9 12.2-4.1 31.6-5.6 50.7-1.8 21.7-1.6 93.6.4 138.5.9 20.3 1.9 43.6 2.3 51.7.5 11.1.3 14.8-.6 14.8-2.2 0-11.3-10.5-13.9-16l-2.6-5.5-.1-44c0-24.2-.4-49.9-.8-57-1.9-35.1-5.9-69.3-11.6-98.7-2.8-14.3-8-48.1-8-51.5 0-1.9-.8-2.5 12.8 9.5zm612.702-8.6c-.2 1.3-1.6 10.6-3 20.7s-3.7 23.8-5.1 30.5c-8.9 43.8-13.102 97.5-12.102 154.6.7 35.6.1 44.3-3.4 51.2-2.1 4.2-10.1 13.3-12.9 14.8-1.8 1-1.8 1.1.6-53.5 2.2-51 2.9-115.6 1.5-140.5-1.2-20.5-4-48.3-6.4-63.8-.8-4.5-1.2-8.2-.9-8.2.3 0 2.2 1.6 4.3 3.5 5.1 4.6 11.6 7.8 14.4 7.1 1.2-.3 6.702-4.6 12.102-9.6 5.5-4.9 10.2-9 10.7-9 .4 0 .5 1 .2 2.2zm-614.702 269c6.3 1.5 17.1 12.1 20.8 20.3 2.3 5 2.6 6.6 2.1 12.4-1.5 17.2-4.7 36.3-7.5 44.7-3.3 9.6-10 24.4-11.1 24.4-1.8 0-26.1-25-28-28.7-3.5-7-5.1-16-5.1-28.4 0-13.9-.8-15.5-10-18.9-3.3-1.2-6.3-2.7-6.6-3.2-.3-.5.2-1.8 1.2-3 3.6-3.9 7.6-5.1 18.8-5.7l11-.6-4.6-4.1-4.7-4 3.2-2c7.4-4.5 12.4-5.3 20.5-3.2zm620.102.9c7.9 3.5 7.9 3.8 2.5 8.6l-4.9 4.3h9c10.6 0 15.3 1.1 19.5 4.6 4 3.4 3.8 5-.7 6.5-11.7 3.7-13.9 6.8-12.9 17.6.8 8.1-.6 19-3.5 27-1.8 5-3.9 7.5-15.5 19-7.4 7.3-13.8 13.3-14.2 13.3-.4 0-3-4.8-5.602-10.8-5.2-11.6-9-24.9-10-35.2-.4-3.6-1.4-11-2.3-16.5-1.8-11.9-1.1-15.7 4.5-23.8 10.102-14.6 22.502-19.9 34.102-14.6zm-524.602 33.9c-1.3 11.3-4 19.4-8.9 26.9l-3.7 5.5-2.1-5c-1.6-3.9-2-7.1-2.1-15.4 0-12.4 1.7-17.5 10.6-30.9l5.4-8.3.9 8.9c.6 5.7.5 12.2-.1 18.3zm421.7-15c7.8 12.9 10.4 25.1 7.6 35.8-.9 3.5-2.2 7.4-2.9 8.8l-1.4 2.6-3.3-5.2c-1.8-2.8-4.4-8.1-5.8-11.8-2.3-6.1-2.6-8.4-2.9-24.7l-.4-18 2.6 3c1.4 1.6 4.4 5.9 6.5 9.5z",
        fill: "#CD0F0F",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), this.buildBodyMuscleSVG())));
    }

    if (this.props.bodySide === "front") {
      return __jsx("div", {
        className: "front-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("svg", {
        width: "100%",
        viewBox: this.props.svgViewBox,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("g", {
        id: "front",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("g", {
        id: "Vector",
        fill: "#CD0F0F",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("path", {
        d: "M662.465.472c-39.2 1.3-57.8 6.7-89.3 25.5-34 20.3-52.8 39.2-65 65.4-11.3 24-14.5 44.7-13 83.4 1.4 38.4 5.2 62.6 14.1 90.3 1.6 5.2 2.8 9.5 2.6 9.6-.2.1-4.3.7-9.3 1.3-15.6 1.9-25.1 6.9-29.8 15.6-1.9 3.7-2.2 5.7-2.2 15.7 0 9.6.5 13 2.8 20.8 5.1 17.1 22.2 56.9 27.9 64.8 5.5 7.7 10.9 10.6 20.7 11.3l7.5.6 1.8 8.5c4.6 21.5 9.6 31.5 22.2 44.2 7.6 7.7 9.6 10.3 11.1 14.8 2.8 8.4 2.3 16.1-2 28.7-13.1 38.4-33.2 64.601-61 79.4-4.4 2.3-10 5.6-12.3 7.2-6.8 4.6-22.6 11.6-30 13.3-4.4 1-8.7 1.4-12.7.9-7.2-.7-25.5 1.6-36.2 4.5-19.4 5.5-35.7 15.1-49.9 29.4-20.3 20.5-38 55.9-44.3 88.6-4.9 25.5-5 46.2-.4 77 3.4 22.3 3.7 43.5.9 55.5-1 4.4-5 15.9-8.8 25.5-3.9 9.6-10.6 27.2-15 39s-10.6 28-13.8 36c-9.8 24.6-14 39.5-15.5 55.498-.9 9-3 13.1-16 31.4-14.3 20.3-20.5 30.3-28.1 45.4-14.7 29.1-22.4 51.7-36.4 106.7-5.4 21.2-12.1 46.1-15 55.5-8.7 28.7-32 97.6-35.8 105.4-6 12.9-14.1 19.4-32.2 26-9.3 3.4-16.8 8.3-33 21.1-19.7 15.8-29.2 21.6-44.8 27.4-8 3.1-17 10.4-19.2 15.6-.7 1.8-1.1 5.3-.8 8.6 1.1 12.6 8.9 13.9 41.6 6.8 1.9-.4 2.2 0 2.2 2.3 0 1.7-9.2 20.6-22.1 45.8-23.2 45.1-25.2 50.1-21.5 53.8 4.2 4.2 18.6 2.4 25.6-3.2 1.9-1.5 10.7-12.2 19.5-23.8 22.4-29.4 22.2-29.2 23-27 1.1 2.8-6.7 20.7-16.5 37.7-9.9 17.3-15.7 29.2-19 39-4.5 13.4-6.3 30-3.9 35.3 1.2 2.7 6.4 4.7 12.4 4.7 3.1 0 4.4-.7 8.2-4.8 5.2-5.6 15.3-20.4 19.3-28.1 3.3-6.7 15.4-34.2 23.5-53.4 6-14.4 7.5-15.7 7.5-6.7 0 2.8-2.3 11.8-6.1 23.5-6.8 21.4-8.9 30-12.4 49.8-2.6 14.7-2.5 16.2 1.7 19.1 3.1 2.2 10.6 2 14.5-.4 3.9-2.3 7.2-9.1 18.3-37 10.1-25.2 20.9-46.9 26.1-52.1 7.4-7.4 7.8-5 2.8 15.3-9.9 40.1-10.8 47.3-6.5 51.6 2.1 2.2 3.7 2.7 9.3 3 8.1.5 12.1-1.2 15-6.6 3.2-5.7 21.6-78.6 26.3-104.2 1.2-6.3 4.1-17.8 6.5-25.5 10.9-35.2 14.9-51.8 18.5-77 2.3-16.2 4.9-27.6 8.1-35.7 2.6-6.7 13-25.9 34.4-63.8 64.7-114.6 78.3-143.7 84.5-179.7 1.8-10.5 2.5-12.3 9-24.3 13.4-24.6 27.6-57.8 38-89 2.8-8.498 11.9-38.898 20.1-67.398 14.6-50.5 18.2-60.799 20-56 .4 1 3.9 34.7 7.8 74.9 13.4 135.898 14.4 148.098 16.6 199.198 1.7 39.2 1.3 44.2-4.2 59.2-3.1 8.3-3.6 11.1-4.1 21.1-.2 6.4.1 15.6.8 21 1.4 11.6.7 16.6-7.4 50.6-6.1 25.5-8.7 38.7-14.5 73.9-13.2 79.7-16.6 114.4-18.1 184.5-.6 31.6-1.3 43.9-2.9 56-7.2 53.9-8.8 111.9-4.6 165 2.6 31.7 8.4 83.1 11.7 104 2.8 17 3.2 22 3.2 39 .1 22.1-.3 25.3-8.5 80.6-6.7 45.7-10.5 67.3-15.5 89.4-9.6 42.1-11.4 55.4-11.4 83.8 0 19-.4 23-5.5 61-9.7 72.4-9.9 74.5-9.9 106.2-.1 36.4.6 41.6 11.3 82.4 4.8 18.3 4.7 35.4-.4 81.2-4.3 38-5.5 43.2-15.3 66.4-7.6 18-9.9 32.3-6.7 41.5 1.3 3.7 1.3 4.3-.9 9-1.2 2.7-4.6 8.7-7.5 13.3-7.5 12-10.5 18.4-14.2 29.7-5.5 17.5-13.7 31.9-33.9 60.1-11.5 16-11.7 17.7-2.6 22.7 2.3 1.3 4.9 3.9 6.1 6.2 3.2 5.8 6.7 8.9 14.8 13.6 4 2.3 9.7 5.6 12.7 7.4 6.6 4 22.2 10.9 30.5 13.7 7.1 2.3 12 1.8 18.3-1.8l4.2-2.5 2.7 3.2c5.7 6.7 14.8 8.4 28.6 5.3 12.6-2.9 20.9-8.1 24.8-15.7 3.1-6 17.5-42.8 20.9-53.4 4.3-13.4 5.3-23.3 4-41.2-.5-8-1.5-18.4-2.1-23.1-2-14.9.2-24.6 8.4-36.9 6.1-9 8.3-13.7 10.6-22.1 3.4-12 3.6-21.4 1-40.5-2.9-21.6-3.2-55.2-.5-77.5 7.4-62.8 16.5-106.7 30.7-147.2 12-34.6 14.3-47.6 14.3-81.3 0-21.1-.3-27.5-2.3-41-2-13.4-2.3-18.5-1.8-31 .9-24.6 5.2-38 20.3-63.1 5.3-8.7 11.5-20 13.9-24.9 14.1-29.5 34.9-114.8 48.9-200 4.8-29.7 5.3-34.8 7.5-78 .8-15.8 1.6-21.3 6.6-45.5 6.8-33.4 13.7-64.5 20.4-92.5 8.8-37.2 14.1-72.4 18.6-123.6.8-8.5 1.4-9.2 10.3-13.8 6.8-3.5 13.1-4.3 19.9-2.5 6.8 1.7 15.3 7.1 15.3 9.7 0 4.7 5.4 54.3 7.6 69.6 3.1 22.2 6.3 38.4 12.5 64.5 11.4 47.7 24.8 112.6 25.4 123.1.3 4.4 1 16.3 1.5 26.5 2 35.9 3.6 47.8 13.1 99.5 10 54.5 25.1 116.1 35.9 147 4 11.2 11.7 26.8 20.2 40.5 11.3 18.3 15.6 28.6 18.9 45.3 2.3 12 2.5 31.6.4 46.1-5.4 37.7-4.6 67.5 2.7 97.1 1.1 4.4 5.5 18.6 9.8 31.5 14.3 42.8 22.7 83.5 29.6 143.5 2.7 22.7 2.4 57.2-.5 79-3.8 28.2-1.1 42.8 11.4 61.4 8.5 12.6 10.6 22.1 8.6 37.5-1.9 14.4-2.9 36.1-2 45.7.5 5.8 2.1 12.8 4.4 19.7 6.4 19.2 19.6 51.2 22.9 55.4 4 5.3 11.9 9.7 21.5 12 14.2 3.4 23.6 1.7 29.4-5.1l2.7-3.2 4.2 2.5c6.3 3.6 11.2 4.1 18.3 1.8 8.305-2.8 23.905-9.8 30.505-13.7 3-1.8 8.6-4.9 12.3-6.9 7.8-4.3 13-9.1 15.5-14.4 1.1-2.5 3.1-4.4 6.2-6 8.6-4.5 8.3-6.7-3.2-22.8-21-29.6-27.3-40.8-34-60.7-4.1-12.4-6.7-17.8-14.6-30-2.4-3.7-5.4-9.1-6.7-12-2.3-4.9-2.3-5.5-1-9.2 3.6-10.1.9-24.4-9.005-47.4-3-6.9-6.1-15.5-6.9-19.1-4.4-19.2-9.8-70.5-9.7-92.5 0-17.1.5-20.1 7.4-46.5 6.2-23.7 7.2-32.8 7.1-66 0-32.8-.4-36.8-9.6-103-4.7-34.3-5.1-38.3-5.8-66-.9-33-1.6-38.5-10-76.1-6.5-29-9.9-48.1-16.9-95.4-8.2-54.7-8.5-58.3-8.5-80.5 0-17.1.4-21.8 3.1-38.5 4.8-28.7 11.3-91.8 13.3-127.5 2.4-44.5-.3-103.8-6.6-146.5-1-6.6-1.8-24.4-2.4-52-1.4-65.9-4-95.1-14.6-162.5-6.8-43.3-11.6-68.6-18-95.7-8-34.2-8.9-40-7.3-50.1.6-4.2 1.1-12.5 1.1-18.3 0-9.9-.3-11.6-4.1-22.6-2.3-6.6-4.5-15.3-5.1-19.4-1.4-11.3 1.9-80.3 6-125.2 4.5-49.4 18.2-186.398 18.8-189.198l.8-2.9 2.1 3c1.3 1.901 8.2 23.8 17.7 56.5 15.7 54.201 21.5 72.398 30.1 94.898 6.5 17.1 18.9 44.2 26.505 58 3.5 6.3 6.9 12.6 7.6 14 .8 1.4 1.4 3.8 1.4 5.5 0 4.5 3.6 20.8 7.1 32 6.3 20.5 16.5 42.5 36.3 78.4 5.7 10.2 13.6 24.7 17.6 32.1 4 7.4 14.8 26.8 24 43 38.5 68 38.2 67.4 43.4 103.1 3 20.3 8.1 41.9 16 67.4 3.1 9.9 7.2 25.6 9.1 35 3.7 18.2 19 80.7 23 94.1 2 6.6 3.2 8.8 6.2 11.4 3.5 3.1 3.9 3.2 10.9 2.8 8.2-.4 11.7-2.5 12.8-8 .7-3.5-2.3-18.5-8.8-44.7-5.5-21.9-5.1-24.6 2.3-17.2 5.2 5.2 15.9 26.6 26.1 52 14.6 36.7 16.2 39.1 26.2 39.1 3.8 0 5.4-.6 7.8-2.8l3.1-2.7-1.6-10c-3-18.7-6.5-33-13-53.8-6.3-20.1-7.6-27.4-5.5-30.7.7-1.1 1.1-.9 1.9 1.2 2.7 7.1 20.6 48.6 25 58 7.1 15.3 18.9 32.7 26 38.5 3.5 2.9 15.2.6 17-3.4 1.6-3.4 1.4-14.1-.5-23.1-2.9-14.1-8.7-27.4-22.7-51.7-7.3-12.5-16.7-33-16.7-36.2 0-4.6 2.4-1.8 31.2 36.1 10.1 13.3 13.4 16 21.8 18.2 7.2 1.9 12.9 1.4 15.6-1.3 3.7-3.8 1.7-8.7-21.5-53.9-12.4-24.2-22.1-44.2-22.1-45.7 0-2.3.3-2.6 2.8-2.2 1.5.3 7.4 1.4 13.2 2.5 15.1 2.9 20.2 2.7 24.1-.8 2.6-2.3 3.3-3.8 3.7-8 .2-2.8.2-6.3-.2-7.7-1.3-5.3-12.7-15.4-19.1-16.9-4.9-1.2-18.8-8-25.1-12.3-3.3-2.2-12.4-9.1-20.4-15.3-18.2-14.2-24.8-18.4-33-21.1-15.3-5.1-25.3-12.6-31.3-23.7-3.1-5.7-28.5-80.7-37.8-111.7-3.3-11-8.7-31-12-44.5-18.1-73.5-31.8-108.5-56.7-145-4.7-6.9-11.6-16.8-15.2-22.2-8.5-12.4-9.5-14.9-11.3-28.8-1.7-12.698-4.8-24.298-10.7-39.498-2.1-5.5-9.9-26-17.3-45.5s-15.5-40.5-18-46.5c-6.6-16.2-8.2-24.2-8.1-41.5 0-10.6.8-19.6 2.9-33.5 2.4-15.7 2.9-22.2 2.9-37.5-.1-33.3-5.4-57.1-19.4-85.5-9.3-19.1-17.5-31.1-28.905-42.6-22.3-22.3-48.2-32.599-83.6-33.3-10.1-.299-15.4-.8-19-2.1-7.4-2.5-20.8-8.9-25.7-12.2-2.4-1.6-7.9-4.9-12.3-7.2-21.9-11.599-38.3-29.5-51-55.6-8.7-17.9-12.7-29.7-13.3-39.1-.7-12.8 1.1-16.8 12.4-28.2 12.6-12.7 17.6-22.7 22.2-44.2l1.8-8.5 7.5-.5c9.2-.7 15.4-4 20.4-10.8 3.9-5.4 19-38.7 24.5-54.2 5.6-15.5 7.3-24.6 6.8-34.8-.9-17.9-9.9-25.7-32.3-28.5-4.9-.6-9.2-1.2-9.4-1.3-.1-.2 1.1-4.5 2.8-9.6 8.5-26 12.4-50.5 14.1-88.8 1-24.9.2-40.4-2.9-54.9-7.9-36.3-27.8-64.5-61-86.5-25.1-16.6-39-23.3-59.4-28.5-23.3-6-38.6-7.2-76.3-5.9zm59.1 13.1c21.4 3.8 38.4 10.2 56.5 20.9 41 24.5 63 53.1 71.5 93.3 2.6 12.2 3 36.7 1.1 57.5-2.4 24.8-7.5 65.3-8.4 66.2-.4.4-1.8-6.5-3.1-15.5-4.6-32.5-9.3-51.3-18.3-73.7-10-24.9-22.7-45.8-29.9-49.6-5.3-2.7-13.3-1.5-23.1 3.4-12.2 6.1-20.4 12.7-38.4 30.9-22.8 22.8-31.5 27.9-50 29-18.3 1.1-25.8-3-50.8-28.2-18.5-18.5-27.7-25.9-40.1-32.2-8.5-4.3-17.3-5.5-22.2-2.9-6.6 3.4-18.6 22.3-27.3 43-10.9 25.7-16 45.1-21.1 80.3-1.3 9-2.7 15.9-3.1 15.5-.8-.8-6.1-42.6-8.3-65.8-3.6-38.2-.4-64 11-88.2 9.2-19.3 22.5-35.1 42-49.6 28.5-21.4 51.5-31 84.5-35.6 10.9-1.5 67.1-.5 77.5 1.3zm-135.9 111.5c10 6.5 23.3 17.8 38.4 32.7 16.4 16.2 23.3 21.4 32.8 24.7 5.9 2 8.6 2.3 22.2 2.3 12.5 0 16.5-.4 20.8-1.8 7.5-2.7 18.7-11.3 35.9-27.9 15.1-14.6 37.2-32.2 41.8-33.4 3.8-.9 7.2.3 11.6 4.3 9.9 8.9 17.4 23.8 26.9 53.4 7.8 24 11.4 38.6 12.9 53.1 4.1 37.1-4 133-15 177.9-3.6 15.2-9.6 28-17.8 38.1-10.4 12.9-21.7 21-44 31.3-12.2 5.7-14.7 6.5-19.9 6.5-5.9 0-6 .1-15.3 7.5-5.2 4.2-11.7 8.7-14.6 10-9.4 4.5-24.8 5.4-38.8 2.3-7.2-1.6-14.8-5.7-24.3-13.2-8.2-6.5-8.5-6.6-14.4-6.6-5.2 0-7.6-.8-20-6.5-23.5-10.9-37.8-21.8-47.5-36.1-11.1-16.4-15-30.1-21.7-75.9-7.8-54-10.7-110.3-7.1-138.2 2.1-15.6 4.1-23.8 12-48.9 9.7-30.7 20-50.1 30.4-57.1 4.8-3.2 7.9-2.9 14.7 1.5zm-76.4 161.2c6.6 1.9 10.7 6.4 13.2 14.7.7 2.2.6 2.2-5.6-.7-5-2.4-7.7-3-12.8-3-8.1 0-11.9 2.1-14.9 8.2-2.4 5.1-2.5 6.3-1 10.7 1.6 4.5 3.3 3.8 4.8-1.9 1.5-6 4.5-10 7.4-10 3.1 0 15.1 9.2 18.2 13.8 1.4 2.1 3 6.3 3.5 9.3 1.1 6.6 2.9 23.3 2.5 23.7-.2.2-1.9-1.1-3.8-2.8l-3.6-3.1v-10.7c0-5.9-.4-12.3-.9-14.2l-.8-3.5-2.4 4.5c-3.2 6.1-5 13.4-5 20.1 0 4.4.6 6.4 2.8 10 4.2 6.4 6.5 8.2 11.2 8.2 2.8 0 4.1.4 4.4 1.6.3.9.7 7.2 1.1 14.1.4 6.9.9 13.3 1.1 14.2.3 1.1-.5 2.2-2.5 3.2-7.2 3.8-11.4 1.3-20-11.9-13.5-20.8-22.3-42.2-25.6-62.3-1-5.7-1.5-12.5-1.3-15.2.9-8.6 6.5-13.7 18.3-16.6 6.4-1.6 7.2-1.6 11.7-.4zm350.8.6c12.1 2.7 18 9 18 19.2 0 19.8-10.8 49.7-26.9 74.4-8.8 13.5-12.9 16-20.2 12.2-2-1-2.8-2.1-2.5-3.2.2-.9.7-6.9 1.1-13.2.9-16.9.8-16.7 5.6-16.7 4.5 0 6.6-1.6 11.1-8.2 3-4.2 3-4.7 2.5-12.5-.5-8.2-2.7-15.6-5.7-19.7-1.7-2.1-1.7-1.9-2.8 6.2-.6 4.6-.8 8.7-.6 9.1 1 1.6.6 9.6-.6 11.5-.8 1.1-2.7 2.9-4.3 3.8l-3 1.8.7-2.8c.4-1.5 1.1-7.5 1.6-13.3.7-7.8 1.6-11.9 3.3-15.2 2.3-4.5 11.1-12.4 17.1-15.4 3-1.5 3.2-1.5 5.7 1.3 1.5 1.6 3.2 5.2 4 8 1.5 6.1 3.5 6.6 4.4 1.1 1-5.6-.2-9.5-4-13.5-5.1-5.5-11.1-4.8-23.5 2.5-2.8 1.6-5.3 3-5.5 3-.9 0-.5-5.4.6-9.3 1.4-5 5.5-9.5 10.4-11.2 5.1-1.8 5.3-1.8 13.5.1zm-267 202.9c7 4.1 13.5 8.4 14.5 9.5.9 1 12.2 28.4 24.9 60.7 26.2 66.3 25.2 61.7 13.4 59.5-7.5-1.4-12.7-4.7-16.8-10.7-6.2-9-27.6-56.5-37-81.8-7.4-20.3-14.3-44.7-12.5-44.7.4 0 6.4 3.4 13.5 7.5zm185-6.2c0 2.6-6.9 26.3-11.1 38.2-9.4 26.9-33 79.2-39.7 88-4.4 5.9-10.6 9.2-18.4 10.1-4.5.5-5.9.4-6.3-.8-.7-1.8 44.9-117.6 47.2-120 1.9-1.9 26.3-16.8 27.6-16.8.4 0 .7.6.7 1.3zm-142.9 22.7c15.7 7.9 26.5 11.2 39 11.8 16.6.8 29.2-2.2 49.8-11.9 5.7-2.7 10.6-4.8 10.8-4.6.2.2-2.1 5.501-5.1 11.8-7.9 16.6-39.6 102.1-41.1 110.9-1.2 7.3 2.4 12 9.2 12 4.4 0 25.6-5.1 29.5-7.1 3.7-1.9 11-10.1 13.1-14.7.6-1.2 1.3-2.2 1.7-2.2.9 0 8.5 19.9 7.9 20.5-.3.2-5.5 2.2-11.7 4.3-22.6 8-36.4 18.8-44.2 34.4-7 14.3-7.3 17.4-6.5 71.8.8 59 1.9 86.6 4 94.5 3.5 13.7 6.2 17.3 29.9 41 29.9 29.8 34.5 32.2 63.9 33.2 8.6.3 15.7.601 15.7.7 0 0-1.6 4.6-3.6 10.1-7 19.7-11.9 42.2-15 70-2.5 22.098-3 85.898-1 116.998 1.1 16.6 1.8 44.7 2.1 84 .2 32.4.8 63.4 1.3 68.8.9 9 1.5 10.8 7.5 23.5 3.6 7.5 7.6 16.2 9 19.3 5 11.4 12.4 16.8 23.2 16.9 8.3 0 15.5-3.6 29.1-14.5 14.8-11.9 14.2-11.5 12.3-8.5-.8 1.4-9.1 15.5-18.4 31.5-47.2 81.4-57.8 97.3-90.3 136.1-25.2 30.1-29.8 35-43 45.5-7 5.6-13.3 10.8-13.9 11.7-.8.9-1.3 4.4-1.3 8 0 3.5-.3 6.2-.7 6-14.6-7.5-26.9-7-38.8 1.7-2 1.4-2 1.3-1.7-6.3.2-5.3-.1-8.2-1-9.3-.7-.9-7-6.2-14-11.8-13.2-10.5-17.9-15.5-42.7-45.1-32.6-38.9-42.5-53.9-90.6-136.5-18.3-31.5-19.7-33.9-18.3-32.8.7.5 6.2 4.9 12.2 9.8 13.6 10.9 20.8 14.5 29.1 14.5 11-.1 18.1-5.4 23.8-18 1.6-3.6 5.6-12.2 8.9-19.2 5.2-11 6.1-13.9 6.9-21.5.5-4.8 1.2-35.8 1.4-68.8.3-39.8 1-68.2 2.1-84.4 1.3-18.9 1.5-33.4 1.1-64-.6-47.398-2.3-65.797-8.3-92.998-2.1-9.099-9.5-34-12-39.7-.3-.8 4.2-1.3 15.3-1.7 29.5-1 34-3.4 63.9-33.2 23.8-23.7 26.3-27.2 29.9-41 2.1-8 3.3-35 4.1-94.5.7-55.2.5-57.2-6.6-71.8-7.8-15.6-21.6-26.4-44.2-34.4-6.2-2.1-11.4-4.1-11.7-4.3-.5-.6 7.1-20.5 7.9-20.5.3 0 1.4 1.5 2.4 3.2 3.5 6 8.7 11.8 12.4 13.7 4 2 25.2 7.1 29.6 7.1 7 0 10.6-5 9.2-12.6-.8-3.9-13.3-39-26.6-74.4-5-13.5-10.3-28.1-11.7-32.5-1.4-4.4-3.4-9.7-4.4-11.8-1.1-2-1.7-3.7-1.4-3.7.3 0 5.1 2.3 10.6 5zm-48.8 38c2.1 5.8 3.6 11.3 3.3 12.5-.3 1.1-5.1 7.7-10.8 14.5-5.6 6.9-16.4 20.4-24 30-20.7 26-22.3 27.8-26.9 29.2-5.5 1.6-13.1 0-22.9-5-10.4-5.3-24.1-14.2-23.5-15.2.3-.5 7-4.8 14.8-9.6 39.2-23.9 46-31 68.7-70.8l8.5-14.9 4.5 9.5c2.5 5.2 6.2 14.1 8.3 19.8zm208.7-9.5c19.4 33.5 27.6 42.4 55.6 59.6 5.7 3.5 14 8.7 18.4 11.4l8 5.1-12.8 7.7c-20.5 12.4-31.5 15.201-39.1 9.8-1.7-1.299-7.7-8.2-13.4-15.4-5.6-7.2-17.6-22.1-26.6-33.2-9-11-16.8-21-17.4-22.2-1.2-2.6 3.4-16.1 11.1-32.6 3.9-8.5 4.7-9.5 5.7-8 .7 1 5.4 9 10.5 17.8zm-189.3 54.5c2 5.1 2.3 7.5 1.8 11.3-.6 4.9-4.7 16.3-8.5 23.8-3.4 6.5-5.3 7-27 6.7l-18.9-.3 42.4-64.4 3.8 8.2c2.2 4.5 5 11.1 6.4 14.7zm179.2 41.8c-24.1.3-23.7.501-29.5-12.9-2.3-5.099-4.7-11.9-5.4-15-1.5-6.9-.6-10.4 6.6-26.1l4.9-10.7 42.6 64.4-19.2.3zm-353.9-13.5c-.8.8-7 6.1-13.6 12-23.6 20.7-29 28.701-45.5 67.3-15.1 35.5-20.3 55.701-27.9 109.8-2.6 18.401-5.5 32.1-10.8 51.1-.5 1.6-1.5 3-2.3 3-1.1 0-1.5-3.2-2-16.5-.4-9.1-1.7-27.3-2.9-40.5-2.9-31-2.5-50.3 1.4-68.2 6.1-28.2 21.4-65.7 32.9-80.8 12.8-16.7 32.9-28.8 60.1-36 10.9-2.9 12.7-3.1 10.6-1.2zm505.6 1.3c35.4 9.1 56.9 25.3 70.305 52.9 7.3 14.9 15.7 37.001 19.6 51.1 7.1 26 8.1 43.9 4.5 81.4-1.2 12.4-2.5 30.1-2.8 39.5-.6 13.8-1 17-2.1 17-2.5 0-9.7-30-13.2-55-7.2-52-12.5-72.9-27.105-107.5-12.2-28.6-20.3-43.2-29.6-53.2-2.6-2.8-10.1-9.8-16.7-15.6-15.8-13.9-15.1-13.2-13.8-13.2.6 0 5.5 1.2 10.9 2.6zm-468.1 3.9c2.2 1.3 5.5 3.2 7.3 4.1 1.7 1 3.2 2.2 3.2 2.7s-5 12.001-11.2 25.6c-15.1 33.401-20.2 45.4-22.7 53.4-4 13.2-7.6 20.5-20.9 42.7-27.6 46.2-44.6 66.9-69.1 84l-3.4 2.3.7-9.9c2.8-38.099 10.5-77 21.2-106.9 5.3-14.7 16.5-37.5 24.1-48.8 16.4-24.7 49.4-51.399 63.8-51.6 1.7 0 4.8 1 7 2.4zm433.5-1c10.6 3.7 26.717 15.78 40.8 29.5 32.753 31.908 39.266 61.16 51.2 105.3 7.975 29.499 11.805 68.6 10.805 77.5l-.3 3.1-7.505-5.6c-16.6-12.5-35.7-34.4-51.1-58.8-8.8-14-24.2-40-27.1-46-1.4-2.8-3.8-8.8-5.3-13.5-4.3-13.3-7.7-21.4-22.1-53.1-7.4-16.3-13.4-30.1-13.4-30.6s1.5-1.7 3.3-2.7c1.7-.9 4.161-2.99 7.2-4.1 4.966-1.812 7.6-3.1 13.5-1zm-409.6 11.5c14.2 6 32.8 9.3 69 12 40.4 3 50.7 4.9 63.5 11.1 14.9 7.401 26.6 21.3 30.8 37 1.5 5.701 1.7 12.7 1.7 65.4.1 61.3-.1 64.301-4.3 75.6-3.3 8.8-6.8 13.1-26.8 33.5-21.1 21.5-24 23.5-40.9 27.5-7.7 1.8-12 2.1-32.4 2.1-21.2 0-24.2-.199-30.1-2.1-12.3-3.9-21.9-11.8-33.1-27.1-13.2-18-22.1-23.5-68.2-41.7-13.2-5.2-24.4-9.7-24.9-10-.5-.3.9-2.4 3.1-4.7 12.3-12.9 26.3-34.1 37.7-57.1 8.7-17.8 16.1-35.8 29-71 10.1-27.5 20.1-52.5 20.9-52.5.3 0 2.5.9 5 2zm381.9 8.1s10.532 28.38 17.7 46.4c12.54 31.524 16.868 50.677 34.1 79.9 10.721 18.181 21.3 33.901 31.1 44.2 2.2 2.3 3.6 4.4 3.1 4.7-.4.3-11.7 4.8-25 10.1-47 18.6-55.4 23.8-69.4 43.2-6.9 9.6-16.2 18.5-22.8 21.8-10.3 5.3-14.8 5.9-39.6 5.9-19.8-.1-24.2-.4-31.9-2.2-16.8-4-19.9-6.099-40.4-27-28.3-28.7-29.8-31.7-31.4-63.6-1.4-28.5-.3-104.3 1.7-111.5 4.9-18.3 21.1-34.999 39.5-40.9 7.5-2.299 27.5-5 49-6.6 38.3-2.7 74-12.4 74-12.4s4.9-1.799 5.5-1.7c.5.1 4.8 9.7 4.8 9.7zm-478.1 185.5c.7.701-2.5 10.4-17.5 51.9-39.9 110.7-49.3 135.698-56.7 150.498-5.9 11.7-15.5 26.9-20.6 32.7-3.1 3.4-23.4 20.3-24.5 20.3-.4 0-1.2-6-1.8-13.3-.6-7.2-1.4-14.8-1.6-16.8-1.5-11.3 3.7-40.3 12.1-68.398 3.1-10.5 8.1-27.3 11.1-37.5 8.7-29.8 18.3-46.5 40.9-71 22-23.9 43-45.3 45.3-46.2 1.4-.5 4.6-1.3 7.1-1.8 2.5-.4 4.8-.8 5.1-.9.3 0 .8.201 1.1.5zm575.4 1.5c5 1.3 8.3 4.4 32.605 30.4 39 41.8 45.8 52.3 55.8 86.5 2.8 9.6 7.1 24 9.6 31.9 12.7 40.998 15.7 63.298 12.4 92.798-.7 6.8-1.5 12.3-1.8 12.3-.9 0-19.4-15.2-23.4-19.2-8.4-8.4-22.5-33-30.3-52.8-5.9-14.998-21.7-58.098-42.005-114.498-22.1-61.4-24.5-68.199-23.8-68.9.6-.599 4.8 0 10.9 1.5zm-558.3 6.2c15.7 7.4 17.4 13.8 7.4 29.2-3.9 6-6.7 12.2-10 21.7-47.7 139.398-58.4 169.698-66.2 186.398-7.9 17.1-24.7 36.9-35.2 41.6-5.3 2.3-5.8 1.9-6.9-5.1-1.9-12.2.8-19.6 15.7-44.2 24.5-40.5 46.9-99.298 76.4-200.898 10.1-34.9 9.2-32 10.5-32 .6 0 4.4 1.5 8.3 3.3zm544.3 11.7c2.3 8 7.7 26.2 11.9 40.5 8 27 15.2 49 26.2 80.5 14.905 42.698 27.905 71.698 43.805 97.898 11.3 18.6 14.6 25.7 15.2 33 .6 6.2-.2 13.7-1.6 16-2.7 4.2-22-11.9-31.7-26.5-10.7-16.1-16.1-30.2-56.805-148.898-8.5-24.8-17.1-49.9-19.2-55.8-2.4-7-5.6-13.9-9.2-19.4-7.3-11.2-8-16.2-3.1-21.8 3.4-3.8 16-10.7 18.8-10.2.8.1 3 5.7 5.7 14.7zm-514.8 9.5c7.6 3.5 28.6 18.1 34.7 24 6.3 6.1 8.8 12.2 12.1 29.5 1.3 6.9 3.5 17.6 4.9 23.9 1.4 6.2 2.4 11.5 2.2 11.7-.2.201-3.3-3.5-7-8.3-3.6-4.9-12-14.7-18.7-21.8-21.3-22.8-30.5-36.8-34.9-53.2-2.6-9.5-2.1-9.9 6.7-5.8zm479.4-1.9c1.1 1.1-3.2 14.8-7.2 23-4.9 10-12.2 19.6-28.5 37.5-11.3 12.3-16.5 18.401-24.2 28.5-2.3 2.901-2.3 2.9-1.8.4.2-1.4 1.3-6.7 2.5-11.8 1.1-5.1 3-14.3 4.1-20.5 2.4-13.4 5-22 8.4-26.9 3.9-5.7 27.9-23.3 38.8-28.4 5.4-2.5 6.9-2.8 7.9-1.8zm-441.5 93.5c6.1 7.901 11.5 15.3 12 16.4.6 1.1 1.8 5.4 2.6 9.5.9 4.1 5.2 18.6 9.6 32.098 4.5 13.6 8.1 25.2 8.1 25.9 0 2.1-2.8-.8-7.3-7.5-2.3-3.3-14.7-20.2-27.7-37.498-24.1-32.2-27.7-38.1-30.4-50.1-1.5-6.5-3.6-25.099-3.6-32.3 0-3.799.1-3.7 12.9 12.6 7 9 17.8 22.9 23.8 30.9zm431.3-29.3c-1.2 13.6-3.6 24.3-7.1 31.8-1.3 2.701-12.3 18.2-24.4 34.4-12.2 16.198-24.7 33.198-27.8 37.598-5.8 8.3-8.7 11.5-8.7 9.6 0-.6 3.8-12.8 8.5-27.2 4.7-14.398 9-29.098 9.6-32.598 1.3-7.7 2.9-10 31.4-46.6 21.6-27.8 20.4-27.3 18.5-7zm-372.7-5.3c2.2.4 5.2 2.1 7.1 3.9 3 2.901 3.5 4.1 6.1 17.6 9.6 50.4 9.9 55.7 9.2 182.498-.7 124.1-1.8 149.9-7.2 157.2-1 1.4-1.5.4-3-6.3-8.3-37.8-27.8-79.7-59.9-128.5-5.9-8.9-13.3-19.6-16.5-23.8-11.9-15.7-10.9-12.4-14.1-44.2-1.6-15.6-3.2-29.9-3.4-31.8-.5-3-.3-3.3.9-2 .8.8 3.7 5.7 6.5 10.9 9.9 18.1 20.8 31.3 38.5 46.1 4.9 4.1 12.7 11.8 17.1 16.9 6.1 7 9.5 10.1 13.1 11.7l4.8 2.3.3-4.3c.2-3.5-.9-6.8-6.1-18.2-3.5-7.7-7.7-17.4-9.1-21.5-2.7-7.3-7.8-27.1-7.3-27.7.2-.1 4 1 8.5 2.4 4.5 1.5 8.4 2.4 8.8 2.1.3-.4.7-4.2.8-8.6l.1-7.9-9.7-19.5c-8.4-16.7-14.8-31.898-14.8-35.098 0-.5 2.2-.7 5.4-.3l5.4.7.7-5.3c.8-6.3-.1-9.2-14.1-48.7-5.2-14.5-9.4-26.7-9.4-27.1 0-.6 23.7 3.1 41.3 6.5zm309.7 22.4c-13.8 39.2-14.2 40.5-13.4 46.9l.6 5.3 5.4-.7c4.6-.5 5.4-.4 5.4 1 0 3.2-6.8 19.198-14.8 34.798-4.4 8.6-8.5 17.4-9.1 19.5-1.3 4.6-.3 16.3 1.3 16.3.7 0 4.5-1.1 8.6-2.4 4.1-1.4 7.5-2.4 7.7-2.3.1.1-.5 3.3-1.3 7.2-2.3 10.8-7.6 25.7-14.8 41.5-5.5 11.8-6.6 15.3-6.4 18.7l.3 4.3 5.1-2.4c3.8-1.8 6.9-4.5 12.1-10.7 7.3-8.7 10.7-12 23.5-22.8 12.9-10.8 23.5-24.2 32.8-41.1 2.9-5.2 5.8-10.2 6.6-11 1.3-1.3 1.4-1.1.9 1.5-.2 1.7-1.6 14.9-3 29.5s-3 28.1-3.5 30c-.6 1.9-3.7 7.1-6.9 11.5-3.3 4.4-11.6 16.3-18.4 26.5-34.8 51.7-50.5 85.4-63.6 136.5l-.7 3-2.3-5c-2.8-6.1-3.5-16-5.1-70-1.2-45.5-1.3-174.5 0-202.998.9-21.3 2.6-33.199 8.8-64.4 3.7-18.5 4-18.799 21-22 18.5-3.5 32.7-5.7 33-5 .1.3-4.3 13.3-9.8 28.8zm-386.5 49.4c4.9 7 16.3 22.098 25.4 33.498l16.5 20.7 3.8 22c2.1 12.1 3.7 22.4 3.5 22.9-.5 1.6-27.1-25.9-34.5-35.6-15.9-20.8-22.9-37.6-25.3-60.498-1.1-9.9-.6-18.499 1-16.7.5.5 4.8 6.7 9.6 13.7zm443.1-1.4c-1.3 18.398-5.6 32.698-14.5 48.198-7.9 13.9-23.9 33.1-38.4 46.2l-7.9 7.1.7-4.4c.4-2.5 2.2-12.9 4-23.2l3.3-18.7 12.4-15.3c13.8-17 24.3-30.898 33.2-44.098 7.3-10.6 8.2-10.1 7.2 4.2zm-640.5 93.998l8.3 25 4.9-.6 4.8-.6-7.5 12.9c-7.8 13.5-13 21.1-36.3 53.5-28.1 39-37.3 56.6-58.1 111.4-9.1 24-9.5 25.3-11.7 39.4-1.3 7.9-1.4 10.6-.5 11.5 2.5 2.4 6.6-5.5 18.7-36.1 6.8-16.9 13.9-35.3 15.9-40.8 8.5-23.5 24-49.6 45.2-76.3 14.2-17.8 17-21.7 29.7-40.1l10-14.4.8 3.9c1.4 6.3.2 25.1-2.1 31.4-3 8.7-24.6 58-32.6 74.5-8.7 18-14.4 27.5-37.9 63.4-18.4 28.1-20 31.6-16.8 35.5 1.1 1.3 1.7 1.4 4 .2 4-2.1 9.6-7.9 12.6-13.3 1.5-2.6 9.3-16.5 17.2-30.8 23.9-42.8 47.9-84.2 73.8-127.3 13.4-22.4 24.9-41.4 25.5-42.2 5.1-6.8-12.2 37.5-22.9 59-6.5 13-23.3 43.1-56.6 101.5-23.9 41.8-39.8 72.1-45.4 86.5-3.7 9.2-4.2 14.8-2.7 29 .8 7.1.6 8.1-3.2 20-2.3 6.9-8.2 26.9-13.2 44.5-8.4 29.4-9.2 33.1-10.1 45-1.9 27.2-5 42.3-14 68.9-7.8 23.1-9.6 26.6-13.9 26.6-2.5 0-4.9-2.6-4.5-4.7.2-1 1.3-6.8 2.4-12.8 1.1-6.1 4.5-23.7 7.5-39.2 3.1-15.4 6.5-34.3 7.6-42 2.5-16.1 4-54.6 2.2-55.7-.6-.3-1.3.2-1.6 1.1-2.1 7.3-3.4 14.6-7.6 42.6-2.6 17.6-5.2 32.3-5.6 32.7-.5.5-5.2 2.3-10.4 4.1-11.2 3.7-16.7 3.6-25.1-.6-11.5-5.8-31.6-23.1-40.5-34.8-5.3-7-11.4-19-11.4-22.4 0-2.8 6.2-9.9 9.3-10.7 1.3-.3 9.7-1.2 18.8-2.1 9.1-.8 19-2.2 22-3.2 10.5-3.4 14.9-10.5 19.1-31.3 1.9-9 2-11.2 1-12.2-1.9-1.8-3.5.7-6.7 10.3-3.1 9.3-9.1 16.7-16.6 20.4-10.9 5.6-28 8.5-49.9 8.5-15.4 0-23.9 1.8-34.8 7-9.4 4.5-10.4 4.6-15.6 2.5-3.9-1.6-3.9-1.8-1.5-8.1.5-1.5 4.7-3.9 13.6-7.9 15.2-6.8 23.4-11.3 51.1-28.2 11.4-6.9 26.8-16.2 34.1-20.7l13.5-8.1h10c17.1.1 18.9 1 36.8 18.3 14.2 13.7 25.3 23 26.3 22 .2-.2-.2-2.8-.9-5.8-5.1-21.6-26.6-38.4-51.8-40.6-4.3-.4-7.7-.9-7.5-1.3 4.4-8.1 15.8-33.1 20-44.1 7.2-18.9 10.9-30.4 22.7-71.5 33.7-116.7 35-120.9 44.6-144.5 7.1-17.4 14.8-32.1 25.8-49.3 4.8-7.5 8.9-13.7 9.1-13.7.2 0 4.1 11.2 8.6 24.9zm845.405-9.9c13.8 21.4 25.2 46.1 35.1 75.5 4 12.1 8 25.7 34.4 117.2 15.7 54.4 26.5 84.3 38.6 107.2 2.4 4.6 4.4 8.4 4.4 8.6 0 .1-3.5.5-7.8.9-20.9 1.8-40.5 14.4-48.2 30.9-2.7 5.7-5.4 15.7-4.3 15.7 1.7 0 12.9-9.6 26.1-22.2 13.2-12.8 15.9-14.9 20.5-16.3 7.7-2.4 21.3-3 26.2-1.3 2.2.8 17.4 9.6 33.7 19.6 40.2 24.5 48.2 29.1 64.2 36.3 13.7 6.2 14.7 7 16 12.1.6 2.5.2 2.9-3 4.3-5.2 2.1-6.2 2-15.6-2.5-10.8-5.2-19.5-7-34.3-7-40.2-.1-60.6-8.6-66.4-27.6-2.4-7.5-4.8-12.4-6.1-12.4-2 0-2 4.9 0 14.4 6.1 27.8 10 30.7 45.5 33.6 11.4.9 14.6 1.5 17.2 3.3 3.5 2.3 6.3 6.5 6.3 9.4 0 2.8-5.6 14-10.5 20.8-8.3 11.6-28.9 29.7-40.9 35.7-8.9 4.5-14.2 4.7-25.6.9-5.2-1.8-9.9-3.6-10.3-4.1-.5-.4-3.1-15.5-5.8-33.5-5-33.7-7.2-44-9.1-42.9-1.5 1-.3 39.3 1.6 51.9 2.2 13.9 6.6 38.1 13 70.9 3 15.3 5.2 28.4 4.9 29.2-.3.8-1.7 1.7-3.1 2.1-4.4 1.1-7.2-3.4-14-23.2-9.7-28.2-13.3-45.5-15.1-72-.8-12.1-1.6-15.3-10-45-5.1-17.6-11-37.6-13.2-44.5-3.9-11.8-4.1-12.9-3.3-19.5.4-3.9.8-10.2.7-14 0-8.2-2.7-15.8-13.9-38.5-6.8-14-11.9-23.1-58.4-105-11.7-20.6-25.7-46.1-30.9-56.5-9.8-19.3-24.6-54.1-25.7-60.5l-.6-3.5 2.2 3c6.3 8.8 62 103.4 84.5 143.5 35.5 63.4 36.3 64.7 43.6 68.5 2.4 1.3 2.9 1.2 4-.1 2.5-3.1 1.5-7.7-3.3-15-43.8-66.6-46.7-71.7-64.1-112-5.2-12-12-27.5-15-34.4-3.3-7.4-6-15.2-6.6-19-1.2-7.3-1.3-18.5-.3-24.4l.7-3.9 13.2 18.9c7.3 10.4 18.4 25.4 24.8 33.4 25.1 31.2 37.6 53.1 51.3 90 16.3 43.5 26.3 66 29.2 66 2.1 0 2.1-3.1.1-15-1.6-9.4-3.7-16.5-9.5-31.8-23.8-63.3-30.5-75.8-67.8-127.4-17.3-23.9-19.9-27.8-29.3-44l-6.5-11.1 9.6 1.2 8.3-25.1c4.6-13.7 8.7-24.6 9.1-24.1.5.4 4.7 6.9 9.5 14.3zm-635.005 68c33.1 53.1 57 104.7 66.6 143.9 3.5 14.2 1.1 26.6-5.7 29.1-4.9 1.9-13.1-3.2-41.2-25.8-36.1-28.9-42.5-41.1-34.4-64.9 6.4-18.9 6.9-25.2 4.6-57.9-.8-10.4.4-39 1.6-37.7.4.4 4.2 6.4 8.5 13.3zm416 19.5c-.3 8.2-.8 19.7-1.1 25.5-.7 12.4.9 22.6 5.8 37.1 6.2 18.1 3.9 28.4-9.7 43-12.3 13.3-50.4 43.5-60 47.5-11.4 4.7-16.5-12.5-10.2-34.1 12.6-43.3 32.3-85.1 65.3-138.4l8.9-14.5.8 9.5c.4 5.2.5 16.1.2 24.4zm-429.9 126.7c9.1 13.7 14.2 29.5 16.9 52.3 3.8 32.7.8 51.7-13.9 86.3-10.4 24.6-35.1 96.8-40.1 117-1.5 6.3-3 10.9-3.4 10.4-.3-.6-.5-12.6-.5-26.9.2-27 .5-30.7 6.4-66.3 3.7-22.1 4.8-30.2 11.5-85.5 3-24.8 6.2-49.1 7-54 1.9-10.9 7.4-39.5 8.1-41.4.7-2 2.6 0 8 8.1zm446.2 13.8c5 25.9 5.7 30.9 12.7 89 3 25 7.5 57.9 10 73 2.4 15.1 4.9 32.2 5.4 38 .9 11.3.9 51.5 0 52.5-.4.3-2.1-5.1-3.8-12.1-4.2-16.7-27.4-85-36.2-106.7-16.5-40.5-18.3-47.7-18.3-74.2 0-33.9 6.5-58.3 20.7-77.3 2.1-3 4.3-5 4.7-4.5.4.4 2.6 10.5 4.8 22.3zm-413.8 28.4c6.5 14.6 8.1 20.5 9.6 36.5 5.8 61.6 15.8 118.1 29.9 169.4 5.5 20.1 10.3 35.3 26.7 83.7 18.1 53.3 24 78.6 27.8 119.4 2.3 23.8 2.4 26.4 1.1 25.1-.5-.6-10.1-25.8-21.4-56-11.3-30.3-24.4-64.6-29.1-76.3-11.7-28.9-14.5-37.7-22.6-70.5-15.5-62.9-19.4-90.3-20.5-145.2-.6-31.4-2.1-60.7-3.9-79.8-.6-7-1-12.7-.8-12.7.1 0 1.6 2.9 3.2 6.4zm371.4 6.3c-1.8 19.4-3.3 50.7-3.9 81.8-.9 42.7-3 62.2-10.5 99.6-4.4 21.8-15.4 66.9-19.6 79.9-1.4 4.7-6.4 17.9-11.1 29.5-4.7 11.5-18.2 46.9-30 78.5s-21.9 57.9-22.4 58.5c-1.2 1.2-1.2.2.6-20 4.3-48.4 11.7-79 35.6-146.3 25.6-72.1 41.6-146.9 49.3-230.8 1.2-12.8 2.1-17.7 4.5-24 3.1-8.6 7.8-19.4 8.3-19.4.2 0-.2 5.7-.8 12.7zm-342.6 48.2c4.7 8.8 6.5 16.3 6.5 27.6 0 14.7-.8 60.4-1 60.1-.6-.6-2.6-13-7.9-48.3-3-20.6-6.1-40.8-6.8-45l-1.3-7.4 3.8 3.7c2.1 2 5.1 6.2 6.7 9.3zm321.7-11.7c-.2.7-3.6 22.7-7.5 48.8-3.9 26.1-7.4 48.4-7.9 49.5-.5 1.1-.8-5.7-.7-16 .1-9.9-.1-25.9-.4-35.5-.4-15-.2-18.3 1.4-23.5 2.5-8.3 5.7-14.2 10.6-19.8 4.3-4.9 5.3-5.6 4.5-3.5zm37.6 60.2c3.9 17.9 5.5 29.6 7.4 55.1.9 11.5 2.7 32.9 4 47.5 4.2 46 4.8 59.5 4.2 93-.9 44.8-2.3 58.6-11.8 111-3.3 18.4-11.2 64-17.4 101.4-6.3 37.3-11.6 68-11.8 68.3-.9.8-13.1-19.3-18.3-30-6.2-13.1-13.3-33.9-16.3-48.2-1.1-5.5-5.9-32.7-10.7-60.5-6.7-39.5-8.5-51.8-8.1-56.5.7-8.5 7.7-29.1 16.4-49 15.8-35.8 26.6-67 35.7-103.5 9.9-39.3 14.9-68.3 20.2-117.7 1.5-13.9 2.9-25.1 3.1-24.9.2.2 1.7 6.5 3.4 14zm-401.1 7.1c5.3 48.5 9.3 73.3 17.2 107.5 9.9 42.9 21.8 78.9 38.4 115.7 8.6 19.2 17.6 46 17.6 52.8 0 7.3-18.7 114.1-22.2 126.8-4.2 15-9.3 28.3-15.6 40.7-5.9 11.5-15.2 26.5-16 25.7-.3-.2-5.8-32.3-12.4-71.3-6.5-39-14.1-83.3-16.9-98.4-9.1-50-10.9-67.1-11.8-110.5-.6-33 0-46.3 4.2-92.5 1.3-14.6 2.9-33 3.5-41 2.5-35.3 4.6-49.9 10.6-74 .9-3.6 1.1-2.6 3.4 18.5zm70.4-3.5c4.2 6.6 7.6 12.6 7.6 13.4 0 .8-3.9 10.6-8.6 21.8-4.8 11.1-9 21.4-9.5 22.7-.5 1.3-1.2 2.2-1.4 1.9-.3-.3 2.9-66 3.5-71.6.1-1 1.8 1.3 8.4 11.8zm264.7 24.1c1 19.4 1.7 35.4 1.5 35.6-.5.5-18.2-41.1-19.1-44.9-.6-2.3.6-4.7 7.1-14.7 4.3-6.6 8-11.8 8.2-11.6.2.2 1.2 16.2 2.3 35.6zm-232.3 16.8c3.9 4.5 7.2 8.8 7.2 9.6 0 .9-5.2 12.5-11.6 25.8-6.4 13.3-14.1 29.6-17.2 36.1l-5.6 11.9-2.3-4.9c-6.2-13.9-7-35.1-1.9-53.1 2.4-8.4 9.7-28.7 14-38.8l1.7-4 4.2 4.7c2.3 2.5 7.5 8.3 11.5 12.7zm212.5 1.4c10.4 27.8 13.3 42.2 11.6 57-1.3 11.4-6 25.1-7.9 23.1-.5-.5-8.3-16.6-17.5-35.9-13.5-28.2-16.6-35.4-15.9-37.2.9-2.1 21.4-25.3 22.4-25.3.3 0 3.6 8.2 7.3 18.3zm-734.1 8.4c4.9 11.1 6.3 7.8-18.4 42.4-12.2 17.1-23.2 31.7-24.3 32.5-2.8 1.8-7.7 2.7-9.3 1.6-4-2.7 36.5-74.6 45.1-80.1 1.7-1.1 3.5-2.1 3.8-2.1.4 0 1.8 2.6 3.1 5.7zm1239.405-3.6c5.6 3.4 30.8 44.6 40.6 66.2 4.6 10.1 5.6 13.2 4.6 13.9-1.6 1.1-6.5.2-9.3-1.6-1.1-.7-12-15.4-24.3-32.5l-22.3-31.2 1.2-3.7c1.7-5.3 5.1-13.2 5.7-13.2.2 0 2 .9 3.8 2.1zm-675.405 39.7c3.3 4.1 3.3 3.2.8 21.8-4.4 33.2-10.8 64-19.6 94.4-4.8 16.9-14.1 45.4-14.3 43.9-.5-4.3-4.3-20.2-8.6-35.9-5-18.5-6.3-22.6-13.9-43-2.8-7.8-3.1-9.5-3-20.5 0-10.8.4-13 3.3-22 2.9-8.6 25.3-65.3 26.8-67.8.5-.9 22.8 21.9 28.5 29.1zm142.4-6.8c19.5 48.3 22.1 57 21.1 71.4-.5 8.3-1.4 11.5-8.7 31.5-3.9 10.8-13.4 45.5-16.1 58.6l-1.2 6-5.8-17.6c-10.6-31.9-18.4-62.9-23.8-94.9-4.5-26.6-6.5-43.5-5.3-45.7 1.9-3.4 29.7-32.2 30.4-31.5.4.4 4.6 10.4 9.4 22.2zm-316.2 0c-3.7 31-4.5 39.2-5.5 61.3-2.2 45.4.9 89.9 11.6 167.5 12.3 88.8 14.7 121.3 11 149.9-2.9 22.6-9.4 56.9-13 68.8-8.2 26.9-10.5 31.9-13.5 28.9-1.3-1.3-14.8-80.6-19-111.4-6.9-51.6-11.2-94.6-13.1-130.7-1.6-31.8.2-65.3 6.2-113.3 3.8-30.6 8.1-50.7 16.5-77.6 5.5-17.8 19.2-55.9 19.9-55.2.1.2-.4 5.5-1.1 11.8zm458.4 6.5c12.3 33.1 21 63.1 25.1 86.6 4.9 28.2 9.5 73.4 10.7 104.9 1.2 32.9-3.3 89.1-13.2 164-3.7 28.3-18.1 113.1-19.4 114.4-2.2 2.2-4.5-1.2-8.3-12.5-6.8-20.5-9.6-32.1-13.6-55.9-5.7-33.5-6.5-42.3-5.8-65 .8-27 3.3-49.7 12.7-117.7 12.6-90.7 14.8-146.8 7.9-205.8-2.6-22.9-3.3-30.1-2.6-29.5.3.3 3.2 7.7 6.5 16.5zm-822.4.6c3.8 4.5 3.4 8.2-2.5 20.6-2.8 5.9-11.4 24.2-19 40.7-13.7 29.4-18.1 37.2-22.8 39.8-2.1 1.1-2.6 1-4.7-1.5-1.3-1.6-2.4-3.4-2.4-4.2 0-2 6.1-18.6 9.8-26.8 7.9-17.3 36.5-71.7 37.7-71.7.7 0 2.5 1.4 3.9 3.1zm1205.505 36.4c11.9 23.5 21 43 23.1 49.1 3.3 9.9 3.4 10.2 1.6 12.8-2.7 4.1-4.3 4.2-8.2.5-4.8-4.7-6.6-7.9-20.2-37.4-6.6-14.3-14.7-31.8-18.1-38.9-3.7-7.7-6.1-14.1-6.1-16.1 0-3.8 4.4-9.8 6.8-9.3.9.2 9.7 16.7 21.1 39.3zm-575.905-11.5c5.3 65 15.8 108 35.6 146.6l5.4 10.4-3.5 24.2c-1.9 13.3-3.7 24.3-3.9 24.5-1.1 1.2-11.8-30.6-14.7-43.9-3.7-17.1-26.9-162.6-26.9-169.1 0-3 4.7-8.4 6.1-7 .4.5 1.2 6.9 1.9 14.3zm-73.2-12.4c1.5 1 2.2 2.5 2.2 4.8 0 7.9-24.5 161.1-28 174.5-3.9 15.3-13.8 42.3-14 38.1 0-.8-1.6-12-3.4-24.8l-3.4-23.3 5.8-11.4c20-39 30.2-82.4 35.6-150.8.7-9.2 1.2-9.9 5.2-7.1zm-512.1 5.8c.2.2-1.2 3.7-3.3 7.7-2 4.1-7.3 16.6-11.6 27.9-10.7 27.6-18.9 43.7-23.2 45.3-3.2 1.3-4.3-1.6-3.5-9.6 1.1-11 4.1-21.6 12.9-45.2 4.3-11.6 8.1-22.5 8.5-24.4l.7-3.4 9.6.6c5.2.4 9.7.9 9.9 1.1zm1112.405 3.3c.7 2.7 4.6 13.7 8.7 24.7 8.1 21.8 10.7 30.9 12.1 42.3 1 8.2.8 9.8-1.6 10.7-4 1.6-14.1-16.4-24.1-42.9-7.4-19.5-8.5-22.2-12.8-30.8-1.9-3.7-3.4-7-3.4-7.2 0-.5 6.2-1.1 13.6-1.3l6.1-.2 1.4 4.7zm-674.705 211.1c9.6 27.9 13.8 55.7 15.2 99.2 1.4 44.4-3.9 92.9-15.2 137.9-4.9 19.4-7.8 25.6-15.4 32.3-8.1 7.2-21.6 13.5-22.4 10.5-.6-1.9-3.6-44-4.6-62.2-.9-18.3.1-39.2 2.6-54.2.9-5.4 4.2-21.8 7.5-36.4 9.6-43.6 21-108.3 22.9-129.9.7-6.9 1.4-13.2 1.7-14 .7-2.2 2.5 1.7 7.7 16.8zm225.5-3.7c2 22.2 13.6 88 22.6 128.4 3 13.2 6.3 29.4 7.5 36 2.6 15.2 4.2 38.2 3.5 50.5-1 17.4-4.7 67.5-5.1 68.7-.2 1-1.3.9-4.8-.1-9.9-3-20.5-11.5-25.9-20.7-4.3-7.3-12.9-43.7-17.2-72.6-7.4-50.3-6.8-111.5 1.6-155 3.1-16.4 13.7-49.3 15.8-49.3.4 0 1.3 6.4 2 14.1zm-307.5 158.7c1.9 8.9 5.3 15.6 8.3 16 2.6.4 6.5-1.5 12.8-6.4l4.8-3.6-.6 3.2c-.4 1.7-1 12-1.3 22.8-.6 16.8-.3 22.6 1.6 39.2 1.9 16.5 2.2 22.6 1.7 40-.9 31.5-5.1 46.9-18.3 67.7-6 9.2-7.7 15.3-8.1 28.3-.4 9.9-.1 12 1.5 14.9 1 1.9 2.3 3.6 2.8 3.8.5.2 9.4-18.8 19.8-42.2 10.5-23.4 19.4-42.9 20-43.5.5-.5 2.2-1 3.7-1h2.7l-3 11.2c-9.2 34.7-19.6 59.1-31.2 73.3-3.6 4.4-9.5 11.6-13.1 16-8.7 10.5-12.6 16.5-12.1 18.4.2.9.7 2.7 1 4.2.5 2.2 1 2.5 4 2.1 4.2-.5 4.5-.9 17.9-19.3 18.6-25.7 27.9-41.1 33.2-55.2 1.4-3.7 5.2-16.7 8.4-28.8 4-14.8 6.8-23.4 8.6-26.2 4.6-7 10.7-14.7 11.7-14.7 1.3 0 .2 7.3-3.4 22-6 24.9-14.9 45.6-32.2 74.5-21 35.2-29.7 57.8-39.6 103.2-2.2 10.3-7 31.6-10.5 47.3-12 53.1-14.5 72.8-17.6 139-1.6 33.2-1.6 109.6 0 122.5.7 5.5 2.4 17.2 3.8 26 3.3 20.8 3.5 33.9.4 41.7-2.5 6.4-8.7 15.1-10.2 14.2-.5-.3-2.2-3.1-3.8-6.1l-2.8-5.7-2.8 4.7-2.7 4.7 1.1 26.8c.6 14.7 1.6 33.4 2.2 41.7 1.9 25.6.4 36.1-8 55.4-2.1 4.7-6.1 15.6-9 24.2-5.8 17.5-7.5 19.9-17.1 24.3-9.6 4.5-17.1 3.2-20.6-3.5-2.1-4.1-1-6.6 4.4-10 4.1-2.6 5.4-2.9 12.9-2.9 8.1 0 8.3-.1 8.3-2.4 0-1.9-1.3-2.9-7.9-5.9l-7.8-3.5-1.3-16.1c-1.2-15.7-1.3-16.1-3.6-16.1-3.1 0-4.9 5.6-7.4 23.4-1.1 7.6-2.9 15.7-3.9 18-2.1 4.7-6.9 9.9-11.4 12.3-4 2-15.3 2.8-19.1 1.4l-2.9-1.2 6.7-6.9c7.8-8.1 11.9-15.9 11.4-22l-.3-4.1-16.5 13c-9.1 7.2-17.2 13.1-18 13.1-.8 0-3-.9-4.8-2l-3.4-2.1 9.9-7.5c5.4-4.2 9.9-8.1 10.1-8.8.5-2.2-2.5-3.8-5.7-3.1-1.7.4-6.6 2.9-10.8 5.7-4.3 2.8-9.1 5.5-10.7 5.9-3 .9-10.6-.5-10.6-1.9 0-.4 5.2-5.9 11.5-12.2 6.3-6.3 11.5-12 11.5-12.6 0-.6-.6-1.6-1.2-2.2-2.2-1.7-8 1-15.2 7.1-6.7 5.7-12.2 8.1-15.7 6.9-1.7-.7-1.4-1.5 3.6-9.8 3-5 8.8-12.8 12.9-17.4 9.2-10.2 14.1-19.3 20.1-37.6 6.3-19 10.7-26.5 23-38.9 5.5-5.5 12.4-12.2 15.3-14.9 2.9-2.7 6.6-7.4 8.2-10.5 1.7-3.1 6.2-9.4 10-14 12-14.5 11.5-12.4 11.4-49.1 0-39.1 0-38.8-16.8-121.5-9.1-44.7-9.7-49.4-10.3-76.5-.5-27.1 0-34.4 9.7-124.5 6.6-61.3 7.8-71 8.8-70 .4.4 2.6 5.9 4.8 12.3 2.3 6.4 5.4 14.8 6.9 18.7 4.1 10.6 3.8 20.7-1.1 39-10.2 38.5-11.9 52.3-11.9 98.5.1 39.6.5 45.6 7 92 10.2 73 17.5 137.7 18.5 162.5.5 14.7 1.3 23.2 2.2 25.5l1.4 3.3 2.7-8.9c6-19.9 6.7-31.3 3.6-62.3-2.1-22.1.5-46.9 8.4-80.6 4.6-19.1 5.3-24.6 7.7-60.5 3.3-49.5 4.3-77.9 3.6-107-1-44.5-3.6-105.2-4.6-109.1-.5-1.9-2-4.5-3.3-5.8l-2.4-2.2-.7 38.3c-1.1 63.3-2.8 104.2-8.1 197.8-3.5 62-3.3 60-5.6 60-1 0-1.9-.2-1.9-.3 0-.2-1.8-12.7-3.9-27.8-8.8-61.2-11-83.5-11.8-118.6-.8-38-.3-42.1 16.2-121.3 3.5-16.8 6.6-32.5 7-35 .7-4.4.7-4.5-1.2-2.8-1.1 1-3.7 4.3-5.9 7.3-4.9 6.8-6.9 7.2-6 1.2 1.8-11.2 4.6-40.1 5.6-57.2 1.9-35.1 1-75.7-2.8-134.2-1-13.9-1.4-24.9-1.1-24.5.3.4 3.4 8.2 6.8 17.5 9.7 26.4 11.4 36 9.7 55.4-1 11.4-.2 14.1 10.2 34.8 6.7 13.2 8.4 15.7 15.1 22.5 7.1 7 14.4 12 15.7 10.8.7-.7-3-15-5.9-23.1-1.3-3.5-4.4-9.2-7-12.8-7.9-11.1-10.9-18.7-11.5-28.9-.6-11.7.8-18.7 7.3-34.5 6.9-17.1 10.8-28.9 15-46 3.3-13.5 10.5-51.6 10.5-55.8 0-3.5.8-1.4 2.4 6.1zm386.2 16.2c5.9 33 12.8 57.9 21.8 79.2 6.5 15.1 7.9 21.4 7.4 33.3-.4 11.5-2.6 17.4-11.5 30.6-2.8 4.1-5.7 9.2-6.6 11.5-2.2 5.7-6.9 23.3-6.5 24.4.6 1.8 12.3-6.7 18.1-13.1 4.6-5 7.8-10.2 14.5-23.8l8.7-17.4v-20.6c.1-20.3.1-20.7 3.3-30.6 3.1-9.7 12.5-35.1 13.3-35.9.2-.3-.3 11.1-1.3 25.2-5.2 80.4-4.7 137.1 1.7 183.1.8 5.8 1.5 10.8 1.5 11.3 0 1.3-2.7.9-3.3-.5-.8-2-9.9-12.9-10.4-12.3-.5.5 1.7 11.9 11.3 58.1 11.1 53.3 11.6 56.6 12.1 85 .7 35.6-1.8 65.5-10.7 129.4-5 35.6-4.7 34.1-7.1 34.1-1 0-1.9-.3-1.9-.8 0-.4-1.3-23.7-3-51.7-6-105-7.8-149.5-8.2-207.7l-.3-36.7-2.8 2.7c-1.5 1.4-3.2 4.2-3.7 6.2-.9 3.5-3.4 63.2-4.6 109.5-.6 26.7.4 57.2 3.6 106 2.2 33.2 3.6 44 8.1 62.5 7.5 30.9 10.1 56.8 8 79.2-3 31.7-2.4 42 3.6 62.2l2.7 9 1.4-3.5c1-2.3 1.7-10.1 2.2-24.9.8-22.5 6.1-70.6 15.6-141 9.6-71.4 10.5-81.2 10.5-115.5 0-39.6-2.5-58.8-12.5-97-5.6-21.2-5.3-30.2 1.8-46.5 1.8-4.1 4.3-11 5.6-15.3 1.3-4.3 2.7-8 3.1-8.2 1.1-.7 2.2 8 8.8 69.5 8.8 81.4 10.1 97 10.2 118.5 0 28.9-1 36.1-15 105-12.4 61.4-12.5 61.8-12.5 99.5-.1 36.7-.6 34.7 11.5 49.1 3.9 4.6 8.3 10.9 9.9 13.9 2 4 6.4 8.9 15.9 17.9 19.005 17.8 24.005 25.5 30.605 46.4 5.3 17 10.9 27.6 20 37.6 4.2 4.6 10 12.5 13 17.5 5 8.3 5.3 9.1 3.6 9.8-3.4 1.2-8.5-1-15.5-6.8-8-6.6-13.1-9.1-15.2-7.3-.8.6-1.4 1.7-1.4 2.3 0 .6 5.2 6.3 11.5 12.6s11.5 11.8 11.5 12.2c0 1.4-7.6 2.8-10.6 1.9-1.6-.4-6.4-3.1-10.7-5.9-9.2-6-13.4-7.3-15.4-4.6-.7 1-1.3 2-1.3 2.3 0 .3 4.5 4 9.9 8.1 10.4 7.9 10.8 8.6 5.1 11-3.7 1.5-4.5 1-24-14.4l-13.505-10.7-.3 4.1c-.5 6 3.4 13.5 11.3 21.8l6.705 7.2-2.7 1c-3.405 1.3-11.005 1.3-15.905-.1-5.1-1.4-13.1-9-15.1-14.2-.8-2.3-2.4-10.5-3.5-18.2-2.5-16.8-4.3-22.5-7.5-22.5-2.1 0-2.2.6-3.5 16.1l-1.3 16.1-7.9 3.6c-6.5 2.9-7.8 3.9-7.6 5.6.3 1.9 1.1 2.1 8.9 2.6 7.1.4 9.2.9 12.7 3.2 4.9 3.3 5.8 5.7 3.8 9.7-3.6 6.9-11.1 8-21.1 3.2-9.4-4.5-10.6-6.4-17.8-27.1-3.6-10.2-8.1-22.5-10.2-27.5-6-14.2-7.2-23.5-5.7-45.7.6-10 1.7-30.3 2.3-45l1.2-26.6-5.6-9.6-3.1 6.2c-1.7 3.4-3.4 6.2-3.8 6.2-1.5 0-7.8-9.4-9.9-14.8-3.2-8.2-2.9-20.8 1-45.2 4.6-28.3 5.7-57.8 4.2-110.4-2.3-81.7-5.1-112.2-14.6-155.6-19.5-89.6-23.8-106.1-34.1-130.7-5.1-12.3-9-19.6-21.7-40.7-13.8-23-22.7-43.1-29.2-66.1-2.8-9.8-5.8-26.5-4.9-27.4.7-.8 5.3 4.8 10.5 12.7 3.6 5.4 5 9.3 10 28 8.3 31.1 11.4 38.7 23.3 57.5 6 9.5 30 43 31.9 44.5.7.5 2.7 1.2 4.5 1.4 3 .4 3.3.2 4.2-3.4.8-2.8.8-4.4-.1-6-2-3.8-8.6-12.4-16.5-21.6-18.4-21.2-25.8-36.4-36.9-75.2-4.3-15-5-18.6-3.8-18.8 2.4-.6 6.1.7 6.5 2.3.9 4.1 37.4 84.4 38.3 84.2.6-.2 1.8-1.9 2.8-3.8 1.5-2.9 1.8-5.2 1.4-15.4-.4-13.5-2-18.6-8.7-29-16.5-25.6-21.5-58.6-15.9-106.7 1.8-15.5 2-21.5 1.5-39.3-.3-11.6-.9-22.1-1.3-23.4-.5-2 .1-1.8 5.7 2.3 6.5 4.8 9.9 6.2 12.5 5.2 2.3-.8 6.4-10.3 7.7-17.8l1.2-6.3.8 5c.5 2.7 2 11.5 3.4 19.5zm-459.1 155.5c.4 8.1.2 21.4-.4 31.5-1.3 18.7-4.6 46.8-5.6 47.9-.9.8-7.8-7.1-11.1-12.6-4.4-7.4-4.3-12.5 1-33.1 2.6-10 6.4-26.6 8.7-36.9 2.2-10.4 4.3-19.7 4.6-20.8.9-2.6 1.9 5.9 2.8 24zm532.5-8c1.7 8.8 5.6 25.6 8.6 37.4 3 11.8 5.4 23.6 5.4 26.1 0 2.9-.9 6.4-2.5 9.6-2.8 5.4-11 15.2-11.9 14.3-1.1-1-4.4-30-5.7-48.9-1.3-20 .1-57.6 2.1-55.3.4.4 2.2 8 4 16.8zm-438.4 158.5c1.1 8.3 1.7 18.7 1.7 31 .1 21.6-1.1 29.5-8 52.9-2.5 8.6-10.1 35.8-16.8 60.6l-12.4 45v-19.1c-.2-40.9 6.1-81.9 22.6-146.9 4.1-16.5 8-31.9 8.6-34.3 1.4-5.9 2.1-4.1 4.3 10.8zm347.7 11c18.2 70.1 24.5 107.8 25.4 151.5.3 14.3.3 25.8 0 25.5-.3-.3-4.6-15.8-9.7-34.5-5-18.7-12.5-45.7-16.6-60-9.5-33.1-10.7-40.3-10.7-62.5 0-18.4 3.1-47.8 4.8-45.8.1.2 3.2 11.8 6.8 25.8zm-466 293.7c1.5 27.9.3 50.1-3 58.5-4.1 10.4-17.6 27-21.3 26.1-1.8-.5-1.9-1.2-1.4-8.2 1.1-16.1 2.3-20.7 9-34.2 10.4-21 14.4-34.9 14.4-49.3 0-10.7 1.7-5.5 2.3 7.1zm577-3c.8 13.3 4.3 24.7 13.3 43.3 7.7 16.2 8.6 19.3 9.8 35.6.6 7.5.5 8.2-1.3 8.7-3.4.8-15.1-12.9-20.2-23.6-2.7-5.9-3.2-8.4-4.1-20.4-1.1-14.2-.2-53.3 1.2-53.3.4 0 1 4.4 1.3 9.7z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), __jsx("path", {
        d: "M583.565 249.173c-5.5 1.4-16.3 8-22.7 14-2.7 2.4-3.7 5.1-2 5.1 1.6 0 12.5-4 20.8-7.5 12.8-5.5 23.1-6.2 39.4-2.5 4.2.9 6.5.9 9.8 0 3.9-1 4.3-1.4 4-3.8-.5-4.8-4-5.5-26.3-5.8-11-.2-21.3 0-23 .5zM733.065 249.173c-6.3 1-9 2.7-9 5.6 0 3.6 6.4 5.2 14 3.5 16.6-3.7 26.5-3 40.4 2.9 22.6 9.5 27.1 8.7 12.5-2.2-13-9.9-13.9-10.1-34.9-10.3-10.2-.1-20.5.1-23 .5zM614.565 285.073c9.8 5.4 16.2 10.4 20.7 16.6l3.1 4.1-.6-4.3c-1.1-8.6-9.9-16.8-21.2-19.7-11.1-2.8-11.7-1.9-2 3.3zM743.565 280.973c-4.8 1-11.3 3.8-15.1 6.5-4.6 3.3-9.4 11.1-9.4 15.3 0 2.8 0 2.7 2.9-1.2 4.3-5.9 10.9-11.1 20.9-16.5 7.1-3.9 8.1-4.8 5.7-4.7-1.6.1-3.9.3-5 .6zM566.265 298.873c1.4 3 5.7 12.3 6.6 14.6 1.5 3.7 5 5.7 14.5 8.6 12.3 3.6 30.4 4.2 41.6 1.3 13-3.2 17.4-6.7 13.6-10.5-2.3-2.3-9.7-2.1-14.7.5-7 3.6-17.1 5.2-25.2 3.9-10.3-1.6-27.6-10.1-27.6-13.6 0-.8-1-2-2.2-2.8-2.9-1.8-7.2-3.1-6.6-2zM786.365 299.972c-1.8.9-3.3 2.4-3.3 3.4 0 3.7-16.9 12.2-27.6 13.9-8.1 1.3-18.2-.3-25.2-3.9-2.6-1.3-6-2.1-9.2-2.1-4.4 0-5.2.3-6.2 2.5-1.6 3.5.1 5 8.8 8.2 9.9 3.6 27.1 4.3 40.4 1.5 11.3-2.3 19-5.7 20.7-9.2.7-1.4 2.4-5.2 4-8.5 1.5-3.3 2.9-6.3 3.1-6.8.6-1.2-2.1-.7-5.5 1zM634.965 361.373c-4.2 10.1 2.6 25.8 10.2 23.4 2.9-.9 2.3-4.8-1.2-8.1-4-3.7-5.9-7.5-6-11.6 0-1.8-.4-4.2-.8-5.2-.6-1.6-.9-1.5-2.2 1.5zM719.565 363.373c-.9 6.5-2.3 9.4-6.4 13.3-5.3 5-3.2 10.1 3.1 7.7 5.8-2.2 9.3-16.7 5.6-23.5l-1.6-3-.7 5.5zM650.065 365.172c-1.4 2.7-1.3 6.4.4 8.6 1.2 1.7 1.7 1.8 4.1.7 2.1-1 3.9-1 8.6 0 3.2.6 6.2.9 6.6.5 1.5-1.6-12.7-11.7-16.4-11.7-1.2 0-2.7.9-3.3 1.9zM697.365 365.972c-7.1 5-10.8 8.2-10 8.9.4.5 3.4.2 6.6-.4 4.7-1 6.5-1 8.6 0 2.4 1.1 2.9 1 4.1-.7 2.9-3.9 1-10.5-3-10.5-1.3 0-4.1 1.2-6.3 2.7zM660.065 410.273c-2.4 1.2-6.7 3.8-9.5 5.9-7.7 5.8-9.5 6.5-17.4 6.7-6.8.1-7.7.4-9.8 2.8-1.5 1.7-2.3 4-2.3 6.3 0 3.5.1 3.5 3.2 2.9 1.8-.3 4.5-2 6.1-3.7l2.8-3.1 8.7.5c7.3.4 10 1.1 17.2 4.3 7.6 3.4 9.5 3.9 18.1 4.2 9.3.4 9.7.3 21.1-4.2 10-4 12.6-4.6 18.8-4.6 6.6 0 7.3.2 9.8 3 1.5 1.6 4.2 3.3 6 3.6 3.1.6 3.2.6 3.2-2.9 0-2.3-.8-4.6-2.3-6.3-2.1-2.4-3.1-2.7-9.8-2.9-8.3-.2-9.8-.8-18.1-7.2-8.3-6.3-12-7.6-19.3-6.9-7.7.8-7.8.8-15.5.1-5.4-.5-7.3-.2-11 1.5zm23.1 6.1c10-.1 10.9.1 16.9 3 4.2 2.2 5.8 3.4 4.9 3.9-1.7.9-18.3 2.4-26.4 2.4-7.9 0-24.7-1.5-26.3-2.3-.8-.5.4-1.7 3.6-3.4 5.7-3.1 11.8-4.7 14.7-3.9 1.1.3 6.8.4 12.6.3z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx("path", {
        d: "M650.065 440.173c2.9 10.1 11.7 15.1 26.6 15.1 17.3 0 27.6-5.1 30.4-15.1.5-1.6.6-2.9.3-2.9s-2.4 1.6-4.6 3.6c-2.2 2-6.5 4.8-9.6 6.3-4.8 2.2-6.9 2.6-15.1 2.6-8.4 0-10.1-.3-14.8-2.8-2.9-1.5-7-4.3-9.1-6.2-4.7-4.2-5.2-4.3-4.1-.6zM662.565 872.072c-1.6 1.1-11.3 8.8-21.5 17.2-10.2 8.4-22.3 18-26.9 21.4-4.6 3.3-10.2 7.7-12.4 9.6-6.5 5.7-7 8-6.8 28 .2 26.6 2 65.098 3.2 68.698 2.6 8.1 9 8.3 27.7.9 7.5-3 18.6-6.8 24.7-8.6 6-1.8 12.7-4.1 14.8-5.2 7.3-3.7 7.1-1.6 6.3-69.998-.3-33.4-.9-61.4-1.2-62.3-.8-2-4.2-1.9-7.9.3zm-1.9 67.8c-.5 31.3-1.1 48.5-1.9 50.1-.6 1.4-2.2 3-3.6 3.8-2.4 1.2-45 15.498-46.2 15.498-.3 0-1.1-14.298-1.8-31.798-.6-17.4-1.3-33.9-1.5-36.6-.5-7 .8-10.6 5.1-14.8 4-3.8 48-33.8 49.6-33.8.6 0 .7 17.1.3 47.6zM686.765 871.773c-.4.8-.9 28.8-1.3 62.2-.8 68.497-1 66.397 6.3 70.097 2.1 1.1 8.8 3.4 14.8 5.2 6.1 1.8 17.2 5.6 24.8 8.6 18.4 7.2 24.2 7.2 27.2 0 1.3-3.1 2.4-22.697 3.9-69.097.4-15.6-.6-22-4.5-26.1-1.3-1.5-7.3-6.3-13.4-10.8-6-4.5-19-14.9-28.9-23-9.8-8.1-19.3-15.7-21-16.7-3.7-2.3-7.2-2.5-7.9-.4zm33.5 35.7c30.9 20.7 32.2 22.1 31.3 34.5-.2 3.8-1 20.4-1.6 37-.7 16.7-1.5 30.297-1.8 30.297-1 0-40.4-13.097-44.4-14.797-2.1-.9-4.4-2.7-5.2-4.1-1-2-1.5-13.9-2-50.5-.7-44.1-.6-47.9.9-47.3.9.4 11.1 7 22.8 14.9zM646.065 1017.87c-17 3.6-33.7 17-41.9 33.4-5.5 11.3-6.3 18.5-6.5 63.7-.2 49.1-2.2 47.6 37.8 28.2 13.8-6.7 26.1-13.1 27.4-14.2 3.4-3.1 4-6.9 5.7-36.2.9-14.9 2-33.5 2.5-41.5 1.5-22.3 1.3-31.6-.6-33.4-2-2-15.1-2-24.4 0zm15.6 13c.4 1.5.4 7.2.1 12.8-.6 10.4-6.3 65.2-7.3 69.5-1 4.5-5.9 7.7-24.5 15.9-10.2 4.5-19.1 8.2-19.7 8.2-.9 0-1.2-4.7-1.2-17.3-.1-9.4-.5-25.7-1-36.2-1.2-23.8-.7-25.9 6.9-33.6 12.3-12.2 30.5-21.6 42.3-21.8 3.3-.1 3.9.3 4.4 2.5zM686.465 1017.97c-1.5 1.6-1.6 3.4-1.1 17.3.8 19.7 4.6 82.4 5.3 86.8.3 1.8 1.7 4.6 3.2 6.1 1.6 1.7 13 7.8 27.8 15 28.3 13.8 32 14.7 35.8 9.8 2.1-2.8 2.1-3.5 2-38.5-.2-44.8-.9-51.8-6.5-63.2-8.3-16.7-24.9-29.8-42.4-33.5-10-2.1-21.9-2-24.1.2zm21.9 11.9c11.1 2.8 24.2 10.8 33.7 20.3 7.9 7.9 8.2 9.5 7 34.2-.5 11.2-1 27.8-1 36.8v16.3l-2.5-.6c-1.4-.4-10.7-4.3-20.7-8.9-12.7-5.7-18.7-9-20.1-10.9-1.7-2.3-2.6-7.5-5.3-32-3.7-32.7-5-50.3-4-54.2.8-3.2 3.7-3.4 12.9-1zM643.365 1149.77c-23.8 11.3-37.1 21.2-42 31.4l-2.8 5.6-.8 31.5c-.8 33.6.2 56.4 2.7 62.4 3 7.2 9.8 6.2 24.1-3.4 5.8-4 13.6-8.5 17.2-10 9.4-4 14.6-8 17.2-13.2 2.3-4.9 3.7-18.2 6.6-62.8 1.8-28.3 1.9-39.9.2-42.1-4-5.3-10.6-5.1-22.4.6zm12 20.7c-2.2 25-6.4 68.1-7 72.8-.8 6.6-7.6 12.8-23.4 21.2-6.9 3.8-13 6.8-13.6 6.8-.6 0-1.4-1.2-1.7-2.8-1.3-5.3-1.7-31.9-.9-55.4l.8-23.6 3-4.3c2.4-3.4 7.1-6.7 23.5-16.6 11.2-6.7 20.5-12.3 20.5-12.3.1 0-.5 6.4-1.2 14.2zM693.165 1147.87c-3 2.5-3.1 2.8-3.1 10.8 0 9.1 2.3 45.7 4.5 72.9 1.3 16 1.8 18.4 4.2 22.9 3 5.6 7.8 9.3 16.6 12.7 3.1 1.3 10.7 5.7 16.8 9.8 6.1 4.1 12.6 7.7 14.4 8 5.5.9 8.5-.4 10.1-4.2 2.4-5.8 3.5-26.7 3-59.7-.4-29.2-.5-31.7-2.6-37.1-4.3-11.5-17.8-22.1-43.2-34.2-11.4-5.4-16.1-5.8-20.7-1.9zm27.5 20.4c9.3 5.6 18.4 11.3 20.3 12.7 6.5 5 6.9 7.1 7.7 43.3.7 32.6-.2 47-2.8 47-.6 0-6.7-3-13.6-6.8-11.9-6.4-20.2-12.5-22.2-16.1-1.1-2.1-3.1-20.1-6.5-58.4-2.9-32.8-3-33.1-1.1-32.4.7.3 8.9 5.1 18.2 10.7zM672.665 1261.17c-7.2 7.5-7.5 24.5-.5 31 2.6 2.4 9.3 2.9 12 .8 3.6-2.7 5.9-8.1 5.9-13.8 0-11.6-5.1-20.9-11.5-20.9-2.1 0-4 .9-5.9 2.9zM641.965 1282.27c-8.2 2.4-27.9 10-34.7 13.4-8.8 4.4-8.6 3.8-9.4 37.6-.8 33 0 47.4 3.8 68 3 16.1 10.3 45.6 14.9 59.6 7.9 24.2 19.9 41.5 36.8 53.2 10.4 7.3 15.2 6.5 18.4-3 1.5-4.8 1.7-11.7 2.1-68.8.5-83.4-1.2-113-7.8-138.8-5.8-23-8.7-25.6-24.1-21.2zm14.7 26c2.6 15.5 2.6 15.7 3.5 93.5.5 42.9 1.2 83.6 1.5 90.4l.7 12.3-2.4-1.2c-5.3-2.8-15.1-11.5-19.5-17.3-7.9-10.4-11.8-20.1-17.8-43.8-6.2-24-9.8-42.6-12.2-61.7-1.8-14.6-3.4-65.2-2.2-69.8 1.4-5.2 4.9-7.3 22.5-13.4 9.2-3.2 17.9-6.2 19.3-6.8 3.3-1.3 3.3-1.2 6.6 17.8zM699.065 1283.07c-5.2 5.2-10.5 26.5-13.7 54.2-1.5 13.4-1.7 25.7-1.8 91.5 0 70 .1 76.5 1.8 81.7 3.1 10.1 7.7 11 18.4 3.6 16.9-11.6 28.6-28.6 36.8-53.1 4.5-13.6 11.9-43 15-60 3.8-20.9 4.4-32.4 3.8-66-.7-36.7-.2-34.9-12.6-40.7-16-7.4-35.7-14-42-14-1.8 0-3.9 1-5.7 2.8zm35.1 16.8c8.7 2.7 12.6 5.4 14.4 9.8 1.4 3.6.4 50-1.5 67.6-3.4 31-15.3 81.7-22.5 96.2-6.3 12.4-17.3 24.5-26.8 29.4l-2.9 1.6.6-11.4c.3-6.2 1-46.9 1.5-90.3.9-78.3 1-79.1 3.5-94 1.4-8.3 2.8-16 3.1-17.1.5-2.2.6-2.1 11.7 1.8 6.2 2.2 14.7 5.1 18.9 6.4zM422.665 2622.87c-2.7 13.3-3.8 39.5-2.6 62.9.5 11 1.3 31.5 1.7 45.5.6 22.9.8 25.1 2 21.6 4.1-12 6.3-36.1 6.3-69.5 0-25.4-1.2-43.8-3.6-54-1.9-8.5-3-10.3-3.8-6.5zM931.765 2625.27c-3.4 11.8-4.2 22.9-4.2 59.5.1 38 1.3 53 5.3 66.1l1.8 5.9.7-24.5c.4-13.5 1.1-34 1.7-45.5 1.2-21.3.8-36.4-1.2-53.5-1.5-13.5-2.2-14.8-4.1-8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })), this.buildBodyMuscleSVG())));
    }

    return null;
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, this.buildBodyFace());
  }

}

function mapStateToProps(state) {
  return {
    selectedMuscle: state.selectedMuscle,
    muscles: state.muscles
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    selectMuscle: _actions_index__WEBPACK_IMPORTED_MODULE_4__["selectMuscle"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(BackBody));

/***/ }),

/***/ "./containers/printElements/PrintBtn.jsx":
/*!***********************************************!*\
  !*** ./containers/printElements/PrintBtn.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/containers/printElements/PrintBtn.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class PrintBtn extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/print",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("button", {
      id: "gta-print-btn",
      className: "btn btn-blue print-btn",
      ref: el => {
        this.printingBtn = el;
      },
      onClick: this.startPrinting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Print ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPrint"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PrintBtn);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gtm-module */ "react-gtm-module");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/App */ "./components/App.jsx");
/* harmony import */ var _static_css_application_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/css/application.scss */ "./static/css/application.scss");
/* harmony import */ var _static_css_application_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_application_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






if (false) {}

const rootPage = () => {
  return __jsx(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(rootPage));

/***/ }),

/***/ "./static/css/application.scss":
/*!*************************************!*\
  !*** ./static/css/application.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bjmrq/code/BjMrq/React-VizzMD-MVP/src/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map