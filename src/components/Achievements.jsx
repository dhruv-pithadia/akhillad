import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import {
    FaUserFriends,
    FaGraduationCap,
    FaRobot,
    FaTractor,
    FaUniversity,
    FaLaptop,
    FaMicrochip
} from 'react-icons/fa';
import '../static/Achievements.css';

const Achievements = () => {
    const videos = [
        {
            title: 'Social Skills',
            subtitle: 'Care For A Friend',
            description:
                'Social Skills Program – Discussion with Ankur about Astronomy and Research. 2016 when Akhil was still typing with support and not even close to independent typing.',
            url: 'https://vimeo.com/165602445',
            icon: FaUserFriends,
        },
        {
            title: 'Akhil 2015 Middle School Graduation',
            subtitle: 'Akhil’s School Teacher Speech',
            description:
                'Akhil was exposed to Maths, Geometry, Science, History, and English and expressed himself using iPad. Supported Typing was his mode of communication, we Presume Competence.',
            url: 'https://www.youtube.com/watch?v=Kx2FkGJI89g',
            icon: FaGraduationCap,
        },
        {
            title: 'Robotics - LegoBoost',
            subtitle: '2020 – Akhil’s Robotics Project',
            description:
                '',
            url: 'https://vimeo.com/465979791',
            icon: FaRobot,
        },
        {
            title: 'Farm Internship',
            subtitle: 'Employment Experience',
            description: '',
            url: 'https://vimeo.com/229791034',
            icon: FaTractor,
        },
        {
            title: 'College Acceptance Celebration',
            subtitle: 'Freshman Journey started',
            description:
                'Akhil finished his first course in college, and we celebrated his journey. It took 5 yrs for us to get this track started. Many doctors expressed and congratulated Akhil.',
            url: 'https://youtu.be/3GMgV1MIAOY',
            icon: FaUniversity,
        },
        {
            title: 'Digital Academic Education',
            subtitle: '2021 – Independent Skills',
            description: '',
            url: 'https://www.youtube.com/watch?v=9K_4TvNMoxI',
            icon: FaLaptop,
        },
        {
            title: 'Robotics - Mihir Vemuri (eBorg)',
            subtitle: 'Mihir and Akhil met through his mom',
            description:
                'Mihir is a determined, perseverant, and hard-working high school student whose strengths lie in mechanical engineering, physical sciences, and problem perception. He was determined to teach Akhil Robotics.',
            url: 'https://www.youtube.com/watch?v=CB3fAhR8o0Q',
            icon: FaMicrochip,
        },
    ];

    // State for currently active video (default: first video)
    const [activeVideo, setActiveVideo] = useState(videos[0]);
    // State for modal visibility
    const [modalOpen, setModalOpen] = useState(false);

    // When a thumbnail is clicked, update the active video
    const handleThumbnailClick = (video) => {
        setActiveVideo(video);
    };

    // Open modal popup when clicking the main display area (if video URL exists)
    const openModal = () => {
        if (activeVideo.url) {
            setModalOpen(true);
        }
    };

    // Close the modal popup
    const closeModal = () => {
        setModalOpen(false);
    };

    // Render the icon for the main display (in larger size)
    const MainIcon = activeVideo.icon;

    return (
        <div className="parent-achievements" id='achievements'>
            {/* Section Title */}
            <h1 className="achievements-title">Achievements</h1>

            <div className="achievements-container">
                {/* Left Column: Main Display Area */}
                <div className="main-display" onClick={openModal}>
                    <h2>{activeVideo.title}</h2>
                    <h4>{activeVideo.subtitle}</h4>
                    <p className="description-text">{activeVideo.description}</p>
                    <div className="video-thumbnail-container">
                        {/* Render the main icon */}
                        {MainIcon && <MainIcon className="main-icon" />}
                        <div className="play-overlay">&#9658;</div>
                    </div>
                    <p>Click the video to play</p>
                </div>

                {/* Right Column: Scrollable Thumbnails */}
                <div className="thumbnails-column">
                    {videos.map((video, index) => {
                        const Icon = video.icon;
                        return (
                            <div
                                key={index}
                                className={`thumbnail-item ${activeVideo.url === video.url ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(video)}
                            >
                                {Icon && <Icon className="thumbnail-icon" />}
                                <h4 className="thumbnail-title">{video.title}</h4>
                                <p className="thumbnail-subtitle">{video.subtitle}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal for Video Playback */}
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <div className="player-wrapper">
                            <ReactPlayer
                                url={activeVideo.url}
                                playing={true}
                                controls={true}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;