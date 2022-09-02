import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default Routers;
