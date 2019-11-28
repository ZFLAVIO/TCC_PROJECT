 import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import {Link} from 'react-router';
 


export class ListarPerfil extends Component{

    render(){
        return (
          <div class = "container-fluid">        
          <table id="productSizes" class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Perfil</th>
              <th scope="col">Descrição</th>
              <th scope="col"> </th>

            </tr>
          </thead>
          <tbody>
            <tr>
               <th scope="row">
                <input type="checkbox" id="scales" name="scales"></input>
              </th>
             
              <td>Administrador</td>
              <td>perfil com acesso total ao sistema</td>
            </tr>
            <tr>
               <th scope="row">
                <input type="checkbox" id="scales" name="scales"></input>
              </th>
             
              <td>Fornecedor</td>
              <td>perfil com acesso ao modulo de fornecedor</td>
            
            </tr>
          </tbody>
        </table>
  
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
               <Link class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" to="/CadastrarPerfil">Cadastrar Pefil</Link>
            </div>
            </div>
            <div class="col-sm">
            <div class="col-sm">
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
               <Link class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" to="/CadastrarPerfil">Editar Pefil</Link>
              </div>
            </div>
              
  
            </div>
            <div class="col-sm">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
               <Link class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" to="/CadastrarPerfil">Apagar Perfil</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
        );
      
      }
    }

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