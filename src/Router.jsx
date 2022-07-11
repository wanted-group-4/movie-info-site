import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import Bookmark from './pages/Bookmark';
import Home from './pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="bookmark" element={<Bookmark />} />
    </Routes>
  );
};

export default Router;
