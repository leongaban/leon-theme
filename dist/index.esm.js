import React from 'react';
import { styled } from 'styled-components';

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

var LeonButtonStyle = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 20px;\n  padding: 40px;\n  border-radius: 15px;\n  font-size: 1.5em;\n  text-align: center;\n  background-color: magenta;\n\n  color: ", ";\n  border: 2px solid ", ";\n"], ["\n  margin: 20px;\n  padding: 40px;\n  border-radius: 15px;\n  font-size: 1.5em;\n  text-align: center;\n  background-color: magenta;\n\n  color: ", ";\n  border: 2px solid ", ";\n"])), function (props) {
  return props.theme.main;
}, function (props) {
  return props.theme.main;
});
LeonButtonStyle.defaultProps = {
  theme: {
    main: "#BF4F74"
  }
};
var Button = function (props) {
  return React.createElement(LeonButtonStyle, {
    className: "leon-button"
  }, props.label);
};
var templateObject_1;

var LeonTheme = function (props) {
  var Component = props.component;
  return React.createElement("div", {
    className: "leon-theme"
  }, React.createElement(Component, null));
};

export { Button, LeonTheme };
//# sourceMappingURL=index.esm.js.map
