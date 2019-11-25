 import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';


export class CadastraPerfil extends Component{

    render(){
        return (
            <form>
            <div class="form-group">
            <label for="exampleInputEmail1">Perfil</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite um perfil para cadastrar"></input>
            </div>
                
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Descricao do perfil</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>    
            <button type="Cadastrar" class="btn btn-primary">Cadastrar</button>
        </form>

        );
    }

}