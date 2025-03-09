import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { publishedWorksData } from "../publishedWork"; // adjust path
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../static/PublishedWork.css";

const PublishedWorks = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true, // ensure fixed height (set in CSS)
    };

    return (
        <div className="published-works-section" id="publishedWork">
            <h2 className="published-works-title">Published Works | Conferences</h2>
            <Slider {...settings} className="published-works-carousel">
                {publishedWorksData.map((item, index) => (
                    <div key={index}>
                        <div className="published-work-card">
                            <div className="card-header">
                                <h3 className="work-title">{item.title}</h3>
                                <h4 className="work-subtitle">{item.subtitle}</h4>
                            </div>
                            <div className="card-body">
                                <p className="work-description">{item.description}</p>
                                {/* If there's a paperLink, show a button */}
                                {item.paperLink && (
                                    <a
                                        href={item.paperLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="paper-link-button"
                                    >
                                        View Paper
                                    </a>
                                )}
                                {/* If there's a videoLink, embed the video */}
                                {item.videoLink && (
                                    <div className="video-area">
                                        <ReactPlayer
                                            url={item.videoLink}
                                            width="100%"
                                            height="100%"
                                            controls={true}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PublishedWorks;