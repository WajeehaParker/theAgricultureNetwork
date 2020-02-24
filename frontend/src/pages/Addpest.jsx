import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Addpest.css';


class Addpest extends Component
{
  constructor(props){
    super();
    this.state={
      name:'', bioName:'', type:'fungus', err:''
    }
  }

  // componentDidMount(){
  //   this.getCrops();
  // }

  change = e => { this.setState({ [e.target.name]: e.target.value }); };

  add = states => {
    // var p1=0;
    if(states.name==='' || states.bioName===''){
      this.setState({ err : 'empty field!' });
    }
    else{
      // this.state.crops.map((item, i)=>{
      //   if(item['name']===states.name && item['bioName']===states.bioName){
      //     p1=item['id'];
      //   }
      // });
      var pest = {
        // crop_id:p1,
        name: states.name,
        biological_name: states.bioName,
        type: states.type
      }
      this.addPest(pest);
    }
  };

  addPest = pest =>{
    fetch('http://localhost:4000/pests/',{
      method : 'POST',
      headers: {'Content-Type':'application/json'},
      body : JSON.stringify(pest)
    })
    .then(res => {
      return res.json();
   })
   .catch(err => console.error(err));
  };

  // getCrops = _ =>{
  //   fetch('http://localhost:4000/crops')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(crops => {
  //       this.setState({ crops: crops })
  //    })
  //     .catch(err => console.error(err));
  // };

  render(){
    return (
      <div class="container" id="apd">
        <h1 id="aph2">ADD PEST</h1>
        <div id="apf">
        {
          /*<div class="row">
            <div class="col-6">
               <label>Pest_ID</label>
               <input type="text" class="form-control" />
             </div>
            <div class="col-6"  >
              <label >Crop</label>
              <select name="crop" value={this.state.crop} onChange={e => this.change(e)}>
                <option>Select</option>
                {
                  this.state.crops.map((item, i) => (
                    <option>{item['name']}</option>
                  ))
                }
              </select>
            </div>
          </div>*/
        }
          <div class="row">
            <div class="col-12">
              <label>Pest Name</label>
              <input type="text" class="form-control" name="name" value={this.state.name} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Pest Biological Name</label>
              <input type="text" class="form-control" name="bioName" value={this.state.bioName} onChange={e => this.change(e)} />
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <label>Pest Type</label>
              <select name="type" value={this.state.type} onChange={e => this.change(e)}>
                <option>fungus</option>
                <option>insect</option>
                <option>disease</option>
                <option>bacteria</option>
                <option>parasite</option>
                <option>virus</option>
                <option>animal</option>
                <option>rodent</option>
              </select>
            </div>
          </div>
          {
          /* <div class="row">
             <div class="col-12">
               <label>Biological Control</label>
               <input type="text" class="form-control" />
             </div>
           </div>

           <div class="row">
             <div class="col-12">
               <label>Chemical Control</label>
               <input type="text" class="form-control" />
             </div>
           </div>

           <div class="row">
             <div class="col-12">
               <label>Mechanical Control</label>
               <input type="text" class="form-control" />
             </div>
           </div>

           <div class="row">
             <div class="col-12">
               <label>Cultural Control</label>
               <input type="text" class="form-control" />
             </div>
           </div>*/
         }
          <div>{this.state.err}</div>
          <Link to="/pest"><button class="btn btn-primary mt-3" onClick={()=>this.add(this.state)}>Submit</button></Link>
          <Link id="apl" to="/pest" class="btn btn-primary" role="button">Cancel</Link>
        </div>
      </div>
    );
  }
}

export default Addpest;
