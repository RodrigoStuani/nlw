import React, { useState} from 'react';
import './App.css';
import Header from './Header';

// JSX: Sintaxe de UML dentro do Javascript.

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hello word" />
        
      <h1>Adicionando conteúdo da aplicação.</h1>

  <h1>Contador = {counter}</h1>
  <button type="button" onClick={handleButtonClick}>Alterar valor</button>
    </div>
    );
}

export default App;
