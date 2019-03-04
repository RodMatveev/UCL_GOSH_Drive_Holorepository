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
          <button className='profileButton'>Profile</button>
          <button className='obsvButton'>Observations</button>
          <button className='condiButton'>Conditions</button>
          <button className='careButton'>Care Plan</button>
          <button className='DiagoButton'>Diagonistic Report</button>

        </div>
        <div className='genderCard'>
          <div className='patientDataHolder'>
            <p>Male</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientCard;
