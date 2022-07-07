import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import Bookmark from './pages/Bookmark';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Search />} />
      <Route path="bookmark" element={<Bookmark />} />
    </Routes>
  );
};

export default Router;
