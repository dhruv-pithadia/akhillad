import React, { Component, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../static/Intervention.css";
import earlylife from "../assets/early-life.png"
import afterdiagnosis from "../assets/after-daignosis.png"
import schooling from "../assets/Schooling.png"

/* Example card data */
const cardsData = [
    {
        title: "Early Life",
        subtitle: "Before First Birthday",
        description: "Some text about early life before the first birthday.",
        videoSrc: "/assets/videos/early-life.mp4",
    },
    {
        title: "After Diagnosis",
        subtitle: "Early Intervention to BioMedical protocol",
        description:
            "As we started with Behavior Modification we gradually moved to BioMedical Intervention approach using diet, vitamins supplements under BioMedical doctors supervision",
        videoSrc: "/assets/videos/early-life2.mp4",
    },
    {
        title: "Schooling",
        subtitle: "Akhil's journey",
        description: "I attended many special education schools in New Jersey.",
        videoSrc: "/assets/videos/therapy-sessions.mp4",
    },
    {
        title: "Brain Development",
        subtitle: "Neuro Development protocol",
        description: "An overview of primary education experiences and challenges.",
        videoSrc: "/assets/videos/school-years.mp4",
    },
];

export default class Intervention extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredIndex: null,
            currentSlide: 0,
        };

        // Create refs for each card’s <video> element
        this.videoRefs = cardsData.map(() => createRef());
        // Ref for the slider component
        this.sliderRef = createRef();
        // Flag to throttle scroll events
        this.isScrolling = false;
    }

    /* ========== CARD HOVER LOGIC ========== */
    handleMouseEnter = (index) => {
        this.setState({ hoveredIndex: index }, () => {
            const videoRef = this.videoRefs[index].current;
            if (videoRef) {
                videoRef.currentTime = 0;
                videoRef
                    .play()
                    .catch((err) => console.log("Auto-play blocked:", err));
            }
        });
    };

    handleMouseLeave = (index) => {
        if (this.state.hoveredIndex === index) {
            this.setState({ hoveredIndex: null });
        }
        const videoRef = this.videoRefs[index].current;
        if (videoRef) {
            videoRef.pause();
        }
    };

    /* ========== CAROUSEL (PARALLAX) LOGIC ========== */
    handleAfterChange = (current) => {
        this.setState({ currentSlide: current });
    };

    // Throttled wheel event handler for the carousel section
    handleWheel = (e) => {
        if (this.isScrolling) return;

        const { currentSlide } = this.state;
        const slider = this.sliderRef.current;
        if (!slider) return;

        const totalSlides = slider.innerSlider.props.children.length;
        const lastIndex = totalSlides - 1;

        if (e.deltaY > 0) {
            if (currentSlide < lastIndex) {
                e.preventDefault();
                slider.slickNext();
                this.isScrolling = true;
                setTimeout(() => {
                    this.isScrolling = false;
                }, 600); // 600ms delay between slide changes
            }
        } else if (e.deltaY < 0) {
            if (currentSlide > 0) {
                e.preventDefault();
                slider.slickPrev();
                this.isScrolling = true;
                setTimeout(() => {
                    this.isScrolling = false;
                }, 600);
            }
        }
    };

    sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        afterChange: this.handleAfterChange,
    };

    render() {
        return (
            <div className="main-intervention" id="autism">
                <h1 className="intervention-title">Autism Intervention</h1>

                {/* CARDS SECTION */}
                <div className="intervention-submain">
                    {cardsData.map((card, index) => {
                        const isHovered = this.state.hoveredIndex === index;
                        return (
                            <div
                                key={index}
                                className={`intervention-card ${isHovered ? "expanded" : "collapsed"
                                    }`}
                                onMouseEnter={() => this.handleMouseEnter(index)}
                                onMouseLeave={() => this.handleMouseLeave(index)}
                            >
                                <div className="video-wrapper">
                                    <video
                                        ref={this.videoRefs[index]}
                                        src={card.videoSrc}
                                        muted
                                        className="card-video"
                                    />
                                </div>
                                <h3>{card.title}</h3>
                                <h4>{card.subtitle}</h4>
                                <p>{card.description}</p>
                                <button className="watch-button">Watch Video</button>
                            </div>
                        );
                    })}
                </div>

                {/* CAROUSEL SECTION */}
                <div
                    className="carousel-section"
                    onWheel={this.handleWheel}
                    style={{ marginTop: "4rem" }}
                >
                    <Slider ref={this.sliderRef} {...this.sliderSettings}>

                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>Early Life</h2>
                                <p>
                                    Akhil was responding to his name and had eye contact before his birthday
                                    and he regressed into AUTISM after his first birthday. Early Intervention
                                    started at 23 months.
                                </p>
                            </div>

                            <div className="slide-image">
                                <img src={earlylife} alt="Early Life" />
                            </div>
                        </div>
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>After Diagnosis</h2>
                                <h3>Early Intervention to BioMedical protocol</h3>
                                <p>
                                    As we started with Behavior Modification we gradually moved to BioMedical Intervention approach using diet, vitamins supplements under BioMedical doctors supervision
                                </p>
                            </div>

                            <div className="slide-image">
                                <img src={afterdiagnosis} alt="After Diagnosis" />
                            </div>
                        </div>

                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>Schooling</h2>
                                <p>
                                    I attended many special education schools in New Jersey. In schools they followed Applied Behavior Analysis(ABA), DIR Floor time, physical therapy, occupational therapy, speech therapy, supported typing, reflex integration, neuro development approach with some supported typing and rapid prompting method. But they never gave me transcripts and had no college track
                                </p>
                            </div>

                            <div className="slide-image">
                                <img src={schooling} alt="Schooling" />
                            </div>
                        </div>
                        <div className="slide-content">
                            <div className="slide-text">
                                <h2>Brain Development</h2>
                                <h3>Neuro Development protocol</h3>
                                <p>
                                    At age 11 we explored Neuro Development approach after getting trained at the Family Hope Center. Implemented entire protocol for 6 months in India. During this time we were learning about brain development and how the skipping any development stage like crawling, creeping was not good. Akhil definitely had skipped such stages.                                </p>
                            </div>

                            <div className="slide-image">
                                <img src={schooling} alt="Schooling" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}