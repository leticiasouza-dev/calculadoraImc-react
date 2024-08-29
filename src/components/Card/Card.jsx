import styled from "styled-components";
import CamposNumericos from "../CamposNumericos/CamposNumericos";
import Botoes from "../Botoes/Botoes";

const DivContainer = styled.div`
    background-color: #1d1e33;
    width: 500px;
    height: 500px;

    padding: 50px;

    h1{
        text-align: center;
    }

    @media screen and (max-width: 450px){
        width: 75%;
        height: 60%;
    }
`

function Card(){
    return(
    <DivContainer>
        <h1>Calculadora de IMC</h1>


        <CamposNumericos
            label="Altura:"
        />

        <CamposNumericos
            label="Peso:"
        />

        <Botoes nome="Calcular" cor="#e04138"/>
        <Botoes nome="Limpar" cor="#404042"/>
        
    </DivContainer>
)
}

export default Card;

