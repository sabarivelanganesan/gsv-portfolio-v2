import React from "react";
function Qualifications() {
    const experienceLists = [
        // {
        //     id: 0,
        //     companyName: "Athenahealth",
        //     startingData: "July 2025",
        //     endingDate: "Present",
        //     role: "Software Engineer - Contractor"
        // }, 
        {
            id: 0,
            companyName: "CitiusTech",
            startingData: "Jun 2025",
            endingDate: "Present",
            role: "Senior Software Engineer"
        }, {
            id: 2,
            companyName: "Zoho Corporation",
            startingData: "Sept 2019",
            endingDate: "Oct 2022",
            role: "Software Engineer"
        }
    ];
    const educationLists = [
        {
            id: 0,
            collegeName: "Loughborough University",
            startingData: "2022",
            endingDate: "2023",
            degree: 'Masters of Computer Science'
        }, {
            id: 1,
            collegeName: "Sri Eshwar College Of Engineering",
            startingData: "2016",
            endingDate: "2020",
            degree: 'Bachelors of Computer Science'
        }
    ];

    const renderExperienceColumn = experienceLists.map((experience) => 
        <li key={experience.id} className="exp-list-item">
            <div className="qual-list-icon"></div>
            <div className="exp-details">
                <p className="exp-cmp-name">{experience.companyName}</p>
                <p className="exp-role">{experience.role}</p>
                <div className="exp-date">
                    <div className="square"></div>
                    <p>{experience.startingData} - {experience.endingDate}</p>
                </div>
            </div>
        </li>
    );

    const renderEducationColumn = educationLists.map((education) => 
    <li key={education.id} className="edu-list-item">
        <div className="qual-list-icon"></div>
        <div className="edu-details">
            <p className="edu-deg">{education.degree}</p>
            <p className="edu-name">{education.collegeName}</p>
            <div className="edu-date">
                <div className="square"></div>
                <p>{education.startingData} - {education.endingDate}</p>
            </div>
        </div>
    </li>
);


    return (
        <div id="experience" className="qualifications">
            <p className="qual-title">My Qualification</p>
            <p className="qual-awe-journey">Awesome Journey</p>
            <div className="qualification-lists">
                <div className="experience">
                    <p className="exp-title">Experience</p>
                    <ul className="experience-lists">
                        {renderExperienceColumn}
                    </ul>
                </div>
                <div className="education">
                    <p className="edu-title">Education</p>
                    <ul className="education-lists">
                        {renderEducationColumn}
                    </ul>
                </div>
            </div>
        </div>
    )

} 

export default Qualifications;