# Chemnitz Culture Map

Chemnitz Culture Map is an interactive web application designed to help users explore cultural locations and points of interest in the city of Chemnitz through a map-based interface.

This project was developed as part of academic coursework and demonstrates full-stack web development skills, including frontend–backend integration, authentication, database management, and interactive maps.

---

## 🌍 Features

- Interactive map view of Chemnitz using Leaflet.js
- User registration and login with JWT authentication
- Display of cultural locations and related information
- Backend REST API for user and data management
- Secure database connection using MongoDB Atlas

---

## 📸 Screenshots

### 🗺️ Home / Map View
![Home Map](screenshots/home-map.png)

### 🔐 Login Screen
![Login](screenshots/login.png)

### 📍 Place Details View
![Place Details](screenshots/place-details.png)


## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Leaflet.js (OpenStreetMap)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)

---

## 📁 Project Structure

```text
chemnitz-culture-map/
├── Frontend/        # Client-side code
├── Backend/         # Server-side API
├── UserGuide.pdf    # Academic documentation
├── README.md
├── .gitignore
🚀 Getting Started (Local Setup)
Prerequisites
Node.js (v16+ recommended)

npm

MongoDB Atlas account

🔧 Backend Setup
Navigate to the backend folder:

bash
Copy code
cd Backend
Install dependencies:

bash
Copy code
npm install
Create a .env file inside the Backend folder:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
Start the server:

bash
Copy code
node Server.js
You should see:

arduino
Copy code
Server running on http://localhost:4000
MongoDB connected
🎨 Frontend Setup
Open the Frontend folder

Open index.html in your browser
(or use Live Server in VS Code)

🔐 Authentication
User registration and login are implemented using JWT

Passwords are securely handled

Protected routes require valid tokens

📄 Documentation
Detailed academic documentation is available in:

UserGuide.pdf

This includes:

Project description

Functional requirements

Screenshots

Implementation details

⚠️ Notes
MongoDB credentials are not included in this repository

.env and node_modules are excluded for security and best practices

The application requires an active MongoDB Atlas cluster to fully function

## 👩‍💻 Author

Bhavana Rasamsetti  
Web Engineering Master’s Student  

**Technologies used in this project:**  
Node.js, Express.js, MongoDB (Atlas), Mongoose, JavaScript, HTML, CSS, Leaflet.js, REST APIs, JWT Authentication
