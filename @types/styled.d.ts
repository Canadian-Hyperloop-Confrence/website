import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      redA: string,
      whiteA: string,
      charcoalA: string,
      charcoalB: string,
      blueA: string,
      greys: Record<1 | 2 | 3 | 4 | 5, string>;
    },
    breakPoints: {
      desktop: string;
    },
    typography: {
      title: string;
      subTitle: string;
      heading: string;
      subHeading: string;
      button: string;
      body: string;
      caption: string;
    };
    constants: Record<string, string>;
  }
}
