import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HotelsPage from './components/pages/HotelsPage';
import Home from './components/pages/HomePage';
import LoginPage from './components/pages/LoginRegisterPage';
import DetailsPage from './components/pages/DetailsPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavbarComponent />
      
      <RouterProvider router={router} />

      <FooterComponent />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
