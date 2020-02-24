import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/deletepest.css';

class Deletepest extends Component
{
  constructor(props){
    super();
    this.state={
      id:props.match.params.id
    }
  }

  delete = _ =>{
    fetch('http://localhost:4000/pests/'+this.state.id,{method : 'DELETE'})
    .then(res => { return res.json();})
    .catch(err => console.error(err));
  }

    render(){
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="page-header">
                        <h1 id="dph">Delete Record</h1>
                        <hr />
                    </div>

                    <form id="dpf" >
                        <p>Are you sure you want to delete this record?</p>
                        <div id="dpd" className="form-inline">
                          <Link id="dpi" to="/pest" className="btn btn-danger" role="button" onClick={()=>this.delete()}>Yes</Link>
                          <Link id="dpl" to="/pest" className="btn btn-light" role="button">No</Link>
                        </div>
                    </form>
                </div>
            </div>
            );
    }
}

export default Deletepest;
