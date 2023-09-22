import React from "react";
import "../../theme.css";
const LeonTheme = (props) => {
    const Component = props.component;
    return (React.createElement("div", { className: "leon-theme" },
        React.createElement(Component, null)));
};
export default LeonTheme;
//# sourceMappingURL=LeonTheme.js.map