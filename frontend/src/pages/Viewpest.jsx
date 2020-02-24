import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Viewpest.css';

class Viewpest extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id, pest:{}
    }
  }

  componentDidMount(){
      this.getPests();
    }

  getPests = _ =>{
    fetch('http://localhost:4000/pests/'+this.state.id)
      .then(res => {
        return res.json()
     })
    .then(pests => {
        this.setState({ pest: pests[0] })
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
                        <div className="form-group">
                            <label className="vplabel">Pest Name:</label>
                            <p className="form-control-static">{this.state.pest.name}</p>
                        </div>
                        <div className="form-group">
                            <label className="vplabel">Pest Biological Name:</label>
                            <p className="form-control-static">{this.state.pest.biological_name}</p>
                        </div>
                        <div className="form-group">
                            <label className="vplabel">Pest Type:</label>
                            <p className="form-control-static">{this.state.pest.type}</p>
                        </div>
                    <hr class="vphr" />
                    <p><Link id="vpl" to="/pest" class="btn btn-info" role="button"><b>Back</b></Link></p>
                </div>
            </div>
        </div>
    </div>
            );
    }
}

export default Viewpest;
