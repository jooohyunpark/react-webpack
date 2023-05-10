import React from 'react'
import { StyledButton } from './styles'

const Button = () => {
  const onClick = () => {
    console.log('clicked')
  }
  return <StyledButton onClick={onClick}>button</StyledButton>
}

export default Button
