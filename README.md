# 🚀 Personal Portfolio — MERN Stack

A full stack personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Features a working contact form, dynamic projects section, dark/light mode, and smooth animations.

---

## 🌐 Live Demo

- **Frontend:** [https://personal-portfolio-iota-swart-99.vercel.app/]
- **Backend API:** [https://personal-portfolio-backend-gs0r.onrender.com]

---

## ✨ Features

- ⚡ Built with Vite + React for blazing fast performance
- 🌙 Dark / Light mode toggle
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive — mobile, tablet, desktop
- 📬 Working contact form — saves to MongoDB + sends email via EmailJS
- 🗂️ Projects dynamically fetched from MongoDB REST API
- ⌨️ Typewriter animation on Hero section
- 📄 Resume download button
- 🔝 Scroll to top button
- 🎯 Active section highlight in Navbar

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + Vite | UI framework + build tool |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations |
| React Router v6 | Client-side routing |
| Axios | HTTP requests to backend |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM for MongoDB |
| EmailJS | Send emails from contact form |
| CORS | Cross-origin request handling |
| dotenv | Environment variable management |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| MongoDB Atlas | Database hosting |

---

## 📁 Project Structure

```
portfolio/
├── client/                        # React frontend
│   └── src/
│       ├── api/
│       │   └── axios.js           # Axios instance with base URL
│       ├── components/
│       │   ├── Navbar.jsx         # Sticky nav + dark mode toggle
│       │   ├── Hero.jsx           # Typewriter animation + CTA
│       │   ├── About.jsx          # Bio + fact cards
│       │   ├── Skills.jsx         # Color-coded skill tags
│       │   ├── Projects.jsx       # Project grid from API
│       │   ├── ProjectCard.jsx    # Individual project card
│       │   ├── Contact.jsx        # Contact form
│       │   ├── Footer.jsx         # Social links
│       │   ├── ScrollToTop.jsx    # Floating scroll button
│       │   └── Loader.jsx         # Page load animation
│       ├── hooks/
│       │   └── useProjects.js     # Custom hook for fetching projects
│       ├── pages/
│       │   └── Home.jsx           # All sections combined
│       ├── App.jsx                # Router + dark mode state
│       ├── main.jsx               # React entry point
│       └── index.css              # Tailwind v4 + global styles
│
├── server/                        # Node + Express backend
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── models/
│   │   ├── Project.js             # Project schema
│   │   └── Message.js             # Contact message schema
│   ├── routes/
│   │   ├── projects.js            # GET/POST /api/projects
│   │   └── contact.js             # POST /api/contact
│   └── server.js                  # Express entry point
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free)
- Gmail account (for contact form)

### 1. Clone the repository

```bash
git clone https://github.com/Vasantha06/portfolio.git
cd portfolio
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> 💡 For Gmail, use an **App Password** — Google Account → Security → 2-Step Verification → App Passwords

Start the backend:

```bash
npm run dev
```

Backend runs on `http://localhost:5000`

---

### 3. Setup Frontend

```bash
cd ../client
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

Frontend runs on `http://localhost:5173`or`http://localhost:5174`

---

## 🔌 API Endpoints

### Projects
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/featured` | Get featured projects only |
| POST | `/api/projects` | Add a new project |

### Contact
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/contact` | Save message + send email |

### Example — Add a Project
```json
POST /api/projects
{
  "title": "Task Manager App",
  "description": "Full stack task management with authentication",
  "techStack": ["React", "Node.js", "MongoDB", "JWT"],
  "githubUrl": "https://github.com/yourusername/task-manager",
  "liveUrl": "https://task-manager.vercel.app",
  "featured": true
}
```

---

## 🌍 Deployment

### Frontend → Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Set root directory to `client`
4. Add environment variable: `VITE_API_URL=https://your-render-url.onrender.com/api`
5. Deploy ✅

### Backend → Render
1. Go to [render.com](https://render.com) → New Web Service → Connect repo
2. Set root directory to `server`
3. Set start command to `npm start`
4. Add environment variables: `MONGO_URI`, `EMAIL_USER`, `EMAIL_PASS`, `PORT`
5. Deploy ✅

---

## 🎨 Customization

| What to change | Where |
|---|---|
| Your name | `Hero.jsx`, `Navbar.jsx`, `Footer.jsx`, `Loader.jsx` |
| Profile photo | `Hero.jsx` — replace emoji with `<img>` tag |
| Bio text | `About.jsx` |
| Education, location, facts | `About.jsx` facts array |
| Skills list | `Skills.jsx` skills object |
| Social links | `Hero.jsx`, `About.jsx`, `Footer.jsx` |
| Theme color | `index.css` — change `--color-primary` |
| Resume | Place `resume.pdf` in `client/public/` |

---

## 📄 License

MIT License — feel free to use this as a template for your own portfolio!

---

## 🙏 Acknowledgements

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for free database hosting
- [Vercel](https://vercel.com) + [Render](https://render.com) for free deployment

---

⭐ If this helped you, consider giving it a star on GitHub!
