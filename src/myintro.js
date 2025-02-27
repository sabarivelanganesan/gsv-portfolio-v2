// import aboutimage from './styles/aboutimage.png'
import aboutimage from './styles/sabari.png';
import gitHub from './styles/github.svg';
import Dev from './styles/dev.svg'

const techAdventures = [
    {
        id: 0,
        name: "GitHub",
        link: "https://github.com/sabarivelanganesan",
        img: gitHub
    }, {
        id: 1,
        name: "Dev.to",
        link: "https://dev.to/sabarivelanganesan",
        img: Dev
    }
];

const renderTechAdventures = techAdventures.map((tech) => 
    <li className='tech-item' key={tech.id}>
        <a href={tech.link} className="tech-item-name" target="_black">{tech.name}</a>
        <img src={tech.img} width={35} alt="tech-icon" />
    </li>
)

function AboutMeSection() {
    return (
        <div id="aboutme" className="aboutme">
            <div className="abt-prof-img">
                <img src={aboutimage} alt="Sabarivelan Ganesan"/>
            </div>
            <div className="aboutme-details">
                <p className='abtme-title1'>My Intro</p>
                <p className="abtme-title2">About me</p>
                <p className="abtme-description">Software Engineer with 4+ years of expertise in designing and deploying large-scale, high-performance solutions. Skilled in cloud computing, web development, automated testing, and debugging, with a deep understanding of agile methodologies. Passionate about intelligent automation, optimizing workflows, and enhancing customer satisfaction through innovation. A technical mentor and problem solver, adaptable to flexible work models and open to business travel.</p>
                <div className='explore-work'>
                    <p>Tech Adventures</p>
                    <ul className='tech-list'>
                        {renderTechAdventures}
                    </ul>
                </div>
                {/* some tags */}
                {/* <div className="aboutme-contacts">
                    <div className="row">
                        <div className="col icon-avatar"></div>
                        <p className="col">Name</p>
                        <p>:</p>
                        <p className="col">Sabarivelan Ganesan</p>
                    </div>
                    <div className="row">
                        <div className="col icon-avatar"></div>
                        <p className="col">Name</p>
                        <p>:</p>
                        <p className="col">Sabarivelan Ganesan</p>
                    </div>
                    <div className="row">
                        <div className="col icon-avatar"></div>
                        <p className="col">Name</p>
                        <p>:</p>
                        <p className="col">Sabarivelan Ganesan</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AboutMeSection;