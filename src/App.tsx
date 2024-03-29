import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header/index';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import MySkills from './components/MySkills';

function App() {
  return (
    <div className='container-fluid vw-100 ' style={{ position: 'relative' }}>
      <div style={{ height: 90 }}></div>
      <Header />
      <Home />
      <div id='about-me'>
        <AboutMe />
      </div>
      <div id='my-projects'>
        <MyProjects />
      </div>
      <div id='my-skills'>
        <MySkills />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;