import type { AppProps, AppContext } from 'next/app'
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.chcWhite};
  }
`

/*
  * The MyApp Component that is exported by
  * _app.tsx is a wrapper for each of the pages
  * in the 'pages' directory. Here is were global
  * providers can be initialized to pass state into
  * the different pages. The 'Component' Component
  * represents the page that is being rendered.
*/
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
