import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateVaccineInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cardNumber: '',
        vaccineSite:'',
        priorityArea:'',
        dateTime:'',
        cancelled:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/vaccines/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, vaccine: res.data})
        this.setState({
            cardNumber: res.data.cardNumber,
            vaccineSite: res.data.vaccineSite,
            priorityArea: res.data.priorityArea,
            dateTime: res.data.dateTime,
            cancelled: res.data.cancelled
        })
      })
      .catch(err => {
        console.log("Error from UpdateVaccineInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        cardNumber: this.state.cardNumber,
        vaccineSite: this.state.vaccineSite,
        priorityArea: this.state.priorityArea,
        dateTime: this.state.dateTime,
        cancelled: this.state.cancelled
    };

    axios
      .put('http://localhost:8082/api/vaccines/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-vaccine/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateVaccineInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateVaccineInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Vaccine</h1>
              <p className="lead text-center">
                  Update Vaccine's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="cardNumber">cardNumber</label>
              <input
                type='text'
                placeholder='cardNumber'
                name='cardNumber'
                className='form-control'
                value={this.state.cardNumber}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="vaccineSite">vaccineSite</label>
              <input
                type='text'
                placeholder='vaccineSite'
                name='vaccineSite'
                className='form-control'
                value={this.state.vaccineSite}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="priorityArea">priorityArea</label>
              <input
                type='text'
                placeholder='priorityArea ("80+", "healthcare", or "essential")'
                name='priorityArea'
                className='form-control'
                value={this.state.priorityArea}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="dateTime">dateTime</label>
              <input
                type='date'
                placeholder='dateTime'
                name='dateTime'
                className='form-control'
                value={this.state.dateTime}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="cancelled">cancelled</label>
              <input
                type='boolean'
                placeholder='cancelled'
                name='cancelled'
                className='form-control'
                value={this.state.cancelled}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Vaccine</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateVaccineInfo;