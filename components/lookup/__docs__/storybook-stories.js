"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _iconSettings = _interopRequireDefault(require("../../icon-settings"));

var _constants = require("../../../utilities/constants");

var _lookup = _interopRequireDefault(require("../../lookup"));

var _header = _interopRequireDefault(require("../../lookup/header"));

var _footer = _interopRequireDefault(require("../../lookup/footer"));

var _button = _interopRequireDefault(require("../../button"));

var _default = _interopRequireDefault(require("../__examples__/default"));

var _files = _interopRequireDefault(require("../__examples__/files"));

var _withSelection = _interopRequireDefault(require("../__examples__/with-selection"));

var _deprecatedWarning = _interopRequireDefault(require("../../utilities/deprecated-warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DemoLookup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DemoLookup, _React$Component);

  function DemoLookup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DemoLookup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DemoLookup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      options: [{
        label: 'File 1'
      }, {
        label: 'File 2'
      }, {
        label: 'File 3'
      }, {
        label: 'File 4'
      }]
    });

    _defineProperty(_assertThisInitialized(_this), "clearSelected", function () {
      _this.setState({
        currentSelected: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (selectedItem) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      (0, _addonActions.action)('select').apply(void 0, [selectedItem].concat(rest));

      _this.setState({
        currentSelected: _this.state.options.indexOf(selectedItem)
      });
    });

    return _this;
  }

  _createClass(DemoLookup, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_button.default, {
        onClick: this.clearSelected
      }, "Clear Selected")), _react.default.createElement(_lookup.default, _extends({}, this.props, {
        onChange: (0, _addonActions.action)('change'),
        onSelect: this.handleSelect,
        options: this.state.options,
        selectedItem: this.state.currentSelected
      })));
    }
  }]);

  return DemoLookup;
}(_react.default.Component);

_defineProperty(DemoLookup, "displayName", 'DemoLookup');

var DemoLookupAccounts =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DemoLookupAccounts, _React$Component2);

  function DemoLookupAccounts() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, DemoLookupAccounts);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DemoLookupAccounts)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      options: [{
        label: "Paddy's Pub",
        subTitle: 'Boston, MA'
      }, {
        label: 'Tyrell Corp',
        subTitle: 'San Francisco, CA'
      }, {
        label: 'Paper St. Soap Company',
        subTitle: 'Beloit, WI'
      }, {
        label: 'Nakatomi Investments',
        subTitle: 'Chicago, IL'
      }, {
        label: 'Acme Landscaping'
      }, {
        label: 'Acme Construction',
        subTitle: 'Grand Marais, MN'
      }]
    });

    _defineProperty(_assertThisInitialized(_this2), "handleSelect", function (selectedItem) {
      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      (0, _addonActions.action)('select').apply(void 0, [selectedItem].concat(rest));

      _this2.setState({
        selectedItem: selectedItem
      });
    });

    return _this2;
  }

  _createClass(DemoLookupAccounts, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_lookup.default, _extends({}, this.props, {
        footerRenderer: _footer.default,
        headerRenderer: _header.default,
        onChange: (0, _addonActions.action)('change'),
        onSelect: this.handleSelect,
        options: this.state.options
      }));
    }
  }]);

  return DemoLookupAccounts;
}(_react.default.Component);

_defineProperty(DemoLookupAccounts, "displayName", 'DemoLookupAccounts');

(0, _react2.storiesOf)(_constants.LOOKUP, module).addDecorator(function (getStory) {
  return _react.default.createElement("div", {
    className: "slds-p-around_medium"
  }, _react.default.createElement(_iconSettings.default, {
    iconPath: "/assets/icons"
  }, _react.default.createElement(_deprecatedWarning.default, null), getStory()));
}).add('Standard', function () {
  return _react.default.createElement(DemoLookup, {
    emptyMessage: "No Files found",
    hasError: false,
    iconCategory: "utility",
    iconName: "open_folder",
    isInline: true,
    label: "Files"
  });
}).add('Disabled', function () {
  return _react.default.createElement(DemoLookup, {
    disabled: true
  });
}).add('Standard with Accounts', function () {
  return _react.default.createElement(DemoLookupAccounts, {
    emptyMessage: "No Accounts found",
    hasError: false,
    iconCategory: "standard",
    iconName: "account",
    isInline: true,
    label: "Account"
  });
}).add('Custom Empty Message Content', function () {
  return _react.default.createElement(DemoLookup, {
    emptyMessage: _react.default.createElement("span", null, "No matches."),
    isInline: true
  });
}).add('Docs site Default', function () {
  return _react.default.createElement(_default.default, null);
}).add('Docs site Files', function () {
  return _react.default.createElement(_files.default, null);
}).add('Docs site WithSelection', function () {
  return _react.default.createElement(_withSelection.default, null);
});