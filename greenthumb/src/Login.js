import React, { useState } from 'react';
import axios from 'axios';
import loginpic from './Login.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://greenthumb-mmux.onrender.com/api/login', {
                email,
                password
            });
            console.log('User logged in:', response.data);

            // Assuming the token is returned in the response data
            const token = response.data.token;

            // Store the token in localStorage
            localStorage.setItem('token', token);

            // Redirect the user or perform any other necessary actions
            window.location.assign('/');
        } catch (error) {
            console.error('Error logging in:', error.response.data);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                </form>
            </div>
            <img src={loginpic} alt="Login back pic" />
        </div>
    );
};

export default Login;
