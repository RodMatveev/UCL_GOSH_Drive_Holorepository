import React, { Component } from 'react';

import PatientCard from './PatientCard/PatientCard'
import './Data.css';

class Data extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        <div className='patientCardsHolder'>
          <PatientCard />
        </div>
      </div>
    );
  }
}

export default Data;
