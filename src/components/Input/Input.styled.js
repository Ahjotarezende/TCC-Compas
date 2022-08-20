import styled from "styled-components"

export const InputStyled = styled.input`
    appearance: none;
    border-radius: 4px;
    background-color: white;
    width: 350px;
    height: 25px;
    cursor: pointer;
    @media (max-width: 281px){
        width: 230px;
    }
    ::-webkit-slider-thumb{
        appearance: none;
        width: 45px;
        height: 45px;
        background-color: #F7B718;
        border-radius: 100%;
        @media (max-width: 281px){
            width: 20px;
            height: 20px;
        }
    }
`;