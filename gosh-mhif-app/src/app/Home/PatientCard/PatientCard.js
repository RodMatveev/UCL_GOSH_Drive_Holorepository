import React, { Component } from 'react';
import './PatientCard.css';

class PatientCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='patientCard'>
        <div className='nameIdHolder'>
          <div className='initials'>
            <p>JS</p>
          </div>
          <h4>John Smith</h4>
          <p>c8e705a6-2a35-4d63-82ec</p>
        </div>
        <div className='buttonHolder'>
          <button className='leftButton' onClick={(e) => console.log(e)}>View Profile</button>
          <button className='rightButton'>Available Scans</button>
        </div>
      </div>
    );
  }
}

export default PatientCard;
