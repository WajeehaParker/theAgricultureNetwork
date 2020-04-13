import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/addcrop.css';


class Addcrop extends Component
{
  constructor(props){
    super();
    this.state={
      districts:[],
      name:'', kingdom:'', phylum:'', class:'', order:'', family:'', genus:'', cotyledon:'monocot', type:'herb',
      season:'Rabi', height:'', leaf_size:'', total_time:'', water_consumption:'', species:'', sexuality:'unisexual',
      climate_zone:'', water_resources:'', edible:'Yes', temperature:'', humidity:'', rainfall:'', sunshine:'', soil:'',
      sowing_prd:'', fruiting_prd:'', province:'Sindh', district:'Select', fertilizers:'', fertilizer_dozes:'', err:''
    }
  }

  componentDidMount(){
    this.changeProvince();
  }

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  add = states => {
    if(states.name==='' || states.kingdom===''|| states.phylum===''|| states.class===''|| states.order===''|| states.family===''
      || states.genus===''|| states.water_consumption===''|| states.height===''
      || states.leaf_size===''|| states.total_time===''|| states.climate_zone===''
      || states.water_resources===''|| states.temperature===''|| states.humidity===''|| states.rainfall===''
      || states.sunshine===''|| states.soil===''|| states.sowing_prd===''|| states.fruiting_prd===''
      || states.district==='Select'|| states.fertilizers===''|| states.fertilizer_dozes===''|| states.species===''){
      this.setState({ err : 'empty field!' });
    }
    else{
      this.setState({ err : '' });
      var crop = {
        name:states.name, kingdom:states.kingdom, phylum:states.phylum, class:states.class, c_order:states.order,
        family:states.family, genus:states.genus, cotyledon:states.cotyledon, water_consumption:states.water_consumption,
        season:states.season, height:states.height, type:states.type, leaf_size:states.leaf_size, total_time:states.total_time,
        sexuality:states.sexuality, climate_zone:states.climate_zone, water_resources:states.water_resources,
        edible:states.edible, temperature:states.temperature, humidity:states.humidity, rainfall:states.rainfall,
        sunshine:states.sunshine, soil:states.soil, sowing_period:states.sowing_prd, fruiting_period:states.fruiting_prd,
        province:states.province, district:states.district, fertilizers:states.fertilizers, species:states.species,
        fer_dozes:states.fertilizer_dozes
      }
      this.addCrop(crop);
      this.props.history.push("/crops");
    }
  };

  addCrop = crop =>{
    fetch('http://localhost:4000/crops/',{
      method : 'POST',
      headers: {'Content-Type':'application/json'},
      body : JSON.stringify(crop)
    })
    .then(res => {
      return res.json();
   })
   .catch(err => console.error(err));
  };

  changeProvince = _ =>{
    fetch('http://localhost:4000/districts/'+this.state.province)
      .then(res => {
        return res.json()
     })
    .then(districts => {
        this.setState({ districts: districts })
     })
      .catch(err => console.error(err));
  }

  render(){
    return (
      <div class="container" id="acd">
        <h1 id="ach">ADD CROPS</h1>
          <div id="acf">
          <div class="row">
            <div class="col-6"  >
              <label >Name:</label>
              <input type="text" class="form-control" name="name" value={this.state.name} onChange={e => this.change(e)} />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label>Kingdom:</label>
              <input type="text" class="form-control" name="kingdom" value={this.state.kingdom} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Phylum:</label>
              <input type="text" class="form-control" name="phylum" value={this.state.phylum} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Class:</label>
              <input type="text" class="form-control" name="class" value={this.state.class} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Order:</label>
              <input type="text" class="form-control" name="order" value={this.state.order} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Family:</label>
              <input type="text" class="form-control" name="family" value={this.state.family} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Genus:</label>
              <input type="text" class="form-control" name="genus" value={this.state.genus} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Cotyledon:</label>
              <select name="cotyledon" value={this.state.cotyledon} onChange={e => this.change(e)}>
                <option>monocot</option>
                <option>dicot</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Type:</label>
              <select name="type" value={this.state.type} onChange={e => this.change(e)}>
                <option>herb</option>
                <option>shrub</option>
                <option>tree</option>
                <option>grass</option>
                <option>vine</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label>Season:</label>
              <select name="season" value={this.state.season} onChange={e => this.change(e)}>
                <option>Rabi</option>
                <option>Kharif</option>
                <option>Rabi, Kharif</option>
              </select>
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Height:</label>
              <input type="text" class="form-control" name="height" value={this.state.height} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Leaf Size:</label>
              <input type="text" class="form-control" name="leaf_size" value={this.state.leaf_size} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Total Time:</label>
              <input type="text" class="form-control" name="total_time" value={this.state.total_time} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Water Consumption:</label>
              <input type="text" class="form-control" name="water_consumption" value={this.state.water_consumption} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Species:</label>
              <input type="text" class="form-control" name="species" value={this.state.species} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Sexuality:</label>
              <select name="sexuality" value={this.state.sexuality} onChange={e => this.change(e)}>
                <option>unisexual</option>
                <option>bisexual</option>
              </select>
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Climate Zone:</label>
              <input type="text" class="form-control" name="climate_zone" value={this.state.climate_zone} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Water Resources:</label>
              <input type="text" class="form-control" name="water_resources" value={this.state.water_resources} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Edible:</label>
              <select name="edible" value={this.state.edible} onChange={e => this.change(e)}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Temperature:</label>
              <input type="text" class="form-control" name="temperature" value={this.state.temperature} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Humidity:</label>
              <input type="text" class="form-control" name="humidity" value={this.state.humidity} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Rainfall:</label>
              <input type="text" class="form-control" name="rainfall" value={this.state.rainfall} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Sunshine:</label>
              <input type="text" class="form-control" name="sunshine" value={this.state.sunshine} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Soil:</label>
              <input type="text" class="form-control" name="soil" value={this.state.soil} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Sowing Period:</label>
              <input type="text" class="form-control" name="sowing_prd" value={this.state.sowing_prd} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Fruiting Period:</label>
              <input type="text" class="form-control" name="fruiting_prd" value={this.state.fruiting_prd} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Province:</label>
              <select name="province" value={this.state.province} onChange={e => this.change(e)}>
                <option>Sindh</option>
                <option>Punjab</option>
                <option>Balochistan</option>
                <option>KPK</option>
              </select>
            </div>
          </div>
          {this.changeProvince()}
            <div class="row">
            <div class="col-12">
              <label>District:</label>
              <select name="district" value={this.state.district} onChange={e => this.change(e)}>
                <option>Select</option>
                {
                  this.state.districts.map((item, i) => (
                    <option>{item['name']}</option>
                  ))
                }
              </select>
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Fertilizers:</label>
              <input type="text" class="form-control" name="fertilizers" value={this.state.fertilizers} onChange={e => this.change(e)} />
            </div>
          </div>
            <div class="row">
            <div class="col-12">
              <label>Fertilizer Doze:</label>
              <input type="text" class="form-control" name="fertilizer_dozes" value={this.state.fertilizer_dozes} onChange={e => this.change(e)} />
            </div>
          </div>
          <div>{this.state.err}</div>
          <button class="btn btn-primary mt-3" onClick={()=>this.add(this.state)}>Submit</button>
          <Link id="acl" to="/crops" class="btn btn-primary" role="button">Cancel</Link>
        </div>
      </div>
    );
  }
}

export default Addcrop;
