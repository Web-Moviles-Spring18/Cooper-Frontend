webpackHotUpdate("main",{

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _Menu = __webpack_require__(/*! ./Menu */ \"./src/components/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _url = __webpack_require__(/*! ../url */ \"./src/url.js\");\n\nvar _url2 = _interopRequireDefault(_url);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_Component) {\n    _inherits(Login, _Component);\n\n    function Login(props) {\n        _classCallCheck(this, Login);\n\n        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n        _this.state = {\n            email: \"\",\n            name: \"\",\n            password: \"\"\n        };\n        return _this;\n    }\n\n    _createClass(Login, [{\n        key: 'signup',\n        value: function signup() {\n            var data = {\n                \"email\": this.state.username,\n                \"password\": this.state.password\n            };\n            var config = {\n                \"Content-Type\": \"application/json\",\n                withCredentials: true\n                /*headers: {\r\n                    'Access-Control-Allow-Credentials' : true,\r\n                    \"Access-Control-Allow-Origin\" : '*'\r\n                }*/\n            };\n            console.log(data);\n        }\n    }, {\n        key: 'updateSignupEmail',\n        value: function updateSignupEmail(evt) {\n            this.setState({\n                username: evt.target.value\n            });\n        }\n    }, {\n        key: 'updateLoginPassword',\n        value: function updateLoginPassword(evt) {\n            this.setState({\n                password: evt.target.value\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Menu2.default, { optionSelected: 'signin', types: 'home' }),\n                _react2.default.createElement(\n                    'section',\n                    { className: 'hero is-fullheight' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'hero-body' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'container has-text-centered' },\n                            _react2.default.createElement(\n                                'h3',\n                                { className: 'title has-text-grey' },\n                                'Sign Up'\n                            ),\n                            _react2.default.createElement(\n                                'p',\n                                { className: 'subtitle has-text-grey' },\n                                'Please create your account.'\n                            ),\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'columns' },\n                                _react2.default.createElement('div', { className: 'column is-one-third' }),\n                                _react2.default.createElement(\n                                    'div',\n                                    { className: 'column is-one-third' },\n                                    _react2.default.createElement(\n                                        'div',\n                                        { className: 'box' },\n                                        _react2.default.createElement(\n                                            'div',\n                                            { className: 'field' },\n                                            _react2.default.createElement(\n                                                'div',\n                                                { className: 'control' },\n                                                _react2.default.createElement('input', { className: 'input is-normal', type: 'email', placeholder: 'Email' })\n                                            )\n                                        ),\n                                        _react2.default.createElement(\n                                            'div',\n                                            { className: 'field' },\n                                            _react2.default.createElement(\n                                                'div',\n                                                { className: 'control' },\n                                                _react2.default.createElement('input', { className: 'input is-normal', type: 'text', placeholder: 'Name' })\n                                            )\n                                        ),\n                                        _react2.default.createElement(\n                                            'div',\n                                            { className: 'field' },\n                                            _react2.default.createElement(\n                                                'div',\n                                                { className: 'control' },\n                                                _react2.default.createElement('input', { className: 'input is-normal', type: 'password', placeholder: 'Password' })\n                                            )\n                                        ),\n                                        _react2.default.createElement(\n                                            'div',\n                                            { className: 'field' },\n                                            _react2.default.createElement(\n                                                'div',\n                                                { className: 'control' },\n                                                _react2.default.createElement('input', { className: 'input is-normal', type: 'password', placeholder: 'Confirm Password' })\n                                            )\n                                        ),\n                                        _react2.default.createElement(\n                                            'div',\n                                            { className: 'field' },\n                                            _react2.default.createElement(\n                                                'label',\n                                                { className: 'checkbox' },\n                                                _react2.default.createElement('input', { type: 'checkbox' }),\n                                                '\\xA0 I agree to the ',\n                                                _react2.default.createElement(\n                                                    'a',\n                                                    { href: '#' },\n                                                    'terms and conditions'\n                                                )\n                                            )\n                                        ),\n                                        _react2.default.createElement(\n                                            'button',\n                                            { className: 'button is-block is-info is-large is-fullwidth' },\n                                            'Signup'\n                                        )\n                                    )\n                                ),\n                                _react2.default.createElement('div', { className: 'column is-one-third' })\n                            ),\n                            _react2.default.createElement(\n                                'p',\n                                { className: 'has-text-grey' },\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: '../' },\n                                    'Need Help?'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Login;\n}(_react.Component);\n\nexports.default = Login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWdudXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2lnbnVwLmpzP2Q3ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1cmwgZnJvbSBcIi4uL3VybFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsIDogXCJcIixcclxuICAgICAgICAgICAgbmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaWdudXAoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwiZW1haWxcIiA6IHRoaXMuc3RhdGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIiA6IHRoaXMuc3RhdGUucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIiA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIC8qaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiIDogJyonXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaWdudXBFbWFpbChldnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgOiBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVwZGF0ZUxvZ2luUGFzc3dvcmQoZXZ0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkIDogZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxNZW51IG9wdGlvblNlbGVjdGVkPVwic2lnbmluXCIgdHlwZXM9XCJob21lXCIvPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1mdWxsaGVpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaGFzLXRleHQtZ3JleVwiPlNpZ24gVXA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZSBoYXMtdGV4dC1ncmV5XCI+UGxlYXNlIGNyZWF0ZSB5b3VyIGFjY291bnQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpcy1ub3JtYWxcIiAgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlzLW5vcm1hbFwiICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0IGlzLW5vcm1hbFwiICB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtbm9ybWFsXCIgIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IEkgYWdyZWUgdG8gdGhlIDxhIGhyZWY9XCIjXCI+dGVybXMgYW5kIGNvbmRpdGlvbnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtYmxvY2sgaXMtaW5mbyBpcy1sYXJnZSBpcy1mdWxsd2lkdGhcIj5TaWdudXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhhcy10ZXh0LWdyZXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4uL1wiPk5lZWQgSGVscD88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQVFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNCQTtBQURBO0FBK0JBO0FBbENBO0FBc0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQXpDQTtBQURBO0FBREE7QUFGQTtBQXNEQTs7OztBQS9GQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Signup.js\n");

/***/ })

})