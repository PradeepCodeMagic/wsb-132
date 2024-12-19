import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SingleProduct from './SingleProduct.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import Layout from './Layout.jsx'
import Cart from './Cart.jsx'
import MainContext from './MainContext.jsx'

const ws = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/detail-page/:id?",
        element: <SingleProduct />
      },

      {
        path: "/cart",
        element: <Cart />
      },

    ]

  },
  {
    path: "*",
    element: <NotFound />
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <MainContext>
      <RouterProvider router={ws} />
    </MainContext>
    
  </StrictMode>,
)


import './globals.css'; // Import global styles if needed
import Link from 'next/link';

export const metadata = {
  title: 'My App',
  description: 'A demo app with app routing in Next.js',
};


