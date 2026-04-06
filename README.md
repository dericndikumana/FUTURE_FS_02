# LeadCRM (Future FS 02)

## Run locally (Windows / PowerShell)

### Prerequisites
- Node.js installed
- MongoDB running locally (default: `mongodb://127.0.0.1:27017/crm-db`)

### Setup
1. Install dependencies:

```bash
npm install
```

2. Create your environment file:
- Copy `.env.example` to `.env`
- Update values if needed (especially `JWT_SECRET`)

3. Start the server:

```bash
npm start
```

Open:
- `http://localhost:5000/` (login page)

### Default login (from `.env.example`)
- Email: `admin@example.com`
- Password: `admin123`

## Project structure
- `backend/`: Express API + MongoDB (Mongoose)
- `frontend/`: Static HTML pages served by the backend
