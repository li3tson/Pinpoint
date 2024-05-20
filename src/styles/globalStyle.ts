import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root, html, body {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }

  html, body {
    font-size: 100%;
    font-family: Helvetica, Arial, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.gray[900]};
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`

export default GlobalStyle
