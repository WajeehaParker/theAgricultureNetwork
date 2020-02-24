 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Viewpest.css';

class ViewCulControl extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id, control:{}, pest:[]
    }
  }

  componentDidMount(){
      this.getControl();
    }

  getPests = _ =>{
    fetch('http://localhost:4000/pests/'+this.state.control.insect)
      .then(res => {
        return res.json()
     })
    .then(pests => {
        this.setState({ pest: pests })
     })
      .catch(err => console.error(err));
  };

  getControl = _ =>{
    fetch('http://localhost:4000/culControls/'+this.state.id)
      .then(res => {
        return res.json()
     })
    .then(control => {
        this.setState({ control: control[0] })
     })
      .catch(err => console.error(err));
  };

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
                    {this.getPests()}
                      <div className="form-group">
                          <label className="vplabel">Insect:</label>
                          {
                            this.state.pest.map((item, i) => (
                            <div>
                              <p className="form-control-static">{item.name}</p>
                            </div>
                          ))}
                      </div>
                      <div className="form-group">
                          <label className="vplabel">Description:</label>
                          <p className="form-control-static">{this.state.control.description}</p>
                      </div>
                    <hr class="vphr" />
                    <p><Link id="vpl" to="/culcontrol" class="btn btn-info" role="button"><b>Back</b></Link></p>
                </div>
            </div>
        </div>
    </div>
            );
    }
}

export default ViewCulControl;
