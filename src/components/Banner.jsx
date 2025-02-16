import React, { Component } from 'react'
import bannerImage from '../assets/banner-img.png'
import '../static/Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="banner-text">
                    <p>Howdy I’m Akhil Lad</p>
                </div>
                <div className="banner-image">
                    <img src={bannerImage} alt="Banner" className="banner-img" />
                </div>

            </div>
        )
    }
}
