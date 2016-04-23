// parent component, host entire youtube client
// line 3, if there is a property on React called component, take it off and name it component to use - deconstructed variables
import React, { Component } from 'react';
import ReactDom from 'react-dom'; // helper method to attach components to DOM
import SearchBar from './components/SearchBar';

class App extends Component {
  render () { // short syntax to create function
    // render can only return one element, so everything must be in a parent div
    return (
      <div>
        <SearchBar/>
      </div>
    )
  }
}

// ABOVE creates component, BELOW attaches to DOM
// first argument is component, second argument is anchor element on DOM
ReactDom.render(<App/>, document.querySelector('.container'));
