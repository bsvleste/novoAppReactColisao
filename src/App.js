import React, { Component } from 'react';
import { isAuthenticated } from "./Auth/Auth";
import Header from "./Componentes/Menu/Header";
import Rotas from './Componentes/Rotas';
import { isAdm } from './Auth/Auth';
import GlobalStyle from './globalcss/Globalcss';

class App extends Component {
  render() {
    return (
      <div>
      <GlobalStyle />
        {
          isAuthenticated() ? (
            <Header  auth={isAdm()} />
          ) :
            ''
        }
        <Rotas auth={isAdm()}/> 
      </div>
    );
  }
}

export default App;
