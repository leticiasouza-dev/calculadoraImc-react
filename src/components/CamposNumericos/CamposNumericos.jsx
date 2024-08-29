import styled from "styled-components";

const DivConteudo = styled.div`
`
const Label = styled.label`

`

const Input = styled.input`

`

function CamposNumericos({label}){
    return(
        <DivConteudo>
            <Label>{label}</Label>
            <Input type="number"/>
        </DivConteudo>
        
    )
}

export default CamposNumericos;