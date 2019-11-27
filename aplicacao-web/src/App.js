import React, {Component} from 'react';

import logo from './logo.png';
import './App.css';
import './bootstrap.min.css';
import {Link} from 'react-router';
import {CadastraUsuario} from './Usuario';
import {CadastraFornecedor} from './Fornecedor';
import {CadastraPerfil} from './Perfil';
import {RelatorioAcomponhamento} from './Relatorio';
import Router from 'react-router/es/Router';
  
class App extends Component{
 render() {
  return (
      <div className="container">
          <div className="row">
            <div className="col">
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
               <img src={logo} classNameName="ml-3" alt="..."></img>
            
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
               
               
               
              </div>
            </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-29">
              <br></br>
            <div class="row">
              <div class="col-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <Link class="nav-link " id="v-pills-home-tab" data-toggle="pill" to="/ListarUsuario">Listar_usuario</Link>
                  <Link class="nav-link " id="v-pills-profile-tab" data-toggle="pill" to="/perfil">Cadastrar_Perfil</Link>
                  <Link class="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="/fornecedor">Cadastrar_Fonecedor</Link>
                  <Link class="nav-link " id="v-pills-settings-tab" data-toggle="pill" to="/relatorio">Relatorio</Link>
                </div>
              </div>
             </div>
            </div>
            <div className="col-sm-10">
              {this.props.children}
            </div>
          </div>
      </div>  
  );
}
}

export default App;
