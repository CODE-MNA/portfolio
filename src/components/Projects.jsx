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
    new InfoProject("Django Website","Website I made using bootstrap and python django","projects/django-web.png","https://codemna.pythonanywhere.com/","https://github.com/CODE-MNA/Django-Website"),
    new InfoProject("NodeJS Validation","A project where I used node js to do server-sided validation and rendered dynamically using ejs. Express used.","projects/express-form.png","","https://github.com/CODE-MNA/express-form")
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