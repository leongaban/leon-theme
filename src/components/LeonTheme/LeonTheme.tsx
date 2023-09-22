import React from "react";
import { ThemeProvider } from "styled-components";

import { myTheme } from "../../theme";

interface colorsTheme {
  main: string;
  secondary: string;
}

export interface myThemeInterface {
  borderRadius: string;
  colors: colorsTheme;
}

interface LeonThemeProps {
  component?: any;
  theme: myThemeInterface;
}

const LeonTheme = (props: LeonThemeProps) => {
  const Component = props.component;
  const themeStyle = props.theme ? props.theme : myTheme;

  console.log("LeonTheme ------------");
  console.log("props", props);
  console.log("themeStyle", themeStyle);

  return (
    <ThemeProvider theme={themeStyle}>
      <Component />
    </ThemeProvider>
  );
};

export default LeonTheme;
