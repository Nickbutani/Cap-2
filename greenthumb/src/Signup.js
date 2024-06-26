import React, { useState } from 'react';
import axios from 'axios';
import backpic from './Signup.png';
import './Signup.css'; // Import the CSS file

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/signup', {
                username,
                email,
                password
            });
            console.log('User registered:', response.data);
        } catch (error) {
            console.error('Error registering user:', error.response.data);
        }
    };

    return (
        <div className="signup-container">
                <div className="signup-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
        
            <img src={backpic} alt="Farm back pic" />
        </div>
    );
};

export default Signup;
