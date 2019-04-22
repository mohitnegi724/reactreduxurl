import React, { Component } from 'react';
import ShortForm from '../components/Form';
import OutputContainer from './OutputContainer';
import '.././Styles/App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <ShortForm/>
        </div>
        <OutputContainer/>
      </React.Fragment>
    );
  }
}

export default App;
