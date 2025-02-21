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
            title: " Custom Web & Mobile Apps",
            description: "I design and develop scalable, high-performance web and mobile applications using React.js, Next.js, Node.js, and Spring Boot. With expertise in AWS, Azure, and Kubernetes, I ensure applications are built for reliability, security, and scalability.",
            img:""
        },
        {
            id: 1,
            title: "Cloud & DevOps Consulting",
            description: "I architect and deploy cloud solutions using AWS, Azure, Terraform, Kubernetes, and Docker. From CI/CD pipelines (Jenkins, GitHub Actions) to automated infrastructure provisioning, I enhance cloud efficiency and reliability. My experience includes serverless architectures, container orchestration, and monitoring with Prometheus & Grafana",
            img:"" 
        },
        {
            id: 2,
            title: "AI & Data Insights",
            description: "Leveraging Apache Spark, SQL, Pandas, and ML models (XGBoost, LSTM), I build predictive analytics, data pipelines, and AI-driven insights. My recent projects include CO₂ Emission Tracking & Forecasting and Food Supply Chain Analytics, where I integrated machine learning with cloud automation to generate actionable insights.",
            img:"" 
        },
        {
            id: 3,
            title: "API Development & Integration",
            description: "I develop secure, high-performance REST and GraphQL APIs using Spring Boot, Django, and Node.js. With expertise in database optimization (PostgreSQL, MySQL, MongoDB, Redis) and serverless architectures (AWS Lambda, Azure Functions), I ensure seamless integration across applications",
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
            <p className="title">What I Provide</p>
            <ul className="myworks-lists">
                {renderMyWorkLists}
            </ul>
        </div>
    )
}

export default Myworks;