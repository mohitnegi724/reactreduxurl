import React, { Component } from 'react';
import '.././Styles/OutputCard.css';

export default class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Links:[
                {
                  linkId:1,
                  originalLink: "https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location",
                  shortLink: "http://shorturlbymohit.herokuapp.com/vIf",
                  createdTiming: new Date(1555739342563).toLocaleTimeString(),
                  createdDate: new Date(1555739342563).toLocaleDateString(),
                  expiryDate: new Date(1555739399600).toLocaleDateString(),
                  expiry:true,
                  linkClicked:10
                },
                {
                  linkId: 2,
                  originalLink: "https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location",
                  shortLink: "http://shorturlbymohit.herokuapp.com/vIf",
                  createdTiming: new Date(1555739412160).toLocaleTimeString(),
                  createdDate: new Date(1555739412160).toLocaleDateString(),
                  expiryDate: new Date(1555739420123).toLocaleDateString(),
                  expiry:true,
                  linkClicked:20
                },
                {
                  linkId: 3,
                  originalLink: "https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location",
                  shortLink: "http://shorturlbymohit.herokuapp.com/vIf",
                  createdTiming: new Date(1555739412160).toLocaleTimeString(),
                  createdDate: new Date(1555739412160).toLocaleDateString(),
                  expiryDate: new Date(1555739420123).toLocaleDateString(),
                  expiry: true,
                  linkClicked: 40
                },
            ]
        };
    }
  render() {
    const allLinks = this.state.Links.map(link =>{
      return <div key={link.linkId} className="OutputLinks">
        <h3>Short URL</h3>
        <br/>
        <a href={link.shortLink} rel="noopener noreferrer" target="_blank">{link.shortLink}</a>
        <br/>
        <h3>Original Link </h3 >
        <br/>
        <a href={link.originalLink} rel="noopener noreferrer" target="_blank">{link.originalLink}</a>
        <br/>
        <h3>Create Date </h3 >
        <br/>
        {link.createdDate}
        <br/>
        <h3>Create Time </h3 >
        <br/>
        {link.createdTiming}
        <br/>
        <h3>Clicked Time </h3 >
        <br/>
        {link.linkClicked}
      </div>
    });
    return (
      <div>
        {allLinks}
      </div>
    )
  }
}
