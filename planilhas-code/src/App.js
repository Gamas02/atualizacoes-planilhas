import { useState } from 'react';
import './App.css';

//importa arquivo csv
const ImportaTabela = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onload = (event) => { 
    const text = event.target.result;
    const rows = text.split("\n").map((r) => r.split(",")); 
    console.log(rows); 
  };
}

//chamar o arquivo csv em formato tabela
function MostraTabela(){

}

//clicar no botao
function handleClick(){

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Logo</p>
      </header>
      <aside>
        <div>bt1</div>
        <div>bt2</div>
        <div>bt3</div>
      </aside>
      <main>
        <p>Tabela</p>
      </main>
    </div>
  );
}

export default App;