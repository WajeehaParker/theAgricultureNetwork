import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/login.css';


class Login extends Component
{
  constructor(props){
    super();
    this.state={
      users:[], email:'', password:'', err:'', validate:false
    }
  }

  componentDidMount(){
      this.getUsers();
    }

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

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  validate = states =>{
    if(states.email==='' || states.password==='')
    {
      this.state.err='Empty Fields'
    }
    else{
      this.state.users.map((item, i)=>{
        if(item['email']===this.state.email && item['password']===this.state.password){
          this.props.history.push("/main");
        }
      });
      this.state.err='Incorrect Username or Password!';
    }
  }

    render(){
        return (
            <div id="logd2">
             <div class="container" id="logd">
                  <h1 id="logh">LOG IN</h1><br />

                    <div class="row">
                      <div class="col-12">
                        <input id="I1" type="text" class="form-control" name="email" value={this.state.email} onChange={e => this.change(e)} placeholder="Email Address" />
                      </div>
                      <div class="col-12"  >
                        <input id="I2" type="password" class="form-control" name="password" value={this.state.password} onChange={e => this.change(e)} placeholder="Password" />
                      </div>
                    </div>
                    <div>{this.state.err}</div>
                    <button id="logl" class="btn btn-info mt-3" onClick={()=>this.validate(this.state)}>Log In</button>
                    <br /><br />

                    <p id="logp">Need an account?<span><Link id="signin" to="/signin"> Sign Up</Link></span></p>

                </div>
            </div>
            );
    }
}

export default Login;
