import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/updatepest.css';


class Updatepest extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id, pest:{}, err:'', name:'', bio_name:'', type:''
    }
  }

  componentDidMount(){
      this.getPests();
    }

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  getPests = _ =>{
    fetch('http://localhost:4000/pests/'+this.state.id)
      .then(res => {
        return res.json()
     })
    .then(pests => {
        this.setState({
          pest: pests[0],
          name: pests[0].name,
          bio_name: pests[0].biological_name,
          type: pests[0].type
        })
     })
      .catch(err => console.error(err));
  };

  update = states => {
    if(states.name==='' || states.bio_name===''){
      this.state.err = 'empty field!'
    }
    else{
      var temp = {
        "name": states.name,
        "biological_name" : states.bio_name,
        "type" : states.type
      }
      this.edit(temp);
      this.props.history.push("/pest");
    }
  };

    edit = (control) =>
    {
      fetch('http://localhost:4000/pests/'+this.state.id,{
        method : 'PUT',
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify(control)
      })
      .then(res => {
        return res.json();
     })
     .catch(err => console.error(err));
    };

    render(){
        return (
          <div class="container" id="upfd">
            <h1 id="upfh">UPDATE PESTICIDE</h1>
            <div id="upff">
              <div class="row">
                <div class="col-12">
                  <label>Pest Name</label>
                  <input name="name" value={this.state.name} type="text" class="form-control" onChange={e => this.change(e)} />
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <label>Pest Biological Name</label>
                  <input name="bio_name" value={this.state.bio_name} type="text" class="form-control" onChange={e => this.change(e)} />
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <label>Pest Type</label>
                  <select name="type" value={this.state.type} onChange={e => this.change(e)}>
                    <option>fungus</option>
                    <option>insect</option>
                    <option>disease</option>
                    <option>bacteria</option>
                    <option>parasite</option>
                    <option>virus</option>
                    <option>animal</option>
                    <option>rodent</option>
                  </select>
                </div>
              </div>
               <div>{this.state.err}</div>
               <button class="btn btn-primary mt-3" onClick={()=>this.update(this.state)}>Submit</button>
                <Link id="upl" to="/pest" class="btn btn-primary" role="button">Cancel</Link>
            </div>
          </div>
        );
    }
}

export default Updatepest;
