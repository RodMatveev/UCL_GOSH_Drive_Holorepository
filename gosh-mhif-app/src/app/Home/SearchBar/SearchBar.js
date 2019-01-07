import React, { Component } from 'react';
import './SearchBar.css';
import search from '../../../img/search.svg'

class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='searchBg'>
        <img src={search} className='searchIcon'/>
        <input type="text" name="search" />
      </div>
    );
  }
}

export default SearchBar;
