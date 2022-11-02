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

const P100 = styled.h1`
  font-size: 10px;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`
const P200 = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`
const P300 = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`
const P400 = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`
const P500 = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`
const H3 = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`
const H2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Title>Hello World!</Title>
      <>
        <P100>100 The quick brown fox jumps over the lazy dog</P100>
        <P200>200 The quick brown fox jumps over the lazy dog</P200>
        <P300>300 The quick brown fox jumps over the lazy dog</P300>
        <P400>400 The quick brown fox jumps over the lazy dog</P400>
        <P500>500 The quick brown fox jumps over the lazy dog</P500>
        <H3>600 The quick brown fox jumps over the lazy dog</H3>
        <H2>700 The quick brown fox jumps over the lazy dog</H2>
        <H1>800 The quick brown fox jumps over the lazy dog</H1>
      </>
    </ThemeProvider>
  )
}

export default App
