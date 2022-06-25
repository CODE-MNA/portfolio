import React, { Component } from 'react';
import "./css/contact.css"

export default class Contact extends Component {

   
    render() {
        const goToGithub = () => {
            window.open(`https://github.com/CODE-MNA`,'_blank').focus();
        }
        return (
            <div  className="contactDiv pad">
            <h3>Links</h3>
            <a className="githubIcon" href="https://github.com/CODE-MNA" target="_blank"><object  onClick={goToGithub} type="image/svg+xml" data="github.svg" width="50" height="50" alt="Fail"></object></a>
            
           </div>
        )
    }
}