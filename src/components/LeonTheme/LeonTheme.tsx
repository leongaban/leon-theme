import React from 'react'
import { ThemeProvider } from 'styled-components'

import { myTheme } from '../../theme'

/**
 * The main LeonTheme wrapper component
 * @constructor
 * @param {component} component - A React component, required as LeonTheme wraps an app
 * @param {object} theme - A theme object which contains color, borderRadius and backgroundColor
 */

export interface myThemeInterface {
  color?: string
  borderRadius?: string
  backgroundColor?: string
}

interface LeonThemeProps {
  component?: any
  theme?: myThemeInterface
}

const LeonTheme = (props: LeonThemeProps) => {
  const Component = props.component
  const themeStyle = props.theme ? props.theme : myTheme

  return (
    <ThemeProvider theme={themeStyle}>
      <Component />
    </ThemeProvider>
  )
}

export default LeonTheme
