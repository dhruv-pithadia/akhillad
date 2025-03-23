// import React, { Component } from 'react';
// import '../static/Articles.css';

// export default class Articles extends Component {
//     render() {
//         return (
//             <div className="main-articles" id='myArticles'>
//                 <div className="text-articles">
//                     <h1>My Articles</h1>
//                 </div>
//                 <div className="articles-card-container">
//                     {/* Card 1 */}
//                     <div className="card-article">
//                         <img src="" alt="" className="article-icon" />
//                         <h3>College Acceptance</h3>
//                         <div className="desc">
//                             <p>
//                                 Minimally Verbal Individuals now can go to a College. College experience is important for all. I was also interested in college education, and I
//                                 being minimally verbal, always thought I could not go to college.
//                             </p>
//                         </div>
//                         <button>Read More</button>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="card-article">
//                         <img src="" alt="" className="article-icon" />
//                         <h3>Mental health stress in college life</h3>
//                         <div className="desc">
//                             <p>
//                                 Depression can lead to anxiety issues, abuse, poor academic performance, suicides, risks, and violent behaviors, and other mental disorders in future life. Therefore, mental health campaigns are needed for international, female, and diverse students in colleges and universities.
//                             </p>
//                         </div>
//                         <button>Read More</button>
//                     </div>

//                     {/* Card 3 (Pink Background) */}
//                     <div className="card-article">
//                         <img src="" alt="" className="article-icon" />
//                         <h3>Evolution</h3>
//                         <div className="desc">
//                             <p>
//                                 The organism forms the other organisms on the earth and form plant or animal as organisms and now they form a species on the earth.
//                                 The form of new organism is now different from the ancestors in physical and behavior You find the Tiger and the form of cat are from the same form of ancestor but different from each other
//                             </p>
//                         </div>
//                         <button>Read More</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// src/components/Articles.jsx
// src/components/Articles.jsx
import React, { Component } from "react";
import { articlesData } from "../articlesData";
import "../static/Articles.css";

export default class Articles extends Component {
    openArticleInNewTab = (article) => {
        const url = `#/article/${article.slug}`;
        window.open(url, "_blank");
    };

    render() {
        return (
            <div className="main-articles" id="myArticles">
                <div className="text-articles">
                    <h1>My Articles</h1>
                </div>
                <div className="articles-card-container">
                    {articlesData.map((article, index) => {
                        const Icon = article.icon; // Icon imported in articlesData
                        return (
                            <div key={index} className="card-article">
                                {Icon && <Icon className="article-icon-svg" />}
                                <h3>{article.title}</h3>
                                <div className="desc">
                                    <p>{article.excerpt}</p>
                                </div>
                                <button onClick={() => this.openArticleInNewTab(article)}>
                                    Read More
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}