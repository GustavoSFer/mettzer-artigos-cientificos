import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detais from '../Pages/Detais';
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
      <Route path="/detais/:id" element={<Detais />} />
    </Routes>
  );
}

export default Routers;
