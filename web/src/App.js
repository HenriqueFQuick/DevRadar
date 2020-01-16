import React, { useState, useEffect } from 'react';
import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

//Componente -> funcao que retorna conteudo html/css/js pra interface -> Bloco isolado de HTML, CSS e js que nao interfere no restante da aplicacao
//Estado -> informacoes mantidas pelo componente (lembrar : imutabilidade)
//Propriedade -> (atributo do html) informacoes que um componente pai passa para o componente filho


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handlerAddDev(data){
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }


  return (
   <div id="app">
     <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handlerAddDev} />
     </aside>
     <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
     </main>
   </div>
  );
}

export default App;
