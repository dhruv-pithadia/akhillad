import React, { Component } from 'react'
import '../static/Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="header-container">
                <h1 className="header-title">Akhil Lad</h1>
                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        )
    }
}
