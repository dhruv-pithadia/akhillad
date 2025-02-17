import React, { Component } from 'react';
import '../static/Articles.css';

export default class Articles extends Component {
    render() {
        return (
            <div className="main-articles" id='myArticles'>
                <div className="text-articles">
                    <h1>My Articles</h1>
                </div>
                <div className="articles-card-container">
                    {/* Card 1 */}
                    <div className="card-article">
                        <img src="" alt="" className="article-icon" />
                        <h3>College Acceptance</h3>
                        <div className="desc">
                            <p>
                                Minimally Verbal Individuals now can go to a College. College
                                experience is important for all. I was also interested in college
                                education, and I
                            </p>
                        </div>
                        <button>Read More</button>
                    </div>

                    {/* Card 2 */}
                    <div className="card-article">
                        <img src="" alt="" className="article-icon" />
                        <h3>Mental health stress in college life</h3>
                        <div className="desc">
                            <p>
                                Minimally Verbal Individuals now can go to a College. College
                                experience is important for all. I was also interested in college
                                education, and I
                            </p>
                        </div>
                        <button>Read More</button>
                    </div>

                    {/* Card 3 (Pink Background) */}
                    <div className="card-article">
                        <img src="" alt="" className="article-icon" />
                        <h3>College Acceptance</h3>
                        <div className="desc">
                            <p>
                                Minimally Verbal Individuals now can go to a College. College
                                experience is important for all. I was also interested in college
                                education, and I
                            </p>
                        </div>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        );
    }
}