# Christian Life Church Website

A full-stack website for Christian Life Church built with Node.js, Express.js, MongoDB, and vanilla HTML/CSS/JavaScript.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js + Express.js
- **Database**: MongoDB

## Features
- Mobile-first responsive design
- Multilingual support (English, Cebuano, Filipino)
- Dark mode toggle
- Event registration system
- Volunteer management
- Responsive gallery
- Admin dashboard (future)
- Image uploads and optimization

## Project Structure
```
/
├── frontend/
│   ├── pages/          # HTML pages
│   ├── assets/         # Static assets
│   ├── css/            # Stylesheets
│   ├── javascript/     # Client-side scripts
│   ├── images/         # Image assets
│   ├── components/     # Reusable components
│   └── translations/   # Language files
├── backend/
│   ├── routes/         # API routes
│   ├── controllers/    # Route handlers
│   ├── models/         # MongoDB schemas
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   ├── uploads/        # File uploads
│   ├── utils/          # Utility functions
│   └── services/       # Business logic
├── .env                # Environment variables
└── README.md           # This file
```

## Setup Instructions

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Set up environment variables in `.env`:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/christian-life-church
   JWT_SECRET=your-secret-key
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

4. Open `frontend/index.html` in your browser or serve the frontend files.

## Development Strategy
- Build one feature at a time
- Test each feature before continuing
- Follow the recommended build order from system-plan.md

## Contributing
Follow the established folder structure and best practices for scalability and maintainability.# christian-life-church
