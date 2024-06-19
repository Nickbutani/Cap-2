import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const isLoggedIn = !!localStorage.getItem('token'); // Simple check for a token
    const navigate = useNavigate(); 

    const handleLogout = () => {
        
        localStorage.removeItem('token');
        navigate('/'); 
    };

    return (
        <nav>
            <h2>GreenThumb</h2>
            <ul>
              
                <li><Link to="/catalog">Plant Catalog</Link></li>
                <li><Link to="/tips">Gardening Tips</Link></li>
                <li><Link to="/weather">Weather</Link></li>
              
            </ul>
            <ul>
                {isLoggedIn ? (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
