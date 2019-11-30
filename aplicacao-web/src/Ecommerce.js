import React, { Component } from 'react';
import './bootstrap.min.css';
import logo from './logo.png';
import './App.css';
import {Link} from 'react-router';
 
export class Ecommerce extends Component{

    render(){
        return (
            
            <div className="container"> 
            <div className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
              <div className="container">
                <img src={logo} classNameName="ml-3" alt="..."></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="#">Home
                        <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">Sobre</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">Serviços</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/logado">Administrador</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          
            <div className="row">
       
       <div className="col-lg-3">

           <br></br>     
         <div className="list-group">
           <Link to="#" className="list-group-item">Category 1</Link>
           <Link to="#" className="list-group-item">Category 2</Link>
           <Link to="#" className="list-group-item">Category 3</Link>
         </div>
 
       </div>
       
 
       <div className="col-lg-9">
 
         <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
           <ol className="carousel-indicators">
             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>
           <div className="carousel-inner" role="listbox">
             <div className="carousel-item active">
               <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"></img>
             </div>
             <div className="carousel-item">
               <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"></img>
             </div>
             <div className="carousel-item">
               <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"></img>
             </div>
           </div>
           <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
           </Link>
           <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="sr-only">Next</span>
           </Link>
         </div>
 
         <div className="row">
 
           <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
               <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img> </Link>
               <div className="card-body">
                 <h4 className="card-title">
                   <Link to="#">Item One</Link>
                 </h4>
                 <h5>$24.99</h5>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
               </div>
               <div className="card-footer">
                 <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
               </div>
             </div>
           </div>
 
           <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
               <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></Link>
               <div className="card-body">
                 <h4 className="card-title">
                   <Link to="#">Item Two</Link>
                 </h4>
                 <h5>$24.99</h5>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
               </div>
               <div className="card-footer">
                 <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
               </div>
             </div>
           </div>
 
           <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
               <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></Link>
               <div className="card-body">
                 <h4 className="card-title">
                   <Link to="#">Item Three</Link>
                 </h4>
                 <h5>$24.99</h5>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
               </div>
               <div className="card-footer">
                 <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
               </div>
             </div>
           </div>
 
           <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
               <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></Link>
               <div className="card-body">
                 <h4 className="card-title">
                   <Link to="#">Item Four</Link>
                 </h4>
                 <h5>$24.99</h5>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
               </div>
               <div className="card-footer">
                 <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
               </div>
             </div>
           </div>
 
           <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
               <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></Link>
               <div className="card-body">
                 <h4 className="card-title">
                   <Link to="#">Item Five</Link>
                 </h4>
                 <h5>$24.99</h5>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
               </div>
               <div className="card-footer">
                 <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
               </div>
             </div>
           </div>
 
           <div className="col-lg-4 col-md-6 mb-4">
             <div className="card h-100">
               <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></Link>
               <div className="card-body">
                 <h4 className="card-title">
                   <Link to="#">Item Six</Link>
                 </h4>
                 <h5>$24.99</h5>
                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
               </div>
               <div className="card-footer">
                 <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
               </div>
             </div>
           </div>
 
         </div>
  
       </div>
  
     </div>

        <footer className="py-5 bg-dark">
            <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
            </div>
     </footer>
     </div>



        );
    }
}