import React from 'react';
import {ButtonStyled, Container} from './style';

function Button(){
    return(
        <Container>
          <ButtonStyled type="submit" >Enviar</ButtonStyled>
        </Container>
    )
}

export default Button;