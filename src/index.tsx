import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'hooks/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
