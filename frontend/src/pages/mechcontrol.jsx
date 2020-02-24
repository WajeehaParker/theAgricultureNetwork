import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/mechcontrol.css';


class MechanicalControl extends Component
{
  constructor(props){
    super();
    this.state={
      controls:[], pests:[]
    }
  }

  componentDidMount(){
      this.getControls();
      this.getPests();
    }

  getControls = _ =>{
    fetch('http://localhost:4000/mechControls')
      .then(res => {
        return res.json()
     })
    .then(controls => {
        this.setState({ controls: controls })
     })
      .catch(err => console.error(err));
  };

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

getPestName = _ =>{
  //return this.state.pests.find( s => s.id === id).name
  this.state.controls.map((item, i)=>{
    this.state.pests.map((index, j)=>{
      if(item['insect']===index['id']){
        this.state.controls[i].insect=index['name'];
      }
    });
  });
}

    render(){
        return (
            <div>
              {this.getPestName()}
              <div id="mcj" className="jumbotron jumbotron-fluid">
               <div className="container">
                <h1 id="mch">Mechanical Control</h1>
               </div>
              </div>

              <div className="container">
                  <Link id="mcb" to="/addmechcontrol" class="btn btn-info" role="button"><b>Add Mechanical Control</b></Link>
              </div>

                <br />

              <div className="container">
                <table>
                  <col width="300" />
                  <col width="300" />
                  <col width="200" />
                  <tr>
                    <th class="mcth">Insect</th>
                    <th class="mcth">Description</th>
                    <th class="mcth">Action</th>
                  </tr>

                    {
                      this.state.controls.map((item, i) => (
                      <tr key={i}>
                        <td>{item.insect}</td>
                        <td>{item.description}</td>
                        <td>
                        <Link className="link" to={"/viewmechcontrol/"+item.id} title='View Record' data-toggle='tooltip'><span className="fa fa-eye"></span></Link>
                        <Link className="link" to={"/updatemechcontrol/"+item.id} title='Update Record' data-toggle='tooltip'><span className="fa fa-pencil"></span></Link>
                        <Link className="link" to={"/deletemechcontrol/"+item.id} title='Delete Record' data-toggle='tooltip'><span className="fa fa-trash-o"></span></Link>
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
                  <div id="mcld">
                      <Link id="mcl" to="/main" class="btn btn-primary" role="button"><b>Back</b></Link>
                  </div>

              </div>

            </div>

        );
    }
}

export default MechanicalControl;
