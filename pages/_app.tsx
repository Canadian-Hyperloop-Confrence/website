import type { AppProps, AppContext } from 'next/app'
import App from 'next/app';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from '../components/Footer';
import theme from '../theme';
import GlobalStyle from '../theme/global-styles';

const ViewBox = styled.div`
  min-height: 100vh;
`;

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
    <ViewBox>
      <Component {...pageProps} />
    </ViewBox>
    <Footer />
  </ThemeProvider>
);

export default MyApp;
