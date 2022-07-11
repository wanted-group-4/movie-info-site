import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './styles/theme';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
