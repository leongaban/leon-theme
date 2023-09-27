import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// import { myTheme } from '../../theme'

const theme = createTheme({
  palette: {
    background: {
      default: 'red',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

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
  // const themeStyle = props.theme ? props.theme : theme

  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  )
}

export default LeonTheme
