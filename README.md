# GreenThumb

GreenThumb is a web application designed to assist urban gardeners and plant enthusiasts in planning, managing, and caring for their gardens. The application provides personalized gardening tips, plant identification, and weather forecasts to support users in their gardening journey.

## API Keys
To use the application, you will need to obtain API keys from the following services:

- **Plant Information API:** PERENUAL API
- **Weather Forecast API:** Open-meteo API
- **Text Generation API:** OpenAI API

Once you have obtained the API keys, you can proceed with the setup.

## Setup

### Clone the repository

git clone https://github.com/your-username/GreenThumb.git
cd GreenThumb

Backend Setup
Install backend dependencies:

cd backend
npm install
Set up PostgreSQL Database:
Create a PostgreSQL database and update the connection string in backend/db.js.

Run database migrations and seed data:

psql "postgres://<username>:<password>@<host>:<port>/<database>?sslmode=require" -f data.sql
Set the API keys as environment variables:

export PERENUAL_API_KEY=your_perenual_api_key
export OPEN_METEO_API_KEY=your_open_meteo_api_key
export OPENAI_API_KEY=your_openai_api_key
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Install frontend dependencies:

bash
Copy code
cd ../frontend
npm install
Start the frontend development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to access GreenThumb.

Usage
Upon accessing the application, you can:

Sign Up: Create a new account to start using GreenThumb.
Log In: Log in with your credentials.
Add Plants: Catalog your plants with their details.
View Weather Forecasts: Check weather forecasts relevant to your gardening activities.
Get Personalized Tips: Receive customized gardening tips and recommendations.
Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

Deployment
The application is deployed and can be accessed at https://greenthumb-kmir.onrender.com.

API Endpoints
User Routes
POST /api/signup: Register a new user.
POST /api/login: Log in a user.
POST /api/logout: Log out a user.
Plant Routes
POST /api/plants: Add a new plant.
GET /api/plants/:user_id: Get all plants for a user.
DELETE /api/plants/:plant_id: Delete a plant.
Target Audience
Urban gardeners and plant enthusiasts seeking assistance in caring for their indoor and outdoor gardens.

# Conclusion

GreenThumb aims to empower users with the tools and knowledge needed to cultivate thriving gardens in urban environments. With its innovative features and community connections, the application strives to make gardening more accessible and enjoyable for all users.

You can adjust the repository URL and other specific details as needed.