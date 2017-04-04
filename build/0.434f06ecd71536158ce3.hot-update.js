webpackHotUpdate(0,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(179);

	var _isomorphicFetch = __webpack_require__(234);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _Home = __webpack_require__(236);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getInitialState() {
	  return {
	    username: '',
	    favorites: [],
	    restName: ''
	  };
	}

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'loginClick',
	    value: function loginClick(type) {
	      var username = document.getElementById('username').value;
	      var password = document.getElementById('password').value;
	      var data = JSON.stringify({
	        username: username,
	        password: password
	      });
	      //console.log('credentials: ', data);
	      console.log(type);
	      var xhr = new XMLHttpRequest();
	      if (type === 'login') xhr.open('POST', '/login');

	      xhr.setRequestHeader("Content-type", "application/json");
	      xhr.send(data);

	      xhr.onreadystatechange = function () {
	        var DONE = 4; // readyState 4 means the request is done.
	        var OK = 200; // status 200 is a successful return.

	        if (xhr.readyState === DONE) {
	          if (xhr.status === OK) {
	            console.log(username);
	            this.setState({
	              username: username
	            });
	          }
	          console.log(xhr.responseText); // 'This is the returned text.'
	        } else {
	          console.log('Error: ' + xhr.status); // An error occurred during the request.
	        }
	      }.bind(this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouter.Router,
	        null,
	        _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/restaurants', component: RestSetup })
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(179);

	var _isomorphicFetch = __webpack_require__(234);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _RestSetup = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./RestSetup\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _RestSetup2 = _interopRequireDefault(_RestSetup);

	var _UserInterface = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./UserInterface\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _UserInterface2 = _interopRequireDefault(_UserInterface);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
	  _inherits(Home, _Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { id: 'login' },
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement('input', { id: 'username', type: 'text', placeholder: 'Username' }),
	            _react2.default.createElement('input', { id: 'password', type: 'password', placeholder: 'Password' })
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return props.loginClick('register');
	              } },
	            'Register'
	          )
	        ),
	        '// FB OAUTH',
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/restaurants' },
	            'Restaurants'
	          )
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react.Component);

	exports.default = Home;

/***/ }

})