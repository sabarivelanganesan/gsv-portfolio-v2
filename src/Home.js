import Portfolioimg from './styles/Portfolioimg.png';
import WorkExperience from './styles/work-experience.png';
import Support from './styles/support.png';
import Projects from './styles/projects.png';

function Home() {
    return (
        <div className="home-section">
            <div className="profile-section">
                <p className="profile-start">Hi, I am</p>
                <p className="profile-name">SABARIVELAN GANESAN</p>
                <p className="profile-title" id="jobtitle">Software Developer</p>
                <p className="profile-description">
                    Experienced Software developer with a focus on building engaging and accessible digital experiences
                </p>
                <div className="profile-actions">
                    <div className="btn-action primary">View Resume</div>
                    <div className="btn-action secondary">Connect LinkedIn</div>
                </div>
            </div>
            <div className="profile-image-section">
                <img className="profile-image" src={Portfolioimg} alt="Profile" />
            </div>
            <div className="hometointromodel">
                <div className="htm-item">
                    <div className="item-border">
                        <img src={WorkExperience} alt='Work Experience' />
                    </div>
                    <div className='item-details'>
                        <p>3 Years Job</p>
                        <p>Experience</p>
                    </div>
                </div>
                <div className="htm-item">
                    <div className="item-border">
                        <img src={Projects} alt='Work Experience' />
                    </div>
                    <div className='item-details'>
                        <p>15+ Projects</p>
                        <p>Completed</p>
                    </div>
                </div>
                <div className="htm-item">
                    <div className="item-border">
                        <img src={Support} alt='Work Experience' />
                    </div>
                    <div className='item-details'>
                        <p>Contact</p>
                        <p>Online 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;