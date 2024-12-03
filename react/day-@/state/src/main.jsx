import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Modal from "./Modal"
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Modal/>
    
  </StrictMode>,
)
