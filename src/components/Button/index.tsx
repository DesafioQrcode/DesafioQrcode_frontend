import React, { InputHTMLAttributes } from 'react'
import {ButtonStyled, Container} from './style';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  label: string,
  name: string,
}

const Button: React.FC<ButtonProps> = ({ label, name, ...rest }) => {
    return(
        <Container>
          <ButtonStyled id={name} >{label}</ButtonStyled>
        </Container>
    )
}

export default Button;