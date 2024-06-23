import React from 'react';
import backgroundpic from "./Home.png"
import urban from "./Urban.png"
import farm from "./Farm.png"
import tag from "./Tag.png"
import heart from  "./Heart.png"
import stress from "./Stress.png"
import community from "./Commu.png"

import './Home.css'; // Optional: create a CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <img src={backgroundpic} alt="GreenThumb Logo" className="backgroundpic" />
                <div className="intro">
                    <h1>Welcome to GreenThumb</h1>
                    <p>Your ultimate gardening companion.</p>
                    <img src={farm} alt="Farm tag" className="farm-tag" />
                </div>
            </header>
           
            <section className="home-content">
                <article className="story">
                    <div className="article-pace">
                        <h2>About Urban Farming</h2>
                        
                        <p>
                            Urban farming is the practice of cultivating, processing, and distributing food in or around urban areas. It can involve animal husbandry, aquaculture, agroforestry, and horticulture. Urban farming is not just about growing food but also includes activities such as food processing and distribution, educating the community about food production, and improving local ecosystems. This practice can reduce food deserts, provide fresh and nutritious food to urban dwellers, and create green spaces that enhance urban environments. Additionally, urban farming can contribute to local economies by creating jobs and fostering community engagement. Innovative methods like vertical farming, rooftop gardens, and hydroponics are becoming increasingly popular, allowing for efficient use of space and resources in densely populated areas.
                        </p>
                        <img src={tag} alt="Urban farming Tag" className="urbantag" />
                    </div>
                    <img src={urban} alt="Urban farming" className="Urban" />
                </article>
                <article className="story">
                    <div className="benif">
                    
                        <div className="benefit-divs">
                            <div className="benefit-item">
                                <h3>Health</h3>
                                <img src={heart} alt="heart tag" className="heart-tag" />
                                <p>Gardening is a great physical activity that can improve cardiovascular health and strengthen muscles. It also provides access to fresh, nutritious produce.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>Stress</h3>
                                <img src={stress} alt="stress tag" className="stress-tag" />
                                <p>Gardening is known to reduce stress levels by providing a calming and therapeutic activity. It helps in lowering cortisol levels and promoting relaxation.</p>
                            </div>
                            <div className="benefit-item">
                                <h3>Community</h3>
                                <img src={community} alt="community tag" className="commu-tag" />
                                <p>Gardening brings people together, fostering a sense of community and shared purpose. Community gardens can enhance social interactions and build stronger neighborhood bonds.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="story">
                    <div className="get-start">

                        <h2>Getting Started</h2>
                        <p>
                            Whether you're a seasoned gardener or a beginner, GreenThumb is here to help. From choosing the right plants to dealing with pests, we provide all the information you need.
                        </p>
                        <form className="email-form">
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Continue</button>
                        </form>
                    </div>
                </article>
            </section>

        </div>
    );
};

export default Home;
