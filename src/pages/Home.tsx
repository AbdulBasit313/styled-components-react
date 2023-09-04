import { ChangeEvent, FormEvent, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Button from '../components/Button'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import ProgressSteps from '../components/ProgressSteps'
import RadioButton from '../components/RadioButton'
import Typography from '../components/Typography'

import { Next, StartIcon } from '../config/icons'
import { Container, Flex, GlobalStyles, Box } from '../styles/Global'
import { theme } from '../styles/Theme'

const RadioWrapper = styled.div`
  margin-top: 20px;
`
const RadioTitle = styled.p`
  margin: 0 0 5px 0;
  padding: 0;
`

const SubmitBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  color: #222222;
  background: transparent;
  border: 1px solid #222222;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  min-width: 150px;
  padding: 7px 0;
  margin-top: 37px;
`

const Home = () => {
  const [appTheme, setAppTheme] = useState({ dark: false, light: false })
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim()) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const onChangeTheme = (e: any) => {
    const { name } = e.target
    if (name === 'light') {
      setAppTheme({ dark: false, light: true })
    }
    if (name === 'dark') {
      setAppTheme({ dark: true, light: false })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Container>
        <ProgressSteps />
        <Box mt={60}>
          <Flex evenly>
            <RadioWrapper>
              <RadioTitle>Please select a theme</RadioTitle>
              <RadioButton
                name="dark"
                id="dark"
                value="Dark"
                text="Dark"
                onChange={onChangeTheme}
                checked={appTheme.dark}
              />
              <RadioButton
                name="light"
                id="light"
                value="Light"
                text="Light"
                onChange={onChangeTheme}
                checked={appTheme.light}
              />
            </RadioWrapper>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Name"
                value={name}
                name="name"
                error={error}
                onChange={handleNameChange}
                placeholder="Please enter your name"
              />
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </form>
          </Flex>
        </Box>
        <Box mt={60}>
          <Typography />
        </Box>
        {/* Buttons */}
        <Box mt={60}>
          <Flex spaceBetween>
            <Button text="Continue" onClick={() => {}} />
            <Button
              text="Start"
              icon={<StartIcon />}
              iconPosition="left"
              onClick={() => {}}
            />
            <Button
              text="Next"
              onClick={() => {}}
              icon={<Next />}
              iconPosition="right"
            />
            <Button text="Login" onClick={() => {}} disabled={true} />
            <Button text="Skip" onClick={() => {}} outline />
          </Flex>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
