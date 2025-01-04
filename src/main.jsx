import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movie.jsx'
import Search from './pages/Search.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router >
    <App />
    </Router>
  </StrictMode>,
)
