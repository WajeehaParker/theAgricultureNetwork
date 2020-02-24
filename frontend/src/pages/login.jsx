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

  getUser = _ =>{
    fetch('http://localhost:4000/users/'+this.state.email)
    .then(res => {
      return res.json()
    })
    .then(users=> {
        this.setState({ users: users })
     })
      .catch(err => console.error(err));
  };

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  validate = _ =>{
    this.getUser();
    if(this.state.users.length<1 || this.state.users[0].password!=this.state.password){
      this.setState({
        err:'Incorrect Username or Password!',
        validate:false
      })
    }
    else{
      this.state.validate=true;
    }
  }

    render(){
        return (
            <div id="logd2">
             <div class="container" id="logd">
                  <h1 id="logh">LOG IN</h1><br />
                  <form id="logf">
                    <div class="row">
                      <div class="col-12">
                        <input id="I1" type="text" class="form-control" name="email" value={this.state.email} onChange={e => this.change(e)} placeholder="Email Address" />
                      </div>
                      <div class="col-12"  >
                        <input id="I2" type="password" class="form-control" name="password" value={this.state.password} onChange={e => this.change(e)} placeholder="Password" />
                      </div>
                    </div>

                    <Link id="logl" to="/main" class="btn btn-info" role="button" mt-3 onClick={()=>this.validate()}>Log In</Link>
                      <br /><br />

                    <p id="logp">Need an account?<span><Link id="signin" to="/signin"> Sign Up</Link></span></p>
                  </form>
                </div>
            </div>
            );
    }
}

export default Login;
