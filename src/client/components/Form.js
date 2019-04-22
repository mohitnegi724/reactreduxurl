import React, { Component } from 'react';
import ".././Styles/Form.css";

export default class ShortForm extends Component {
  render() {
    return (
      <div className="shortFormComponent">
        <input id="url" name="originalURL" type="url" placeholder="Paste Your Original URL"/>
        <br/>
        <button id="submitButton" type="submit">Short</button>
      </div>
    )
  }
}
