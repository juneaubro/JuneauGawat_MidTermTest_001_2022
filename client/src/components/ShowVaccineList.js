import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VaccineCard from './VaccineCard';

class ShowVaccineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccines: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/vaccines')
      .then(res => {
        this.setState({
          vaccines: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowVaccineList');
      })
  };


  render() {
    const vaccines = this.state.vaccines;
    console.log("PrintVaccine: " + vaccines);
    let vaccineList;

    if(!vaccines) {
      vaccineList = "there is no vaccine record!";
    } else {
      vaccineList = vaccines.map((vaccine, k) =>
        <VaccineCard vaccine={vaccine} key={k} />
      );
    }

    return (
      <div className="ShowVaccineList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Vaccines List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-vaccine" className="btn btn-outline-warning float-right">
                + Add New Vaccine
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {vaccineList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowVaccineList;