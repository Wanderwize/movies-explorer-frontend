import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function ProtectedRouteElement({ loggedIn, component: Component, ...props }) {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRouteElement;
