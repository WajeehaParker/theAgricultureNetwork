import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createHashHistory } from "history";
import { Redirect } from 'react-router-dom'
import '../pages/signin.css';
import Login from '../pages/login';


class Signin extends Component
{
  constructor(props){
    super();
    this.state={
      users:[], fname:'', lname:'', email:'', password:'', err:'', duplicateUsername:false
    }
  }

  componentDidMount(){
      this.getUsers();
    }

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  add = states => {
    if(states.fname==='' || states.lname==='' || states.email==='' || states.password===''){
      this.setState({ err : 'empty field!' });
    }
    else{
      this.state.users.map((item, i)=>{
        if(item['email']===this.state.email){
          this.state.duplicateUsername= true;
          this.state.err="Username already Exists!";
        }
      });
      if(this.state.duplicateUsername===false){
        var user = {
          first_name:states.fname,
          last_name: states.lname,
          email: states.email,
          password: states.password
        }
        this.addUser(user);
        this.props.history.push("/");
      }
    }
  };

  addUser = user =>{
    fetch('http://localhost:4000/users/',{
      method : 'POST',
      headers: {'Content-Type':'application/json'},
      body : JSON.stringify(user)
    })
    .then(res => {
      return res.json();
   })
   .catch(err => console.error(err));
  };

  getUsers = _ =>{
    fetch('http://localhost:4000/users/')
    .then(res => {
      return res.json()
    })
    .then(user=> {
        this.setState({ users: user })
     })
     .catch(err => console.error(err));
   };

    render(){
        return (
            <div id="signd2">
             <div class="container" id="signd">
                  <h1 id="signh">SIGN UP</h1><br />
                  <div id="signf">
                    <div class="row">
                      <div class="col-12">
                        <input id="I1" type="text" class="form-control" name="fname" value={this.state.fname} onChange={e => this.change(e)} placeholder="First Name" />
                      </div>
                      <div class="col-12"  >
                        <input id="I2" type="text" class="form-control" name="lname" value={this.state.lname} onChange={e => this.change(e)} placeholder="Last Name" />
                      </div>
                        <div class="col-12"  >
                        <input id="I3" type="text" class="form-control" name="email" value={this.state.email} onChange={e => this.change(e)} placeholder="Email Address" />
                      </div>
                        <div class="col-12"  >
                        <input id="I4" type="password" class="form-control" name="password" value={this.state.password} onChange={e => this.change(e)} placeholder="Password" />
                      </div>
                    </div>

                    <div>{this.state.err}</div>
                    <button class="btn btn-primary mt-3" onClick={()=>this.add(this.state)}>CREATE ACCOUNT</button>
                    <br /><br />

                    <p id="signp">Already have an account?<span><Link id="signin" to="/"> Login in</Link></span></p>
                  </div>
                </div>
            </div>
            );
    }
}

export default Signin;
