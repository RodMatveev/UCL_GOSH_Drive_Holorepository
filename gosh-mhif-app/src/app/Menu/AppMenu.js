import React, { Component } from 'react';
import AppMenuItem from './AppMenuItem'
import './AppMenu.css';

class AppMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {isActive:false };
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav(){
    this.setState({isActive:!this.state.isActive})
  }

  render() {
    return (
      <div className='menuHolder'>
        <AppMenuItem>
          <a href='#'>Patient Directory</a>
        </AppMenuItem>
        <AppMenuItem>
          <a href='#'>Documentation</a>
        </AppMenuItem>
        <AppMenuItem>
          <a href='#'>About</a>
        </AppMenuItem>
      </div>
    );
  }
}

export default AppMenu;
