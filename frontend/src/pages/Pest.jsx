import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Pest.css';


class Pest extends Component
{
  constructor(props){
    super();
    this.state={
      pests:[]
    }
  }

  componentDidMount(){
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

    render(){
        return (
             <div>

              <div id="pj" className="jumbotron jumbotron-fluid">
               <div className="container">
                <h1 id="ph1">Pesticides</h1>
               </div>
              </div>

              <div className="container">
                  <Link id="D1" to="/addpest" class="btn btn-info" role="button"><b>Add Pest</b></Link>
              </div>

                <br />

              <div className="container">
                <table>
                  <col width="250" />
                  <col width="250" />
                  <col width="250" />
                  <col width="250" />
                  <tr>
                    <th class="pth">Pest Name</th>
                    <th class="pth">Biological Name</th>
                    <th class="pth">Type</th>
                    <th class="pth">Action</th>
                  </tr>

                  {
                    this.state.pests.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.biological_name}</td>
                      <td>{item.type}</td>
                      <td>
                      <Link className="link" to={"/viewpest/"+item.id} title='View Record' data-toggle='tooltip'><span className="fa fa-eye"></span></Link>
                      <Link className="link" to={"/updatepest/"+item.id} title='Update Record' data-toggle='tooltip'><span className="fa fa-pencil"></span></Link>
                      <Link className="link" to={"/deletepest/"+item.id} title='Delete Record' data-toggle='tooltip'><span className="fa fa-trash-o"></span></Link>
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

export default Pest;
