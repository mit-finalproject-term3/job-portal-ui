import React, { Component } from 'react';
import SearchBar from './SearchBar';

class SearchPage extends Component {
  componentWillMount() {
    document.body.className = 'cover-background';
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default SearchPage;
