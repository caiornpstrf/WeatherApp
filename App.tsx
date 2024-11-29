import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import { theme } from './src/theme';
import { Forecast } from './src/screens';

function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />
      <ThemeProvider theme={theme}>
        <Forecast />
      </ThemeProvider>
    </>
  );
}

export default App;
