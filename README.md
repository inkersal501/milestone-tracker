# Milestone Tracker & Community Tips

A full-stack MERN application that helps users track their milestones and contribute helpful community tips. 
Built with authentication, milestone sharing, and tip collaboration features.

---

## Features

- **User Authentication** (Register / Login / Logout)
- **Dashboard** with all user milestones visible
- **Add Milestone** with title, date, and optional notes
- **Community Tips** system for each milestone:
  - View tips shared by others
  - Add your own tips
- **My Milestones**: See milestones you personally added


---

## Auth Flow

- Users can register with `username`, `email`, and `password`
- After login, users are redirected to the dashboard
- JWT-based authentication protects private routes

---

## Tech Stack

**Frontend**  
- ReactJS  
- React Router  
- Redux Toolkit  
- Tailwind CSS  
- Axios  
- React Toastify  

**Backend**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- CORS 

---
## 📁 Folder Structure

```bash
client/
└── src/
    ├── components/       # Reusable components
    ├── pages/            # Page-level Components
    ├── services/         # API handler functions
    ├── store/            # Redux slices and store setup
    ├── App.jsx
    └── main.jsx

server/
└── src/
    ├── controllers/      # Route handler
    ├── routes/           # route definitions
    ├── models/           # Mongoose models
    ├── services/         # DB/business logic helpers
    ├── middlewares/      # Auth handler
    └── index.js
``` 
---

### Backend Setup
```bash
cd server
npm install
npm run dev
```
### Frontend Setup
```bash
cd client
npm install
npm run dev
```

---

## API Endpoints

- `POST /api/users/signup` – Register a user  
- `POST /api/users/signin` – Login  
- `GET /api/milestones/all` – Get all milestones
- `GET /api/milestones/user` – Get User milestones  
- `POST /api/milestone` – Add a new milestone  
- `GET /api/milestone/:id/tips` – Get tips for a milestone  
- `POST /api/milestone/:id/tips` – Add a tip to a milestone  

---

## User Flow Summary

1. Register or login as a user  
2. On dashboard:
   - View everyone's shared milestones  
   - Add your own milestones  
   - Open any milestone to read/add tips  
3. Access **My Milestones** to see only what you posted  
4. Logout anytime securely

---

## Author

Built by **Inkersal Mahendran**  
[LinkedIn](https://linkedin.com/in/inkersal) | [GitHub](https://github.com/inkersal501)
