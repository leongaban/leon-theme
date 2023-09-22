import React from "react";

interface LeonThemeProps {
  component?: any;
  theme?: string;
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
