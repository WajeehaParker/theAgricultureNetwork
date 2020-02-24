import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/updateculcontrol.css';


class UpdateCulControl extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id, control:{}, pests:[], err:'', insect:'', desc:''
    }
  }

  componentDidMount(){
      this.getControl();
      this.getPests();
    }

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  getPests = _ =>{
    fetch('http://localhost:4000/pests')
      .then(res => {
        return res.json()
     })
    .then(pests => {
        this.setState({
          pests: pests
        })
     })
      .catch(err => console.error(err));
  };

  getControl = _ =>{
    fetch('http://localhost:4000/culControls/'+this.state.id)
      .then(res => {
        return res.json()
     })
    .then(control => {
        this.setState({
          control: control[0],
          desc:control[0].description
        })
     })
      .catch(err => console.error(err));
  };

  update = states => {
    var p1=0;
    if(states.insect==='Select' || states.desc===''){
      this.state.err = 'empty field!'
    }
    else{
      this.state.pests.map((item, i)=>{
        if(item['name']===states.insect){
          p1=item['id'];
        }
      });
      var temp = {
        insect: p1,
        description: states.desc
      }
      this.edit(temp);
    }
  };

  edit = (control) =>
  {
    fetch('http://localhost:4000/culControls/'+this.state.id,{
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
                <div class="container" id="ulcfd">
                  <h1 id="ulcfh">UPDATE CULTURAL CONTROL</h1><br />
                  <form id="ulcf">
                    <div class="row">
                      <div class="col-12">
                        <label>Insect</label>
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
                        <label>Discription</label>
                        <input name="desc" value={this.state.desc} type="text" class="form-control" onChange={e => this.change(e)} />
                      </div>
                    </div>
                    {this.state.err}
                    <Link id="ulcl" to="/culcontrol" class="btn btn-primary mt-3" onClick={()=> this.update(this.state)}>Submit</Link>
                    <Link id="ulcl" to="/culcontrol" class="btn btn-primary" role="button">Cancel</Link>
                  </form>
                </div>
        );
    }
}

export default UpdateCulControl;
