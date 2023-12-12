import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import 'aos/dist/aos.css';
import Aos from 'aos'

Aos.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={Routes}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
