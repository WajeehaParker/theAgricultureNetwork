import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Viewpest.css';

class ViewBioControl extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id, control:{}, pests:[]
    }
  }

  componentDidMount(){
      this.getControl();
      this.getPests();
    }

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

  getControl = _ =>{
    this.state.text='changed';
    fetch('http://localhost:4000/bioControls/'+this.state.id)
      .then(res => {
        return res.json()
     })
    .then(control => {
        this.setState({ control: control[0] })
     })
      .catch(err => console.error(err));
  };

  getPestName = _ =>{
    this.state.pests.map((index, j)=>{
      if(this.state.control.predator===index['id']){
        this.state.control.predator=index['name'];
      }
      if(this.state.control.prey===index['id']){
        this.state.control.prey=index['name'];
      }
    });
  }

  render(){
    return (
      <div className="wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                  <div className="page-header">
                      <h1>View Record</h1>
                      <hr class="vphr"/>
                  </div>
                    {this.getPestName()}
                    <div className="form-group">
                        <label className="vplabel">Predator:</label>
                        <p className="form-control-static">{this.state.control.predator}</p>
                    </div>
                    <div className="form-group">
                        <label className="vplabel">Prey:</label>
                        <p className="form-control-static">{this.state.control.prey}</p>
                    </div>

                    <hr class="vphr" />
                    <p><Link id="vpl" to="/biocontrol" class="btn btn-info" role="button"><b>Back</b></Link></p>
                </div>
            </div>
        </div>
      </div>
            );
    }
}

export default ViewBioControl;
