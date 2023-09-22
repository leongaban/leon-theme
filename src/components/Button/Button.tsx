import React from "react";
import "../../theme.css";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="leon-button">{props.label}</button>;
};

export default Button;
