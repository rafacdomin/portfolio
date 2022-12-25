import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-family: 'Barlow', Arial, Helvetica, sans-serif;
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  @media (min-width: 1100px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
