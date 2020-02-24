import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/addculcontrol.css';


class AddCulControl extends Component
{
  constructor(props){
    super();
    this.state={
      pests:[], insect:'', desc:'', err:''
    }
  }

  componentDidMount(){
      this.getPests();
    }

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  add = states => {
    var p1=0;
    if(states.insect==='Select' || states.desc===''){
      this.setState({ err : 'empty field!' });
    }
    else{
      this.state.pests.map((item, i)=>{
        if(item['name']===states.insect){
          p1=item['id'];
        }
      });
      var culControl = {
        insect: p1,
        description: states.desc
      }
      this.addControl(culControl);
    }
  };

  addControl = control =>{
    fetch('http://localhost:4000/culControls/',{
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
                <div class="container" id="alcd">
                  <h1 id="alch">ADD CULTURAL CONTROL</h1><br />
                  <form id="alcf">
                    <div class="row">
                    {
                      /* <div class="col-sm-3">
                         <label>ID</label>
                         <input type="text" class="form-control" />
                       </div>*/
                    }
                    <div class="col-12"  >
                      <label >Insect</label>
                      <select name="insect" value={this.state.insect} onChange={e => this.change(e)}>
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
                        <label>Description</label>
                        <input type="text" class="form-control" name="desc" value={this.state.desc} onChange={e => this.change(e)} />
                      </div>
                    </div>
                    <div>{this.state.err}</div>
                    <Link to="/culControl"><button class="btn btn-primary mt-3" onClick={()=>this.add(this.state)}>Submit</button></Link>
                    <Link id="alcl" to="/culcontrol" class="btn btn-primary" role="button">Cancel</Link>
                  </form>
                </div>
        );
    }
}

export default AddCulControl;
