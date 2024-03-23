import Portfolioimg from './styles/Portfolioimg.png';
import WorkExperience from './styles/work-experience.png';
import Support from './styles/support.png';
import Projects from './styles/projects.png';
import { useEffect, useState } from 'react';

function Home() {
    const [roles] = useState(["Full-Stack Developer", "Software Engineer"]);
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    
    function connectLinkedIn() {
        window.open('https://www.linkedin.com/in/sabarivelan-ganesan/', '_blank');
    }    
    
    // function viewResume() {
    //     setCanViewIframe(true);
    // }

    useEffect(() => {
        const roleElement = document.getElementById('jobtitle');
        const currentRole = roles[roleIndex];
        const timer = setInterval(() => {
            clearTimeout();
            if (charIndex < currentRole.length) {
                roleElement.textContent += currentRole.charAt(charIndex);
                setCharIndex(charIndex + 1);
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    roleElement.textContent = ''; // Clear content after a delay
                    setCharIndex(0);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }, 1000); // Delay before switching to the next role
            }
        }, 100); // Adjust the delay between letters if needed

        return () => clearInterval(timer); // Cleanup on unmount
    }, [roles, roleIndex, charIndex]);
    
    function linkToContacts() {
        const contact = document.getElementById('contactme');
        contact.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div id="home" className="home-section">
            <div className="profile-section">
                <p className="profile-start">Hi, I am</p>
                <p className="profile-name">SABARIVELAN GANESAN</p>
                <p className="profile-title" id="jobtitle"></p>
                <p className="profile-description">
                    Experienced Software developer with a focus on building engaging and accessible digital experiences
                </p>
                <div className="profile-actions">
                    <div tabIndex={7} className="btn-action primary" onClick={connectLinkedIn}>Connect LinkedIn</div>
                    <div tabIndex={8} className="btn-action secondary" onClick={linkToContacts}> Let's talk </div>
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
                        <p>3+ Years Job</p>
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