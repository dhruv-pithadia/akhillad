import React from "react";
import "../static/global.css";
import "../static/MyPresentations.css"; // create this stylesheet

// Example data (you can later move this to presentationData.js)
const presentationsData = [
    // {
    //     id: 1,
    //     title: "Non Speakers Guest Series",
    //     description: "Autism Stories is a weekly podcast hosted by Doug Blecher with a new guest each week. This podcast amplifies the voices of autistic people, who are the true experts of the autistic experience. We all have so much to learn from their stories, experiences, and advice. In this full episode, we host Akhil Lad who worked with Deepak Chopra.He also tells me about how he is growing his mind- body connection and his time in college.",
    //     youtubeLink: "https://youtu.be/ze95sFsYpng",
    //     thumbnail: "https://img.youtube.com/vi/ze95sFsYpng/maxresdefault.jpg",
    //     date: "2023-01-08",
    // },
    {
        id: 2,
        title: "Neurodiversity Summit",
        description: "The Neurodiversity India Summit aims to raise awareness of neurodiversity in India and encourage organisations to include neurodiversity as part of their diversity initiatives. It was a virtual conference with talks live streamed on YouTube on the 17th of December 2022. i was  honoured to have been invited to speak at the summit, raising much needed awareness of the mental health experiences of autistic women and non-binary people.",
        youtubeLink: "https://youtu.be/ZEyMTNym9C0",
        thumbnail: "https://img.youtube.com/vi/ZEyMTNym9C0/0.jpg",
        date: "2022-12-18",
    },
    {
        id: 3,
        title: "@bungalownyc with Chef Vikas Khanna!",
        description: "Manisha lad: Akhil met Chef Vikas Khanna and Mysha Rizvi at The Bungalow restaurant in NY and gifted neurodiverse gardeners microgreens",
        youtubeLink: "https://youtube.com/shorts/dQWlxBxC4YY?si=uW_bCxr_aLrbdOMO",
        thumbnail: "https://img.youtube.com/vi/dQWlxBxC4YY/0.jpg",
        date: "2022-12-18",
    },
    {
        id: 4,
        title: "Akhil Lad's thoughts",
        description: "In the video akhil's thoughts, Akhil reflects on the healing and peaceful atmosphere of home, drawing inspiration from meditative sounds. He shares how music can transform both the mind and body, fostering a sense of calm and serenity. The narrative highlights the connection between energy, mindfulness, and cellular well-being, encouraging viewers to embrace moments of tranquility and inner balance through meditation and positive thoughts.",
        youtubeLink: "https://youtu.be/X59s-TtgOsY?si=X8N25EM3Kd3uAALp",
        thumbnail: "https://img.youtube.com/vi/X59s-TtgOsY/0.jpg",
        date: "2022-04-23",
    },
    {
        id: 5,
        title: "NeuroDivergent Minimally Verbal Individuals can now goto College - Akhil Lad",
        description: "SpellX was a free, online, salon-style showcase of creativity and voice, and Akhil Lad was honored to be one of its speakers. Nonspeaking, minimally speaking, and unreliably speaking individuals shared poetry, talks, presentations, and artistic expression. Akhil’s presence brought a moving window into the wit, resilience, and inner world of nonspeakers, leaving a lasting impact on everyone who joined the event.",
        youtubeLink: "https://youtu.be/wX_MzsgUgc4",
        thumbnail: "https://img.youtube.com/vi/wX_MzsgUgc4/0.jpg",
        date: "2024-03-20",
    },
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