import React from 'react';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import './Home.css'; // Optional: create a CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to GreenThumb</h1>
                <p>Your ultimate gardening companion.</p>
            </header>
            <WeatherDisplay />
            <section className="home-content">
                <article className="story">
                    <h2>About Urban Farming</h2>
                    <p>
                        Urban farming is the practice of cultivating, processing, and distributing food in or around urban areas. It can involve animal husbandry, aquaculture, agroforestry, and horticulture.
                    </p>
                </article>
                <article className="story">
                    <h2>Benefits of Gardening</h2>
                    <p>
                        Gardening can improve your health, reduce stress, and bring communities together. It's a rewarding hobby that can provide fresh produce and beautiful flowers.
                    </p>
                </article>
                <article className="story">
                    <h2>Getting Started</h2>
                    <p>
                        Whether you're a seasoned gardener or a beginner, GreenThumb is here to help. From choosing the right plants to dealing with pests, we provide all the information you need.
                    </p>
                </article>
            </section>
            <section className="home-gallery">
                <h2>Gallery</h2>
                <div className="gallery-images">
                    <img src="https://example.com/crop1.jpg" alt="Crop 1" />
                    <img src="https://example.com/crop2.jpg" alt="Crop 2" />
                    <img src="https://example.com/crop3.jpg" alt="Crop 3" />
                </div>
            </section>
        </div>
    );
};

export default Home;
