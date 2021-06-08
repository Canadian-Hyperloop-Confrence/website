import 'styled-components';

interface ITypeface {
  regular: string;
  semiBold: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      chcRed: string,
      chcWhite: string,
      chcBlackA: string,
      chcBlackB: string,
      greys: Record<1 | 2 | 3 | 4 | 5, string>;
    },
    breakPoints: {
      desktop: string;
    },
    typography: {
      header: ITypeface;
      title: ITypeface;
      body: ITypeface;
      nav: ITypeface;
    };
    constants: Record<string, string>;
  }
}
