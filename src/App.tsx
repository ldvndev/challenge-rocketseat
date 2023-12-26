import { Header } from './components/Header'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  )
}
