import React, { InputHTMLAttributes } from 'react'
import {InputStyled, LabelStyled, Container} from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string,
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <Container>
            <LabelStyled htmlFor={name}>{label}</LabelStyled>
            <InputStyled id={name} {...rest} />
        </Container>
    )
}

export default Input