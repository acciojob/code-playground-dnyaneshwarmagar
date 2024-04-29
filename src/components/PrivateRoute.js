import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = ({Component, authenticated }) => {
  return (authenticated ? <Component /> : <Navigate to="/login" />)
};

export default PrivateRoute;
