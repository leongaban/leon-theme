import React from "react";
export interface myThemeInterface {
    borderRadius: string;
    color: string;
    backgroundColor: string;
}
interface LeonThemeProps {
    component?: any;
    theme: myThemeInterface;
}
declare const LeonTheme: (props: LeonThemeProps) => React.JSX.Element;
export default LeonTheme;
