import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    chcRed: '#E42B2B',
    chcWhite: '#FCFCFC',
    chcBlack: '#36454F',
    greys: {
      1: '#4F4F4F',
      2: '#828282',
      3: '#BDBDBD',
      4: '#E0E0E0',
      5: '#F2F2F2',
    },
  },
  breakPoints: {
    desktop: '1024px',
  },
  typography: {
    body: {
      regular: '400 16px Open Sans',
      semiBold: '600 16px Open Sans',
    },
    header: {
      regular: '400 32px Open Sans',
      semiBold: '600 32px Open Sans',
    },
    title: {
      regular: '400 24px Open Sans',
      semiBold: '600 24px Open Sans',
    },
  }
};

export default theme;
