'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styledComponents = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var LeonButtonStyle = styledComponents.styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 20px;\n  font-size: 1.5em;\n  text-align: center;\n  cursor: pointer;\n\n  color: \"purple\";\n  border-radius: \"5px\";\n  border: 2px solid #000;\n  background-color: \"#000\";\n"], ["\n  margin: 20px;\n  font-size: 1.5em;\n  text-align: center;\n  cursor: pointer;\n\n  color: \"purple\";\n  border-radius: \"5px\";\n  border: 2px solid #000;\n  background-color: \"#000\";\n"])));
// color: ${(props) => props.theme.main};
// border-radius: ${(props) => props.theme.borderRadius};
// border: 2px solid ${(props) => props.theme.secondary};
// background-color: ${(props) => props.theme.secondary};
// LeonButtonStyle.defaultProps = {
//   theme: {
//     main: "#BF4F74",
//     secondary: "blue",
//     borderRadius: "40px",
//   },
// };
var Button = function (props) {
  return React__default["default"].createElement(LeonButtonStyle, {
    className: "leon-button"
  }, props.label);
};
var templateObject_1;

var myTheme = {
  borderRadius: "5px",
  colors: {
    main: "cyan",
    secondary: "magenta"
  }
};

var LeonTheme = function (props) {
  var Component = props.component;
  var themeStyle = props.theme ? props.theme : myTheme;
  console.log("LeonTheme ------------");
  console.log("props", props);
  console.log("themeStyle", themeStyle);
  return React__default["default"].createElement(styledComponents.ThemeProvider, {
    theme: themeStyle
  }, React__default["default"].createElement(Component, null));
};

exports.Button = Button;
exports.LeonTheme = LeonTheme;
//# sourceMappingURL=index.js.map
