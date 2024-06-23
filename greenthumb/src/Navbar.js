import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './Green.png';
import Login from './Login'; 
import Signup from './Signup'; 
import Modal from './components/Modal'; 

const Navbar = () => {
    const isLoggedIn = !!localStorage.getItem('token');
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <>
            <nav>
                <img src={logo} alt="GreenThumb Logo" className="logo" />
                <ul className="links">
                    <li><Link to="/catalog">Plant Catalog</Link></li>
                    <li><Link to="/tips">Gardening Tips</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                </ul>
                <ul className="log-links">
                    {isLoggedIn ? (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li className="log"><button className="signup-button" onClick={() => setShowSignupModal(true)}>Sign Up</button></li>
                            <li className="log"><button onClick={() => setShowLoginModal(true)}>Login</button></li>
                        </>
                    )}
                </ul>
            </nav>

            <Modal show={showLoginModal} onClose={() => setShowLoginModal(false)}>
                <Login />
            </Modal>

            <Modal show={showSignupModal} onClose={() => setShowSignupModal(false)}>
                <Signup />
            </Modal>
        </>
    );
};

export default Navbar;
