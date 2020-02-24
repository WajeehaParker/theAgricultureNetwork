import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Main.css';

const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
class Main extends Component
{
    render(){
        return (
         <div className="container" id="mcon">
              <h1 id="mh">THE AGRICULTURE NETWORK</h1>
                <div id="mcon2">
                   
                      <Link id="ml1" to="/crops" className="btn btn-info" role="button"><b>CROPS</b></Link><br />
                    
                 
                  <Link id="ml2" to="/pest" className="btn btn-info" role="button"><b>PESTICIDES</b></Link><br />
                    <div className="dropdown">
                        <button id="mb" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown"><b>CONTROLS</b></button>
                        
                           <div className="dropdown-menu">
                                  <Link id="ml3" className="dropdown-item" to="/biocontrol">BIOLOGICAL</Link>
                                  <Link id="ml4" className="dropdown-item" to="/mechcontrol">MECHANICAL</Link>
                                  <Link id="ml5" className="dropdown-item" to="/chemcontrol">CHEMICAL</Link>
                                  <Link id="ml6" className="dropdown-item" to="/culcontrol">CULTURAL</Link>
                          </div>
                    </div>
                 </div> 
            </div>
            );
    }
}

export default Main;