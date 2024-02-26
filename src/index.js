import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HotelsPage from './components/pages/HotelsPage';
import Home from './components/pages/HomePage';
import LoginPage from './components/pages/LoginRegisterPage';
import DetailsPage from './components/pages/DetailsPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/hotels",
    element: <HotelsPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/details/:id",
    element: <DetailsPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent />
    <RouterProvider router={router} />
    <FooterComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
