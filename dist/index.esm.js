import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".leon-theme {\n  background-color: #282c34;\n  color: white;\n  padding: 40px;\n  font-family: Arial;\n  text-align: center;\n}\n\n.leon-theme .leon-button {\n  margin: 20px;\n  padding: 40px;\n  border-radius: 15px;\n  color: white;\n  background-color: magenta;\n}\n";
styleInject(css_248z);

var Button = function (props) {
  return React.createElement("button", {
    className: "leon-button"
  }, props.label);
};

var LeonTheme = function (props) {
  var Component = props.component;
  return React.createElement("div", {
    className: "leon-theme"
  }, React.createElement(Component, null));
};

export { Button, LeonTheme };
//# sourceMappingURL=index.esm.js.map
