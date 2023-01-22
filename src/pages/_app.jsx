import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import { brightSide, darkSide } from 'styles/themes';

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  function changeTheme() {
    setDarkMode(state => !state);
  }

  return (
    <ThemeProvider theme={darkMode ? darkSide : brightSide} >
      <GlobalStyle />
      <button onClick={changeTheme}>Change Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
