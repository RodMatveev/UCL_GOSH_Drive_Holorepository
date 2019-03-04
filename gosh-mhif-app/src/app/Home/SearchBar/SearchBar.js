import React, { Component } from 'react';
import SearchBarInput from './SearchBarInput/SearchBarInput';
import './SearchBar.css';
import search from '../../../img/search.svg';
import filter from '../../../img/filter.svg';

class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='searchBg'>
        <div className='allOfSearch'>
          <img src={search} className='searchIcon'/>
          <SearchBarInput />
        </div>
        <div className='allOfFilter'>
          <img src={filter} className='filterIcon'/>
          <button>Filters</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
