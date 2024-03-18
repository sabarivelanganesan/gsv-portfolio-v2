import './App.css';
import NavigationBar from './NavigationBar';
import Home from './Home';
import AboutMeSection from './myintro';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Home />
        <AboutMeSection />
      </header>
    </div>
  );
}

export default App;
