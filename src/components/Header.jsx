import React, { useState } from 'react';
import '../static/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e) => {
        // Stop event propagation to avoid any unwanted parent handlers.
        e.stopPropagation();
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className="header-container">
            <h1 className="header-title">Akhil Lad</h1>

            {/* Navigation for desktop and mobile */}
            <nav className={`nav-items ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>My Articles</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Autism Intervention</li>
                    <li>Achievements</li>
                    <li>Recent work</li>
                </ul>
            </nav>

            {/* Hamburger menu (only visible on mobile) */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;