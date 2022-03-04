import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import CreateVaccine from './components/CreateVaccine';
import ShowVaccineDetails from './components/ShowVaccineDetails';
import ShowVaccineList from './components/ShowVaccineList';
import UpdateVaccineInfo from './components/UpdateVaccineInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowVaccineList}/>
          <Route path='/create-vaccine' component={CreateVaccine}/>
          <Route path='/edit-vaccine/:id' component={UpdateVaccineInfo}/>
          <Route path='/show-vaccine/:id' component={ShowVaccineDetails}/>
        </div>
      </Router>
    );
  }
}

export default App;
