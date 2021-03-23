import React, { useState } from 'react';

import './styles/global.css'

function App() {
  const [logradouro, setLogradouro] = useState('');
  const [uf, setUf] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [cep, setCep] = useState('');

  const getCep = async () => {
    if(cep.length >=8){
      const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(json => {return(json)})
  
      setUf(data.uf);
      setBairro(data.bairro);
      setLocalidade(data.localidade);
      setLogradouro(data.logradouro);    
    }  
  }

  const limparEstados = () => {
    setLogradouro('')
    setUf('')
    setBairro('')
    setLocalidade('')
    setCep('')
  }

  return (
      <div className="Container">
        <div className="Body-Container">
          <h1>
            Via Cep
          </h1>
          <div className="Input-Container">
            <input placeholder="Digite seu cep:" maxLength={8} value={cep} onChange={(e) => {setCep(e.target.value)}}></input>
          </div>
          <div className="Values-Container">
            <input placeholder="Logradouro" value={logradouro}></input>
            <input placeholder="Localidade" value={localidade}></input>
            <input placeholder="Bairro" value={bairro}></input>
            <input placeholder="UF" value={uf}></input>
          </div>
          <div className="div-buttons">
            <button onClick={() => getCep()}>Buscar</button>
            <button onClick={() => limparEstados()}>Limpar</button>
          </div>
        </div>
      </div>
  );
}

export default App;
