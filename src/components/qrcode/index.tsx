import React from 'react';
import { QrcodeStyled, Container } from "./style"

interface QrCodeState{
    value: string
}

const Qrcode: React.FC<QrCodeState> = ({value}) =>  {
    return(
        <Container>
            <QrcodeStyled
                value={value}
                size={250} 
                level={"H"}
                includeMargin={true}
                
            />
        </Container>
    )
}

export default Qrcode;