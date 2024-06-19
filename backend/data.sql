DROP DATABASE IF EXISTS greenthumb;

CREATE DATABASE greenthumb;

\c greenthumb;

-- Table: users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Table: plants
CREATE TABLE plants (
    plant_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    name VARCHAR(255) NOT NULL,
    scientific_name VARCHAR(255),
    family VARCHAR(255),
    "order" VARCHAR(255),
    image_url VARCHAR(255)
);

-- Table: weathers
CREATE TABLE weathers (
    weather_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    location VARCHAR(255) NOT NULL,
    temperature FLOAT NOT NULL,
    condition VARCHAR(255) NOT NULL
);


-- Insert sample data into the users table
INSERT INTO users (username, email, password) VALUES
    ('user1', 'user1@example.com', 'password1'),
    ('user2', 'user2@example.com', 'password2');

-- Insert sample data into the plants table
INSERT INTO plants (user_id, name, scientific_name, family, "order", image_url) VALUES
    (1, 'Rose', 'Rosa', 'Rosaceae', 'Rosales', 'https://example.com/rose.jpg'),
    (1, 'Lavender', 'Lavandula', 'Lamiaceae', 'Lamiales', 'https://example.com/lavender.jpg'),
    (2, 'Sunflower', 'Helianthus annuus', 'Asteraceae', 'Asterales', 'https://example.com/sunflower.jpg');

-- Insert sample data into the weathers table
INSERT INTO weathers (user_id, location, temperature, condition) VALUES
    (1, 'New York', 25.6, 'Sunny'),
    (1, 'Los Angeles', 30.2, 'Partly Cloudy'),
    (2, 'London', 15.9, 'Rainy');
