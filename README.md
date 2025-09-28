# Global Web Technology Assignment

A full-stack web application for furniture e-commerce, featuring product exploration, room-based shopping, and user reviews.

## 🌐 Live Demo

- **Frontend (Netlify)**: [https://globalassignment.netlify.app/](https://globalassignment.netlify.app/)
- **Backend (Render)**: [https://global-web-technology-assignment.onrender.com](https://global-web-technology-assignment.onrender.com)

## 🚀 Features

- Browse furniture collections by categories
- Shop by room types
- Explore featured products
- User reviews and ratings
- Responsive design for all devices

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios for API calls
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- CORS for cross-origin requests
- Dotenv for environment variables

## 🚀 Local Setup

### Prerequisites
- Node.js 
- npm 
- MongoDB Atlas account or local MongoDB instance

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:4500`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
Global_Web_Technology_Assignment/
├── Backend/
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── index.js        # Entry point
└── Frontend/
    ├── public/         # Static files
    ├── src/
    │   ├── components/ # Reusable components
    │   └── App.jsx     # Main App component
    └── vite.config.js  # Vite configuration
```

## 🔧 Environment Variables

### Backend
- `PORT`: The port on which the backend server will run (default: 4500)
- `MONGODB_URI`: MongoDB connection string

### Frontend
- `VITE_API_BASE_URL`: Base URL for API requests (default: http://localhost:5173)



