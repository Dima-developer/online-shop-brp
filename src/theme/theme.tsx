import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: false; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: false;
  }
  interface Theme {
    navigation: {
      main: string;
    };
  }
  interface ThemeOptions {
    navigation?: {
      main?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    secondary: {
      main: '#616161',
    },
  },
  navigation: {
    main: grey[700],
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      tablet: 1024,
      lg: 1200,
      laptop: 1440,
      xl: 1536,
    },
  },
});

export default theme;
