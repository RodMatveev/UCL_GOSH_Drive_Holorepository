import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './DataPatientCard.css';
import AddModel from '../AddModel/AddModel'

class PatientCard extends Component {

  constructor(props) {
    super(props);
    console.log("Props passed to DataPatientCard: ", props);
    this.state = {
      meshResults: []
    };
    this.capitalise = this.capitalise.bind(this);
    this.generateInitials = this.generateInitials.bind(this);
    this.fetchMeshes = this.fetchMeshes.bind(this);
  }

  capitalise(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  generateInitials (firstName, lastName) {
    var both = firstName + " " + lastName;
    return both.split(" ").map((n)=>n[0]).join("");
  }

  fetchMeshes() {
    // console.log(this.state.queryDataFromSearch);
    var queryUrl = 'http://localhost:8081/myapp/patient/search_mesh/' + this.props.patientInfo.patientId;
    console.log("URL: " + queryUrl);
    fetch(queryUrl)
      .then(response => response.json())
      .then((jsonData) => {
        console.log("Mesh Results: ", jsonData);
        this.setState(state => ({ meshResults: jsonData }));
      })
      .catch((error) => {
        console.error(error)
    })
  }

  componentDidMount(){
    console.log("Mounted");
    this.fetchMeshes();
  }

  render() {
    return (
      <div>
        <div className='patientCard wide'>
          <div className='nameIdHolder'>
            <div className='initials'>
              <p>{this.generateInitials(this.props.patientInfo.firstName, this.props.patientInfo.lasrName)}</p>
            </div>
            <h4>{this.props.patientInfo.firstName + " " + this.props.patientInfo.lasrName}</h4>
            <p>ID — {this.props.patientInfo.patientId}</p>
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
            <p>{this.capitalise(this.props.patientInfo.gender)}</p>
          </div>
          <div className="detailCard">
            <h4>AGE</h4>
            <p>{this.props.patientInfo.age + " years"}</p>
          </div>
          <div className="detailCard">
            <h4>DATE OF BIRTH</h4>
            <p>{this.props.patientInfo.DateOfBirth}</p>
          </div>
          <div className="detailCard">
            <h4>EMAIL</h4>
            <p>{this.props.patientInfo.email}</p>
          </div>
          <div className="detailCard">
            <h4>ADDRESS</h4>
            <p>{this.props.patientInfo.address.split(",").map(function(line, i) {
                    return <p key={i}>{line}</p>
                  })}</p>
          </div>
          <div className="detailCard">
            <h4>ID CODE</h4>
            <p>{this.props.patientInfo.patientId}</p>
          </div>
        </div>
        <div className="scanHolder">
          <h4>Patient 3D Scans</h4>
          <div className="scanCardHolder">
          {this.state.meshResults.map((result, index) => (
            <AddModel key={index} meshName={result.meshName} meshAuthor={result.author} patientId={this.props.patientInfo.patientId}/>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PatientCard;
