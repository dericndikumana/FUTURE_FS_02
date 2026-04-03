# 📊 LeadCRM — Client Lead Management System

<div align="center">

![LeadCRM Banner](screenshots/dashboard.png)

[![Future Interns](https://img.shields.io/badge/Future%20Interns-Internship-6366f1?style=for-the-badge)](https://futureinterns.com)
[![Track](https://img.shields.io/badge/Track-Full%20Stack%20Web%20Dev-06b6d4?style=for-the-badge)](https://futureinterns.com)
[![Task](https://img.shields.io/badge/Task-02%20of%2003-10b981?style=for-the-badge)](https://futureinterns.com)
[![Status](https://img.shields.io/badge/Status-Completed%20✅-success?style=for-the-badge)](https://futureinterns.com)

**Intern:** Ndikumana Deric &nbsp;|&nbsp; **CIN:** FIT/MAR26/FS14315 &nbsp;|&nbsp; **Duration:** Apr 2026 – May 2026

</div>

---

## 📌 Project Overview

**LeadCRM** is a full-stack Client Lead Management System built as **Task 2** of the Future Interns Full Stack Web Development internship program.

It is a mini CRM (Customer Relationship Management) application that allows a business admin to manage client leads generated from website contact forms — tracking them from first contact all the way through to conversion.

> 💡 **Real-world context:** When someone fills a contact form on a business website saying "I need a website built", they become a **lead**. Without a CRM, businesses lose track of these people. LeadCRM solves this by giving the admin a central dashboard to manage every lead, track their status, add notes, and set follow-up dates.

---

## 🎯 Task Requirements — All Met ✅

| Requirement | Status |
|---|---|
| ✔ Lead listing (name, email, source, status) | ✅ Completed |
| ✔ Lead status updates (new / contacted / converted) | ✅ Completed |
| ✔ Notes and follow-ups for each lead | ✅ Completed |
| ✔ Secure admin access | ✅ Completed (JWT Authentication) |
| ✔ Frontend: HTML / CSS / JavaScript | ✅ Completed |
| ✔ Backend: Node.js / Express | ✅ Completed |
| ✔ Database: MongoDB | ✅ Completed |
| ✔ Source code hosted on GitHub | ✅ Completed |

---

## 🖼️ Screenshots

### 🔐 Login Page
![Login Page](screenshots/login.png)

### 📊 Dashboard — Stats & Charts
![Dashboard](screenshots/dashboard.png)

### 👥 Leads Management
![Leads Page](screenshots/leads.png)

### 🌙 Dark Mode
![Dark Mode](screenshots/darkmode.png)

### ➕ Add Lead Modal
![Add Lead](screenshots/add-lead.png)

### 📝 Lead Detail & Notes
![Lead Detail](screenshots/lead-detail.png)

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JWT (JSON Web Tokens) + bcryptjs |
| **Charts** | Chart.js |
| **Fonts** | Plus Jakarta Sans (Google Fonts) |
| **Icons** | Font Awesome 6 |

---

## ✨ Features

### 🔐 Secure Admin Login
- JWT-based authentication with 8-hour session
- Password hashing with bcryptjs
- All API endpoints protected — require valid token
- Auto-redirect if not authenticated

### 📊 Dashboard
- Total leads, New, Contacted, Converted stats
- Bar chart — lead status overview
- Doughnut chart — pipeline breakdown
- Recent leads table with real-time data

### 👥 Lead Management (Full CRUD)
- Add leads with name, email, phone, source, status
- Edit any lead details
- Delete leads with confirmation
- Search by name or email
- Filter by status and source

### 📝 Notes & Follow-Ups
- Add unlimited timestamped notes per lead
- Set follow-up dates
- Update lead status from detail view

### 🌙 Dark / Light Mode
- Toggle between themes on every page
- Preference saved in localStorage

### 📱 Fully Responsive
- Works on mobile, tablet, and desktop
- Hamburger menu on mobile

---

## 🗂️ Project Structure

```
FUTURE_FS_02/
│
├── backend/
│   ├── middleware/
│   │   └── auth.js          # JWT verification middleware
│   ├── models/
│   │   └── Lead.js          # MongoDB Lead schema
│   ├── routes/
│   │   ├── auth.js          # Login endpoint
│   │   └── leads.js         # CRUD endpoints for leads
│   └── server.js            # Express app entry point
│
├── frontend/
│   ├── index.html           # Admin login page
│   ├── dashboard.html       # Stats & charts dashboard
│   └── leads.html           # Lead management page
│
├── screenshots/             # Project screenshots
├── .env                     # Environment variables (not pushed)
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed
- MongoDB installed locally
- Git installed

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/dericndikumana/FUTURE_FS_02.git
cd FUTURE_FS_02
```

**2. Install dependencies**
```bash
npm install
```

**3. Create `.env` file** in the root directory
```env
MONGO_URI=mongodb://127.0.0.1:27017/crm-db
JWT_SECRET=your_jwt_secret_here
PORT=5000
ADMIN_EMAIL=your_email@example.com
ADMIN_PASSWORD=your_password_here
```

**4. Start MongoDB service**
```bash
net start MongoDB
```

**5. Run the server**
```bash
node backend/server.js
```

**6. Open the app in your browser**
```
http://localhost:5000
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Admin login → returns JWT token |

### Leads (all protected — require Bearer token)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/leads` | Get all leads |
| GET | `/api/leads/stats` | Get dashboard statistics |
| POST | `/api/leads` | Create new lead |
| PUT | `/api/leads/:id` | Update lead |
| DELETE | `/api/leads/:id` | Delete lead |
| POST | `/api/leads/:id/notes` | Add note to lead |

---

## 🎓 Skills Gained

- ✅ **CRUD Operations** — Create, Read, Update, Delete with MongoDB
- ✅ **Backend Integration** — RESTful API design with Express.js
- ✅ **Database Management** — MongoDB schemas, Mongoose ODM
- ✅ **Authentication** — JWT tokens, bcrypt password hashing
- ✅ **Business Workflows** — Lead pipeline, CRM concepts
- ✅ **Data Visualization** — Chart.js bar and doughnut charts
- ✅ **Responsive Design** — Mobile-first CSS layouts
- ✅ **Frontend-Backend Communication** — Fetch API, async/await

---

## 👨‍💻 About the Intern

| | |
|---|---|
| **Name** | Ndikumana Deric |
| **CIN** | FIT/MAR26/FS14315 |
| **Track** | Full Stack Web Development |
| **Program** | Future Interns Fellowship |
| **Duration** | April 2026 – May 2026 |
| **Email** | ndikumanaderic2@gmail.com |
| **GitHub** | [@dericndikumana](https://github.com/dericndikumana) |
| **Task** | Task 02 — Client Lead Management System |

---

## 📁 All Internship Tasks

| Task | Project | Repository | Status |
|---|---|---|---|
| Task 01 | Personal Portfolio Website | [FUTURE_FS_01](https://github.com/dericndikumana/FUTURE_FS_01) | ✅ Completed |
| Task 02 | Client Lead Management System | [FUTURE_FS_02](https://github.com/dericndikumana/FUTURE_FS_02) | ✅ Completed |
| Task 03 | Local Business Website | FUTURE_FS_03 | 🔄 Upcoming |

---

<div align="center">

Built with ❤️ by **Ndikumana Deric**

**Future Interns · Full Stack Web Development · CIN: FIT/MAR26/FS14315**

[futureinterns.com](https://futureinterns.com) · [LinkedIn](https://www.linkedin.com/company/future-interns/)

*Sincerely, Future Interns — FIT/MAR26/FS14315*

</div>