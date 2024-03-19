import React from 'react';
import Js from './styles/javascript.svg';
import Ts from './styles/typescript.svg';
import Bootstrap from './styles/bootstrap.svg';
import Cplusplus from './styles/cplusplus.svg';
import Chsarp from './styles/csharp.svg';
import CSS from './styles/css.svg';
import docker from './styles/docker.svg';
import dotnet from './styles/dotnet.svg';
// import figma from './styles/figma.svg';
import git from './styles/git.svg';
import html from './styles/html.svg';
import java from './styles/java.svg';
import MongoDB from './styles/mongodb.svg';
import nodejs from './styles/nodejs.svg';
import npm from './styles/npm.svg';
import react from './styles/react.svg';
import sqlserver from './styles/sql-server.svg';

function Skills() {
    const skillsWithImgURL = [
        {
            name: 'JavaScript',
            img: Js
        }, {
            name: 'TypeScript',
            img: Ts
        }, {
            name: 'React',
            img: react
        }, {
            name: 'Html',
            img: html
        }, {
            name: 'CSS',
            img: CSS
        }, {
            name: 'Bootstrap',
            img: Bootstrap
        }, {
            name: '.Net',
            img: dotnet
        },{
            name: 'C#',
            img: Chsarp
        },
         {
            name: 'C++',
            img: Cplusplus
        }, {
            name: 'Java',
            img: java
        },{
            name: 'Node.Js',
            img: nodejs
        }, {
            name: 'NPM',
            img: npm
        }, 
        // {
        //     name: 'Figma',
        //     img: figma
        // },
        {
            name: 'SQLServer',
            img: sqlserver
        }, {
            name: 'Git',
            img: git
        }, {
            name: 'Docker',
            img: docker
        },
        {
            name: 'MongoDB  ',
            img: MongoDB
        }
    ];
    const skillsList = skillsWithImgURL.map((skill) =>
            <li className="skill-list-item">
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
            </li>
        );
    return (
        <div className='skill-section'>
            <p>Why choose me</p>
            <p>The skills, tools and technologies</p>
            <p>I am really good at:</p>
            <div>
                <ul className="skill-list">
                    {skillsList}
                </ul>
            </div>

        </div>
    )
}

export default Skills;