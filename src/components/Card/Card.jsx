import styled from "styled-components";
import CamposNumericos from "../CamposNumericos/CamposNumericos";
import Botoes from "../Botoes/Botoes";

const DivContainer = styled.div`
    background-color: #1d1e33;
    width: 500px;
    height: 500px;

    padding: 50px;

    h1{
        color: white;
        text-align: center;
        margin-bottom: 40px;
    }

    .containerBotoes{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;
    }

    @media screen and (max-width: 450px){
        width: 90%;
        height: auto;

        .containerBotoes{
            margin-top: 25px;
            justify-content: center;
        }
    }
`

function Card({altura, peso, setAltura, setPeso, handleClear, handleChangeAltura, handleChangePeso}){
    return(
        <DivContainer>
            <h1>Calculadora de IMC</h1>


            <CamposNumericos
                label="Altura:"
                placeholder="Exemplo 1.75"
                value={altura}
                onChange={(evento) => handleChangeAltura(evento.target.value)}
            />

            <CamposNumericos
                label="Peso:"
                placeholder="Exemplo 70.5"
                value={peso}
                onchange={(evento) => handleChangePeso(evento.target.value)}
            />

            <div className="containerBotoes">
                <Botoes nome="Calcular"  cor="#e04138"/>
                <Botoes nome="Limpar" onClick={handleClear} cor="#404042"/>
            </div>
            
            
        </DivContainer> 
)
}

export default Card;

