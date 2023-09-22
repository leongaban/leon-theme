import React from "react";
import { styled } from "styled-components";

interface ButtonProps {
  label: string;
}

const LeonButtonStyle = styled.button`
  margin: 20px;
  padding: 40px;
  border-radius: 15px;
  font-size: 1.5em;
  text-align: center;
  background-color: magenta;

  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

LeonButtonStyle.defaultProps = {
  theme: {
    main: "#BF4F74",
  },
};

const Button = (props: ButtonProps) => {
  return (
    <LeonButtonStyle className="leon-button">{props.label}</LeonButtonStyle>
  );
};

export default Button;
