import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Search from './pages/Search';
import Bookmark from './pages/Bookmark';
import Navigation from './components/layout/Navigation';

const Router = () => {
  return (
    <BrowserRouter>
      <RouterWrapper>
        <Navigation />
        <Routes>
          <Route path="" element={<Search />} />
          <Route path="bookmark" element={<Bookmark />} />
        </Routes>
      </RouterWrapper>
    </BrowserRouter>
  );
};

export default Router;

const RouterWrapper = styled.div`
  * {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }
`;
