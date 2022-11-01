import { DefaultTheme } from 'styled-components';

export const themeOld = {
  palette: {
    redA: '#FF0000',
    whiteA: '#FAFAFA',
    charcoalA: '#2A3339',
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

const theme: DefaultTheme = {
  breakPoints: {
    desktop: '1024px',
  },
  palette: {
    redA: "#FF0000",
    whiteA: "#FAFAFA",
    charcoalA: "#2A3339",
    charcoalB: "#36454F",
    blueA: "#54879D",
    greys: {
      1: '#4F4F4F',
      2: '#828282',
      3: '#BDBDBD',
      4: '#E0E0E0',
      5: '#F2F2F2',
    },
  },
  typography: {
    title: '700 44px/46px Inter',
    subTitle: '700 35px/39px Inter',
    heading: '600 28px/34px "Plus Jakarta Sans"',
    subHeading: '600 20px/24px "Plus Jakarta Sans"',
    button: '500 20px/26px "Plus Jakarta Sans"',
    body: '500 20px/40px "Plus Jakarta Sans"',
    caption: '400 14px/16px "Plus Jakarta Sans"'
  },
}

export default theme;
