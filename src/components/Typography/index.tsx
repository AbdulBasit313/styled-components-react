import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 48px;
  @media ${device.md} {
    font-size: 32px;
  }
`

const P100 = styled.p`
  font-size: 10px;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.secondaryText};
`
const P200 = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondaryText};
`
const P300 = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondaryText};
`
const P400 = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`
const P500 = styled.h4`
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryText};
`
const H3 = styled.h3`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondaryText};
`
const H2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondaryText};
`
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondaryText};
`

const Typography = () => {
  return (
    <>
      <Title>Typography!</Title>
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
    </>
  )
}

export default Typography
