import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from '@/pages/Home'
import { useTheme } from '@/contexts'
import GlobalStyle from '@/styles/globalStyle'
import { DarkTheme, LightTheme } from '@/styles/theme'

import '@/libs/i18n'
import 'leaflet/dist/leaflet.css'

const queryClient = new QueryClient()

function App() {
  const theme = useTheme(state => state.theme)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
