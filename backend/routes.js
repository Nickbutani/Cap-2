const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('./db');


// Register new user
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login request received:', { email, password }); // Log the received request body

    try {
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        console.log('User query result:', result.rows); // Log the result of the database query
        
        if (result.rows.length > 0) {
            const user = result.rows[0];
            // Compare the password with the hashed password stored in the database
            console.log('User password:', user.password); // Log the hashed password retrieved from the database
            
            if (await bcrypt.compare(password, user.password)) {
                console.log('Login successful!'); // Log a success message
                
                // Generate a token (example: using JWT)
                const token = generateToken(user);

                // Send the token in the response
                res.json({ user, token });
            } else {
                console.log('Invalid password.'); // Log an error message
                res.status(401).json({ error: 'Invalid email or password' });
            }
        } else {
            console.log('User not found.'); // Log an error message
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error.message); // Log any errors that occur
        res.status(500).json({ error: error.message });
    }
});

// User logout
router.post('/logout', async (req, res) => {
    try {
        // If using sessions
        if (req.session) {
            req.session.destroy(err => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to log out.' });
                } else {
                    return res.status(200).json({ message: 'Logout successful' });
                }
            });
        } else {
            // If using JWT, just respond with success
            return res.status(200).json({ message: 'Logout successful' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new plant
router.post('/plants', async (req, res) => {
    const { user_id, name, scientific_name, family, order, image_url } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO plants (user_id, name, scientific_name, family, "order", image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [user_id, name, scientific_name, family, order, image_url]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all plants for a user
router.get('/plants/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await db.query('SELECT * FROM plants WHERE user_id = $1', [user_id]);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a plant
router.delete('/plants/:plant_id', async (req, res) => {
    const { plant_id } = req.params;
    try {
        await db.query('DELETE FROM plants WHERE plant_id = $1', [plant_id]);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;

