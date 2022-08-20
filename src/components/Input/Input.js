import {React} from 'react'
import { InputStyled } from './Input.styled'

const Input = ({max, onChange}) => {
    return (
        <InputStyled type="range" min="0" max={max} onChange={onChange}/>
    )
}

export default Input