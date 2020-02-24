import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Viewpest.css';

class Viewcrop extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id, crop:{}
    }
  }

  componentDidMount(){
      this.getCrop();
    }

  getCrop = _ =>{
    this.state.text='changed';
    fetch('http://localhost:4000/crops/'+this.state.id)
      .then(res => {
        return res.json()
     })
    .then(crop => {
        this.setState({ crop: crop[0] })
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
                        <h1>View Crop</h1>
                        <hr class="vphr"/>
                    </div>
                      <div className="form-group">
                          <label class="vplabel">Name:</label>
                          <p className="form-control-static">{this.state.crop.name}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Kingdom:</label>
                          <p className="form-control-static">{this.state.crop.kingdom}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Phylum:</label>
                          <p className="form-control-static">{this.state.crop.phylum}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Class:</label>
                          <p className="form-control-static">{this.state.crop.class}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Order:</label>
                          <p className="form-control-static">{this.state.crop.c_order}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Family:</label>
                          <p className="form-control-static">{this.state.crop.family}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Genus:</label>
                          <p className="form-control-static">{this.state.crop.genus}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Cotyledon:</label>
                          <p className="form-control-static">{this.state.crop.cotyledon}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Type:</label>
                          <p className="form-control-static">{this.state.crop.type}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Season:</label>
                          <p className="form-control-static">{this.state.crop.season}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Height:</label>
                          <p className="form-control-static">{this.state.crop.height}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Leaf Size:</label>
                          <p className="form-control-static">{this.state.crop.leaf_size}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Total Time:</label>
                          <p className="form-control-static">{this.state.crop.total_time}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Water Consumption:</label>
                          <p className="form-control-static">{this.state.crop.water_consumption}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Species:</label>
                          <p className="form-control-static">{this.state.crop.species}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Sexuality:</label>
                          <p className="form-control-static">{this.state.crop.sexuality}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Climate Zone:</label>
                          <p className="form-control-static">{this.state.crop.climate_zone}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Water Resources:</label>
                          <p className="form-control-static">{this.state.crop.water_resources}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Edible:</label>
                          <p className="form-control-static">{this.state.crop.edible}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Temperature:</label>
                          <p className="form-control-static">{this.state.crop.temperature}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Humidity:</label>
                          <p className="form-control-static">{this.state.crop.humidity}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Rainfall:</label>
                          <p className="form-control-static">{this.state.crop.rainfall}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Sunshine:</label>
                          <p className="form-control-static">{this.state.crop.sunshine}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Soil:</label>
                          <p className="form-control-static">{this.state.crop.soil}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Sowing Period:</label>
                          <p className="form-control-static">{this.state.crop.sowing_period}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Fruiting Period:</label>
                          <p className="form-control-static">{this.state.crop.fruiting_period}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Province:</label>
                          <p className="form-control-static">{this.state.crop.province}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">District:</label>
                          <p className="form-control-static">{this.state.crop.district}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Fertilizers:</label>
                          <p className="form-control-static">{this.state.crop.fertilizers}</p>
                      </div>
                      <div className="form-group">
                          <label class="vplabel">Fertilizer Dose:</label>
                          <p className="form-control-static">{this.state.crop.fer_dozes}</p>
                      </div>
                    <hr class="vphr" />
                    <p><Link id="vpl" to="/crops" class="btn btn-info" role="button"><b>Back</b></Link></p>
                </div>
            </div>
        </div>
    </div>
            );
    }
}

export default Viewcrop;
