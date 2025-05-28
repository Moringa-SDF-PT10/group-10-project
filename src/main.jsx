import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './components/App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext';


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Router>
        <App />
    </Router>
  </AuthProvider>
)
