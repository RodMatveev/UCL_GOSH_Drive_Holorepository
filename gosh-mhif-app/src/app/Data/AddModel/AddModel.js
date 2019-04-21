import React, { Component } from 'react';
import './AddModel.css';
import add from '../../../img/add.png'

class AddModel extends Component {

  constructor(props) {
    super(props);
    console.log("Props received from Mesh Search: ", props);
    this.capitalise = this.capitalise.bind(this);
    this.sendToHolo = this.sendToHolo.bind(this);
  }

  capitalise(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /*render() {
    return (
      <div className="addModelCard">
        <button>
          <div className="center">
            <div className="addCircle">
              <img src={add} className='add' />
            </div>
            <p>Add a new model</p>
          </div>
        </button>
      </div>
    );
  }*/

  sendToHolo(){
    var queryUrl = 'http://localhost:8081/myapp/patient/pipline/' + this.props.patientId;
    console.log("URL: " + queryUrl);
    fetch(queryUrl)
      .then(response => response.json())
      .then((jsonData) => {
        console.log("Pipeline Results: ", jsonData);
      })
      .catch((error) => {
        console.error(error)
    })
  }

  render() {
    return (
      <div className="meshCard">
        <h3 className="meshName">{this.capitalise(this.props.meshName) + " Scan"}</h3>
        <p className="meshAuthor">{this.props.meshAuthor}</p>
        <button onClick={() => this.sendToHolo()}>Send to Hololens</button>
      </div>
    )
  }
}


export default AddModel;
