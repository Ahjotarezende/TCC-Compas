import {React, useState} from 'react'
import Input from '../Input/Input'
import { DivCalculadora, DivPeso, Peso, Altura, DivAltura, Calcular, Resultado } from './Calculadora.styled';

const Calculadora = () => {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [calculo, setCalculo] = useState()

    const calcIMC = () => {
        let IMC
        const alturaReal = altura/100
        const result = (peso/(alturaReal*alturaReal)).toFixed(2)
        if(result<18.5)
            IMC="Abaixo do peso"
        else if(result>=18.5 && result<=24.9)
            IMC="Peso normal"
        else if(result>24.9 && result<=29.9)
            IMC="Excesso de peso"
        else if(result>29.9 && result<=34.9)
            IMC="Obesidade classe I"
        else if(result>34.9 && result<=39.9)
            IMC="Obesidade classe II"
        else
            IMC="Obesidade classe III"
        setCalculo(`IMC: ${result} (${IMC})`)
    }

    return (
    <DivCalculadora>
        <h2>Calcule seu IMC</h2>
        <DivPeso>
            <p>Peso</p>
            <Peso>{peso ? peso : 55}</Peso>
        </DivPeso>
        <Input max="200" onChange={(e) => setPeso(e.target.value)}/>
        <DivAltura>
            <p>Altura</p>
            <Altura>{altura ? (altura/100).toFixed(2) : 0.50}</Altura>
        </DivAltura>
        <Input max="220" onChange={(e) => setAltura(e.target.value)}/>
        <Calcular onClick={calcIMC}>Calcular</Calcular>
        <Resultado>{calculo}</Resultado>
    </DivCalculadora>
  )
}

export default Calculadora