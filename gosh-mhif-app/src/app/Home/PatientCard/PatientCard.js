import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './PatientCard.css';
import Data from '../../Data/Data';

class PatientCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='patientCardHome'>
        <div className='nameIdHolderHome'>
          <div className='initials'>
            <p>{this.props.initials}</p>
          </div>
          <h4>{this.props.name}</h4>
          <p>{this.props.patientId}</p>
        </div>
        <div className='buttonHolder'>
          <Link to={`case/1`}><button className='leftButton' id='adjustFont' onClick={(e) => console.log(e)}>View Profile</button></Link>
          <button className='rightButton'>Available Scans</button>
        </div>
      </div>
    );
  }
}

export default PatientCard;
