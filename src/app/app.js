import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styled/themes';
import { GlobalStyles } from './styled/global';
import { Main, FancyButton, SectionsManager } from './components';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Main>
        <FancyButton onClick={toggleTheme}>CHANGE THEME</FancyButton>
        <SectionsManager />
      </Main>
    </ThemeProvider>
  );
}

export default App;
