import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home/Home';
import Description from './Description/Description';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/donation',
      element: <h1>nj</h1>
    },
    {
      path: '/stats',
      element: <h1>Blo</h1>
    },
    {
      path: '/description/:id',
      loader: ()=> fetch('../data.json'),
      element: <Description></Description>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
