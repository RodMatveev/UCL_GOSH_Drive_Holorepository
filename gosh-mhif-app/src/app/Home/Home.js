import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import PatientCard from './PatientCard/PatientCard'
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='searchBarHolder'>
          <SearchBar />
        </div>
        <div className='patientCardsHolder'>
          <PatientCard />
        </div>
      </div>
    );
  }
}

export default Home;
