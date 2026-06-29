# Goal OS — Your GPS for Every Goal

Goal OS is an AI-powered productivity app that turns any long-term goal into a structured daily action plan. Tell it what you want to achieve, and it builds a month-by-month, week-by-week, day-by-day roadmap. Miss tasks? It recalculates your plan and tells you exactly how far you've slipped — like a GPS that reroutes when you take a wrong turn.

**Live Demo:** [goal-os.vercel.app](https://goal-os.vercel.app) *(first load may take ~30s — free tier backend)*  
**Backend:** [goal-os-backend.onrender.com](https://goal-os-backend.onrender.com)

---

## 🧠 How It Works

1. Enter your name → all your goals are tied to it
2. Create a goal — title, deadline, hours/day, current level
3. Groq (Llama 3.3-70b) generates a full roadmap as structured JSON
4. Work through daily tasks with checkboxes
5. Miss tasks? Hit **Recalculate** — AI rebuilds the next 7 days and says *"You're delayed by approximately 2 days"*

---

## ✨ Features

- **Name-based sessions** — no sign up, no passwords. Enter your name and see all your goals
- **AI roadmap generation** — Groq builds a monthly, weekly, and daily plan from a single goal description
- **Daily task tracking** — checkbox-based tasks with live progress percentage
- **Smart recalculation** — AI rebuilds your next 7 days when you fall behind, with honest delay impact messaging
- **Multi-goal dashboard** — all your goals shown as summary cards with progress bars and today's task preview
- **Session persistence** — sessionStorage keeps your session alive during use, auto-clears when you close the tab

---

## 🛠 Tech Stack

### Frontend

| Tech | Purpose |
| --- | --- |
| React + Vite | UI framework |
| React Router DOM | Client-side routing |
| Axios | HTTP requests |
| Plain CSS | Styling |

### Backend

| Tech | Purpose |
| --- | --- |
| Node.js + Express | Server and API |
| MongoDB + Mongoose | Database |
| Groq SDK (Llama 3.3-70b) | AI roadmap generation |
| dotenv | Environment variables |
| cors | Cross-origin requests |

### Deployment

| Service | What's deployed |
| --- | --- |
| Vercel | Frontend |
| Render | Backend |
| MongoDB Atlas | Database |

---

## 📁 Project Structure

``` text
Goal-OS/
│
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DailyTasks.jsx
│   │   │   ├── DashboardCard.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── WeeklyPlan.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── GoalsList.jsx
│   │   │   ├── CreateGoal.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── NotFound.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   ├── calculateProgress.js
│   │   │   ├── formatDate.js
│   │   │   └── getTodaysTasks.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vercel.json
│   └── package.json
│
└── server/                     # Express backend
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── goalController.js
    ├── models/
    │   └── Goal.js
    ├── routes/
    │   └── goalRoutes.js
    ├── services/
    │   └── aiService.js
    ├── utils/
    │   └── promptTemplates.js
    ├── server.js
    └── package.json
```

---

## 🚀 Running Locally

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (free tier)
- Groq API key — [console.groq.com](https://console.groq.com) (free)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/Goal-OS.git
cd Goal-OS
```

### 2. Setup the backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

Start the backend:

```bash
npm run dev
```

Backend runs on `http://localhost:5000`

### 3. Setup the frontend

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/goals` | Create a goal and generate AI roadmap |
| `GET` | `/api/goals/user/:name` | Get all goals for a name |
| `GET` | `/api/goals/:id` | Get a single goal by ID |
| `PATCH` | `/api/goals/:goalId/tasks/:taskId` | Update task completion status |
| `POST` | `/api/goals/:id/recalculate` | Recalculate plan using AI |

---

## 🔑 Environment Variables

### Server (`server/.env`)

| Variable | Description |
| --- | --- |
| `PORT` | Port to run the server on (default: 5000) |
| `MONGO_URI` | MongoDB connection string from Atlas |
| `GROQ_API_KEY` | Groq API key for Llama 3.3-70b |

### Client (`client/.env`)

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL of the backend API |

---

## 🚢 Deployment

### Backend — Render

| Field | Value |
| --- | --- |
| Root Directory | `server` |
| Build Command | `npm install` |
| Start Command | `node server.js` |

Add `MONGO_URI`, `GROQ_API_KEY`, and `PORT` as environment variables in Render dashboard.

### Frontend — Vercel

| Field | Value |
| --- | --- |
| Root Directory | `client` |
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Add `VITE_API_URL` as an environment variable pointing to your Render backend URL.

---

## Future Improvements

- User authentication with JWT
- Push / email reminders for daily tasks
- Streak tracking and milestone badges
- Goal sharing with a mentor or team
- Analytics dashboard — pace vs deadline graphs
- Platform integrations (LeetCode, GitHub, Coursera)
- Mobile app (React Native)

---

## Author

**Vansh Nautiyal**  
Summer Intern @ ScriptGuru Digital Solutions  
Winner — ScriptGuru AI Hackathon, June 2026

[LinkedIn](https://linkedin.com/in/your-profile) · [GitHub](https://github.com/your-username)

---

## 📄 License

MIT License — feel free to use this project for learning or inspiration.
