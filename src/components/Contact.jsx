import React, { Component } from 'react';
import "./css/contact.css"

export default class Contact extends Component {

   
    render() {
        const goToGithub = () => {
            window.open(`https://github.com/CODE-MNA`,'_blank').focus();
        }
        return (
            <div  className="contactDiv pad">
            <h3>Contact Me</h3>
            <p>Feel free to email me at this address</p>
            <p >  <img className="mailIcon" src="mailLogo.svg"/>  Mahmed9174@conestogac.on.ca</p> 
            <i class="fa-brands fa-github-square"></i>
            <object onClick={goToGithub} type="image/svg+xml" data="github.svg" width="50" height="50" alt="Fail"></object>
           </div>
        )
    }
}