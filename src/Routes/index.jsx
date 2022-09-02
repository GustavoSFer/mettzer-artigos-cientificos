import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Main from '../Pages/Main';
import Registration from '../Pages/Registration';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default Routers;
