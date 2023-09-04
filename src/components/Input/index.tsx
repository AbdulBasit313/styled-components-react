import { ChangeEvent, FC } from 'react'
import { styled } from 'styled-components'

const InputWrapper = styled.div`
  margin-top: 20px;
`

const LabelStyle = styled.label`
  font-weight: 600;
  font-size: 18px;
  color: #344054;
  display: block;
  margin-bottom: 8px;
`

const InputStyle = styled.input`
  font-size: 16px;
  font-weight: 400;
  width: 250px;
  color: #344054;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  padding: 10px 14px;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #667085;
  }
`

const ErrorStyle = styled.p`
  color: #db4437;
  font-size: 14px;
  font-weight: 400;
  margin-left: 12px;
  margin-top: 4px;
`

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder: string
  error: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <InputWrapper>
      <LabelStyle htmlFor={label}>{label}</LabelStyle>
      <InputStyle
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <ErrorStyle>Input filed can't be empty!</ErrorStyle>}
    </InputWrapper>
  )
}

export default Input
