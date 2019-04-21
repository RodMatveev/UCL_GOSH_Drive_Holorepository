import React, { Component } from 'react';
import SearchBarInput from './SearchBar/SearchBarInput/SearchBarInput'
import PatientCard from './PatientCard/PatientCard'
import './Home.css';

var localQueryDataFromSearch;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queryDataFromSearch: [],
      searchResults: []
    };
    this.fetchNewQuery = this.fetchNewQuery.bind(this);
    this.generateInitials = this.generateInitials.bind(this);

    var localQueryDataFromSearch = [];
  }

  fetchNewQuery(queryData) {
    // console.log(this.state.queryDataFromSearch);
    var queryUrl = "";
    if(queryData[0].length == 1){
      queryUrl = 'http://localhost:8081/myapp/patient/search/' + queryData[0][0];
    }else if(queryData[0].length == 2){
      queryUrl = 'http://localhost:8081/myapp/patient/search_2/' + queryData[0][0] + '/' + queryData[0][1];
    }else{
      queryUrl = 'http://localhost:8081/myapp/patient/search_3/' + queryData[0][0] + '/' + queryData[0][1] + '/' + queryData[0][2];
    }
    console.log("URL: " + queryUrl);
    fetch(queryUrl)
      .then(response => response.json())
      .then((jsonData) => {
        this.setState(state => ({ searchResults: jsonData }));
        //console.log(this.state.searchResults);
      })
      .catch((error) => {
        console.log("Error in getting query: ");
        console.error(error);
        this.setState({ searchResults: [] });
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Next state: ");
    console.log(nextState);
    return true;
  }

  queryCallback(dataFromSearch) {
    // console.log("Callback Received");
    // console.log(dataFromSearch);

    //localQueryDataFromSearch.push(dataFromSearch);

    //const localQueryCopy = localQueryDataFromSearch.map(l => Object.assign({}, l));
    //console.log("localQueryCopy: ", localQueryCopy);

    //localQueryCopy.push("ALLOW IT");
    /*if(localQueryDataFromSearch.length == 0){
      let array = [];
      let newArray = array.concat(dataFromSearch);
      console.log("New Array: ", newArray);
    }else{
      let newArray = localQueryDataFromSearch.concat(dataFromSearch);
      console.log("New Array: ", newArray);

    }*/
    //console.log("localQueryCopy PostPush: ", localQueryCopy);
    //localQueryDataFromSearch = [];
    //localQueryDataFromSearch = localQueryDataFromSearch.concat(localQueryCopy);

    // localQueryDataFromSearch = localQueryCopy;
    // console.log("Local Query Data: ");
    // console.log(localQueryDataFromSearch);

    //this.setState(state => ({ queryDataFromSearch: [...state.queryDataFromSearch, dataFromSearch] }))
    /*localQueryDataFromSearch = dataFromSearch;
    this.setState({ queryDataFromSearch: dataFromSearch }, function() {
      if(dataFromSearch.length > 0){
        this.fetchNewQuery(dataFromSearch);
        // console.log("fetching new query");
      }else{
        this.setState({ searchResults: [] });
        // console.log("state set to null");
      }
    });*/
    console.log("**********dataFromSearch: ", dataFromSearch);
    if(dataFromSearch[0].length > 0){
      this.fetchNewQuery(dataFromSearch);
    }else{
      this.setState({ searchResults: [] });
    }
  }

  generateInitials (firstName, lastName) {
    var both = firstName + " " + lastName;
    return both.split(" ").map((n)=>n[0]).join("");
  }

  render() {
    var queryCallback = this.queryCallback;
    return (
      <div>
        <div className='searchBarHolder'>
          <SearchBarInput callbackFromParent={queryCallback.bind(this)}/>
        </div>
        <div className='patientCardsHolder'>
        {this.state.searchResults.map((patient, index) => (
          <PatientCard key={index} patientInfo={patient} name={patient.firstName + " " + patient.lasrName} patientId={patient.patientId} initials={this.generateInitials(patient.firstName, patient.lasrName)}/>
        ))}
        </div>
      </div>
    );
  }
}

export default Home;
