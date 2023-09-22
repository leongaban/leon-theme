import React from 'react';
import { styled, ThemeProvider } from 'styled-components';

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

var LeonButtonStyle = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 20px;\n  font-size: 1.5em;\n  text-align: center;\n  cursor: pointer;\n\n  color: ", ";\n  border-radius: ", ";\n  border: 2px solid ", ";\n  background-color: ", ";\n"], ["\n  margin: 20px;\n  font-size: 1.5em;\n  text-align: center;\n  cursor: pointer;\n\n  color: ", ";\n  border-radius: ", ";\n  border: 2px solid ", ";\n  background-color: ", ";\n"])), function (props) {
  return props.theme.main;
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.secondary;
});
// LeonButtonStyle.defaultProps = {
//   theme: {
//     main: "#BF4F74",
//     secondary: "000",
//     borderRadius: "40px",
//   },
// };
var Button = function (props) {
  return React.createElement(LeonButtonStyle, {
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
  return React.createElement(ThemeProvider, {
    theme: themeStyle
  }, React.createElement(Component, null));
};

export { Button, LeonTheme };
//# sourceMappingURL=index.esm.js.map
