import styled from "styled-components"

export const DivCalculadora = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins';
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 15px;
    width: 52em;
    height: 33.5em;
    h2{
        margin-top: 18px;
        margin-bottom: 42px;
        font-weight: 400;
        font-size: 40px;
        line-height: 60px;
        @media (max-width: 281px){
            font-size: 25px;
        }
    }
`;

export const DivPeso = styled.div`
    display: flex;
    width: 14em;
    justify-content: space-between;
    font-size: 24px;
    margin-bottom: 10px;
    p{
        font-weight: 300;
        line-height: 36px;
    }
    @media (max-width: 281px){
        font-size: 20px;
        width: 80%;
    }
`;

export const Resultado = styled.p`
    font-weight: 300;
    font-size: 1.85em;
    line-height: 45px;
    margin-top: 40px;
    @media (max-width: 415px){
        font-size: 1.5em;
    }
    @media (max-width: 361px){
        font-size: 1.1em;
    }
`;

export const Calcular = styled.button`
    margin-top: 40px;
    width: 11.5em;
    color: white;
    background: #F7B718;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 30px;
    font-family: 'Poppins';
    font-weight: 300;
    line-height: 45px;
    height: 60px;
    @media (max-width: 281px){
        font-size: 26px;
        width: 9em;
    }
`;

export const DivAltura = styled.div`
    display: flex;
    margin-top: 48px;
    margin-bottom: 10px;
    width: 14em;
    justify-content: space-between;
    font-size: 24px;
    p{
        font-weight: 300;
        line-height: 36px;
    }
    @media (max-width: 281px){
        font-size: 20px;
        width: 80%;
    }
`;

export const Peso = styled.p`
    font-size: 40px;
    color: #F7B718;
    @media (max-width: 281px){
        font-size: 36px;
    }
`;

export const Altura = styled.p`
    font-size: 40px;
    color: #F7B718;
    @media (max-width: 281px){
        font-size: 36px;
    }
`;