import React, { Component } from 'react';
import './DataPatientCard.css';
import AddModel from '../AddModel/AddModel'

class PatientCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='patientCard wide'>
          <div className='nameIdHolder'>
            <div className='initials'>
              <p>JS</p>
            </div>
            <h4>John Smith</h4>
            <p>c8e705a6-2a35-4d63-82ec</p>
          </div>
          <div className='dataButtonHolder'>
            <button id="active">Profile</button>
            <button>Observations</button>
            <button>Conditions</button>
            <button>Care Plan</button>
            <button>Diagonistic Report</button>
          </div>
        </div>
        <div className="detailHolder wide">
          <div className="detailCard">
            <h4>GENDER</h4>
            <p>Male</p>
          </div>
          <div className="detailCard">
            <h4>AGE</h4>
            <p>54 years</p>
          </div>
          <div className="detailCard">
            <h4>DATE OF BIRTH</h4>
            <p>09-12-1978</p>
          </div>
          <div className="detailCard">
            <h4>EMAIL</h4>
            <p>Unknown</p>
          </div>
          <div className="detailCard">
            <h4>ADDRESS</h4>
            <p>Malet Place, Euston<br></br>EC2A 2DF,<br></br>London</p>
          </div>
          <div className="detailCard">
            <h4>ID CODE</h4>
            <p>c8e705a6-2a35-4d63-82ec</p>
          </div>
        </div>
        <div className="scanHolder">
          <h4>Patient 3D Scans</h4>
          <div className="scanCardHolder">
            <AddModel />
          </div>
        </div>
      </div>
    );
  }
}

export default PatientCard;
