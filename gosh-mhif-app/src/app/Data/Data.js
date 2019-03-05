import React, { Component } from 'react';

import DataPatientCard from './PatientCard/DataPatientCard'
import './Data.css';

class Data extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div className='patientCardsHolder'>
          <DataPatientCard />
        </div>
      </div>
    );
  }
}

export default Data;
