🌍 Chemnitz Culture Map

Chemnitz Culture Map is a full-stack web application that allows users to explore cultural locations and points of interest in the city of Chemnitz through an interactive, map-based interface.

The project was initially developed as part of academic coursework at TU Chemnitz and later extended into a fully deployed, production-ready application, showcasing real-world full-stack development, authentication, and deployment practices.

🌐 Live Demo

🔗 Live Application:
https://chemnitz-culture-backend.onrender.com

⚠️ Note: This application is hosted on Render’s free tier.
The first request may take 30–40 seconds due to cold start behavior.

✨ Key Features

Interactive map of Chemnitz powered by Leaflet.js

Categorized cultural locations with custom map markers

User registration and login using JWT authentication

User profile management with editable bio

Save favorite locations

Comment system for cultural places

RESTful backend API for users, places, comments, and favorites

Secure data storage using MongoDB Atlas

Responsive UI for desktop and mobile devices

## 📸 Screenshots

### 🗺️ Home / Map View
![Home Map](screenshots/home-map.png)

### 🔐 Login Screen
![Login](screenshots/login.png)

### 📍 Place Details View
![Place Details](screenshots/place-details.png)


🛠️ Technology Stack
Frontend

HTML

CSS

JavaScript

Leaflet.js (OpenStreetMap)

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JSON Web Tokens (JWT)

📁 Project Structure
chemnitz-culture-map/
├── sourcefile/
│   ├── Frontend/        # Client-side code
│   ├── Backend/         # Server-side API
├── screenshots/         # Application screenshots
├── UserGuide.pdf        # Academic documentation
├── README.md
├── .gitignore

🚀 Local Development Setup
Prerequisites

Node.js (v16 or higher)

npm

MongoDB Atlas account

🔧 Backend Setup

Navigate to the backend directory:

cd sourcefile/Backend


Install dependencies:

npm install


Create a .env file in the Backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000


Start the backend server:

node Server.js


Expected output:

Server running on http://localhost:4000
MongoDB connected

🎨 Frontend Setup

Navigate to the frontend directory:

cd sourcefile/Frontend


Open index.html in your browser
(or use Live Server in VS Code)

Ensure the API base URL is set correctly in index.html:

const API_BASE_URL = 'http://localhost:4000';

🔐 Authentication & Security

Authentication implemented using JWT

Tokens stored securely in browser localStorage

Protected routes require a valid JWT

Environment variables used for secrets

Sensitive files (.env, node_modules) excluded from version control

🚀 Deployment

Backend deployed on Render

Database hosted on MongoDB Atlas

Environment variables managed securely in Render

Frontend served as static files via the Express backend

Production API base URL configured for deployed environment

📄 Documentation

Detailed project documentation is available in:

📄 UserGuide.pdf

Contents include:

Project overview

Functional requirements

System architecture

UI screenshots

Implementation details

⚠️ Important Notes

MongoDB credentials are not included in this repository

.env and node_modules are intentionally excluded

An active MongoDB Atlas cluster is required

Free-tier hosting may cause initial loading delays

👩‍💻 Author

Bhavana Rasamsetti
Web Engineering Master’s Student – TU Chemnitz

Technologies used in this project:
Node.js · Express.js · MongoDB Atlas · Mongoose · JavaScript · HTML · CSS · Leaflet.js · REST APIs · JWT Authentication