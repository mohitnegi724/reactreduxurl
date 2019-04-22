import React, { Component } from 'react';
import Output from '../components/OutputLinks';
import '.././Styles/Output.css';

export default class OutputContainer extends Component {
  render() {
    return (
      <div className="Output">
        <div><p className="OutputHeading"> Shortens Links </p></div>
        <Output/>
      </div>
    )
  }
}
