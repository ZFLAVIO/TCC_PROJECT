import React from 'react';
import logo from './logo.png';
import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
          <img src={logo} classNameName="ml-3" alt="..."></img>
            <h5 className="card-title text-center"><b>Login</b></h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                <label for="inputEmail">Email address</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                <label for="inputPassword">Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                <label className="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr className="my-4"></hr>
             </form>
          </div>
        </div>
      </div>
    </div>
  </div>
   
  
  );
}

export default App;
