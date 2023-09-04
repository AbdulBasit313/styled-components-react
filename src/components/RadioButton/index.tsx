import styled from 'styled-components'

const RadioLabel = styled.label`
  color: #303030;
  font-size: 14px;
  font-weight: 400;
  margin-right: 7px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`

const RadioInput = styled.input`
  margin: 0;
  visibility: hidden;
  &:checked + span {
    border: 2px solid #f4b400;
  }
  &:checked + span::after {
    opacity: 1;
  }
`

const CustomRadio = styled.span`
  left: -8px;
  top: 6px;
  cursor: pointer;
  width: 17px;
  height: 17px;
  border: 2px solid #9a9a9a;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background: #f4b400;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
  }
`

interface RadioButtonProps {
  name: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  text: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  id,
  value,
  onChange,
  checked,
  text,
}) => {
  return (
    <RadioLabel htmlFor={id} className="radio-label">
      <RadioInput
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <CustomRadio />
      {text}
    </RadioLabel>
  )
}

export default RadioButton
