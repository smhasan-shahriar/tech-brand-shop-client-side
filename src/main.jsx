import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './routes/MainRouter.jsx'
import MainAuth from './authentication/MainAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainAuth>
      <RouterProvider router={MainRouter} />
    </MainAuth>
    
  </React.StrictMode>,
)
