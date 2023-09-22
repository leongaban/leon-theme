import React from "react";
import "../../theme.css";

interface LeonThemeProps {
  component?: any;
}

const LeonTheme = (props: LeonThemeProps) => {
  const Component = props.component;
  return (
    <div className="leon-theme">
      <Component />
    </div>
  );
};

export default LeonTheme;
