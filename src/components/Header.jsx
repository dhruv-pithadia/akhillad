import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../static/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Scroll to a section by ID
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Handles navigation + scroll
    const handleNavigate = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollToSection(id), 200); // small delay to wait for homepage load
        } else {
            scrollToSection(id);
        }
        closeMobileMenu();
    };

    // Listen to window scroll and toggle the "scrolled" state
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 786) {
                setScrolled(window.scrollY > 100);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header-main ${scrolled ? "scrolled" : ""}`}>
            <div className="header-title" onClick={() => handleNavigate("banner")} style={{ cursor: "pointer" }}>
                <img src={logo} alt="Akhil Lad" />
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-menu">
                <ul>
                    <li onClick={() => handleNavigate("banner")}>Home</li>
                    <li onClick={() => handleNavigate("myArticles")}>My Articles</li>
                    <li onClick={() => handleNavigate("education")}>Education</li>
                    <li onClick={() => handleNavigate("experience")}>Experience</li>
                    <li onClick={() => handleNavigate("autism")}>Autism Intervention</li>
                    <li onClick={() => handleNavigate("achievements")}>Achievements</li>
                    <li onClick={() => handleNavigate("news")}>News & Media</li>
                </ul>
            </nav>

            {/* Quick Menu Button for Mobile */}
            <div className="quick-menu-button" onClick={toggleMobileMenu}>
                <FaBars className="menu-icon" />
                <span className="menu-text">Quick Menu</span>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-scroll-menu ${mobileMenuOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => handleNavigate("myArticles")}>My Articles</li>
                    <li onClick={() => handleNavigate("education")}>Education</li>
                    <li onClick={() => handleNavigate("experience")}>Experience</li>
                    <li onClick={() => handleNavigate("autism")}>Autism Intervention</li>
                    <li onClick={() => handleNavigate("achievements")}>Achievements</li>
                    <li onClick={() => handleNavigate("news")}>News & Media</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;