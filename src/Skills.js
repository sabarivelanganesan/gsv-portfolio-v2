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
import kubernetes from './styles/kubernetes.svg';
import python from './styles/python.svg';
import apacheSpark from './styles/apache-spark.svg';
import apachekafka from './styles/apache-kafka.svg';
import jenkins from './styles/jenkins.svg';
import postgresql from './styles/postgresql.svg';
import terraform from './styles/terraform.svg';
import aws from './styles/aws.svg';
import go from './styles/go.svg';

function Skills() {
    const skillsWithImgURL = [
        {
            id: 0,
            name: 'Python',
            img: python
        }, {
            id: 1,
            name: 'Go',
            img: go
        }, {
            id: 2,
            name: 'AWS',
            img: aws
        }, {

            id: 3,
            name: 'Docker',
            img: docker
        }, {
            id: 4,
            name: 'Kubernetes',
            img: kubernetes
        }, {
            id: 5,
            name: 'Terraform',
            img: terraform
        }, {
            id: 6,
            name: 'Apache kafka',
            img: apachekafka
        },{
            id: 7,
            name: 'Apache Spark',
            img: apacheSpark
        },
         {
            id: 8,
            name: 'Jenkins',
            img: jenkins
        }, {
            id: 9,
            name: 'Java',
            img: java
        },{
            id: 10,
            name: 'Node.Js',
            img: nodejs
        }, {
            id: 11,
            name: 'PostgreSQL',
            img: postgresql
        }, 
        // {
        //     name: 'Figma',
        //     img: figma
        // },
        {
            id: 12,
            name: 'SQLServer',
            img: sqlserver
        }, {
            id: 13,
            name: 'Git',
            img: git
        }, {
            id: 14,
            name: 'JavaScript',
            img: Js
        },
        {
            id: 15,
            name: 'MongoDB  ',
            img: MongoDB
        }
    ];
    const skillsList = skillsWithImgURL.map((skill) =>
            <li key={skill.id} className="skill-list-item">
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
            </li>
        );
    return (
        <div id='skills' className='skill-section'>
            <p className='skill-title1'>Why choose me</p>
            <p className='skill-title2'>The skills, tools and technologies</p>
            <p className='skill-title2'>I am really good at:</p>
            <ul className="skill-list">
                {skillsList}
            </ul>
        </div>
    )
}

export default Skills;