import React from "react";
import "../../theme.css";

const LeonTheme = (props) => {
  const Component = props.component;
  return (
    <div className="leon-theme">
      <Component />
    </div>
  );
};

export default LeonTheme;
