import React, { Component } from 'react';
import "./css/contact.css"

export default class Contact extends Component {

    render() {
        return (
            <div  className="contactDiv pad">
            <h3>Contact Me</h3>
            <p>Feel free to email me at this address</p>
            <p >  <img className="mailIcon" src="mailLogo.svg"/>  Mahmed9174@conestogac.on.ca</p> 
           </div>
        )
    }
}