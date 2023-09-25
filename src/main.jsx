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
import Errorpage from './ErrorPage/Errorpage';
import Statistics from './Statistics/Statistics';
import Donation from './Donation/Donation';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/donation',
      element: <Donation></Donation>,
      loader: ()=> fetch('/data.json')
    },
    {
      path: '/stats',
      element: <Statistics></Statistics>
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
