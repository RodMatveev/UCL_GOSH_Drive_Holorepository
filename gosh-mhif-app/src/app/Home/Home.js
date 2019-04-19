import React, { Component } from 'react';
import SearchBarInput from './SearchBar/SearchBarInput/SearchBarInput'
import PatientCard from './PatientCard/PatientCard'
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queryDataFromSearch: [],
      searchResults: []
    };
    this.fetchNewQuery = this.fetchNewQuery.bind(this);
    this.generateInitials = this.generateInitials.bind(this);
  }

  fetchNewQuery() {
    console.log(this.state.queryDataFromSearch);
    fetch('http://localhost:8081/myapp/patient/search/' + this.state.queryDataFromSearch[0].query)
      .then(response => response.json())
      .then((jsonData) => {
        this.setState({ searchResults: jsonData });
        console.log(this.state.searchResults);
      })
      .catch((error) => {
        console.error(error)
    })
  }

  queryCallback = (dataFromSearch) => {
    console.log("Callback Received");
    console.log(dataFromSearch);
    this.setState({ queryDataFromSearch: dataFromSearch
    }, function () {
      if(dataFromSearch.length > 0){
        this.fetchNewQuery();
      }else{
        this.setState({ searchResults: [] });
      }
    });
  }

  generateInitials (firstName, lastName) {
    var both = firstName + " " + lastName;
    return both.split(" ").map((n)=>n[0]).join("");
  }

  render() {
    return (
      <div>
        <div className='searchBarHolder'>
          <SearchBarInput callbackFromParent={this.queryCallback}/>
        </div>
        <div className='patientCardsHolder'>
        {this.state.searchResults.map((patient, index) => (
          <PatientCard name={patient.firstName + " " + patient.lasrName} patientId={patient.patientId} initials={this.generateInitials(patient.firstName, patient.lasrName)}/>
        ))}
        </div>
      </div>
    );
  }
}

export default Home;
