import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import PlantCatalog from './components/PlantCatalog/PlantCatalog';
import Tips from './components/Tips/Tips';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<PlantCatalog />} />
                    <Route path="/tips" element={<Tips />} />
                    <Route path="/weather" element={<WeatherDisplay />} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
