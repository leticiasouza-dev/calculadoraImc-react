import { useState } from 'react';
import './App.css'
import Card from './components/Card/Card.jsx'

function App() {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [valorImc, setValorImc] = useState(0);
  const [mensagem, setMensagem] = useState('');
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const handleClear = () => {
    setAltura(0)
    setPeso(0)
    setMostrarMensagem(false);
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
    let calculo = peso / (altura * altura);
    setValorImc(calculo.toFixed(2))
    console.log(valorImc);
  }

  const resultadoImc = (resultado) => {
    if(resultado < 16.90){
      setMensagem('Muito abaixo do peso');
    } else if (resultado >= 17 && resultado <= 18.40){
      setMensagem("Abaixo do peso");
    } else if (resultado >= 18.50 && resultado <= 24.90){
      setMensagem("Peso normal");
    } else {
      setMensagem("Acima do peso");
    }
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
        resultadoImc={resultadoImc}
        valorImc={valorImc}
        mensagem={mensagem}
        mostrarMensagem={mostrarMensagem}
        setMostrarMensagem={setMostrarMensagem}
        />
    </main>
  )
}

export default App;
