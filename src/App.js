import React, { useState } from 'react';
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HotelsPage from './components/pages/HotelsPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginRegisterPage';
import DetailsPage from './components/pages/DetailsPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AddFormPage from "./components/pages/HotelAddFormPage.jsx";
import UpdateFormPage from "./components/pages/HotelUpdateFormPage.jsx"

function useCheckUser() {
    const savedUser = localStorage.getItem("user")
    const initialValue = JSON.parse(savedUser)
    return initialValue || ""
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/hotels",
    element: <HotelsPage/>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/details/:id",
    element: <DetailsPage />
  },
  {
    path: "/addHotel",
    element: <AddFormPage />
  },
  {
    path: "/updateHotel/:id",
    element: <UpdateFormPage />
  }
])

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <NavbarComponent userData={useCheckUser()}/>

        <RouterProvider router={router} />

        <FooterComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
