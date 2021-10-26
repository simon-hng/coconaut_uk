import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    grey: string;
    accentLight: string;
    accent: string;
    accentDark: string;
    maxWidth: string;
  }
}
