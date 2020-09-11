import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import Qrcode from '../../components/qrcode';
import {Container} from './style'


interface AxiosResponseType {
    qrCodeString: string
}

function Home() {
    const [cpf, setCpf] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [valor, setValor] = useState(0)
    const [qrcode, setQrcode] = useState('')

   

    const submitFunction = (event: FormEvent) => {
        event.preventDefault()
        
        axios.post<AxiosResponseType>("http://localhost:3333/transactions", {
            cpf,
            cnpj,
            valor
        })
            .then(response => {
                const { qrCodeString } = response.data 
                setQrcode(qrCodeString)
                console.log(qrCodeString)
            }) 
    }

    const newQrcode = (event: FormEvent) =>  {
        setQrcode("")
        setCpf('')
        setCnpj('')
        setValor(0)
    }
    
    if(qrcode === ''){
        return(
            <Container>
            <form onSubmit={submitFunction}>
                <InputText 
                    label="CPF: " 
                    name="CPF"
                    placeholder="Entre com o seu CPF"
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCpf(e.target.value)
                    }} 
                    value={cpf}
                />
                <InputText 
                    label="CNPJ: " 
                    name="CNPJ"
                    required
                    placeholder="Entre com o CNPJ do recebedor"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                       setCnpj(e.target.value)
                    }}
                    value={cnpj}
                />
                <InputText 
                    label="Valor: " 
                    name="Valor"
                    type="Integer"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setValor(Number(e.target.value))
                     }} 
                     value={valor}
                />
                <Button
                    name="enviar"
                    label="Enviar"
                    type="submit"
                />
            </form>
        </Container>
        )}
    else{
        return(
            <Container >
            {qrcode && <Qrcode
                value={qrcode}>
            </Qrcode>}
            <form onSubmit={newQrcode}>
            <Button
                name="novo"
                label="Novo QRCode"
                type="reset"
                />
            </form>
            </Container>
            )
        }
}

export default Home;