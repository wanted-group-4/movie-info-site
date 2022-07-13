import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';
import Detail from './pages/Detail';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="bookmark" element={<Bookmark />} />
      <Route path="detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
