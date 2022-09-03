import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favoritos from '../Pages/Favoritos';
import Login from '../Pages/Login';
import Main from '../Pages/Main';
import Registration from '../Pages/Registration';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/main" element={<Main />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}

export default Routers;
