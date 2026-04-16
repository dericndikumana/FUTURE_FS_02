g# 📊 LeadCRM - Lead Management System

A modern, full-stack CRM application for managing and tracking client leads with real-time updates, status tracking, and lead analytics.

![LeadCRM Dashboard](https://via.placeholder.com/800x400?text=LeadCRM+Dashboard)

---

## ✨ Features

- 👥 **Lead Management** - Create, edit, delete, and organize leads
- 📊 **Dashboard** - Real-time statistics and recent lead overview
- 🔍 **Advanced Search & Filtering** - Find leads by name, email, status, or source
- 📝 **Notes & Follow-ups** - Add notes and track follow-up dates for each lead
- 🏷️ **Status Tracking** - Manage lead lifecycle (New, Contacted, Converted, Lost)
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🔐 **Secure Authentication** - JWT-based auth with secure password handling
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (Neon Cloud) |
| **Authentication** | JWT (JSON Web Tokens) |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **.env file** with database credentials

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd FUTURE_FS_02
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file** in the `backend/` directory:
```env
PORT=5001
DATABASE_URL=postgresql://username:password@host/dbname?sslmode=require
JWT_SECRET=your_secret_key_here
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
```

4. **Start the server:**
```bash
npm start
```

5. **Open in browser:**
```
http://localhost:5001
```

### 🔑 Default Credentials
- **Email:** `admin@example.com`
- **Password:** `admin123`

---

## 📸 Screenshots

### Login Page
![alt text](2.png)

### Dashboard Overview
![alt text](3.png)
### All Leads View
 ![alt text](1.png)

### Lead Detail Modal
![alt text](4.png)

---

## 📁 Project Structure

```
FUTURE_FS_02/
├── backend/
│   ├── routes/
│   │   ├── auth.js          (Login/Auth endpoints)
│   │   └── leads.js         (CRUD operations for leads)
│   ├── middleware/
│   │   └── auth.js          (JWT verification)
│   ├── server.js            (Express server setup)
│   └── .env                 (Environment variables)
├── frontend/
│   ├── index.html           (Login page)
│   ├── dashboard.html       (Dashboard with stats)
│   ├── leads.html           (All leads management)
│   └── styles.css           (Global styling)
└── package.json
```

---

## 🔄 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login |

### Leads
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/leads` | Get all leads |
| POST | `/api/leads` | Create new lead |
| PUT | `/api/leads/:id` | Update lead |
| DELETE | `/api/leads/:id` | Delete lead |
| POST | `/api/leads/:id/notes` | Add note to lead |

---

## 🌐 Deployment

### Deploy to Railway (Recommended for Free Tier)

1. Push to GitHub
2. Go to [Railway.app](https://railway.app)
3. Connect your GitHub repo
4. Add environment variables in Railway dashboard
5. Deploy automatically ✅

### Deploy to Render

1. Push to GitHub
2. Go to [Render.com](https://render.com)
3. Create new Web Service
4. Connect GitHub repo
5. Set environment variables
6. Deploy ✅

---

## 📝 Usage Guide

### Adding a Lead
1. Click **"Add Lead"** button
2. Fill in lead details (Name, Email, Phone, Source)
3. Set initial status
4. Click **"Add Lead"** ✅

### Managing Leads
- **View Details:** Click eye icon
- **Edit:** Click pencil icon
- **Delete:** Click trash icon
- **Search:** Use search bar to filter by name or email
- **Filter:** Use status and source filters

### Tracking Progress
- **Dashboard:** View real-time statistics
- **Notes:** Add follow-up notes to leads
- **Status:** Update lead status through the detail modal

---

## 🐛 Troubleshooting

**Q: "Connection error" message?**
- Check if backend server is running (`npm start`)
- Verify DATABASE_URL in .env file
- Check internet connection for cloud database

**Q: Can't login?**
- Verify credentials: `admin@example.com` / `admin123`
- Check browser console for errors (F12)
- Clear localStorage and try again

**Q: Database errors?**
- Ensure Neon database URL is correct
- Check PostgreSQL connection string format
- Verify firewall/network settings

---

## 📧 Contact & Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

## 📄 License

This project is part of the Future Interns Program (FIT/MAR26/FS14315)

---

**Built with ❤️ by the Future Interns Team**
