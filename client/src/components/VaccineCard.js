import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const VaccineCard = (props) => {
    const  vaccine  = props.vaccine;
    if(vaccine.cancelled === true){
        var myBool = "true";
      } else {
        var myBool = "false";
      };
    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-vaccine/${vaccine._id}`}>
                        { vaccine.cardNumber }
                    </Link>
                </h2>
                <h3>{vaccine.vaccineSite}</h3>
                <p>{vaccine.priorityArea}</p>
                <p>{vaccine.dateTime}</p>
                <p>cancelled: {myBool}</p>
            </div>
        </div>
    )
};

export default VaccineCard;