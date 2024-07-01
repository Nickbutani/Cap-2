const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    // Payload to include in the token
    const payload = {
        user_id: user.user_id,
        username: user.username,
        email: user.email
    };

    // Secret key and options for the token
    const secret = process.env.JWT_SECRET || 'your_jwt_secret';
    const options = { expiresIn: '1h' };

    return jwt.sign(payload, secret, options);
};

module.exports = { generateToken };
