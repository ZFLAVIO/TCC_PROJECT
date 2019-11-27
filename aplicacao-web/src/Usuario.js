 import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import {Link} from 'react-router';


export class ListarUsuario extends Component{

  render(){
      return (
        <div class = "container-fluid">        
        <table id="productSizes" class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">email</th>
            <th scope="col">Endereço</th>
            <th scope="col">Numero</th>
            <th scope="col">Cidade</th>
            <th scope="col">Estado</th>
            <th scope="col">Telefone</th>
            <th scope="col">Celular</th>
            <th scope="col">Perfil</th>
            <th scope="col"> </th>
            

          </tr>
        </thead>
        <tbody>
          <tr>
             <td scope="row">
              <input type="checkbox" id="scales" name="scales"></input>
            </td>
            <td>Kaique Erick Figueiredo</td>
            <td>Jose@gmail.com</td>
            <td>Avenida Sérgio Gama </td>
            <td>105</td>            
            <td>Avelino Lopes</td>
            <td>PI</td>
            <td>(89) 2816-0621</td>
            <td>(89) 98747-4776</td>
            <td>Administrador</td>
          </tr>
          <tr>

            <td scope="row">
              <input type="checkbox" id="scales" name="scales"></input>
            </td>
            <td> Erick da silva</td>
            <td>DaSilva@gmail.com</td>
            <td>Avenida Gama  </td>
            <td>105</td>            
            <td>Sao Paulo</td>
            <td>SP</td>
            <td>(11) 2816-0621</td>
            <td>(11) 98747-4776</td>
            <td>Administrador</td>
          </tr>
        </tbody>
      </table>

      <div class="container">
        <div class="row">
          <div class="col-sm">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
             <Link class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" to="/CadastrarUsuario">Cadastrar Usuario</Link>
          </div>
          </div>
          <div class="col-sm">
          <div class="col-sm">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
             <Link class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" to="/CadastrarUsuario">Editar Usuario</Link>
            </div>
          </div>
            

          </div>
          <div class="col-sm">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
             <Link class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" to="/CadastrarUsuario">Apagar Usuario</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
    
    }
  }


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