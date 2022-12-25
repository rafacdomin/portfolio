import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import { brightSide, darkSide } from 'styles/ThemeConfig';

export default function MyApp({ Component, pageProps }) {
  const [toggle, setToggle] = useState(true);

  function changeTheme() {
    setToggle(state => !state);

    console.log(toggle)
  }

  return (
    <ThemeProvider theme={toggle ? brightSide : darkSide} >
      <GlobalStyle />
      <button onClick={changeTheme}>Change Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
