// parent component, host entire youtube client
// line 3, if there is a property on React called component, take it off and name it component to use - deconstructed variables
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom'; // helper method to attach components to DOM
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import { apiKey } from '../config.js';

class App extends Component {
  constructor() { // constructor is only run once
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('cats');
  }

  videoSearch(term) {
    YTSearch({key: apiKey, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    });
  }
  // short syntax to create function
  // render can only return one element, so everything must be in a parent div
  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    // this says, 'wait 300 milliseconds to call this function' - THROTTLING
    return (
      <div>
        <SearchBar
          onSearchTermChange= {this.videoSearch.bind(this)}
        />
        <VideoList
          videos={this.state.videos}
        />
      </div>
    )
  }
}
// bind(this) - this now refers to where the statement is used

// ABOVE creates component, BELOW attaches to DOM
// first argument is component, second argument is anchor element on DOM
ReactDom.render(<App/>, document.querySelector('.container'));
