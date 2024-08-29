import styled from "styled-components";

const DivConteudo = styled.div`
    display: flex;
    flex-direction: column;

`
const Label = styled.label`
    color: white;
    
`

const Input = styled.input`
    padding: 20px 10px;
    margin: 9px 0;
`

function CamposNumericos({label, placeholder}){
    return(
        <DivConteudo>
            <Label>{label}</Label>
            <Input type="number" placeholder={placeholder}/>
        </DivConteudo>
        
    )
}

export default CamposNumericos;