// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import Header from './components/Header';
// import Banner from './components/Banner';  // Banner component
// import './static/global.css';  // Global CSS
// import Articles from './components/Articles';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Intervention from './components/Intervention';
// import ArticlePage from './components/ArticlesPage'; // Component for individual article details
// import Achievements from './components/Achievements';
// import PublishedWorks from './components/PublishedWork';
// import Contact from './components/Contact';

// function App() {
//   return (
//     // Add basename pointing to your repo name "/akhillad"
//     <Router>
//       <Header />
//       <Routes>
//         {/* Main Homepage */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Banner />
//               <Articles />
//               <Education />
//               <Experience />
//               <Intervention />
//               <Achievements />
//               <PublishedWorks />
//               <Contact />
//             </>
//           }
//         />
//         {/* Article Details Page */}
//         <Route path="/article/:slug" element={<ArticlePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import './static/global.css';
import Articles from './components/Articles';
import Education from './components/Education';
import Experience from './components/Experience';
import Intervention from './components/Intervention';
import ArticlePage from './components/ArticlesPage';
import Achievements from './components/Achievements';
import PublishedWorks from './components/PublishedWork';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Articles />
              <Education />
              <Experience />
              <Intervention />
              <Achievements />
              <PublishedWorks />
              <Contact />
            </>
          }
        />
        <Route path="/article/:slug" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;