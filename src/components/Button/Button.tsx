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

  color: ${(props) => props.theme.main};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.secondary};
`;

// LeonButtonStyle.defaultProps = {
//   theme: {
//     main: "#BF4F74",
//     secondary: "000",
//     borderRadius: "40px",
//   },
// };

const Button = (props: ButtonProps) => {
  return (
    <LeonButtonStyle className="leon-button">{props.label}</LeonButtonStyle>
  );
};

export default Button;
