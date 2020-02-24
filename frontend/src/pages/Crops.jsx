import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Crops.css';


class Crops extends Component
{
  constructor(props){
    super();
    this.state={
      crops:[]
    }
  }

  componentDidMount(){
      this.getCrops();
    }

  getCrops = _ =>{
    fetch('http://localhost:4000/crops')
      .then(res => {
        return res.json()
     })
    .then(crops => {
        this.setState({ crops: crops })
     })
      .catch(err => console.error(err));
  };

    render(){
        return (
            <div>

              <div className="jumbotron jumbotron-fluid" id="cj">
               <div className="container">
                <h1 id="ch1">CROPS</h1>
               </div>
              </div>

              <div className="container-fluid">
                <Link id="cl" to="/addcrop" class="btn btn-info" role="button"><b>Add Crop</b></Link>
              </div>
              <br />

              <div className="container-fluid">
                <table>
                  <tr>
                    <th class="cth">Name</th>
                    <th class="cth">Kingdom</th>
                    <th class="cth">Phylum</th>
                    <th class="cth">Class</th>
                    <th class="cth">Order</th>
                    <th class="cth">Family</th>
                    <th class="cth">Genus</th>
                    <th class="cth">Cotyledon</th>
                    <th class="cth">Type</th>
                    <th class="cth">Season</th>
                    <th class="cth">Height</th>
                    <th class="cth">Leaf SIze</th>
                    <th class="cth">Total time</th>
                    <th class="cth">Water<br />Consumption</th>
                    <th class="cth">Species</th>
                    <th class="cth">Sexuality</th>
                    <th class="cth">Soil</th>
                    <th class="cth">Climate Zone</th>
                    <th class="cth">Water<br />Resources</th>
                    <th class="cth">Edible</th>
                    <th class="cth">Temperature</th>
                    <th class="cth">Humidity</th>
                    <th class="cth">Rainfall</th>
                    <th class="cth">Sunshine</th>
                    <th class="cth">Sowing<br />Period</th>
                    <th class="cth">Fruiting<br />Period</th>
                    <th class="cth">Province</th>
                    <th class="cth">District</th>
                    <th class="cth">Fertilizers</th>
                    <th class="cth">Fertilizer Dose</th>
                    <th class="cth">Action</th>
                  </tr>

                  {
                    this.state.crops.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.kingdom}</td>
                      <td>{item.phylum}</td>
                      <td>{item.class}</td>
                      <td>{item.c_order}</td>
                      <td>{item.family}</td>
                      <td>{item.genus}</td>
                      <td>{item.cotyledon}</td>
                      <td>{item.type}</td>
                      <td>{item.season}</td>
                      <td>{item.height}</td>
                      <td>{item.leaf_size}</td>
                      <td>{item.total_time}</td>
                      <td>{item.water_consumption}</td>
                      <td>{item.species}</td>
                      <td>{item.sexuality}</td>
                      <td>{item.climate_zone}</td>
                      <td>{item.water_resources}</td>
                      <td>{item.edible}</td>
                      <td>{item.temperature}</td>
                      <td>{item.humidity}</td>
                      <td>{item.rainfall}</td>
                      <td>{item.sunshine}</td>
                      <td>{item.soil}</td>
                      <td>{item.sowing_period}</td>
                      <td>{item.fruiting_period}</td>
                      <td>{item.province}</td>
                      <td>{item.district}</td>
                      <td>{item.fertilizers}</td>
                      <td>{item.fer_dozes}</td>
                      <td>
                      <Link className="link" to={"/viewcrop/"+item.id} title='View Record' data-toggle='tooltip'><span className="fa fa-eye"></span></Link>
                      <Link className="link" to={"/updatecrop/"+item.id} title='Update Record' data-toggle='tooltip'><span className="fa fa-pencil"></span></Link>
                      <Link className="link" to={"/deletecrop/"+item.id} title='Delete Record' data-toggle='tooltip'><span className="fa fa-trash-o"></span></Link>
                      </td>
                      {
                      /*<td onClick={() => this.showDetails(item)}>{item.s_name}</td>
                      <td>{item.status}<span>{this.renew(item)}</span></td>
                      <td>
                      <a href="#" onClick={() =>
                      {
                        this.setState({
                          name : item.name,
                          contact : item.contact,
                          address : item.address,
                          sub : item.s_name,
                          device : item.d_name,
                          customer_id: item.id
                        });
                        this.editShow()
                      }
                      }>
                      <FontAwesomeIcon className="icon" icon="edit" style={{marginLeft:"20%", color:"blue"}} /></a>
                      <a href="#" onClick={() =>
                        {
                          if (window.confirm('Are you sure you wish to delete this item?'))
                            this.delete(i, this.state.customers,item) }
                        }>
                        <FontAwesomeIcon className="icon" icon="trash" style={{marginLeft:"20%", color:"red"}} /></a>
                      </td>*/
                    }
                  </tr>
                ))}
                </table>
                  <div id="pld">
                      <Link id="pl" to="/main" class="btn btn-primary" role="button"><b>Back</b></Link>
                  </div>
              </div>

            </div>

        );
    }
}

export default Crops;
