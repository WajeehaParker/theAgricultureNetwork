import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/addbiocontrol.css';


class AddBioControl extends Component
{
  constructor(props){
    super();
    this.state={
      pests:[], predator:'', prey:'', err:''
    }
  }

  componentDidMount(){
      this.getPests();
    }

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  add = states => {
    var p1=0, p2=0;
    if(states.predator==='Select' || states.prey==='Select'){
      this.setState({ err : 'empty field!' });
    }
    else{
      this.state.pests.map((item, i)=>{
        if(item['name']===states.predator){
          p1=item['id'];
        }
        if(item['name']===states.prey){
          p2=item['id'];
        }
      });
      var bioControl = {
        predator: p1,
        prey: p2
      }
      this.addControl(bioControl);
    }
  };

  addControl = control =>{
    fetch('http://localhost:4000/bioControls/',{
      method : 'POST',
      headers: {'Content-Type':'application/json'},
      body : JSON.stringify(control)
    })
    .then(res => {
      return res.json();
   })
   .catch(err => console.error(err));
  };

  getPests = _ =>{
    fetch('http://localhost:4000/pests')
    .then(res => {
      return res.json()
    })
    .then(pests => {
        this.setState({ pests: pests })
     })
      .catch(err => console.error(err));
  };

  render(){
    return (
      <div class="container" id="abcd">
        <h1 id="abch">ADD BIOLOGICAL CONTROL</h1><br />
        <div id="abcf">
          <div class="row">
          {
            /* <div class="col-sm-3">
               <label>ID</label>
               <input type="text" class="form-control" />
             </div>*/
          }
            <div class="col-12"  >
              <label >Predator</label>
              <select name="predator" value={this.state.predator} onChange={e => this.change(e)}>
                <option>Select</option>
                {
                  this.state.pests.map((item, i) => (
                    <option>{item['name']}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label>Prey</label>
              <select name="prey" value={this.state.prey} onChange={e => this.change(e)}>
                <option>Select</option>
                {
                  this.state.pests.map((item, i) => (
                    <option>{item['name']}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div>{this.state.err}</div>
          <Link to="/biocontrol"><button class="btn btn-primary mt-3" onClick={()=>this.add(this.state)}>Submit</button></Link>
          <Link id="abcl" to="/biocontrol" class="btn btn-primary" role="button">Cancel</Link>
        </div>
      </div>
    );
  }
}

export default AddBioControl;
