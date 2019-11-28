import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {CadastraUsuario} from './Usuario';
import {CadastraFornecedor} from './Fornecedor';
import {CadastraPerfil} from './Perfil';
import {ListarPerfil} from './Perfil';
import {Ecommerce} from './Ecommerce';
import {Login} from './Login';
import {RelatorioAcomponhamento} from './Relatorio';
import {ListarUsuario} from './Usuario';
import {Router,Route,browserHistory} from 'react-router';
 
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component = {Ecommerce}/>
        <Route path="/login" component = {Login}/>
        <Route path="/logado" component = {App}>
                <Route path="/ListarUsuario" component = {ListarUsuario}/>            
                <Route path="/CadastrarUsuario" component = {CadastraUsuario}/>            
                <Route path="/fornecedor" component = {CadastraFornecedor}/>   
                <Route path="/ListarPerfil" component = {ListarPerfil}/>   
                <Route path="/CadastrarPerfil" component = {CadastraPerfil}/>   
                <Route path="/relatorio" component = {RelatorioAcomponhamento}/>  
        </Route>             
    </Router>),
    document.getElementById('root')
);