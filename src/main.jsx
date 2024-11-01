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
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';
import Comments from './Component/Comments/Comments';
import CommentShow from './Component/CommentShow/CommentShow';
import Error from './Component/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div ><Home></Home></div>,
    errorElement: <Error></Error>,
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
      },
      {
        path:'/posts', 
        loader:() => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId', 
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      },
      {
        path:'/comments',
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        element:<Comments></Comments>
      },
      {
        path: '/comment/:commentId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element:<CommentShow></CommentShow>
      }
      
    ]
  }
 
    
 
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
