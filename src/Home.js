import Portfolioimg from './styles/Portfolioimg.png';

function Home() {
    return (
        <>
        <div class="home-section">
            <div class="profile-section">
                <p class="profile-start">Hi, I am</p>
                <p class="profile-name">SABARIVELAN GANESAN</p>
                <p class="profile-title" id="jobtitle">Software Developer</p>
                <p class="profile-description">
                    Experienced Software developer with a focus on building engaging and accessible digital experiences
                </p>
                <div class="profile-actions">
                    <div class="btn-action primary">View Resume</div>
                    <div class="btn-action secondary">Connect LinkedIn</div>
                </div>
            </div>
            <div class="profile-image-section">
                <img class="profile-image" src={Portfolioimg} alt="Profile" />
            </div>
        </div>
        <div class="hometointromodel">
            <div class="htm-item">
                <div class="temp-img"></div>
                <div>
                    <p>3 Years Job</p>
                    <p>Experience</p>
                </div>
            </div>
            <div class="htm-item">
                <div class="temp-img"></div>
                <div>
                    <p>11+ Projects</p>
                    <p>Completed</p>
                </div>
            </div>
            <div class="htm-item">
                <div class="temp-img"></div>
                <div>
                    <p>Contact</p>
                    <p>Online 24/7</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;