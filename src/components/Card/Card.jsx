import styled from "styled-components";
import CamposNumericos from "../CamposNumericos/CamposNumericos";

const DivContainer = styled.div`
    background-color: #35313b;
    width: 500px;
    height: 500px;

    padding: 50px;

    h1{
        text-align: center;
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
        
    </DivContainer>
)
}

export default Card;

