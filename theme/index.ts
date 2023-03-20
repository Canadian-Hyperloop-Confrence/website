import { DefaultTheme } from 'styled-components';

export const themeOld = {
  palette: {
    redA: '#FF0000',
    whiteA: '#FAFAFA',
    charcoalA: '#2A3339',
    charcoalB: '#36454F',
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
  constants: {
    navbarHeight: '56px',
    footerHeight: '56px',
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
    text: {
      primary: "#272727",
      secondary: "#666666",
      subdued: "#D9D9D9",
      onDark: "#ffffff"
    },
    background: {
      default: "#ffffff",
      sectionBreak: "#FaFaFa",
      dark: "#272727"
    },
    interactive: {
      default: "#1778FB",
      hovered: "#0057CC",
      pressed: "#0046A4",
      disabled: "#D9D9D9"
    },
    navigation: {
      default: "#D4D4D4",
      hovered: "#272727",
      divider: {
        label: "#CDCDCD",
        line: "#DBDBDB"
      }
    }
  },
  typography: {
    title: '700 70px/90px "Plus Jakarta Sans"',
    subTitle: '700 55px/65px "Plus Jakarta Sans"',
    heading1: '600 48px/56px "Plus Jakarta Sans"',
    heading2: '600 40px/48px "Plus Jakarta Sans"',
    heading3: '600 24px/32px "Plus Jakarta Sans"',
    p1: '500 20px/40px "Plus Jakarta Sans"',
    p2: '500 16px/32px "Plus Jakarta Sans"',
    button: '500 20px/26px "Plus Jakarta Sans"',
    body: '900 14px/18px "Plus Jakarta Sans"',
    caption: '400 14px/16px "Plus Jakarta Sans"',
    nav: '900 14px/18px "Plus Jakarta Sans"',
  },
  constants: {}
}

export default theme;
