# ElderCare – Elderly Care and Assistance Platform

Small MCA 40-mark full-stack project using MERN.

## Features
- Senior Citizen registration and login
- Admin login
- Senior dashboard
- Create Grocery / Medicine / Transport assistance requests
- View and cancel pending requests
- Admin dashboard
- Admin manually assigns volunteer name and phone
- Admin changes request status
- Senior emergency contact CRUD
- JWT authentication and bcrypt password hashing
- MongoDB database

## Requirements
- Node.js 18+ (20+ recommended)
- MongoDB Community Server running locally OR a MongoDB Atlas connection string
- VS Code

## 1. Start MongoDB
If using local MongoDB, make sure MongoDB service is running.

Default database URL in `.env`:
`mongodb://127.0.0.1:27017/eldercare_db`

## 2. Backend
Open a terminal:

```powershell
cd ElderCare\server
npm install
npm run seed
npm run dev
```

Backend: http://localhost:5000

Default admin:
- Email: admin@eldercare.com
- Password: admin123

If you use MongoDB Atlas, edit `server/.env` and replace `MONGO_URI`.

## 3. Frontend
Open a second terminal:

```powershell
cd ElderCare\client
npm install
npm run dev
```

Open the URL printed by Vite, normally:
http://localhost:5173

## 4. Demo flow
1. Register a Senior Citizen.
2. Login as Senior Citizen.
3. Create a Grocery/Medicine/Transport request.
4. Open another browser/incognito window.
5. Login as Admin using admin@eldercare.com / admin123.
6. Open the request in Admin Dashboard.
7. Click Assign and enter volunteer name and phone.
8. Change status to In Progress and then Completed.
9. Return to Senior account and open My Requests.
10. Add an emergency contact and test the Call link.

## Folder structure

ElderCare/
  client/   React + Vite frontend
  server/   Express + MongoDB backend

## Important
The prototype intentionally has only two login roles: Senior Citizen and Admin. Volunteer details are entered manually by Admin to keep this MCA mini-project small.
