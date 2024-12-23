import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from "./Layout.jsx"
import Home from './AllPages/Home.jsx'
import AddProduct from './AllPages/AddProduct.jsx'
import ViewProduct from './AllPages/ViewProduct.jsx'

const myRoutes=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"",
    element:<Layout/>,
    children :[
      {
        path:"/dashboard",
        element:<Home/>
      },
      {
        path:"/dashboard/product/add",
        element:<AddProduct/>
      }
      ,
      {
        path:"/dashboard/product/view",
        element:<ViewProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRoutes} />
  </StrictMode>,
)
