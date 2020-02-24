import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/account.css';


class Account extends Component
{
    render(){
        return (
            <div id="accd">
                <div id="accd2">
                    <h2 id="accp">Your account has been<br /> successfully created</h2>
                    <Link id="accl" to="/" class="btn btn-info" role="button" mt-3>Log In</Link>
                </div>
            </div>
            
            );
    }
}

export default Account;