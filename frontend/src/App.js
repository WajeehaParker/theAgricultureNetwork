import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

//-------------------LOGIN--------------------
import Login from './pages/login.jsx';
//-------------------SIGNIN--------------------
import Signin from './pages/signin.jsx';
//-------------------ACCOUNT--------------------
import Account from './pages/account.jsx';
//---------------MAIN--------------------------
import Main from './pages/Main.jsx';
//---------PESTICIDES--------------------------
import Pest from './pages/Pest.jsx';
import Addpest from './pages/Addpest.jsx';
import Updatepest from './pages/updatepest.jsx';
import Deletepest from './pages/deletepest.jsx';
import Viewpest from './pages/Viewpest.jsx';
//-----------CROPS------------------------------
import Crops from './pages/Crops.jsx';
import Addcrop from './pages/addcrop.jsx';
import Viewcrop from './pages/viewcrop.jsx';
import Deletecrop from './pages/deletecrop.jsx';
import Updatecrop from './pages/updatecrop.jsx';
//-----------BIOLOGICAL CONTROL---------------------
import BiologicalControl from './pages/biocontrol.jsx';
import AddBioControl from './pages/addbiocontrol.jsx';
import ViewBioControl from './pages/viewbiocontrol.jsx';
import UpdateBioControl from './pages/updatebiocontrol.jsx';
import DeleteBioControl from './pages/deletebiocontrol.jsx';
//------------CHEMICAL CONTROL-------------------------
import ChemicalControl from './pages/chemcontrol.jsx';
import AddChemControl from './pages/addchemcontrol.jsx';
import ViewChemControl from './pages/viewchemcontrol.jsx';
import UpdateChemControl from './pages/updatechemcontrol.jsx';
import DeleteChemControl from './pages/deletechemcontrol.jsx';
//-------------MECHANICAL CONTROL-----------------------------
import MechanicalControl from './pages/mechcontrol.jsx';
import AddMechControl from './pages/addmechcontrol.jsx';
import ViewMechControl from './pages/viewmechcontrol.jsx';
import UpdateMechControl from './pages/updatemechcontrol.jsx';
import DeleteMechControl from './pages/deletemechcontrol.jsx';
//------------------CULTURAL CONTROL-------------------------
import CulturalControl from './pages/culcontrol.jsx';
import AddCulControl from './pages/addculcontrol.jsx';
import ViewCulControl from './pages/viewculcontrol.jsx';
import UpdateCulControl from './pages/updateculcontrol.jsx';
import DeleteCulControl from './pages/deleteculcontrol.jsx';

class App extends Component {

  render() {

    return (

        <Router>
        <div>



          <Route exact path="/" component={Login} />

          <Route exact path="/signin" component={Signin} />

        {/*  <Route exact path="/Main" component={()=>this.prop.validate?<Main/>:<login/>} />*/}
          <Route exact path="/Main" component={Main} />

          <Route exact path="/account" component={Account} />

          <Route exact path="/pest" component={Pest} />
          <Route path="/addpest" component={Addpest} />
          <Route path="/updatepest/:id" component={Updatepest} />
          <Route path="/deletepest/:id" component={Deletepest} />
          <Route path="/viewpest/:id" component={Viewpest} />

          <Route path="/crops" component={Crops} />
          <Route path="/addcrop" component={Addcrop} />
          <Route path="/viewcrop/:id" component={Viewcrop} />
          <Route path="/deletecrop/:id" component={Deletecrop} />
          <Route path="/updatecrop/:id" component={Updatecrop} />

          <Route path="/biocontrol" component={BiologicalControl} />
          <Route path="/addbiocontrol" component={AddBioControl} />
          <Route path="/viewbiocontrol/:id" component={ViewBioControl} />
          <Route path="/updatebiocontrol/:id" component={UpdateBioControl} />
          <Route path="/deletebiocontrol/:id" component={DeleteBioControl} />

          <Route path="/chemcontrol" component={ChemicalControl} />
          <Route path="/addchemcontrol" component={AddChemControl} />
          <Route path="/viewchemcontrol/:id" component={ViewChemControl} />
          <Route path="/updatechemcontrol/:id" component={UpdateChemControl} />
          <Route path="/deletechemcontrol/:id" component={DeleteChemControl} />

          <Route path="/mechcontrol" component={MechanicalControl} />
          <Route path="/addmechcontrol" component={AddMechControl} />
          <Route path="/viewmechcontrol/:id" component={ViewMechControl} />
          <Route path="/updatemechcontrol/:id" component={UpdateMechControl} />
          <Route path="/deletemechcontrol/:id" component={DeleteMechControl} />

          <Route path="/culcontrol" component={CulturalControl} />
          <Route path="/addculcontrol" component={AddCulControl} />
          <Route path="/viewculcontrol/:id" component={ViewCulControl} />
          <Route path="/updateculcontrol/:id" component={UpdateCulControl} />
          <Route path="/deleteculcontrol/:id" component={DeleteCulControl} />
        </div>
      </Router>
    );
  }
}

export default App;
