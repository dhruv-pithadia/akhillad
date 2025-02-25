import React, { Component } from 'react'
import '../static/Education.css'
import '../static/Experience.css'

export default class Experience extends Component {
    render() {
        return (
            <div className="main-education" id='experience'>

                <h1 className="education-title">Experience</h1>

                <div className="education-content">
                    <div className="science">
                        <h1>Specialization Course</h1>
                        <h3>BYJU’s Coding NASA Coding</h3>
                        <p>
                            NY - NASA course BYJU Coding course started in 2022
                        </p>
                    </div>

                    <div className="keystone">
                        <h1>Farm Internship</h1>
                        <h3>2017 - Internship on the Farm</h3>
                        <p>
                            I gained some volunteering experience working on the farm.
                        </p>
                    </div>

                    <div className="keystone">
                        <h1>Robotics </h1>
                        <h3>2018 - Robotics experience with a buddy</h3>
                        <p>
                            Lego Boost
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
