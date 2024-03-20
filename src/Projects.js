import React from "react";
import emovieProject from './styles/emovieProject.png';
import FileSharingProject from './styles/filesharing.png';
import githubicon from './styles/github.svg';

function Projects() {
    const projectLists = [
        {
            id: 0,
            img: emovieProject,
            name: "EMovie Tickets",
            description: "Below are a series of poorly constructed paragraphs and possible solutions. Put yourself in the place of a teacher. Criticise the structure of each paragraph and suggest how it might be improved",
            skills: ["C#", "ASP.NET Core MVC", "Entity Framework", "Paypal Integration", "HTML", "Bootstrap", "JQuery", "Microsoft SQL Server"],
            githubLink: "https://github.com/sabarivelanganesan/BookMyShowUK"
        },
        {
            id: 1,
            img: FileSharingProject,
            name: "P2P File Sharing",
            description: "Below are a series of poorly constructed paragraphs and possible solutions. Put yourself in the place of a teacher. Criticise the structure of each paragraph and suggest how it might be improved",
            skills: ["React-native", "SQLite", "Styled Components", "TCP Protocol"],
            githubLink: "https://github.com/sabarivelanganesan/p2p-data-storage"
        }
    ];
    const renderProjectLists = projectLists.map((project) => (
        <li key={project.id} className="project-card">
            <img className="project-img" width={500} height={200} src={project.img} alt="EMovieTickets" />
            <div className="card-details">
                <p className="project-name">{project.name}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-link">
                    <a className="link-desc" href={project.githubLink} target="_black">View Code</a>
                    <img src={githubicon} width={18} alt="github-icon" />
                </div>
            </div>
        </li>
    ));
    return (
        <div className="projects">
            <p className="project-title1">Project</p>
            <p className="project-title2">Some of my recent work</p>
            <ul className="project-lists">
                {renderProjectLists}
            </ul>
        </div>
    )
};

export default Projects;