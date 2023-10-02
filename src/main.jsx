import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// The path of the files are:
// src --> inside of it:
// folder named components with: Article.jsx, Navbar.jsx, Showcase.jsx
// folder named pages with: About.jsx, Article.jsx, Home.jsx
// App.jsx
// data.js
// index.css
// main.jsx
