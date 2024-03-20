import './App.css';
import NavigationBar from './NavigationBar';
import Home from './Home';
import AboutMeSection from './myintro';
import Skills from './Skills';
import Qualifications from './Qualifications';
import Myworks from './Myworks';
import Projects from './Projects';
import ContactMe from './Contactme';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Home />
        <AboutMeSection />
        <Skills />
        <Qualifications />
        <Myworks />
        <Projects />
        <ContactMe />
      </header>
    </div>
  );
}

export default App;
