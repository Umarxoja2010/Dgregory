import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PdpPage from './Pages/PdpPage';
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';
import UserPage from './Pages/UserPage';
import RegisterPage from './Pages/RegisterPage';
import AllUsersPage from './Pages/AllUsersPage';
import ProductPage from './Pages/ProductPage';
import Categor from './Components/Categor';
import AdminHomepage from './Pages/AdminHomepage';
const myRouter =createBrowserRouter([{
  errorElement:<ErrorPage/>,
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/contact",
      element:<ContactPage/>
    },
    {
      path:"/about",
      element:<AboutPage/>
    },
    {
      path:"/admin/:adminID",
      element:<AdminPage/>
    },
    {
      path:"/user/:userID",
      element:<UserPage/>
    },
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path:"/register",
      element:<RegisterPage/>
    },
    {
      path:"/alluser",
      element:<AllUsersPage/>
    },
    {
      path:"/pdp/:produktId",
      element:<PdpPage/>
    },
    {
      path:"/product",
      element:<ProductPage/>
    },
    {
      path:"/categor",
      element:<Categor/>
    },
    {
      path:"/admhome",
      element:<AdminHomepage/>
    },
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);

