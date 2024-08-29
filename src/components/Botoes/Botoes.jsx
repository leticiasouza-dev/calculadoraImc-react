import styled from "styled-components";

const Botao = styled.button`
    
`

function Botoes ({nome, onclick, cor}){
    return(
        <Botao onclick={onclick} style={{backgroundColor: `${cor}`}}>
            {nome}
        </Botao>
    )
}

export default Botoes;