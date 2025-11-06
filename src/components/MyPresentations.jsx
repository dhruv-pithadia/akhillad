import React from "react";
import "../static/global.css";
import "../static/MyPresentations.css"; // create this stylesheet

// Example data (you can later move this to presentationData.js)
const presentationsData = [
    {
        id: 1,
        title: "Non Speakers Guest Series",
        description: "Autism Stories is a weekly podcast hosted by Doug Blecher with a new guest each week. This podcast amplifies the voices of autistic people, who are the true experts of the autistic experience. We all have so much to learn from their stories, experiences, and advice. In this full episode, we host Akhil Lad who worked with Deepak Chopra.He also tells me about how he is growing his mind- body connection and his time in college.",
        youtubeLink: "https://youtu.be/ze95sFsYpng",
        thumbnail: "https://img.youtube.com/vi/ze95sFsYpng/maxresdefault.jpg",
        date: "2023-01-08",
    },
    // {
    //     id: 2,
    //     title: "Sustainable Fintech Systems",
    //     description: "Exploring how green technology can revolutionize financial infrastructure.",
    //     youtubeLink: "https://vimeo.com/773917089",
    //     thumbnail: { src: "src/assets/presentation2.png" },
    //     date: "2025-09-20",
    // },
    // {
    //     id: 3,
    //     title: "Reinforcement Learning for Robotics",
    //     description: "A deep dive into training robots using reinforcement learning techniques.",
    //     youtubeLink: "https://www.youtube.com/watch?v=tPEE9ZwTmy0",
    //     thumbnail: "https://img.youtube.com/vi/tPEE9ZwTmy0/hqdefault.jpg",
    //     date: "2025-08-15",
    // },
];

const Presentations = () => {
    return (
        <div className="presentations-section" id="presentations">
            <div className="presentations-section-content">
                <h2 className="section-title">Presentations</h2>
            </div>

            {/* <p className="section-subtitle">
                Watch some of our key presentations and talks delivered across conferences and events.
            </p> */}

            {/* Scrollable Row */}
            <div className="presentations-scroll">
                {presentationsData.map((item) => (
                    <div className="presentation-card" key={item.id}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="presentation-thumbnail"
                        />
                        <div className="presentation-content">
                            <h4 className="presentation-title">{item.title}</h4>
                            <p className="presentation-description">{item.description}</p>
                            <div className="meta-info">
                                <span>{new Date(item.date).toDateString()}</span>
                            </div>
                            <a
                                href={item.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="presentation-button"
                            >
                                ▶ Watch Video
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Presentations;