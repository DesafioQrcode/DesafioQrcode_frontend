import React, { FormEvent } from 'react';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import Qrcode from "../../components/qrcode";


function Home() {
    const submitFunction = (event: FormEvent) => {
        event.preventDefault()
        
    }

    return (
            <div >
                <Qrcode />

                <form onSubmit={submitFunction}>
                    <InputText label="CPF: " name="CPF"/>
                    <InputText label="CNPJ: " name="CNPJ"/>
                    <InputText label="Valor: " name="Valor"/>
                    <Button />
                </form>
            </div>
    )
}

export default Home;