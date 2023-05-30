import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      redA: string,
      whiteA: string,
      charcoalA: string,
      charcoalB: string,
      blueA: string,
      dividerLine: string,
      greys: Record<1 | 2 | 3 | 4 | 5, string>;
      text: {
        primary: string,
        secondary: string,
        subdued: string,
        onDark: string,
      },
      background: {
        default: string;
        dark: string;
        sectionBreak: string;
      },
      interactive: {
        default: string,
        hovered: string,
        pressed: string,
        disabled: string,
      },
      navigation: {
        default: string,
        hovered: string,
        divider: {
          label: string,
          line: string,
        }
      }
    },
    breakPoints: {
      desktop: string;
    },
    typography: {
      title: string;
      subTitle: string;
      heading1: string;
      heading2: string;
      heading3: string;
      p1: string;
      p2: string;
      button: string;
      body: string;
      caption: string;
      nav: string;
    };
    constants: Record<string, string>;
  }
}
