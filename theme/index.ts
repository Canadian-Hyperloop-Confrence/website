import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    chcRed: '#FF0000',
    chcWhite: '#FAFAFA',
    chcBlackA: '#2A3339',
    chcBlackB: '#36454F',
    blueA: '#54879D',
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
      regular: '400 20px Questrial, "Open Sans"',
      semiBold: '600 20px Questrial, "Open Sans"',
    },
    hero: {
      regular: '400 80px Montserrat, "Open Sans"',
      semiBold: '600 80px Montserrat, "Open Sans"',
    },
    header: {
      regular: '400 40px Montserrat, "Open Sans"',
      semiBold: '600 40px Montserrat, "Open Sans"',
    },
    title: {
      regular: '400 30px Montserrat, "Open Sans"',
      semiBold: '600 30px Montserrat, "Open Sans"',
    },
    nav: {
      regular: '600 14px Montserrat, Open Sans',
      semiBold: '600 14px Montserrat, Open Sans',
    },
    faq: {
      regular: '500 20px Montserrat, Open Sans',
      semiBold: '900 20px Montserrat, Open Sans',
    }
  },
  constants: {
    navbarHeight: '56px',
    footerHeight: '56px',
  }
};

export default theme;
