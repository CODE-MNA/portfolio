import React from 'react';

const Project = (props) => {

    let projectLinkState = true
    let codeLinkState = true
    if(props.codeLink === ""){
        codeLinkState = false
    }
    if(props.projectLink === ""){
        projectLinkState = false
    }
    return (
        <div className="card">
            <h4>{props.title}</h4>
            <img width="120px" className="center" src={props.img} alt="fail load"/>
            <p className="project-desc">{props.desc}</p>

            <div className="containerbtns flex-horizontal space-between">

            {projectLinkState && <a rel="noreferrer"  target="_blank" href={props.projectLink}> View Project</a>}
            
            {codeLinkState && <a rel="noreferrer" target="_blank"  href={props.codeLink}> View Code</a>}
            </div>
        </div>
    )
}

export default Project