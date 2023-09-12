import React, {useEffect, useState} from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
function checkAuth() {
    console.log(document.cookie)
  const cookies = cookie.parse(document.cookie);
  return cookies["isLoggedIn"] ? true : false;

  
}
// Check the cookies for a cookie called "loggedIn"
function ProtectedRoute(props) {

    const { component: Component, ...rest } = props;
    return checkAuth() === true ? <Component {...rest} /> : <Navigate to="/login" />
}

// Write ProtectedRoute function here


const Router = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<ProtectedRoute component={About} />} /> 
            <Route path="/car/:id" element={<ProtectedRoute component={Car} />} /> 
            
            {/* <Route path="/car/:id" element={<Car/>} /> */}
        </Routes>
    );
};

export default Router;