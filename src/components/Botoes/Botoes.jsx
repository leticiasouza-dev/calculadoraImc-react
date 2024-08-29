import styled from "styled-components";


const Botao = styled.button`
    width: 180px;
    
    padding: 20px 40px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 450px){
        width: 110px;
        padding: 10px 20px;
    }
`

function Botoes ({nome, onclick, cor}){
    return(
        <Botao onclick={onclick} style={{backgroundColor: `${cor}`}}>
            {nome}
        </Botao>
     
        
    )
}

export default Botoes;