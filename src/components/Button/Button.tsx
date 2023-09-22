import React from "react";
import { styled } from "styled-components";

interface ButtonProps {
  label: string;
}

const LeonButtonStyle = styled.button`
  margin: 20px;
  border-radius: 15px;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;

  color: ${(props) => props.theme.btnColor};
  padding: ${(props) => props.theme.btnPadding};
  border: 2px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.mainColor};
`;

// LeonButtonStyle.defaultProps = {
//   theme: {
//     mainColor: "#BF4F74",
//     btnColor: "#000",
//     btnPadding: "40px",
//   },
// };

const Button = (props: ButtonProps) => {
  return (
    <LeonButtonStyle className="leon-button">{props.label}</LeonButtonStyle>
  );
};

export default Button;
