import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='searchBarHolder'>
        <SearchBar />
      </div>
    );
  }
}

export default Home;
