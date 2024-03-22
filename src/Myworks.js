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
            description: "I'm your all-in-one software engineering wizard, from prototypes to production. With expertise in UI/UX, APIs, databases, backend, and even micro-frontends, I've got you covered. Let's tackle your tech challenges together",
            img:""
        },
        {
            id: 1,
            title: "eCommerce",
            description: "I've spearheaded eCommerce platform development, adept in Shopify and Amazon. Managed my own Amazon-based venture. Skilled in marketing, A/B testing, growth hacking, and advertising. Let's amplify your online presence and boost business together!",
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
        <div id='whatido' className="myworks">
            <p className="title">What I Do</p>
            <ul className="myworks-lists">
                {renderMyWorkLists}
            </ul>
        </div>
    )
}

export default Myworks;