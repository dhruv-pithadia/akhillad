import React, { Component } from 'react';
import '../static/Education.css';

export default class Education extends Component {
    render() {
        return (
            <div className="main-education" id='education'>

                {/* Optional image(s) or icons could go in .education-images */}
                <div className="education-images">
                    <img src={require('../assets/AkhilLad/1.png')} alt="1" />
                    <img src={require('../assets/AkhilLad/2.png')} alt="2" />
                    <img src={require('../assets/AkhilLad/3.png')} alt="3" />
                    <img src={require('../assets/AkhilLad/4.png')} alt="4" />
                    <img src={require('../assets/AkhilLad/5.png')} alt="5" />
                    <img src={require('../assets/AkhilLad/6.png')} alt="6" />
                    <img src={require('../assets/AkhilLad/7.png')} alt="7" />
                    <img src={require('../assets/AkhilLad/8.png')} alt="8" />
                    <img src={require('../assets/AkhilLad/9.png')} alt="9" />
                    <img src={require('../assets/AkhilLad/10.png')} alt="10" />
                    <img src={require('../assets/AkhilLad/11.png')} alt="11" />
                    <img src={require('../assets/AkhilLad/12.png')} alt="12" />
                    <img src={require('../assets/AkhilLad/13.png')} alt="13" />
                </div>
                <div className="sub-main-education">


                    <h1 className="education-title">Education</h1>
                    <div className="education-story">
                        I attended many special education schools in New Jersey.
                        In schools they followed Applied Behavior Analysis(ABA), DIR Floor time, physical therapy, occupational therapy,
                        speech therapy, supported typing, reflex integration, neuro development approach with some supported typing and rapid prompting method.
                        But they never gave me transcripts and had no college track
                    </div>

                    <div className="education-content">
                        <div className="science">
                            <h1>Associate Degree In Science</h1>
                            <h3>Rowan College of South Jersey</h3>
                            <p>
                                Fall 2020 - Concepts of Mathematics Spring 2021 - Algebra & Trigonometry
                                English Composition I Summer 2021 - Introduction to Computers Fall 2021 -
                                Pre-Calculus & Math Analysis English Composition II Spring 2022 -
                                Introduction to Chemistry Calculus I
                            </p>
                        </div>

                        <div className="keystone">
                            <h1>Online School</h1>
                            <h3>Keystone Online School</h3>
                            <p>
                                Algebra and Geometry
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}