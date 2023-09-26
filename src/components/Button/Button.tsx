import React from 'react'
import { styled } from 'styled-components'

/**
 * A Button component
 * @constructor
 * @param {object} theme - A default or custom theme object is passed in that contains color, borderRadius and backgroundColor
 * @param {string} label - A label for the button
 */

interface ButtonProps {
  label: string
}

const LeonButtonStyle = styled.button`
  margin: 20px;
  font-size: 1.5em;
  text-align: center;
  border: 2px solid #000;
  cursor: pointer;

  color: ${props => props.theme.color};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.backgroundColor};
`

const Button = (props: ButtonProps) => {
  return (
    <LeonButtonStyle className="leon-button">{props.label}</LeonButtonStyle>
  )
}

export default Button
