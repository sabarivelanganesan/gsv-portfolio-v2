import React from "react";
function Myworks() {
    const myWorksLists = [
        // {
        //     title: "Front-End Development",
        //     description: "My work as front end developer could make the flowless creative web design and development to the team",
        //     img:""
        // },
        // {
        //     title: "Backend Development",
        //     description: "My work as front end developer could make the flowless creative web design and development to the team",
        //     img:""
        // },
        {
            id: 0,
            title: "Full Stack Development",
            description: "My work as front end developer could make the flowless creative web design and development to the team",
            img:""
        },
        {
            id: 1,
            title: "eCommerce",
            description: "My work as front end developer could make the flowless creative web design and development to the team",
            img:"" 
        }
    ];

    const renderMyWorkLists = myWorksLists.map((work) => 
        <li key={work.id} className="work-item">
            <p className="work-title">{work.title}</p>
            <p className="work-description">{work.description}</p>
        </li>
    )

    return  (
        <div className="myworks">
            <p className="title">What I Do</p>
            <ul className="myworks-lists">
                {renderMyWorkLists}
            </ul>
        </div>
    )
}

export default Myworks;