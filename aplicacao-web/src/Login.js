import React, { Component } from 'react';
import {browserHistory} from  'react-router';
import logo from './logo.png';
import './login.css';
export class Login extends Component {

    constructor(props){
        super(props);        
        this.state = {msg:this.props.location.query.msg};
    }

    envia(event){
     
      event.preventDefault();
        const requestInfo = {
            method:'POST',
            body:JSON.stringify({email:this.email.value,senha:this.senha.value}),
            headers:new Headers({
                'Content-type' : 'application/json'
            })
        };

        fetch('http://localhost:8080/auth',requestInfo)
            .then(response => {
                if(response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possível fazer o login');
                }
            })
            .then(token => {
                localStorage.setItem('auth-token',token);
                browserHistory.push('/timeline');
            })
            .catch(error => {
                this.setState({msg:error.message});
            });
    }

    render(){
        return (
            <div className="login-box">
                <img src={logo} classNameName="ml-3" alt="..."></img>
                 <h1>{this.state.msg}</h1>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.email = input}/>
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}