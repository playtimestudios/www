import { createTheme, responsiveFontSizes } from '@mui/material';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#ff0096'
    }
  },
  typography: {
    button: {
      textTransform: "none"
    },
    fontFamily: roboto.style.fontFamily
  }
})

theme = responsiveFontSizes(theme);

export default theme;
