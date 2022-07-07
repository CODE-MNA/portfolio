import React, { Component } from 'react';
import "./css/contact.css"

export default class Contact extends Component {

   
    render() {
        const goToURL = (url) => {
            window.open(url,'_blank').focus();
        }
        return (
            <div  className="contactDiv pad">
            <h3>Links</h3>
            <a className="github Icon" href="https://github.com/CODE-MNA" target="_blank"><object  onClick={goToURL("https://github.com/CODE-MNA")} type="image/svg+xml" data="github.svg" width="50" height="50" alt="Fail"></object></a>
            <a className="linkedIn Icon" href="https://www.linkedin.com/in/noman-ahmed-99957a22b/" target="_blank"><object  onClick={goToURL("https://www.linkedin.com/in/noman-ahmed-99957a22b/" )} type="image/svg+xml" data="linkedInLogo.svg" width="50" height="50" alt="Fail"></object></a>
            
           </div>
        )
    }
}