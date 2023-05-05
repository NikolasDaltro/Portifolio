import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/index';
import Projetos from './components/body/projetos/index';
import Tecnologias from './components/body/tecnologias/index';
import Trabalhos from './components/body/trabalhos/index'
import Contato from './components/body/contato/index';




function App() {
  return (
    <>
      <header>
      <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/projetos' Component={Projetos} />
          <Route path='/tecnologias' Component={Tecnologias} />
          <Route path='/trabalhos' Component={Trabalhos} />
          <Route path='/contatos' Component={Contato} />
        </Routes>

      </header>

      <main>
       
     
      </main>
    </>
  )
}

export default App;
