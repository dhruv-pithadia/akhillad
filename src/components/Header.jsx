import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
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
            {/* <nav className="desktop-menu">
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
                        <a href="#publishedWork">Published Works</a>
                    </li>
                    
                </ul>
            </nav> */}

            <nav className="desktop-menu">
                <ul>
                    <li><Link to="banner" smooth={true} duration={500} offset={-70}>Home</Link></li>
                    <li><Link to="myArticles" smooth={true} duration={500} offset={-70}>My Articles</Link></li>
                    <li><Link to="education" smooth={true} duration={500} offset={-70}>Education</Link></li>
                    <li><Link to="experience" smooth={true} duration={500} offset={-70}>Experience</Link></li>
                    <li><Link to="autism" smooth={true} duration={500} offset={-70}>Autism Intervention</Link></li>
                    <li><Link to="achievements" smooth={true} duration={500} offset={-70}>Achievements</Link></li>
                    <li><Link to="publishedWork" smooth={true} duration={500} offset={-70}>Published Works</Link></li>
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
                        <Link to="myArticles" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                            My Articles
                        </Link>
                    </li>
                    <li>
                        <Link to="education" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="autism" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                            Autism Intervention
                        </Link>
                    </li>
                    <li>
                        <Link to="achievements" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link to="publishedWork" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                            Published Works
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;