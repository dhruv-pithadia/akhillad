import React, { Component } from 'react'
import bannerImage from '../assets/banner-img.png'
import '../static/Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="main-banner" id='banner'>
                <div className="banner-text">
                    <p>I am soaring new Horizons, because Sky’s not the limit to me! </p>
                </div>
                <div className="banner-image">
                    <img src={bannerImage} alt="Banner" className="banner-img" />
                </div>

            </div>
        )
    }
}
