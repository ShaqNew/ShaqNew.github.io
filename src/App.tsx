import React from 'react';
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMessage';
import AboutMe from './Components/AboutMe/AboutMe';
import Interests from './Components/Interests/Interests';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.scss';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage/>
      </header>
      <div className='App-content'>
        <ParallaxProvider>
          <AboutMe/>
          <Interests/>
          <Skills/>
          <Projects/>
        </ParallaxProvider>
      </div>
    </div>
  );
}

export default App;
