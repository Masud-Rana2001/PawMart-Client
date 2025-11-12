import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import router from './routes/Routes';
import { ToastContainer } from 'react-toastify';

import './index.css'

import AuthProvider from './providers/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer/>
     <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
