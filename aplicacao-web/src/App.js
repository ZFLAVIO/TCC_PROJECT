import React from 'react';
import logo from './logo.png';
import './App.css';
import './bootstrap.min.css';
import {CadastraUsuario} from './Usuario';
import {CadastraFornecedor} from './Fornecedor';
import {CadastraPerfil} from './Perfil';
import {RelatorioAcomponhamento} from './Relatorio';

function App() {
  return (
      <div className="container">
          <div className="row">
            <div className="col">
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#"> <img src={logo} classNameName="ml-3" alt="..."></img></a>
            
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  
                <li class="nav-item">
                          <a class="nav-link" href="#">Ofertas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Celulares</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Móveis</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Eletrodomésticos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tv e Vídeo</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Informática</a>
                        </li>

                </ul>
              </div>
            </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <br></br>
            <div class="row">
              <div class="col-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Cadastra_usuario</a>
                  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Cadastrar_Perfil</a>
                  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Cadastrar_Fonecedor</a>
                  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Relatorio</a>
                </div>
              </div>
              <div class="col-9">
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                </div>
              </div>
            </div>
            </div>
            <div className="col-sm-8">
              <CadastraFornecedor/>
                      
            </div>
          </div>
      </div>  
  );
}

export default App;
