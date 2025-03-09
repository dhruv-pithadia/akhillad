// src/components/ArticlePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { articlesData } from "../articlesData";
import "../static/ArticlesPage.css";

const ArticlePage = () => {
    const { slug } = useParams();
    const article = articlesData.find((a) => a.slug === slug);

    if (!article) {
        return <div>Article not found.</div>;
    }

    return (
        <div className="article-page">
            <h1>{article.title}</h1>
            <p className="created-date">Created on: {article.createdDate}</p>
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">{article.content}</div>
            {article.updates && article.updates.length > 0 && (
                <div className="updates-section">
                    <h2>Updates</h2>
                    {article.updates.map((update, idx) => (
                        <div key={idx} className="update-entry">
                            <p className="update-date">Updated on: {update.date}</p>
                            <p className="update-content">{update.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArticlePage;