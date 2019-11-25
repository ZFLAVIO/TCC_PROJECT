import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CadastraUsuario} from './Usuario';
import {CadastraFornecedor} from './Fornecedor';
import {CadastraPerfil} from './Perfil';
import {RelatorioAcomponhamento} from './Relatorio';

import {Router,Route,BrowserHistory} from 'react-router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
        <Router history={BrowserHistory} >
            <Route path="/" componente = {App}/>
            <Route path="/usuario" componente = {CadastraUsuario}/>            
            <Route path="/fornecedor" componente = {CadastraFornecedor}/>   
            <Route path="/perfil" componente = {CadastraPerfil}/>   
            <Route path="/relatorio" componente = {RelatorioAcomponhamento}/>               
        </Router>
    ),
    document.getElementById('root')


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
