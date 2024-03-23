import './App.css';
import NavigationBar from './NavigationBar';
import Home from './Home';
import AboutMeSection from './myintro';
import Skills from './Skills';
import Qualifications from './Qualifications';
import Myworks from './Myworks';
import Projects from './Projects';
import ContactMe from './Contactme';
import ResumeViewer from './ResumeViewer';
import { useState } from 'react';

function App() {
  const [canViewIframe, setCanViewIframe] = useState(false);

  return (
    <div className="App">
      {canViewIframe ? (
        <ResumeViewer />
      ) : (
        <>
          <header className="App-header">
            <NavigationBar />
          </header>
          <Home setCanViewIframe={setCanViewIframe} />
          {/* <AboutMeSection /> */}
          <Skills />
          <Qualifications />
          <Myworks />
          {/* <Projects /> */}
          {/* <ContactMe /> */}
        </>
      )}
    </div>
  );
}

export default App;
