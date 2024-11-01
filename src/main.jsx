import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Users from './Component/Users/Users';
import UserDetails from './Component/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div ><Home></Home></div>,
    children: [
      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/about',
        element: <About></About>
      }, 
      {
        path:'/contact', 
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader:()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      }

    ]
  }
 
    
 
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
