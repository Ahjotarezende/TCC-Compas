import React from 'react'
import Calculadora from '../../components/Calculadora/Calculadora'
import { HomeStyled } from './Home.styled'

const Home = () => {
  return (
    <HomeStyled>
        <Calculadora/>
    </HomeStyled>
  )
}

export default Home