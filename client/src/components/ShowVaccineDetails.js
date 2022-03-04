import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showVaccineDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccine: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/vaccines/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showVaccineDetails-API-response: " + res.data);
        this.setState({
          vaccine: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowVaccineDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/vaccines/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowVaccineDetails_deleteClick");
      })
  };


  render() {

    const vaccine = this.state.vaccine;
    if(vaccine.cancelled === true){
      var myBool = "true";
    } else {
      var myBool = "false";
    };
    let VaccineItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>cardNumber</td>
            <td>{ vaccine.cardNumber }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>vaccineSite</td>
            <td>{ vaccine.vaccineSite }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>priorityArea</td>
            <td>{ vaccine.priorityArea }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>dateTime</td>
            <td>{ vaccine.dateTime }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>cancelled</td>
            <td>{ myBool }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowVaccineDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Vaccine List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Vaccine</h1>
              <p className="lead text-center">
                  View Vaccine's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { VaccineItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,vaccine._id)}>Delete Vaccine</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-vaccine/${vaccine._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Vaccine
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Vaccine</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Vaccine</button> */}

        </div>
      </div>
    );
  }
}

export default showVaccineDetails;