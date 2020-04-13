import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/updatebiocontrol.css';


class UpdateBioControl extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id, control:{}, pests:[], err:'', predator:'', prey:'', fetchData:true
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
    fetch('http://localhost:4000/bioControls/'+this.state.id)
      .then(res => {
        return res.json()
     })
    .then(control => {
        this.setState({
          control: control[0]
        })
     })
      .catch(err => console.error(err));
  };

  getPestName = _ =>{
    this.state.fetchData=false;
    this.state.pests.map((index, j)=>{
      if(this.state.control.predator===index['id']){
        this.state.predator=index['name'];
      }
      if(this.state.control.prey===index['id']){
        this.state.prey=index['name'];
      }
    });
  }

  update = states => {
    var p1=0, p2=0;
    if(states.predator==='Select' || states.prey==='Select'){
      this.state.err = 'empty field!'
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
      var temp = {
        predator: p1,
        prey: p2
      }
      this.edit(temp);
      this.props.history.push("/biocontrol");
    }
  };

  edit = (control) =>
  {
    fetch('http://localhost:4000/bioControls/'+this.state.id,{
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
          <div class="container" id="ubcfd">
          {this.state.pests.length>0 && this.state.fetchData && this.getPestName()}
            <h1 id="ubcfh">UPDATE BIOLOGICAL CONTROL</h1><br />
            <div id="ubcf">
              <div class="row">
                <div class="col-12">
                  <label>Predator</label>
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
              <button class="btn btn-primary mt-3" onClick={()=>this.update(this.state)}>Submit</button>
              <Link id="ubcl" to="/biocontrol" class="btn btn-primary" role="button">Cancel</Link>
            </div>
          </div>
        );
    }
}

export default UpdateBioControl;
