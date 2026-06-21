# Doctor Appointment Booking System

Full Stack Development Internship Project — a web app for booking doctor appointments online.

## Tech Stack
- **Frontend:** React.js, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Auth:** JWT, bcryptjs

## Project Structure
```
doctor-appointment-app/
├── backend/
│   ├── config/         # Database connection
│   ├── controllers/    # Route logic
│   ├── middleware/     # Auth middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/   # Axios API instance
│   │   ├── App.jsx
│   │   └── index.js
│   ├── .env.example
│   └── package.json
└── README.md
```

## Getting Started

### Backend
```bash
cd backend
npm install
cp .env.example .env   # then fill in your MongoDB URI and JWT secret
npm run dev
```
Server runs at `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm start
```
App runs at `http://localhost:3000`

## Status
- [x] Project environment set up
- [x] Base folder structure organized
- [x] Initial backend API (auth, doctors, appointments) scaffolded
- [x] Initial frontend scaffolded with routing
- [ ] Connect frontend to backend APIs
- [ ] Build out UI pages
- [ ] Add doctor dashboard
- [ ] Add admin panel
