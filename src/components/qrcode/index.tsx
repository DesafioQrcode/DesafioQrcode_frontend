import React from 'react';
import { QrcodeStyled, Container } from "./style"


function Qrcode() {
    return(
        <Container>
        <QrcodeStyled 
            value="String teste" 
            size={250}
            level={"H"}
        />
        </Container>
    )
}

export default Qrcode;