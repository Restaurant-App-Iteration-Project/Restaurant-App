webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(87);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/App\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = document.getElementById('root');
	// var hashHistory = ReactRouter.hashHistory;
	_reactDom2.default.render(_react2.default.createElement(
	  Router,
	  { history: hashHistory },
	  _react2.default.createElement(Route, { path: '/', component: _App2.default }),
	  _react2.default.createElement(Route, { path: '/home', name: 'home', component: homeLayout }),
	  _react2.default.createElement(Route, { path: '/restaurants', name: 'restaurants', component: restLogin }),
	  _react2.default.createElement(Route, { path: '/guestWait', name: 'guestWait', component: WaitPage }),
	  _react2.default.createElement(Route, { path: '/guestOptions', name: 'guestOptions', component: GuestOptions }),
	  _react2.default.createElement(Route, { path: '/waitList', name: 'waitList', component: TablePage })
	), app);

/***/ }
])