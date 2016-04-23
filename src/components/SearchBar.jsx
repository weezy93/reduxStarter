import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() { // every class has constructor method, this is ES6 syntax
    super(); // NEEDS TO BE ON FIRST LINE OF constructor() - calls parent constructor
    this.state = { term: 'words' }
  }

  onInputChange(term) {
    // do not want to reset this.state, don't want to mutate data. maintain state.
    // this.state.term = term mutates the original data. want to be non-destructive
    this.setState({ term });
    // with ES6, if a key value pair are the same, you only need one value {term: term}   =>  {term}
  }

  render() {
    return (
        <div className="search-bar">
          <input
          value = { this.state.term }
          onChange = { event => this.onInputChange(event.target.value) }
          />
        </div>
    )
  }
} // event => is a callback funciton returning one line, therefore {} is not needed around this.onIn.... what we are returning

export default SearchBar;
