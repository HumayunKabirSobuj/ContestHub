

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main.jsx';
import Login from './Pages/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import ManageUser from './Pages/ManageUser.jsx';

import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
import OpenningDashbard from './Layout/OpenningDashbard.jsx';
import AddContest from './Pages/AddContest.jsx';
import ManageContest from './Pages/ManageContest.jsx';
import MyCreatedContest from './Pages/MyCreatedContest.jsx';
import MyCreatedContestEditPage from './Pages/MyCreatedContestEditPage.jsx';
import AllContest from './Pages/AllContest.jsx';
import ContestCardDetails from './Pages/ContestCardDetails.jsx';
import Home from './Pages/Home.jsx';
import Payment from './Layout/Dashboard/Payment/Payment.jsx';
import Aos from 'aos';
import MyParticiapateContest from './Pages/MyParticiapateContest.jsx';
import UserProfile from './Pages/UserProfile.jsx';
import ContestSubmittedPage from './Pages/ContestSubmittedPage.jsx';
import Error from './Pages/Error.jsx';
import MyWinContest from './Pages/MyWinContest.jsx';
import ContactUs from './Pages/ContactUs.jsx';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    
    children: [
      {

        path: "/",
        element: <Home></Home>
      },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/allcontests",
        element: <AllContest></AllContest>
      },
      {
        path: "/contest/details/:id",
        element: <PrivateRoute><ContestCardDetails></ContestCardDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/contests/${params.id}`)

      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/contests/${params.id}`)
      },
      {
        path:"/contactus",
        element:<ContactUs></ContactUs>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

    children: [
      {
        path: '/dashboard',
        element: <OpenningDashbard></OpenningDashbard>
      }
      ,
      {
        path: "manageuser",
        element: <ManageUser></ManageUser>
      },
      {
        path: "addcontest",
        element: <AddContest></AddContest>
      },
      {
        path: "managecontests",
        element: <ManageContest></ManageContest>
      },
      {
        path: "mycreatedcontest",
        element: <MyCreatedContest></MyCreatedContest>
      },
      {
        path: "editcontest/:id",
        element: <MyCreatedContestEditPage></MyCreatedContestEditPage>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/contests/${params.id}`)

      }
      ,
      {
        path: "myparticipatedcontest",
        element: <MyParticiapateContest></MyParticiapateContest>
      },
      {
        path: "myprofile",
        element: <UserProfile></UserProfile>
      },
      {
        path:"contestsubmittedpage",
        element:<ContestSubmittedPage></ContestSubmittedPage>,
        
      },
      {
        path:'mywinningcontestpage',
        element:<MyWinContest></MyWinContest>
      }

    ]
  }
]);

Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <AuthProvider>

        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl	mx-auto'>
            <RouterProvider router={router} />
          </div>
          <Toaster />
        </QueryClientProvider>

      </AuthProvider>
   
  </React.StrictMode>
)
