import { useState } from 'react';
import './App.css'
import Card from './components/Card/Card.jsx'

function App() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const handleClear = () => {
    setAltura(0)
    setPeso(0);
    console.log('foi');
  }

  const handleChangeAltura = (event) =>{
    setAltura(event.target.value);
    console.log(event.target.value);
  }

  const handleChangePeso = (event) => {
    setPeso(event)
    console.log(peso)
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
        />
    </main>
  )
}

export default App;
