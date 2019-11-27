import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {CadastraUsuario} from './Usuario';
import {CadastraFornecedor} from './Fornecedor';
import {CadastraPerfil} from './Perfil';
import {RelatorioAcomponhamento} from './Relatorio';
import {ListarUsuario} from './Usuario';
import {Router,Route,browserHistory} from 'react-router';
 
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component = {App}>
            <Route path="/ListarUsuario" component = {ListarUsuario}/>            
            <Route path="/CadastrarUsuario" component = {CadastraUsuario}/>            
            <Route path="/fornecedor" component = {CadastraFornecedor}/>   
            <Route path="/perfil" component = {CadastraPerfil}/>   
            <Route path="/relatorio" component = {RelatorioAcomponhamento}/>  
        </Route>             
    </Router>),
    document.getElementById('root')
);