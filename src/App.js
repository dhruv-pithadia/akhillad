import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';  // Import your Banner component
import './static/global.css';  // Import global CSS
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Articles />
      {/* Add other components here */}
    </div>
  );
}

export default App;