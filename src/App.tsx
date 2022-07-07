import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Router from './Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
