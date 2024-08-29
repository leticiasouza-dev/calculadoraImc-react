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

function CamposNumericos({label, placeholder, value, onChange}){
    return(
        <DivConteudo>
            <Label>{label}</Label>
            <Input type="number" placeholder={placeholder} value={value} onChange={onChange}/>
        </DivConteudo>
        
    )
}

export default CamposNumericos;