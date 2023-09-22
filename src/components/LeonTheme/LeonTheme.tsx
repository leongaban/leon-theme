import React from "react";
import { ThemeProvider } from "styled-components";

import { myTheme } from "../../theme";

interface colorsTheme {
  main: string;
  secondary: string;
}

interface myThemeInterface {
  borderRadius: string;
  colors: colorsTheme;
}

interface LeonThemeProps {
  component?: any;
  theme: myThemeInterface;
}

const LeonTheme = (props: LeonThemeProps) => {
  const Component = props.component;
  return (
    <ThemeProvider theme={myTheme}>
      <Component />
    </ThemeProvider>
  );
};

export default LeonTheme;
