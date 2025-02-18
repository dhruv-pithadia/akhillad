import React, { Component } from 'react';
import '../static/Education.css';

export default class Education extends Component {
    render() {
        return (
            <div className="main-education" id='education'>
                <h1 className="education-title">Education</h1>
                {/* Optional image(s) or icons could go in .education-images */}
                <div className="education-images"></div>

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
                </div>
            </div>
        );
    }
}