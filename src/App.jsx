import { useState } from 'react';
import './App.css'
import Card from './components/Card/Card.jsx'

function App() {

  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [valorImc, setValorImc] = useState(0);

  const handleClear = () => {
    setAltura(0)
    setPeso(0)
    console.log('foi');
  }

  const handleChangeAltura = (event) =>{
    setAltura(event)
    console.log(altura);
  }

  const handleChangePeso = (event) => {
    setPeso(event)
    console.log(peso);
  }

  const calculoImc = (peso, altura) => {
    let calculo = peso / (altura * altura) 
    setValorImc(calculo);
    console.log(valorImc);
  }

  return (
    <main>
      <Card 
        altura={altura} 
        peso={peso} 
        setAltura={setAltura} 
        setPeso={setPeso}
        handleClear={handleClear}
        handleChangeAltura={handleChangeAltura}
        handleChangePeso={handleChangePeso}
        calculoImc={calculoImc}
        />
    </main>
  )
}

export default App;
