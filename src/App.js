import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';  // Import your Banner component
import './static/global.css';  // Import global CSS

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* Add other components here */}
    </div>
  );
}

export default App;