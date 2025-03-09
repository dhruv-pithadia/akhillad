import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "../static/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Listen to window scroll and toggle the "scrolled" state
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 786) {
                if (window.scrollY > 100) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header-main ${scrolled ? "scrolled" : ""}`}>
            <div className="header-title">
                <a href="#banner">
                    <img src={logo} alt="Akhil Lad" />
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-menu">
                <ul>
                    <li>
                        <a href="#banner">Home</a>
                    </li>
                    <li>
                        <a href="#myArticles">My Articles</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#autism">Autism Intervention</a>
                    </li>
                    <li>
                        <a href="#achievements">Achievements</a>
                    </li>
                    <li>
                        <a href="#recentWork">Recent work</a>
                    </li>
                </ul>
            </nav>

            {/* Quick Menu Button for Mobile */}
            <div className="quick-menu-button" onClick={toggleMobileMenu}>
                <FaBars className="menu-icon" />
                <span className="menu-text">Quick Menu</span>
            </div>

            {/* Mobile Navigation Menu (horizontally scrollable) */}
            <div className={`mobile-scroll-menu ${mobileMenuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a href="#myArticles" onClick={closeMobileMenu}>
                            My Articles
                        </a>
                    </li>
                    <li>
                        <a href="#education" onClick={closeMobileMenu}>
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="#experience" onClick={closeMobileMenu}>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#autism" onClick={closeMobileMenu}>
                            Autism Intervention
                        </a>
                    </li>
                    <li>
                        <a href="#achievements" onClick={closeMobileMenu}>
                            Achievements
                        </a>
                    </li>
                    <li>
                        <a href="#recentWork" onClick={closeMobileMenu}>
                            Recent work
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;