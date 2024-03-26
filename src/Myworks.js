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

    const mySkillOnTable = [
        {
            id: 0,
            skill_name: "Web Development",
            skill_description: "Highlight your expertise in developing web applications using various programming languages and frameworks. This includes both frontend and backend development.",
            icon: ""
        }, 
        {
            id: 1,
            skill_name: "Frontend Development",
            skill_description: " Mention your proficiency in building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. Highlight any additional libraries or frameworks you're skilled in, such as React, Angular, or Vue.js",
            icon: ""
        }, 
        {
            id: 2,
            skill_name: "Backend Development",
            skill_description: " Emphasize your ability to develop robust server-side applications using technologies like Node.js, Python (Django, Flask), Ruby on Rails, or Java (Spring Boot",
            icon: ""
        }, 
        {
            id: 3,
            skill_name: "Database Management",
            skill_description: "Discuss your experience with designing and implementing databases using SQL or NoSQL technologies like MySQL, PostgreSQL, MongoDB, or Firebase",
            icon: ""
        }, 
        {
            id: 4,
            skill_name: "Testing and Debugging",
            skill_description: " Describe your approach to testing and debugging web applications to ensure reliability, security, and performance. This may include unit testing, integration testing, and using debugging tools.",
            icon: ""
        }, 
        {
            id: 5,
            skill_name: "Deploy and Debugging",
            skill_description: "Discuss your experience with deploying web applications to production environments and managing server configurations. This may include knowledge of cloud platforms like AWS, Azure, or Google Cloud, as well as containerization tools like Docker and orchestration frameworks like Kubernetes.",
            icon: ""
        }, 
        {
            id: 6,
            skill_name: "Responsive Design",
            skill_description: " Highlight your ability to create websites that adapt seamlessly to various screen sizes and devices, ensuring a consistent experience across desktops, tablets, and smartphones.",
            icon: ""
        }, 
        {
            id: 7,
            skill_name: "Version Control",
            skill_description: " Mention your proficiency in using version control systems like Git, along with platforms like GitHub or GitLab for collaborative development and code management",
            icon: ""
        }, 
        {
            id: 8,
            skill_name: "Performance Optimisation",
            skill_description: " Discuss your methods for optimizing web application performance, including techniques for reducing load times, minimizing resource usage, and improving scalability.",
            icon: ""
        }, 
    ]

    const renderMySkillOnTable = mySkillOnTable.map((skill) => 
        <li key={skill.id} className="skill-item">
            <img src={skill.icon} alt="skill-icon" />
            <p className="skill-title">{skill.skill_name}</p>
            <p className="skill-desc">{skill.skill_description}</p>
        </li>
    )

    const renderMyWorkLists = myWorksLists.map((work) => 
        <li key={work.id} className="work-item">
            <p className="work-title">{work.title}</p>
            <p className="work-description">{work.description}</p>
        </li>
    )

    return  (
        <div id='whatido' className="myworks">
            <p className="title">What I Do</p>
            {/* <ul className="myworks-lists">
                {renderMyWorkLists}
            </ul> */}
            <ul className="skill-i-offer">
                {renderMySkillOnTable}
            </ul>
        </div>
    )
}

export default Myworks;