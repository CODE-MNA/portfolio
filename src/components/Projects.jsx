import React, { Component } from 'react';
import "./css/projects.css"
import Project from './Project'

class InfoProject{
    constructor(title,description,img,projectLink,codeLink){
        this.title = title;
        this.description = description;
        this.img = img;
        this.projectLink = projectLink;
        this.codeLink = codeLink;
    }
}

//Proper links
let projectArray = [
    new InfoProject("DNA Linker","A game I made for GMTK 2020 using C# and Unity 3D game engine","projects/dnalinker.png","https://im-na.itch.io/dna-linker",""),
    new InfoProject("Book Finder","A project I made using React functional components and Google books api for searching books","projects/bookfinder.png","https://code-mna.github.io/bookfinder/","https://github.com/CODE-MNA/bookfinder"),
    new InfoProject("Webcaller","A project where I used WebRTC library to establish a web call. I used Firestore as a signaling server.","projects/web-call.png","https://webcall-mna.web.app/","https://github.com/CODE-MNA/webcall"),
    new InfoProject("Poster","A Fullstack website with front-end made in React connecting to a REST API programmed using node js (express), backend hosted on Heroku.","projects/poster.png","https://code-mna.github.io/Poster-FrontEnd/","https://github.com/CODE-MNA/Poster-BackEnd")

];



export default class Projects extends Component {

    render() {
        return (
           
            <div className="projectsDiv pad">
            <h1>Projects</h1>
            <div className="cardContainer">
            {projectArray.map((proj) =>{
                const {title,description,img,projectLink,codeLink} = proj;

                return (
                    <Project title={title} desc={description} img={img} projectLink={projectLink} codeLink={codeLink}/>
                )
            })

            }
            </div>
            </div>
        )
    }
}