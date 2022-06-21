import styled, { ThemeProvider } from 'styled-components'
import { device } from './styles/BreakPoints'
import { GlobalStyles } from './styles/Global'
import { theme } from './styles/Theme'

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryTextColor};
  font-size: 48px;
  @media ${device.md} {
    font-size: 32px;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Title>Hello World!</Title>
    </ThemeProvider>
  )
}

export default App
