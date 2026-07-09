# Doctor Appointment Booking System

**Student Name:** Syed Ahmed Hassan Bukhari
**Roll Number:** Zynvex-0026
**Internship:** Full Stack Development — Zynvex
**Year:** 2025-2026

---

A full stack web application that I built during my Full Stack Development Internship at Zynvex. The idea behind this project is to make it easier for patients to find doctors and book appointments online without having to call or visit in person.

---

## What This App Does

- Patients can register and log in to their account
- Browse a list of verified doctors with their specialization, city, experience, and consultation fee
- Book an appointment with any doctor by selecting a date and time
- View all their booked appointments and cancel if needed
- Doctors can be searched by specialization or city

---

## Pages

| Page | Description |
|------|-------------|
| Home | Landing page with app intro and quick navigation |
| Register | Create a new patient or doctor account |
| Login | Log in to your existing account |
| Doctors | Browse and search all available doctors |
| Book Appointment | Select a date and time to book with a doctor |
| My Appointments | View, track, and cancel your appointments |

---

## Tools & Technologies Used

### Frontend
- **React.js** — for building the user interface
- **React Router DOM** — for page navigation
- **Axios** — for making API calls to the backend
- **CSS-in-JS (inline styles)** — for component styling

### Backend
- **Node.js** — JavaScript runtime for the server
- **Express.js** — web framework for building REST APIs
- **JWT (JSON Web Tokens)** — for user authentication
- **bcryptjs** — for hashing passwords securely

### Database
- **MongoDB Atlas** — cloud database for storing users, doctors, and appointments
- **Mongoose** — for defining data schemas and querying MongoDB

### Dev Tools
- **Git & GitHub** — version control and code hosting
- **Postman** — for testing API endpoints
- **VS Code** — code editor
- **Nodemon** — for auto-restarting the server during development

---

## How to Run This Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/ahmedshah6947-glitch/doctor-appointment-app.git
cd doctor-appointment-app
```

### 2. Setup the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```
PORT=5001
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secret_key_here
```
Then run:
```bash
npm run dev
```
Backend will start at `http://localhost:5001`

### 3. Seed sample doctors (optional)
```bash
node seed.js
```
This will add 5 sample doctors to the database.

### 4. Setup the Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
App will open at `http://localhost:3000`

---

## Folder Structure

```
doctor-appointment-app/
├── backend/
│   ├── config/         # Database connection
│   ├── controllers/    # Logic for each route
│   ├── middleware/     # JWT auth middleware
│   ├── models/         # Mongoose schemas (User, Doctor, Appointment)
│   ├── routes/         # API route definitions
│   ├── seed.js         # Script to add sample doctors
│   └── server.js       # Main server entry point
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/ # Navbar
│       ├── context/    # Auth context (global login state)
│       ├── pages/      # All page components
│       ├── services/   # Axios API instance
│       ├── App.jsx     # Routes setup
│       └── index.js    # React entry point
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and get JWT token |
| GET | /api/doctors | Get all doctors (with optional filters) |
| GET | /api/doctors/:id | Get a single doctor by ID |
| POST | /api/doctors | Create a doctor profile |
| POST | /api/appointments | Book a new appointment |
| GET | /api/appointments | Get appointments (filter by patient/doctor) |
| PUT | /api/appointments/:id | Update appointment status |

---

## What I Learned

This was my first full stack project and I learned a lot from building it:

- How to connect a React frontend to a Node/Express backend using REST APIs
- How authentication works using JWT tokens
- How to structure a MERN stack project properly
- How to use MongoDB Atlas to host a cloud database
- How Git and GitHub work for version control
- Debugging real errors like DNS issues, port conflicts, and environment variable problems

---

*Developed by Syed Ahmed Hassan Bukhari — Zynvex-0026 — Zynvex Full Stack Development Internship*
