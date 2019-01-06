import React, { Component } from 'react';
import './AppMenuItem.css';

class AppMenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {isActive:false };
  }

  onClickNav(){
    this.setState({isActive:!this.state.isActive})
  }


  render() {
    return (
      <div className='menuButtonHolder'>
        {this.props.children}
      </div>
    );
  }
}

export default AppMenuItem;
