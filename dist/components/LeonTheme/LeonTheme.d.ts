import React from "react";
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
declare const LeonTheme: (props: LeonThemeProps) => React.JSX.Element;
export default LeonTheme;
