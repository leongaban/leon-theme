import React from "react";
import { styled } from "styled-components";

interface ButtonProps {
  label: string;
}

const LeonButtonStyle = styled.button`
  margin: 20px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;

  color: purple;
  border-radius: 5px;
  border: 2px solid #000;
  background-color: #000;
`;

const Button = (props: ButtonProps) => {
  return (
    <LeonButtonStyle className="leon-button">{props.label}</LeonButtonStyle>
  );
};

export default Button;
