import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';  // Import your Banner component
import './static/global.css';  // Import global CSS
import Articles from './components/Articles';
import Education from './components/Education';
import Experience from './components/Experience';
import Intervention from './components/Intervention';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Articles />
      <Education />
      <Experience />
      <Intervention />
    </div>
  );
}

export default App;