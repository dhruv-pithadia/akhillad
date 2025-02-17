// import React, { useState } from 'react';
// import '../static/Header.css';

// const Header = () => {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen((prev) => !prev);
//     };

//     // Optionally, you can close the mobile menu when a link is clicked:
//     const closeMobileMenu = () => {
//         setMobileMenuOpen(false);
//     };

//     return (
//         <div className="header-main">
//             <div className="header-title">Akhil Lad</div>

//             {/* Desktop Navigation (appears on hover) */}
//             <nav className="desktop-menu">
//                 <ul>
//                     <li><a href="#myArticles">My Articles</a></li>
//                     <li><a href="#education">Education</a></li>
//                     <li><a href="#experience">Experience</a></li>
//                     <li><a href="#autism">Autism Intervention</a></li>
//                     <li><a href="#achievements">Achievements</a></li>
//                     <li><a href="#recentWork">Recent work</a></li>
//                 </ul>
//             </nav>

//             {/* Hamburger Icon for Mobile */}
//             <div className="hamburger-icon" onClick={toggleMobileMenu}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>

//             {/* Mobile Navigation Menu */}
//             <nav className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="#myArticles" onClick={closeMobileMenu}>My Articles</a></li>
//                     <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
//                     <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
//                     <li><a href="#autism" onClick={closeMobileMenu}>Autism Intervention</a></li>
//                     <li><a href="#achievements" onClick={closeMobileMenu}>Achievements</a></li>
//                     <li><a href="#recentWork" onClick={closeMobileMenu}>Recent work</a></li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Header;
import React, { useState } from 'react';
// 1) Import the FaBars icon from react-icons
import { FaBars } from 'react-icons/fa';
import '../static/Header.css';
import logo from '../assets/logo.png'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className="header-main">
            <div className="header-title">
                <a href="#banner">
                    <img src={logo} alt="Akhil Lad" />
                </a>
            </div>
            {/* Desktop Navigation (appears on hover) */}
            <nav className="desktop-menu">
                <ul>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#myArticles">My Articles</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#autism">Autism Intervention</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#recentWork">Recent work</a></li>
                </ul>
            </nav>

            {/* Quick Menu Button (Mobile) */}
            <div className="quick-menu-button" onClick={toggleMobileMenu}>
                {/* 2) Use the FaBars icon here */}
                <FaBars className="menu-icon" />
                <span className="menu-text">Quick Menu</span>
            </div>

            {/* Mobile Navigation Menu (horizontally scrollable) */}
            <div className={`mobile-scroll-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#myArticles" onClick={closeMobileMenu}>My Articles</a></li>
                    <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
                    <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
                    <li><a href="#autism" onClick={closeMobileMenu}>Autism Intervention</a></li>
                    <li><a href="#achievements" onClick={closeMobileMenu}>Achievements</a></li>
                    <li><a href="#recentWork" onClick={closeMobileMenu}>Recent work</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;