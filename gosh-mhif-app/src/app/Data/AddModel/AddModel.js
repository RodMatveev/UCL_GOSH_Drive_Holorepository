import React, { Component } from 'react';
import './AddModel.css';
import add from '../../../img/add.png'

class AddModel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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
  }
}

export default AddModel;
