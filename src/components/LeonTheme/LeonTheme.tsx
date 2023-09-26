import React from 'react'
import { ThemeProvider } from 'styled-components'

import { myTheme } from '../../theme'

export interface myThemeInterface {
  borderRadius: string
  color: string
  backgroundColor: string
}

interface LeonThemeProps {
  component?: any
  theme: myThemeInterface
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
