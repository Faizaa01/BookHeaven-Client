import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from './routes/AppRoutes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
