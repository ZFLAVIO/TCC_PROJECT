 import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';


export class CadastraUsuario extends Component{

    render(){
        return (
            <form>
            <div class="form-group">
                <label for="inputAddress">Nome</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Nome do Usuario"></input>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAddress">Endereço</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Avenida Paulista"></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Numero</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Numero"></input>
              </div>
                
          </div>
           
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity"></input>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Estado</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Cep</label>
                <input type="text" class="form-control" id="inputZip"></input>
              </div>
            </div>
          
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Telefone fixo</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="(11)1234-5678"></input>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Telefone celular</label>
                  <input type="text" class="form-control" id="inputPassword4" placeholder="(11)91234-5678"></input>
                </div>
              </div>
          
              <div class="form-group col-md-4">
                  <label for="inputState">Perfil</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
           
            <button type="submit" class="btn btn-primary">Cadastrar</button>
          </form>

        );
    }

}