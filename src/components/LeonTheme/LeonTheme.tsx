import React from "react";

interface ThemeStyle {
  mainColor?: string;
  btnColor?: string;
  btnPadding?: string;
}

interface LeonThemeProps {
  component?: any;
  theme: ThemeStyle;
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
