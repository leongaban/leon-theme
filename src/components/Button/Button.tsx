import React from 'react'
import { styled } from 'styled-components'
import { Button as MuiButton } from '@mui/material'

/**
 * A Button component
 * @constructor
 * @param {object} theme - A default or custom theme object is passed in that contains color, borderRadius and backgroundColor
 * @param {string} label - A label for the button
 */

interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <MuiButton variant="contained">Contained</MuiButton>
    </div>
  )
}

export default Button
