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
            description: "Developed an e-movie booking app, enabling users to effortlessly book favorite movies while providing detailed casting and cinema information. The app maintains real-time movie states and integrates secure PayPal transactions. Deployment on Azure ensures seamless accessibility and scalability, enhancing the user experience and operational efficiency.",
            skills: ["C#", "ASP.NET Core MVC", "HTML", "Bootstrap", "JQuery", "Paypal Integration", "Microsoft SQL Server"],
            githubLink: "https://github.com/sabarivelanganesan/BookMyShowUK"
        },
        {
            id: 1,
            img: FileSharingProject,
            name: "P2P File Sharing",
            description: "Development of a cutting-edge decentralized file-sharing app for iOS and Android using React Native and SQLite. The solution featured a secure TCP protocol for peer-to-peer file transfer, prioritizing efficiency and data security. Seamlessly synchronized files and robust security measures ensured reliable offline functionality and scalability.",
            skills: ["React-native", "SQLite", "HTML", "CSS", "Styled Components", "TCP Protocol"],
            githubLink: "https://github.com/sabarivelanganesan/p2p-data-storage"
        }
    ];
    const renderSkills = function(skills) {
        return skills.map((skill) => 
            <li className="project-skill-item">
                {skill}
            </li>    
        )
    }
    const renderProjectLists = projectLists.map((project) => (
        <li key={project.id} className="project-card">
            <img className="project-img" width={500} height={200} src={project.img} alt="EMovieTickets" />
            <div className="card-details">
                <p className="project-name">{project.name}</p>
                <p className="project-desc">{project.description}</p>
                <ul className="project-skills">
                    {renderSkills (project.skills)}
                </ul>
            </div>
            <div className="project-link">
                <a className="link-desc" href={project.githubLink} target="_black">View Code</a>
                <img src={githubicon} width={18} alt="github-icon" />
            </div>
        </li>
    ));
    return (
        <div id="projects" className="projects">
            <p className="project-title1">Project</p>
            <p className="project-title2">Some of my recent work</p>
            <ul className="project-lists">
                {renderProjectLists}
            </ul>
        </div>
    )
};

export default Projects;