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
declare const LeonTheme: (props: LeonThemeProps) => React.JSX.Element;
export default LeonTheme;
