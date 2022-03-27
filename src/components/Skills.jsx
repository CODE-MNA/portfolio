import React, { Component } from 'react';

import "./css/skills.css"
import Skill from "./Skill"

export default class Skills extends Component {

    render() {

        let listClass = "flex-horizontal space-between list-element"

        return (
            <div className="skillsDiv">
            <h1>Skills</h1>
                <li className={listClass} ><Skill logosrc="jsLogo.svg" desc="Javascript" /> <Skill logosrc="nodeJSLogo.svg" desc="Node JS"/></li>
                <li className={listClass}><Skill logosrc="pyLogo.svg" desc="Python"/> <Skill logosrc="djangoLogo.svg"  desc="Django (Python)"/> </li>
                <li className={listClass}><Skill logosrc="cHashLogo.svg" desc="C# (.NET)"/> <Skill logosrc="unityLogo.svg" desc="Unity 3D (C#)" /></li>
                <center>Hover to see technologies' name</center><br/>
                
           
            </div>
        )
    }
}