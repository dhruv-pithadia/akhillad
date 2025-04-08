// src/components/News.jsx

import React, { useState } from "react";
import { newsData } from "../newsData";
import "../static/global.css"; // Assuming this is your global stylesheet
import "../static/news.css";

const News = () => {
    const [filter, setFilter] = useState("All");

    const categories = ["All", ...new Set(newsData.map(item => item.category))];

    const filteredNews =
        filter === "All"
            ? newsData
            : newsData.filter(item => item.category === filter);

    const featuredNews = newsData.find(item => item.featured === true);

    return (
        <div className="news-section" id="news">
            <h2 className="section-title">News & Media Updates</h2>
            <p className="section-subtitle">
                Stay updated with Akhil's latest achievements, features, and appearances.
            </p>

            {/* Filter Buttons */}
            <div className="news-filters">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`filter-button ${filter === category ? "active" : ""}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Featured News */}
            {featuredNews && (
                <div className="featured-news-card">
                    <img src={featuredNews.thumbnail} alt="Featured" className="featured-image" />
                    <div className="featured-content">
                        <h3>{featuredNews.title}</h3>
                        <h4>{featuredNews.subtitle}</h4>
                        <p>{featuredNews.description}</p>
                        <div className="meta-info">
                            <span>{new Date(featuredNews.date).toDateString()}</span>
                            <span className="dot">•</span>
                            <span>{featuredNews.category}</span>
                        </div>
                        {featuredNews.paperLink && (
                            <a
                                href={featuredNews.paperLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news-link-button"
                            >
                                View Paper
                            </a>
                        )}
                        {featuredNews.videoLink && (
                            <a
                                href={featuredNews.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news-link-button"
                            >
                                Watch Video
                            </a>
                        )}
                    </div>
                </div>
            )}

            {/* Grid of News Cards */}
            <div className="news-grid">
                {filteredNews
                    .filter(item => item !== featuredNews)
                    .map((item, index) => (
                        <div className="news-card" key={index}>
                            <img src={item.thumbnail} alt={item.title} className="news-thumbnail" />
                            <div className="news-content">
                                <h4 className="news-title">{item.title}</h4>
                                <p className="news-description">{item.description}</p>
                                <div className="meta-info">
                                    <span>{new Date(item.date).toDateString()}</span>
                                    <span className="dot">•</span>
                                    <span>{item.category}</span>
                                </div>
                                <div className="news-links">
                                    {item.paperLink && (
                                        <a
                                            href={item.paperLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="news-link-button small"
                                        >
                                            View Paper
                                        </a>
                                    )}
                                    {item.videoLink && (
                                        <a
                                            href={item.videoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="news-link-button small"
                                        >
                                            Watch Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default News;